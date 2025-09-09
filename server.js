const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");
const { v4: uuidv4 } = require('uuid');
const winston = require('winston');
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务 - 支持多种资源类型
app.use('/static', express.static(path.join(__dirname, 'static'), {
    setHeaders: (res, filePath) => {
        const mimeType = mime.lookup(filePath);
        if (mimeType) {
            res.setHeader('Content-Type', mimeType);
        }
        // 设置缓存头
        res.setHeader('Cache-Control', 'public, max-age=3600');
    }
}));

// 根目录静态文件服务（用于直接访问项目文件）
app.use('/', express.static(__dirname, {
    index: ['index.html', 'index.htm'],
    setHeaders: (res, filePath) => {
        const mimeType = mime.lookup(filePath);
        if (mimeType) {
            res.setHeader('Content-Type', mimeType);
        }
        // 对于 JS/CSS 文件设置正确的 MIME 类型
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (filePath.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// 配置logger
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
);

const logger = winston.createLogger({
    format: logFormat,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                logFormat
            )
        }),
        new winston.transports.File({
            filename: path.join(logDir, 'info.log'),
            level: 'info',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
        }),
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
        })
    ]
});

// 固定配置
const FIXED_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiZGVtb2N1c3RvbWVyIiwiaWQiOiJjOTVlMzUxZi1iNTZjLTRjMDAtYTUzYi1kYjNjMDViN2FjNjAiLCJpYXQiOjE3MzQ0NDM4MDIsImV4cCI6MTczNDUzMDIwMn0.8_UO0vg0GrFSFE9_mKa4y9tl8jPpqDcfaQxJqIqRkzY";
const FIXED_USER = {
    id: "c95e351f-b56c-4c00-a53b-db3c05b7ac60",
    account: "democustomer",
    balance: 5000.00,
    currency: "USD",
    currencySign: "$",
    playerName: "演示用户",
    customerId: "democustomer"
};

// 健康检查端点
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'WebSocket Naming Server',
        port: PORT,
        websocket_path: '/connection/websocket'
    });
});

// 根路径 - 服务器信息面板
app.get('/api', (req, res) => {
    const serverInfo = {
        name: 'Vortex WebSocket 本地服务器',
        version: '1.0.0',
        status: 'running',
        port: PORT || 3000,
        endpoints: {
            websocket: `ws://localhost:${PORT || 3000}/connection/websocket`,
            health: `http://localhost:${PORT || 3000}/health`,
            balance: `http://localhost:${PORT || 3000}/balance`,
            status: `http://localhost:${PORT || 3000}/status`,
            timer_start: `http://localhost:${PORT || 3000}/timer/start`,
            timer_stop: `http://localhost:${PORT || 3000}/timer/stop`,
            timer_status: `http://localhost:${PORT || 3000}/timer/status`,
            api_info: `http://localhost:${PORT || 3000}/api-info`
        },
        api_mapping: {
            description: 'API路径自动映射到静态文件',
            examples: [
                `http://localhost:${PORT || 3000}/api/common/settings`,
                `http://localhost:${PORT || 3000}/api/common/settings?cid=globonet&domain=localhost:${PORT || 3000}&gameId=vortex`,
                `http://localhost:${PORT || 3000}/api/common/rates`,
                `http://localhost:${PORT || 3000}/api/games/settings`
            ]
        },
        static_files: {
            root: `http://localhost:${PORT || 3000}/`,
            static: `http://localhost:${PORT || 3000}/static/`
        },
        current_connections: clients.size,
        active_channels: channels.size,
        fixed_user: {
            account: FIXED_USER.account,
            name: FIXED_USER.playerName,
            id: FIXED_USER.id,
            balance: FIXED_USER.balance
        }
    };
    
    res.json(serverInfo);
});

// API映射信息端点
app.get('/api-info', (req, res) => {
    function scanApiFiles(dir, basePath = '/api') {
        const results = [];
        try {
            const items = fs.readdirSync(dir);
            for (const item of items) {
                const fullPath = path.join(dir, item);
                const stats = fs.statSync(fullPath);
                const relativePath = path.relative(path.join(__dirname, 'api'), fullPath);
                
                if (stats.isDirectory()) {
                    results.push(...scanApiFiles(fullPath, basePath));
                } else if (stats.isFile()) {
                    const ext = path.extname(item);
                    const nameWithoutExt = path.basename(item, ext);
                    const apiPath = path.posix.join(basePath, path.dirname(relativePath), nameWithoutExt).replace(/\\/g, '/');
                    
                    results.push({
                        endpoint: apiPath,
                        file: relativePath.replace(/\\/g, '/'),
                        type: ext === '.json' ? 'JSON' : ext === '.html' ? 'HTML' : 'Other',
                        url: `http://localhost:${PORT || 3000}${apiPath}`,
                        exampleWithParams: `http://localhost:${PORT || 3000}${apiPath}?cid=globonet&domain=localhost:${PORT || 3000}&gameId=vortex`,
                        size: stats.size
                    });
                }
            }
        } catch (error) {
            console.error('扫描API文件时出错:', error);
        }
        return results;
    }
    
    const apiFiles = scanApiFiles(path.join(__dirname, 'api'));
    
    res.json({
        title: 'API文件映射信息',
        description: '所有/api路径都会自动映射到对应的静态文件',
        totalEndpoints: apiFiles.length,
        supportedQueryParams: ['cid', 'domain', 'gameId'],
        examples: [
            'http://localhost:' + (PORT || 3000) + '/api/common/settings',
            'http://localhost:' + (PORT || 3000) + '/api/common/settings?cid=globonet&domain=localhost:3001&gameId=vortex',
            'http://localhost:' + (PORT || 3000) + '/api/common/rates',
            'http://localhost:' + (PORT || 3000) + '/api/games/settings'
        ],
        endpoints: apiFiles.sort((a, b) => a.endpoint.localeCompare(b.endpoint))
    });
});

// API路径到静态文件的映射中间件
app.use('/api', (req, res, next) => {
    const apiPath = req.path;
    const queryParams = req.query;
    
    // 构建对应的文件路径
    let filePath = path.join(__dirname, 'api', apiPath);
    
    // 尝试寻找对应的文件（优先.json，然后.html）
    const extensions = ['.json', '.html', ''];
    let foundFile = null;
    
    for (const ext of extensions) {
        const testPath = ext === '' ? filePath : filePath + ext;
        if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
            foundFile = testPath;
            break;
        }
    }
    
    if (foundFile) {
        try {
            const content = fs.readFileSync(foundFile, 'utf8');
            let responseData = content;
            
            // 如果是JSON文件或包含JSON数据，尝试解析并可能根据查询参数调整
            try {
                const jsonData = JSON.parse(content);
                
                // 可以在这里根据查询参数（cid, domain, gameId等）调整响应
                if (queryParams.cid || queryParams.domain || queryParams.gameId) {
                    // 这里可以根据需要修改JSON数据
                    jsonData._requestParams = queryParams; // 添加请求参数信息（可选）
                }
                
                responseData = JSON.stringify(jsonData);
                res.setHeader('Content-Type', 'application/json');
            } catch (jsonError) {
                // 不是JSON格式，直接返回原内容
                const mimeType = mime.lookup(foundFile) || 'text/plain';
                res.setHeader('Content-Type', mimeType);
            }
            
            // 设置缓存头
            res.setHeader('Cache-Control', 'public, max-age=300'); // 5分钟缓存
            
            logger.info(`API请求: ${req.originalUrl} -> ${path.relative(__dirname, foundFile)}`);
            res.send(responseData);
            return;
        } catch (error) {
            logger.error(`读取API文件失败 ${foundFile}: ${error.message}`);
            res.status(500).json({ error: '读取文件失败', message: error.message });
            return;
        }
    }
    
    // 如果没有找到对应文件，继续到下一个中间件
    next();
});

// 引入VortexGame逻辑
const VortexGameClass = (() => {
    // 嵌入VortexGame类的核心逻辑
    class VortexGame {
        constructor() {
            // 游戏配置
        this.config = {
            // 符号类型和权重 - 重新平衡，增加骷髅，降低蓝色
            symbols: {
                FIRE: { weight: 18, name: '火', apiName: 'Symbol3' },      // 18% - 红色
                EARTH: { weight: 25, name: '土', apiName: 'Symbol2' },    // 25% - 绿色  
                WATER: { weight: 30, name: '水', apiName: 'Symbol1' },    // 30% - 蓝色 (降低)
                WIND: { weight: 15, name: '风', apiName: 'SymbolNeutral' }, // 15% - 中性
                SKULL: { weight: 12, name: '骷髅', apiName: 'SymbolLoss' }  // 12% - 恢复骷髅
            },
                
                // 倍数表 - 重新平衡，降低难度
                multipliers: {
                    fire: [0, 2.5, 6.0, 12.0, 22.0, 38.0, 65.0, 100.0, 'BONUS'], // 降低但渐进增长
                    earth: [0, 1.8, 4.2, 8.5, 15.0, 25.0, 12.0], // 最后是免费提现倍数
                    water: [0, 1.2, 2.8, 5.5, 4.0] // 最后是免费提现倍数
                },
                
                settings: {
                    Symbol3: [0, 2.5, 6.0, 12.0, 22.0, 38.0, 65.0, 100.0, 100.0], // 火环配置
                    Symbol2: [0, 1.8, 4.2, 8.5, 15.0, 25.0, 12.0],                 // 土环配置
                    Symbol1: [0, 1.2, 2.8, 5.5, 4.0]                              // 水环配置
                },
                // 奖金游戏倍数 - 降低极值，增加中等奖励
                bonusMultipliers: [50, 75, 100, 150, 200],
                
                // RTP范围 - 提高到更合理的范围
                rtpRange: { min: 95.50, max: 98.20 },
                
                // 下注限制
                betLimits: { min: 1, max: 1000 }
            };
            
            // 初始化游戏状态
            this.gameState = {
                fireRing: { filled: 0, maxSectors: 8 },
                earthRing: { filled: 0, maxSectors: 6 },
                waterRing: { filled: 0, maxSectors: 4 },
                isSpinning: false,
                currentBet: 0,
                accumulatedWinnings: 0,
                balance: FIXED_USER.balance,
                isGameActive: false,
                gameHistory: [],
                // 添加保护机制
                consecutiveNonProgressSpins: 0, // 连续无进展的spin数
                lastSkullSpin: 0 // 上次骷髅出现的spin数
            };
        }
        
        // 随机生成符号 - 临时移除所有保护机制
        generateSymbol() {
            // 完全使用原始权重，不做任何调整
            const totalWeight = Object.values(this.config.symbols).reduce((sum, symbol) => sum + symbol.weight, 0);
            const random = Math.random() * totalWeight;
            
            console.log(`随机数: ${random.toFixed(2)}, 总权重: ${totalWeight}`);
            
            let accumulated = 0;
            for (const [symbolType, symbolData] of Object.entries(this.config.symbols)) {
                accumulated += symbolData.weight;
                console.log(`符号: ${symbolType}(${symbolData.name}), 权重: ${symbolData.weight}, 累计: ${accumulated}, 范围: ${accumulated - symbolData.weight}-${accumulated}`);
                
                if (random <= accumulated) {
                    console.log(`✓ 选中符号: ${symbolType} (${symbolData.name})`);
                    return symbolType;
                }
            }
            
            console.log('默认返回 WIND');
            return 'WIND'; // 默认返回风符号
        }
        
        // 根据流程计算游戏结果
        calculateGameResult(symbol, previousCollection) {
            // 创建新的collection数组副本
            let newCollection = [...previousCollection];
            let payout = 0;
            
            // 根据符号更新collection
            if (symbol === 'SKULL') {
                // 骷髅：优化后的逻辑 - 减少破坏性
                // 如果玩家已有进度，只减少最高的一个环，而不是全部
                const maxValue = Math.max(...newCollection);
                if (maxValue > 0) {
                    const maxIndex = newCollection.findIndex(val => val === maxValue);
                    newCollection[maxIndex] = Math.max(0, newCollection[maxIndex] - 1);
                    // 只有当最高值为0时，才影响其他环
                    if (maxValue <= 1) {
                        newCollection = newCollection.map(value => Math.max(0, value - 1));
                    }
                }
            } else if (symbol === 'FIRE') {
                // 火：
                let _fire = newCollection[0] + 1;
                const { length  } = this.config.multipliers.fire;
                if( _fire > length - 2 ){
                    //调用 报大奖了
                    payout = this.config.multipliers.fire.at(-1);
                    console.log("partialCashOut 报大奖了 payout fire:", payout);
                    _fire = length - 2;
                }
                newCollection[0] = _fire;
            } else if (symbol === 'EARTH') {
                // 土：collection[1] += 1  
                let _earth = newCollection[1] + 1;
                const { length  } = this.config.multipliers.earth;
                if( _earth > length - 2){
                    //调用 免费提现 partialCashOut
                    payout = this.config.multipliers.earth.at(-1);
                    console.log("partialCashOut payout earth:", payout);
                    _earth = length - 2;
                }
                newCollection[1] = _earth;
            } else if (symbol === 'WATER') {
                // 水：
                let _water = newCollection[2] + 1;
                const { length  } = this.config.multipliers.water;
                if( _water > length - 2){
                    //调用 免费提现
                    payout = this.config.multipliers.water.at(-1);
                    console.log("partialCashOut payout water:", payout);
                    _water = length - 2;
                }
                newCollection[2] = _water;
            }
            // 风符号不做任何改变
            
            return { collection: newCollection, payout};
        }
        
        // 计算当前赔率基于collection数组
        calculateMultiplierFromCollection(collection) {
            return collection.reduce(( (t, e, o) => {
                const i = Object.keys(this.config.settings)[o];
                return t + this.config.settings[i][e];
            }), 0);
        }
        
        // 计算理论RTP
        calculateTheoreticalRTP() {
            const symbolProbs = {};
            const totalWeight = Object.values(this.config.symbols).reduce((sum, s) => sum + s.weight, 0);
            
            for (const [symbol, data] of Object.entries(this.config.symbols)) {
                symbolProbs[symbol] = data.weight / totalWeight;
            }
            
            // 简化的RTP计算 (基于期望值)
            let expectedReturn = 0;
            
            // 水符号贡献 (最常见)
            expectedReturn += symbolProbs.WATER * 1.2 * 4; // 平均4次可能填满水环
            
            // 土符号贡献  
            expectedReturn += symbolProbs.EARTH * 1.8 * 6; // 平均6次可能填满土环
            
            // 火符号贡献
            expectedReturn += symbolProbs.FIRE * 2.5 * 8; // 平均8次可能填满火环
            
            // 骷髅的负面影响
            expectedReturn -= symbolProbs.SKULL * 0.5; // 后退带来的损失
            
            return Math.min(98.5, Math.max(95.0, expectedReturn * 100));
        }
        
        // 生成游戏结果
        playRound(previousCollection = [0, 0, 0], bet = 1) {
            this.gameState.currentBet = bet;
            
            // 生成符号
            const symbol = this.generateSymbol();
            
            // 计算新的collection
            const result = this.calculateGameResult(symbol, previousCollection);
            const newCollection = result.collection;
            const payout = result.payout;
            
            // 更新保护机制计数器
            const hasProgress = newCollection.some((val, idx) => val > previousCollection[idx]);
            if (hasProgress) {
                this.gameState.consecutiveNonProgressSpins = 0; // 重置无进展计数
            } else {
                this.gameState.consecutiveNonProgressSpins++;
            }
            
            // 修复骷髅计数逻辑
            if (symbol === 'SKULL') {
                this.gameState.lastSkullSpin = 0; // 刚出现骷髅，重置计数
                console.log('骷髅出现！重置骷髅计数器');
            } else {
                this.gameState.lastSkullSpin++; // 没有骷髅，计数器+1
            }
            
            // 调试信息
            console.log(`符号: ${symbol}, 进展: ${hasProgress}, 无进展计数: ${this.gameState.consecutiveNonProgressSpins}, 骷髅计数: ${this.gameState.lastSkullSpin}`);
            
            // 计算倍数
            const currentMultiplier = this.calculateMultiplierFromCollection(newCollection);
            
            // 检查特殊状态
            const hasBonusWin = payout > 0;
            const superBonus = symbol === 'FIRE' && payout > 0;
            
            // 检查是否可以cashout/close
            const cashable = currentMultiplier > 0;
            const closeable = !cashable;
            
            // 生成hash和roundId
            const roundId = require('crypto').randomUUID();
            const hash = require('crypto').createHash('sha256')
                .update(`${roundId}${symbol}${currentMultiplier}${Date.now()}`)
                .digest('hex');
            
            // 生成mask (Vortex格式)
            const mask = `*${newCollection.join('')}`;
            
            return {
                hash: hash,
                state: {
                    mask: mask,
                    multiplier: currentMultiplier,
                    bonusWin: payout,
                    superBonus: superBonus,
                    collection: newCollection,
                    symbol: this.config.symbols[symbol].apiName,
                    cashable: cashable,
                    closeable: closeable,
                    initial: false
                },
                roundId: roundId,
                freebetsId: null,
                gameInfo: {
                    symbolGenerated: symbol,
                    symbolName: this.config.symbols[symbol].name,
                    previousCollection: previousCollection,
                    newCollection: newCollection,
                    payout: payout,
                    bet: bet
                }
            };
        }
    }
    return VortexGame;
})();

// 创建全局游戏实例
const gameInstances = new Map();

// 专门处理下注API的动态逻辑
app.post('/api/bets/place', express.json(), (req, res) => {
    try {
        const { amount, gameId, roundId, parameters } = req.body;
        const clientId = req.headers['x-client-id'] || 'default';
        
        // 获取或创建游戏实例
        if (!gameInstances.has(clientId)) {
            gameInstances.set(clientId, new VortexGameClass());
        }
        const game = gameInstances.get(clientId);
        
        // 从参数中获取当前collection状态，如果没有则使用游戏状态
        let currentCollection = parameters?.collection;
        
        // 如果前端没有传collection，尝试从游戏状态获取
        if (!currentCollection) {
            currentCollection = [
                game.gameState.fireRing.filled,
                game.gameState.earthRing.filled, 
                game.gameState.waterRing.filled
            ];
        }
        
        const betAmount = amount || 1;
        
        // 调试日志
        console.log(`下注调试: 客户端=${clientId}, 传入collection=${JSON.stringify(parameters?.collection)}, 使用collection=${JSON.stringify(currentCollection)}`);
        
        // 执行游戏逻辑
        const gameResult = game.playRound(currentCollection, betAmount);
        
        // 同步游戏状态到内存
        game.gameState.fireRing.filled = gameResult.state.collection[0];
        game.gameState.earthRing.filled = gameResult.state.collection[1];
        game.gameState.waterRing.filled = gameResult.state.collection[2];
        
        logger.info(`Vortex下注处理: 客户端=${clientId}, 下注=${betAmount}, 符号=${gameResult.gameInfo.symbolGenerated}(${gameResult.gameInfo.symbolName}), 倍数=${gameResult.state.multiplier}, collection=[${currentCollection.join(',')}] → [${gameResult.state.collection.join(',')}]`);
        
        // 如果有payout，记录特殊事件
        if (gameResult.gameInfo.payout > 0) {
            logger.info(`特殊事件触发: ${gameResult.gameInfo.symbolName}环奖励 ${gameResult.gameInfo.payout}x`);
        }
        
        res.json(gameResult);
        
    } catch (error) {
        logger.error(`Vortex下注API处理失败: ${error.message}`);
        res.status(500).json({ 
            error: 'Place bet failed', 
            message: error.message 
        });
    }
});

// 专门处理cashout API的动态逻辑
app.post('/api/bets/cashout', express.json(), (req, res) => {
    try {
        const { roundId, gameId, amount, parameters } = req.body;
        const clientId = req.headers['x-client-id'] || 'default';
        
        // 获取游戏实例
        const game = gameInstances.get(clientId);
        if (!game) {
            return res.status(400).json({ 
                error: 'No active game session found',
                message: 'Please start a new game first'
            });
        }
        
        // 从参数中获取当前collection状态
        const currentCollection = parameters?.collection || [0, 0, 0];
        const currentMultiplier = game.calculateMultiplierFromCollection(currentCollection);
        
        // 计算兑现结果
        const betAmount = amount || game.gameState.currentBet || 1;
        const finalPayout = betAmount * currentMultiplier;
        
        // 生成hash
        const hash = require('crypto').createHash('sha256')
            .update(`${roundId}won${currentMultiplier}${Date.now()}`)
            .digest('hex');
        
        const response = {
            coefficient: currentMultiplier,
            result: "won",
            payout: parseFloat(finalPayout.toFixed(2)),
            hash: hash,
            rtp: 97,
            state: {
                mask: "*000",
                multiplier: 0,
                bonusWin: 0,
                superBonus: false,
                collection: [0, 0, 0], // 兑现后重置
                symbol: "SymbolNeutral",
                cashable: false,
                closeable: true,
                initial: true
            },
            roundId: require('crypto').randomUUID(),
            vortexCashout: {
                originalCollection: currentCollection,
                originalMultiplier: currentMultiplier,
                bet: betAmount,
                finalPayout: finalPayout,
                timestamp: Date.now()
            }
        };
        
        // 重置游戏状态
        if (game.gameState) {
            game.gameState.fireRing.filled = 0;
            game.gameState.earthRing.filled = 0;
            game.gameState.waterRing.filled = 0;
            game.gameState.accumulatedWinnings = 0;
            game.gameState.isGameActive = false;
        }
        
        logger.info(`Vortex兑现处理: 客户端=${clientId}, roundId=${roundId}, collection=[${currentCollection.join(',')}], 倍数=${currentMultiplier}, 下注=${betAmount}, 兑现=${finalPayout}`);
        
        res.json(response);
        
    } catch (error) {
        logger.error(`Vortex兑现API处理失败: ${error.message}`);
        res.status(500).json({ 
            error: 'Cashout failed', 
            message: error.message 
        });
    }
});

// 游戏信息API
app.get('/api/games/retrieve', (req, res) => {
    const gameId = req.query.gameId || 'vortex';
    
    // 创建临时游戏实例获取配置
    const tempGame = new VortexGameClass();
    const config = tempGame.config;
    
    const gameInfo = {
        id: gameId,
        name: 'Vortex',
        version: '1.0.0',
        rtp: { min: config.rtpRange.min, max: config.rtpRange.max },
        status: 'active',
        roundId: require('crypto').randomUUID(),
        minBet: config.betLimits.min,
        maxBet: config.betLimits.max,
        elements: {
            fire: { 
                segments: 8, 
                multipliers: config.multipliers.fire,
                name: '火环',
                apiName: 'Symbol3'
            },
            earth: { 
                segments: 6, 
                multipliers: config.multipliers.earth,
                name: '土环', 
                apiName: 'Symbol2'
            },
            water: { 
                segments: 4, 
                multipliers: config.multipliers.water,
                name: '水环',
                apiName: 'Symbol1'
            }
        },
        symbols: {
            fire: { name: '火', apiName: 'Symbol3', weight: config.symbols.FIRE.weight },
            earth: { name: '土', apiName: 'Symbol2', weight: config.symbols.EARTH.weight },
            water: { name: '水', apiName: 'Symbol1', weight: config.symbols.WATER.weight },
            wind: { name: '风', apiName: 'SymbolNeutral', weight: config.symbols.WIND.weight },
            skull: { name: '骷髅', apiName: 'SymbolLoss', weight: config.symbols.SKULL.weight }
        },
        bonusMultipliers: config.bonusMultipliers,
        gameRules: {
            fire: "填充火环，最后一段触发奖金游戏 (100x-500x)",
            earth: "填充土环，最后一段触发免费兑现 (20.5x)",
            water: "填充水环，最后一段触发免费兑现 (7x)",
            wind: "风符号无效果，中性符号",
            skull: "骷髅符号使所有环后退一步"
        }
    };
    
    logger.info(`Vortex游戏信息请求: gameId=${gameId}`);
    res.json(gameInfo);
});

// 用户profile API
app.get('/api/common/profile', (req, res) => {
    const profile = {
        ...FIXED_USER,
        lastLoginTime: Date.now(),
        gamePreferences: {
            sound: true,
            animation: true,
            quickMode: false
        },
        stats: {
            totalBets: Math.floor(Math.random() * 1000),
            totalWins: Math.floor(Math.random() * 500),
            biggestWin: Math.floor(Math.random() * 10000),
            level: Math.floor(Math.random() * 50) + 1
        }
    };
    
    logger.info(`用户profile请求: account=${FIXED_USER.account}`);
    res.json(profile);
});

// 设置更新API
app.post('/api/common/profile', express.json(), (req, res) => {
    const { nickname, sound, animation, quickMode } = req.body;
    
    logger.info(`用户设置更新: nickname=${nickname}, sound=${sound}, animation=${animation}, quickMode=${quickMode}`);
    
    res.json({
        success: true,
        message: 'Profile updated successfully',
        profile: {
            ...FIXED_USER,
            playerName: nickname || FIXED_USER.playerName,
            gamePreferences: {
                sound: sound !== undefined ? sound : true,
                animation: animation !== undefined ? animation : true,
                quickMode: quickMode !== undefined ? quickMode : false
            }
        }
    });
});

// 游戏限制API
app.get('/api/common/limits', (req, res) => {
    const limits = {
        minBet: 1,
        maxBet: 1000,
        maxWin: 100000,
        dailyLossLimit: 10000,
        sessionTimeLimit: 14400, // 4 hours in seconds
        currency: FIXED_USER.currency,
        currencySign: FIXED_USER.currencySign
    };
    
    res.json(limits);
});

// 游戏状态查询API
app.get('/api/games/state', (req, res) => {
    const clientId = req.headers['x-client-id'] || 'default';
    const game = gameInstances.get(clientId);
    
    if (!game) {
        return res.json({
            hasActiveGame: false,
            message: 'No active game session',
            defaultState: {
                collection: [0, 0, 0],
                multiplier: 0,
                canCashOut: false
            }
        });
    }
    
    const currentCollection = [
        game.gameState.fireRing.filled,
        game.gameState.earthRing.filled,
        game.gameState.waterRing.filled
    ];
    
    const currentMultiplier = game.calculateMultiplierFromCollection(currentCollection);
    
    res.json({
        hasActiveGame: true,
        gameState: {
            collection: currentCollection,
            multiplier: currentMultiplier,
            currentBet: game.gameState.currentBet,
            accumulatedWinnings: game.gameState.accumulatedWinnings,
            balance: game.gameState.balance,
            isGameActive: game.gameState.isGameActive,
            canCashOut: currentMultiplier > 0,
            ringStates: {
                fire: { filled: game.gameState.fireRing.filled, max: game.gameState.fireRing.maxSectors },
                earth: { filled: game.gameState.earthRing.filled, max: game.gameState.earthRing.maxSectors },
                water: { filled: game.gameState.waterRing.filled, max: game.gameState.waterRing.maxSectors }
            }
        },
        config: game.config
    });
});

// 重置游戏状态API (用于调试)
app.post('/api/games/reset', (req, res) => {
    const clientId = req.headers['x-client-id'] || 'default';
    
    // 删除现有游戏实例，强制重新创建
    if (gameInstances.has(clientId)) {
        gameInstances.delete(clientId);
    }
    
    logger.info(`游戏状态重置: 客户端=${clientId}`);
    
    res.json({
        success: true,
        message: 'Game state reset successfully',
        clientId: clientId
    });
});

// 临时测试：强制骷髅符号
app.post('/api/debug/force-skull', express.json(), (req, res) => {
    try {
        const clientId = req.headers['x-client-id'] || 'default';
        
        if (!gameInstances.has(clientId)) {
            gameInstances.set(clientId, new VortexGameClass());
        }
        const game = gameInstances.get(clientId);
        
        const previousCollection = [
            game.gameState.fireRing.filled,
            game.gameState.earthRing.filled, 
            game.gameState.waterRing.filled
        ];
        
        console.log('=== 强制骷髅测试 ===');
        console.log('测试前collection:', previousCollection);
        
        // 强制生成骷髅
        const result = game.calculateGameResult('SKULL', previousCollection);
        console.log('骷髅计算结果:', result);
        
        // 更新游戏状态
        game.gameState.fireRing.filled = result.collection[0];
        game.gameState.earthRing.filled = result.collection[1]; 
        game.gameState.waterRing.filled = result.collection[2];
        game.gameState.lastSkullSpin = 0;
        
        const response = {
            symbol: 'SKULL',
            symbolName: '骷髅',
            previousCollection: previousCollection,
            newCollection: result.collection,
            gameState: game.gameState,
            message: '强制骷髅测试完成'
        };
        
        console.log('强制骷髅结果:', response);
        console.log('=== 测试结束 ===');
        
        res.json(response);
        
    } catch (error) {
        console.error('强制骷髅测试失败:', error);
        res.status(500).json({ error: error.message });
    }
});

// 调试：显示详细的下注过程
app.post('/api/debug/place-bet', express.json(), (req, res) => {
    try {
        const { amount, gameId, roundId, parameters } = req.body;
        const clientId = req.headers['x-client-id'] || 'default';
        
        console.log('=== 调试下注过程 ===');
        console.log('请求参数:', { amount, gameId, roundId, parameters, clientId });
        
        // 获取或创建游戏实例
        if (!gameInstances.has(clientId)) {
            gameInstances.set(clientId, new VortexGameClass());
            console.log('创建新游戏实例');
        }
        const game = gameInstances.get(clientId);
        
        console.log('游戏实例状态:');
        console.log('  fireRing:', game.gameState.fireRing);
        console.log('  earthRing:', game.gameState.earthRing);
        console.log('  waterRing:', game.gameState.waterRing);
        
        // 获取当前collection
        let currentCollection = parameters?.collection;
        if (!currentCollection) {
            currentCollection = [
                game.gameState.fireRing.filled,
                game.gameState.earthRing.filled, 
                game.gameState.waterRing.filled
            ];
        }
        
        console.log('使用的collection:', currentCollection);
        
        // 手动测试符号生成
        const symbol = game.generateSymbol();
        console.log('生成的符号:', symbol, `(${game.config.symbols[symbol].name})`);
        
        // 手动测试结果计算
        const result = game.calculateGameResult(symbol, currentCollection);
        console.log('计算结果:', result);
        
        // 执行完整游戏逻辑
        const gameResult = game.playRound(currentCollection, amount || 1);
        console.log('最终游戏结果:', gameResult);
        
        console.log('=== 调试结束 ===');
        
        res.json({
            debug: true,
            requestParams: { amount, gameId, roundId, parameters, clientId },
            gameState: game.gameState,
            usedCollection: currentCollection,
            generatedSymbol: symbol,
            calculationResult: result,
            finalResult: gameResult
        });
        
    } catch (error) {
        console.error('调试下注失败:', error);
        res.status(500).json({ error: error.message, stack: error.stack });
    }
});

// 游戏平衡分析API
app.get('/api/games/balance-analysis', (req, res) => {
    const tempGame = new VortexGameClass();
    const config = tempGame.config;
    
    // 计算符号概率
    const totalWeight = Object.values(config.symbols).reduce((sum, s) => sum + s.weight, 0);
    const symbolAnalysis = {};
    
    for (const [symbol, data] of Object.entries(config.symbols)) {
        symbolAnalysis[symbol] = {
            name: data.name,
            probability: `${((data.weight / totalWeight) * 100).toFixed(1)}%`,
            weight: data.weight,
            impact: symbol === 'SKULL' ? 'negative' : symbol === 'WIND' ? 'neutral' : 'positive'
        };
    }
    
    // 计算理论RTP
    const theoreticalRTP = tempGame.calculateTheoreticalRTP();
    
    // 分析倍数分布
    const multiplierAnalysis = {
        fire: {
            maxMultiplier: Math.max(...config.settings.Symbol3.slice(0, -1)),
            avgMultiplier: config.settings.Symbol3.slice(1, -1).reduce((a, b) => a + b, 0) / (config.settings.Symbol3.length - 2),
            segments: config.settings.Symbol3.length - 1
        },
        earth: {
            maxMultiplier: Math.max(...config.settings.Symbol2.slice(0, -1)),
            avgMultiplier: config.settings.Symbol2.slice(1, -1).reduce((a, b) => a + b, 0) / (config.settings.Symbol2.length - 2),
            segments: config.settings.Symbol2.length - 1
        },
        water: {
            maxMultiplier: Math.max(...config.settings.Symbol1.slice(0, -1)),
            avgMultiplier: config.settings.Symbol1.slice(1, -1).reduce((a, b) => a + b, 0) / (config.settings.Symbol1.length - 2),
            segments: config.settings.Symbol1.length - 1
        }
    };
    
    // 游戏难度评估
    const positiveSymbolRate = (config.symbols.FIRE.weight + config.symbols.EARTH.weight + config.symbols.WATER.weight) / totalWeight;
    const negativeSymbolRate = config.symbols.SKULL.weight / totalWeight;
    const neutralSymbolRate = config.symbols.WIND.weight / totalWeight;
    
    const difficultyAssessment = {
        positive_symbol_rate: `${(positiveSymbolRate * 100).toFixed(1)}%`,
        negative_symbol_rate: `${(negativeSymbolRate * 100).toFixed(1)}%`,
        neutral_symbol_rate: `${(neutralSymbolRate * 100).toFixed(1)}%`,
        difficulty_level: positiveSymbolRate > 0.65 ? 'Easy' : positiveSymbolRate > 0.55 ? 'Medium' : 'Hard',
        balance_score: Math.round(positiveSymbolRate * 100 - negativeSymbolRate * 50)
    };
    
    res.json({
        rtp: {
            theoretical: `${theoreticalRTP.toFixed(2)}%`,
            target_min: `${config.rtpRange.min}%`,
            target_max: `${config.rtpRange.max}%`,
            status: theoreticalRTP >= config.rtpRange.min && theoreticalRTP <= config.rtpRange.max ? 'Within Range' : 'Out of Range'
        },
        symbols: symbolAnalysis,
        multipliers: multiplierAnalysis,
        difficulty: difficultyAssessment,
        recommendations: {
            rtp_status: theoreticalRTP < 95 ? 'Too Low - Increase positive symbol weights' : 
                       theoreticalRTP > 98 ? 'Too High - Reduce multipliers or increase difficulty' : 'Balanced',
            balance_suggestions: positiveSymbolRate < 0.6 ? 'Consider increasing positive symbol probabilities' : 
                               negativeSymbolRate > 0.15 ? 'Consider reducing skull symbol probability' : 'Well balanced'
        }
    });
});

// 文件浏览器端点
app.get('/files', (req, res) => {
    const directory = req.query.dir || './';
    const fullPath = path.join(__dirname, directory);
    
    try {
        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({ error: '目录不存在' });
        }
        
        const stats = fs.statSync(fullPath);
        if (!stats.isDirectory()) {
            return res.status(400).json({ error: '不是一个目录' });
        }
        
        const files = fs.readdirSync(fullPath);
        const fileList = files.map(file => {
            const filePath = path.join(fullPath, file);
            const fileStats = fs.statSync(filePath);
            return {
                name: file,
                type: fileStats.isDirectory() ? 'directory' : 'file',
                size: fileStats.isFile() ? fileStats.size : null,
                modified: fileStats.mtime,
                url: fileStats.isFile() ? `http://localhost:${PORT || 3000}/${path.relative(__dirname, filePath).replace(/\\/g, '/')}` : null
            };
        }).sort((a, b) => {
            // 目录在前，文件在后
            if (a.type === 'directory' && b.type === 'file') return -1;
            if (a.type === 'file' && b.type === 'directory') return 1;
            return a.name.localeCompare(b.name);
        });
        
        res.json({
            currentPath: directory,
            files: fileList,
            totalFiles: files.length
        });
    } catch (error) {
        res.status(500).json({ error: '读取目录失败', message: error.message });
    }
});

const wss = new WebSocket.Server({ noServer: true });

const JsonMethodType = {
    CONNECT: 0,
    SUBSCRIBE: 1,
    UNSUBSCRIBE: 2,
    PUBLISH: 3,
    PRESENCE: 4,
    PRESENCE_STATS: 5,
    HISTORY: 6,
    PING: 7,
    SEND: 8,
    RPC: 9,
    REFRESH: 10,
    SUB_REFRESH: 11
};

const JsonPushType = {
    PUBLICATION: 0,
    JOIN: 1,
    LEAVE: 2,
    UNSUBSCRIBE: 3,
    MESSAGE: 4,
    SUBSCRIBE: 5
};

// 客户端连接管理
const clients = new Map();
const channels = new Map();

// 简化的token验证函数
function verifyToken(token) {
    // 固定token验证，只检查是否匹配固定token
    if (token === FIXED_TOKEN) {
        return {
            valid: true,
            expired: false,
            error: null,
            decoded: {
                customerId: FIXED_USER.customerId,
                id: FIXED_USER.id
            }
        };
    } else {
        return {
            valid: false,
            expired: false,
            error: '无效的令牌',
            decoded: null
        };
    }
}

// 处理客户端连接
async function handleConnect(ws, message) {
    const { params, id } = message;
    const { token, name } = params;
    
    try {
        const verificationResult = verifyToken(token);
        if (!verificationResult.valid) {
            const errorCode = verificationResult.expired ? 11 : 10;
            const errorMessage = verificationResult.error || '令牌验证失败';

            ws.send(JSON.stringify({
                id,
                error: { code: errorCode, message: errorMessage }
            }));
            return;
        }
        
        // 生成客户端ID
        const clientId = uuidv4();
        
        // 存储客户端信息
        clients.set(ws, {
            id: clientId,
            channels: new Set(),
            lastPing: Date.now(),
            userInfo: FIXED_USER
        });
        
        // 发送连接成功响应
        ws.send(JSON.stringify({
            id,
            result: {
                client: clientId,
                version: "4.1.5"
            }
        }));
        
        console.log(`客户端连接成功: ${clientId}, 用户: ${FIXED_USER.account}`);
    } catch (error) {
        logger.error(`handleConnect error: ${error}`);
        return;
    }
}

// 处理频道订阅
function handleSubscribe(ws, message) {
    const { params, id } = message;
    const { channel } = params;
    const client = clients.get(ws);
    if (!client) {
        ws.send(JSON.stringify({
            id,
            error: { code: 400, message: "Client not connected" }
        }));
        return;
    }
    
    // 添加到频道
    if (!channels.has(channel)) {
        channels.set(channel, new Set());
    }
    channels.get(channel).add(ws);
    client.channels.add(channel);
    
    // 发送订阅成功响应
    ws.send(JSON.stringify({
        id,
        result: {}
    }));
    
    console.log(`客户端 ${client.id} 订阅频道: ${channel}`);
}

// 处理频道取消订阅
function handleUnsubscribe(ws, message) {
    const { params, id } = message;
    const { channel } = params;
    
    const client = clients.get(ws);
    if (!client) {
        ws.send(JSON.stringify({
            id,
            error: { code: 400, message: "Client not connected" }
        }));
        return;
    }
    
    // 从频道移除
    if (channels.has(channel)) {
        channels.get(channel).delete(ws);
        if (channels.get(channel).size === 0) {
            channels.delete(channel);
        }
    }
    client.channels.delete(channel);
    
    // 发送取消订阅成功响应
    ws.send(JSON.stringify({
        id,
        result: {}
    }));
    
    console.log(`客户端 ${client.id} 取消订阅频道: ${channel}`);
}

// 处理心跳
function handlePing(ws, message) {
    const { id } = message;
    const client = clients.get(ws);
    
    if (client) {
        client.lastPing = Date.now();
    }
    
    // 发送心跳响应
    ws.send(JSON.stringify({ id }));
}

// 处理消息发布
function handlePublish(ws, message) {
    const { params, id } = message;
    const { channel, data } = params;
    
    // 向频道内所有客户端广播消息
    if (channels.has(channel)) {
        const pushMessage = {
            push: {
                channel,
                pub: {
                    data,
                    info: {
                        user: clients.get(ws)?.userInfo?.playerName || 'Unknown',
                        client: clients.get(ws)?.id
                    }
                }
            }
        };
        
        channels.get(channel).forEach(clientWs => {
            if (clientWs.readyState === WebSocket.OPEN) {
                clientWs.send(JSON.stringify(pushMessage));
            }
        });
    }
    
    // 发送发布成功响应
    ws.send(JSON.stringify({
        id,
        result: {}
    }));
}

// WebSocket连接处理
wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data.toString());
            
            // 根据method路由到不同的处理函数
            if (message.params && message.params.token) {
                // 连接请求
                handleConnect(ws, message);
            } else if (message.method !== undefined) {
                switch (message.method) {
                    case JsonMethodType.SUBSCRIBE:
                        handleSubscribe(ws, message);
                        break;
                    case JsonMethodType.UNSUBSCRIBE:
                        handleUnsubscribe(ws, message);
                        break;
                    case JsonMethodType.PUBLISH:
                        handlePublish(ws, message);
                        break;
                    case JsonMethodType.PING:
                        handlePing(ws, message);
                        break;
                    default:
                        console.log('未知的方法类型:', message.method);
                        ws.send(JSON.stringify({
                            id: message.id,
                            error: { code: 400, message: "Unknown method" }
                        }));
                }
            }
        } catch (error) {
            console.error('消息处理错误:', error);
            ws.send(JSON.stringify({
                error: { code: 500, message: "Internal server error" }
            }));
        }
    });
    
    ws.on('close', () => {
        console.log('客户端断开连接');
        const client = clients.get(ws);
        if (client) {
            // 从所有频道中移除
            client.channels.forEach(channel => {
                if (channels.has(channel)) {
                    channels.get(channel).delete(ws);
                    if (channels.get(channel).size === 0) {
                        channels.delete(channel);
                    }
                }
            });
            clients.delete(ws);
            console.log(`客户端 ${client.id} 已清理`);
        }
    });
    
    ws.on('error', (error) => {
        console.error('WebSocket错误:', error);
    });
});

// 心跳检测
setInterval(() => {
    const now = Date.now();
    clients.forEach((client, ws) => {
        if (now - client.lastPing > 60000) { // 60秒超时
            console.log(`客户端 ${client.id} 心跳超时，断开连接`);
            ws.terminate();
        }
    });
}, 30000); // 每30秒检查一次

// 手动触发余额推送接口
app.get('/balance', async (req, res) => {
    try {
        const targetChannel = `balance_ticket#${FIXED_USER.account}@${FIXED_USER.id}`;
        
        // 使用固定用户的余额
        const userBalance = FIXED_USER.balance;
        const transactionId = require('crypto').randomUUID();
        
        const balanceMessage = {
            result: {
                channel: targetChannel,
                data: {
                    data: [parseFloat(userBalance), transactionId, "user_balance_update"]
                }
            }
        };
        
        // 查找订阅了该频道的客户端
        let sentCount = 0;
        clients.forEach((client, ws) => {
            if (ws.readyState === WebSocket.OPEN && client.channels && client.channels.has(targetChannel)) {
                try {
                    ws.send(JSON.stringify(balanceMessage));
                    sentCount++;
                    logger.info(`推送用户余额更新到 ${targetChannel}: ${userBalance} (客户端: ${client.id})`);
                } catch (error) {
                    logger.error(`推送余额消息失败 (客户端: ${client.id}): ${error.message}`);
                }
            }
        });
        
        res.json({ 
            status: 'ok', 
            targetChannel: targetChannel,
            user: FIXED_USER.account,
            balance: parseFloat(userBalance),
            sentToClients: sentCount,
            message: `已推送用户${FIXED_USER.account}的余额 ${userBalance} 到 ${sentCount} 个客户端`
        });
        
    } catch (error) {
        logger.error(`获取用户余额失败: ${error.message}`);
        res.status(500).json({ 
            status: 'error', 
            message: '获取用户余额失败',
            error: error.message 
        });
    }
});

// 手动触发余额推送到指定频道
app.get('/push-balance/:channel', (req, res) => {
    const targetChannel = req.params.channel || `balance_ticket#${FIXED_USER.account}@${FIXED_USER.id}`;
    const customBalance = req.query.balance;
    
    const balance = customBalance ? parseFloat(customBalance) : FIXED_USER.balance;
    const transactionId = require('crypto').randomUUID();
    
    const balanceMessage = {
        result: {
            channel: targetChannel,
            data: {
                data: [parseFloat(balance), transactionId, "manual_trigger"]
            }
        }
    };
    
    let sentCount = 0;
    clients.forEach((client, ws) => {
        if (ws.readyState === WebSocket.OPEN && client.channels && client.channels.has(targetChannel)) {
            try {
                ws.send(JSON.stringify(balanceMessage));
                sentCount++;
                logger.info(`手动推送余额更新到 ${targetChannel}: ${balance} (客户端: ${client.id})`);
            } catch (error) {
                logger.error(`手动推送余额消息失败 (客户端: ${client.id}): ${error.message}`);
            }
        }
    });
    
    res.json({ 
        status: 'ok', 
        channel: targetChannel,
        balance: parseFloat(balance),
        transactionId: transactionId,
        sentToClients: sentCount,
        message: `已推送余额 ${balance} 到 ${sentCount} 个客户端`
    });
});

// 查看当前连接和订阅状态
app.get('/status', (req, res) => {
    const targetChannel = `balance_ticket#${FIXED_USER.account}@${FIXED_USER.id}`;
    
    const clientsInfo = [];
    const subscribedClients = [];
    
    clients.forEach((client, ws) => {
        const clientInfo = {
            id: client.id,
            connected: ws.readyState === WebSocket.OPEN,
            channels: Array.from(client.channels),
            subscribedToTarget: client.channels.has(targetChannel),
            user: client.userInfo?.account || 'unknown'
        };
        clientsInfo.push(clientInfo);
        
        if (client.channels.has(targetChannel)) {
            subscribedClients.push(client.id);
        }
    });
    
    res.json({
        totalClients: clients.size,
        targetChannel: targetChannel,
        subscribedToTarget: subscribedClients.length,
        subscribedClientIds: subscribedClients,
        allChannels: Array.from(channels.keys()),
        fixedUser: FIXED_USER,
        clients: clientsInfo
    });
});

// 控制定时器的端点
app.post('/timer/start', (req, res) => {
    if (!global.balanceTimerInterval) {
        startBalanceTimer();
        res.json({ 
            status: 'ok', 
            message: '定时余额推送器已启动' 
        });
    } else {
        res.json({ 
            status: 'info', 
            message: '定时余额推送器已经在运行中' 
        });
    }
});

app.post('/timer/stop', (req, res) => {
    if (global.balanceTimerInterval) {
        clearInterval(global.balanceTimerInterval);
        global.balanceTimerInterval = null;
        res.json({ 
            status: 'ok', 
            message: '定时余额推送器已停止' 
        });
    } else {
        res.json({ 
            status: 'info', 
            message: '定时余额推送器没有运行' 
        });
    }
});

app.get('/timer/status', (req, res) => {
    const targetChannel = `balance_ticket#${FIXED_USER.account}@${FIXED_USER.id}`;
    res.json({
        isRunning: !!global.balanceTimerInterval,
        targetChannel: targetChannel,
        interval: "5秒",
        message: global.balanceTimerInterval ? '定时器正在运行' : '定时器已停止'
    });
});

// HTTP服务器升级处理
const server = require('http').createServer(app);

server.on('upgrade', (request, socket, head) => {
    const url = require('url');
    const pathname = url.parse(request.url).pathname;
    
    // 检查是否是WebSocket连接路径
    if (pathname === '/connection/websocket') {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, '0.0.0.0', () => {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 Vortex WebSocket 本地服务器已启动');
    console.log('='.repeat(60));
    console.log(`📡 HTTP 服务器: http://localhost:${PORT}`);
    console.log(`🔌 WebSocket 服务器: ws://localhost:${PORT}/connection/websocket`);
    console.log(`📂 静态文件服务: http://localhost:${PORT}/static/`);
    console.log(`📋 服务器信息: http://localhost:${PORT}/api`);
    console.log(`🔗 API映射信息: http://localhost:${PORT}/api-info`);
    console.log(`📁 文件浏览器: http://localhost:${PORT}/files`);
    console.log(`💰 余额推送: http://localhost:${PORT}/balance`);
    console.log(`📊 连接状态: http://localhost:${PORT}/status`);
    console.log(`❤️ 健康检查: http://localhost:${PORT}/health`);
    console.log('='.repeat(60));
    console.log(`👤 演示用户: ${FIXED_USER.account} (${FIXED_USER.playerName})`);
    console.log(`💳 用户余额: ${FIXED_USER.currencySign}${FIXED_USER.balance}`);
    console.log(`🔑 访问令牌: ${FIXED_TOKEN.substring(0, 50)}...`);
    console.log(`📢 目标频道: balance_ticket#${FIXED_USER.account}@${FIXED_USER.id}`);
    console.log('='.repeat(60));
    
    // 启动定时余额推送器（可选）
    if (process.env.ENABLE_AUTO_BALANCE_TIMER === 'true') {
        startBalanceTimer();
        console.log('⏰ 定时余额推送器已启动（每5秒推送一次）');
    } else {
        console.log('⏰ 定时余额推送器已禁用');
        console.log('   使用 ENABLE_AUTO_BALANCE_TIMER=true 环境变量启用');
    }
    
    console.log('\n📝 使用说明:');
    console.log('   1. 访问 http://localhost:' + PORT + '/api 查看服务器信息');
    console.log('   2. 访问 http://localhost:' + PORT + '/api-info 查看所有API映射');
    console.log('   3. 游戏下注: POST http://localhost:' + PORT + '/api/bets/place');
    console.log('   4. 游戏兑现: POST http://localhost:' + PORT + '/api/bets/cashout');
    console.log('   5. 游戏平衡分析: GET http://localhost:' + PORT + '/api/games/balance-analysis');
    console.log('   6. 访问 http://localhost:' + PORT + '/files 浏览项目文件');
    console.log('   7. 支持完整的游戏API和优化的RTP系统');
    console.log('='.repeat(60) + '\n');
    
    logger.info(`Vortex WebSocket 服务器在端口 ${PORT} 启动成功`);
});

// 错误处理
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`❌ 端口 ${PORT} 已被占用，请尝试使用其他端口`);
        console.error(`   例如: PORT=3002 node server-merged.js`);
        process.exit(1);
    } else {
        console.error('❌ 服务器启动失败:', error.message);
        logger.error('服务器启动失败:', error);
    }
});

// 优雅关闭处理
process.on('SIGINT', () => {
    console.log('\n📴 正在关闭服务器...');
    
    // 清理定时器
    if (global.balanceTimerInterval) {
        clearInterval(global.balanceTimerInterval);
        console.log('⏰ 定时器已停止');
    }
    
    // 关闭所有WebSocket连接
    wss.clients.forEach((ws) => {
        ws.close();
    });
    console.log('🔌 WebSocket连接已关闭');
    
    // 关闭HTTP服务器
    server.close(() => {
        console.log('✅ 服务器已安全关闭');
        process.exit(0);
    });
});

// 添加启动快捷方式（如果直接运行此文件）
if (require.main === module) {
    console.log('🎯 直接启动 Vortex WebSocket 服务器...');
}

/**
 * 启动定时余额推送器
 * 每5秒向指定订阅者推送余额消息
 */
function startBalanceTimer() {
    const targetChannel = `balance_ticket#${FIXED_USER.account}@${FIXED_USER.id}`;
    
    // 如果已经有定时器在运行，先清除它
    if (global.balanceTimerInterval) {
        clearInterval(global.balanceTimerInterval);
    }
    
    global.balanceTimerInterval = setInterval(() => {
        // 使用固定用户的余额，可以加一些随机变化
        const baseBalance = FIXED_USER.balance;
        const randomChange = (Math.random() - 0.5) * 100; // -50到+50的随机变化
        const currentBalance = (baseBalance + randomChange).toFixed(2);
        const transactionId = require('crypto').randomUUID();
        
        const balanceMessage = {
            result: {
                channel: targetChannel,
                data: {
                    data: [parseFloat(currentBalance), transactionId, "auto_update"]
                }
            }
        };
        
        // 查找订阅了该频道的客户端
        let sentCount = 0;
        clients.forEach((client, ws) => {
            if (ws.readyState === WebSocket.OPEN && client.channels && client.channels.has(targetChannel)) {
                try {
                    ws.send(JSON.stringify(balanceMessage));
                    sentCount++;
                    logger.info(`定时推送余额更新到 ${targetChannel}: ${currentBalance} (客户端: ${client.id})`);
                } catch (error) {
                    logger.error(`定时推送余额消息失败 (客户端: ${client.id}): ${error.message}`);
                }
            }
        });
        
        if (sentCount === 0) {
            logger.debug(`没有客户端订阅频道 ${targetChannel}`);
        }
        
    }, 5000); // 每5秒执行一次
    
    logger.info(`✅ 定时余额推送器已启动，目标频道: ${targetChannel}`);
}

module.exports = { app, server, wss };
