/*####################################
 ██╗  ██╗███████╗██████╗ ████████╗ █████╗         ███╗   ███╗██████╗ 
██║  ██║██╔════╝██╔══██╗╚══██╔══╝██╔══██╗        ████╗ ████║██╔══██╗
███████║█████╗  ██████╔╝   ██║   ███████║        ██╔████╔██║██║  ██║
██╔══██║██╔══╝  ██╔══██╗   ██║   ██╔══██║        ██║╚██╔╝██║██║  ██║
██║  ██║███████╗██║  ██║   ██║   ██║  ██║        ██║ ╚═╝ ██║██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝        ╚═╝     ╚═╝╚═════╝ 
██████╗ ██╗   ██╗
██╔══██╗╚██╗ ██╔╝
██████╔╝ ╚████╔╝ 
██╔══██╗  ╚██╔╝  
██████╔╝   ██║   
╚═════╝    ╚═╝   

██████╗ ███████╗███╗   ██╗██╗  ██╗██╗           
██╔══██╗██╔════╝████╗  ██║██║ ██╔╝██║
██████╔╝█████╗  ██╔██╗ ██║█████╔╝ ██║
██╔══██╗██╔══╝  ██║╚██╗██║██╔═██╗ ██║
██║  ██║███████╗██║ ╚████║██║  ██╗██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝

        MIT License
        
        Copyright (c) 
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE. 

👥 Instagram : Renki.coders
📝 Github : TabawaX

Thank you for using HERTA-MD
        
#####################################*/




(async () => {
	require('./konfigurasi')
const {
	default: makeWASocket,
	useMultiFileAuthState,
	makeInMemoryStore,
	makeCacheableSignalKeyStore,
	makeWALegacySocket,
	DisconnectReason,
	fetchLatestBaileysVersion,
	PHONENUMBER_MCC,
getAggregateVotesInPollMessage
} = require('@whiskeysockets/baileys');
const WebSocket = require('ws');
const path = require('path');
const p = require('pino');
const pino = require('pino');
const Pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const readline = require('readline');
const NodeCache = require('node-cache');
const yargs = require('yargs/yargs');
const cp = require('child_process');
const { promisify } = require('util');
const exec = promisify(cp.exec).bind(cp);
const _ = require('lodash');
const syntaxerror = require('syntax-error');
const os = require('os');
const { randomBytes } = require('crypto');
const moment = require('moment-timezone');
const time = moment.tz('Asia/Makassar').format('HH:mm:ss');
const chalk = require('chalk');
const { color } = require('./perpus/color');
let simple = require('./perpus/simple');
var low;
try {
	low = require('lowdb');
} catch (e) {
	low = require('./perpus/lowdb');
}
	const {
		Low,
		JSONFile
	} = low
	const mongoDB = require('./perpus/mongoDB')
	const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

	API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
		...query,
		...(apikeyqueryname ? {
			[apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name]
		} : {})
	})) : '')
	timestamp = {
		start: new Date
	}

	const PORT = 8000

	global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
	global.prefix = new RegExp('^[' + (opts['prefix'] || 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

	db = new Low(
		/https?:\/\//.test(opts['db'] || '') ?
		new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
		new mongoDB(opts['db']) :
		new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
	)

	DATABASE = db
	loadDatabase = async function loadDatabase() {
		if (db.READ) return new Promise((resolve) => setInterval(function() {
			(!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null)
		}, 1 * 1000))
		if (db.data !== null) return
		db.READ = true
		await db.read()
		db.READ = false
		db.data = {
			users: {},
			chats: {},
			stats: {},
			msgs: {},
			sticker: {},
			settings: {},
			respon: {},
			...(db.data || {})
		}
		db.chain = _.chain(db.data)
	}
	loadDatabase()
global.authFile = 'Herta - MD';
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = MessageRetryMap => {};
const msgRetryCounterCache = new NodeCache();
const pairingCode = process.argv.includes('--pairing');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = texto => new Promise(resolver => rl.question(texto, resolver));
const connectionOptions = {
	logger: pino({ level: 'silent' }),
	printQRInTerminal: !pairingCode,
	browser: ['Ubuntu', 'Chrome', '20.0.04'],
	auth: {
		creds: state.creds,
		keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: 'fatal' }).child({ level: 'fatal' })),
	},
	markOnlineOnConnect: true,
	generateHighQualityLinkPreview: true,
	getMessage: async clave => {
		let jid = jidNormalizedUser(clave.remoteJid);
		let msg = await store.loadMessage(jid, clave.id);
		return msg?.message || '';
	},
	msgRetryCounterCache,
	msgRetryCounterMap,
	defaultQueryTimeoutMs: undefined
};

global.conn = simple.makeWASocket(connectionOptions);

if (pairingCode && !conn.authState.creds.registered) {
	const phoneNumber = await question(chalk.green.underline('mana nomornya sayangg:\n'));
	const code = await conn.requestPairingCode(phoneNumber);
	setTimeout(async () => {
		console.log(chalk.green.bold('Pairingnyaa sayangg ' + code))
	}, 3000);
}

conn.isInit = false;

	if (!opts['test']) {
		if (db) setInterval(async () => {
			if (global.db.data) await db.write()
			if (opts['autocleartmp'] && (support || {}).find)(tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
		}, 30 * 1000)
	}
	if (opts['server']) require('./server')(conn, PORT)

	function clearTmp() {
		const tmp = [os.tmpdir(), path.join(__dirname, './tmp')]
		const filename = []
		tmp.forEach(dirname => fs.readdirSync(dirname).forEach(file => filename.push(path.join(dirname, file))))
		filename.map(file => (
			stats = fs.statSync(file),
			stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3) ?
			fs.unlinkSync(file) :
			null))
	}

	setInterval(async () => {
		await exec("rm -rf ./tmp/*")
	}, 60 * 60 * 1000)

/*
thanks to syaii
*/
  async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "My name is hertaa"
        }
    }
    
   conn.ev.on('message.update', async (chatUpdate) => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdate && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix + toCmd
	                conn.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
    
	async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update;
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
 console.log(reloadHandler(true))
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase();

  if (connection == 'open') {   console.log(chalk.green.underline('udah konek'));
  }
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
if (connection === 'close') {
   console.log(chalk.red.underline("koneksinya gagal"))
}  

// usseles make spam
    	/*if (update.receivedPendingNotifications) {
			const deviceName = os.hostname();
			const message = `*[ Connection Open ]*
*•Name bot :* ${namebot}
*• Name Owner :* ${nameowner}
*• Owner Nunber :* wa.me/${nomorown}

*[ Server Network ]*
*• User :* ${process.env.USER || "Not Found"}
*• Node :* ${process.env.NODE_VERSION || "Not Found"}
*• Npm command :* ${process.env.npm_command || "Not Found"}
*• Command run :* ${process.env.CMD_RUN || "Not Found"}
*• Ip Address :* ${process.env.SERVER_IP || "Not Found"}
*• Ip Internal :* ${process.env.INTERNAL_IP || "Not Found"}`

await conn.sendMessage('6287869975929@s.whatsapp.net', { text: message })}*/
}
	process.on('uncaughtException', console.error)

	let isInit = true,
		handler = require('./handler')
	reloadHandler = function(restatConn) {
		let Handler = require('./handler')
		if (Object.keys(Handler || {}).length) handler = Handler
		if (restatConn) {
			try {
				conn.ws.close()
			} catch {}
			conn = {
				...conn,
				...simple.makeWASocket(connectionOptions)
			}
		}
		if (!isInit) {
			conn.ev.off('messages.upsert', conn.handler)
			conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
			conn.ev.off('connection.update', conn.connectionUpdate)
			conn.ev.off('creds.update', conn.credsUpdate)
		}

		conn.welcome = 'Welcome to *@subject* @user\nSemoga betah Dan jangan lupa baca deskripsi\n@desc'
		conn.bye = 'Goodbye @user,\nSemoga tenang di alam sana.'
		conn.spromote = '@user telah naik jabatan'
		conn.sdemote = '@user telah turun jabatan🗿'
		conn.handler = handler.handler.bind(conn)
        conn.onDelete = handler.delete.bind(conn)
   
		conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
		conn.connectionUpdate = connectionUpdate.bind(conn)
		conn.credsUpdate = saveCreds.bind(conn)

		conn.ev.on('messages.upsert', conn.handler)
		conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
		conn.ev.on('message.delete', conn.onDelete)
		conn.ev.on('connection.update', conn.connectionUpdate)
		conn.ev.on('creds.update', conn.credsUpdate)
		isInit = false
		return true
	}

	let pluginFolder = path.join(__dirname, 'fitur')
	let pluginFilter = filename => /\.js$/.test(filename)
	features = {}
	for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
		try {
/*####################################
 ██╗  ██╗███████╗██████╗ ████████╗ █████╗         ███╗   ███╗██████╗ 
██║  ██║██╔════╝██╔══██╗╚══██╔══╝██╔══██╗        ████╗ ████║██╔══██╗
███████║█████╗  ██████╔╝   ██║   ███████║        ██╔████╔██║██║  ██║
██╔══██║██╔══╝  ██╔══██╗   ██║   ██╔══██║        ██║╚██╔╝██║██║  ██║
██║  ██║███████╗██║  ██║   ██║   ██║  ██║        ██║ ╚═╝ ██║██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝        ╚═╝     ╚═╝╚═════╝ 
██████╗ ██╗   ██╗
██╔══██╗╚██╗ ██╔╝
██████╔╝ ╚████╔╝ 
██╔══██╗  ╚██╔╝  
██████╔╝   ██║   
╚═════╝    ╚═╝   

██████╗ ███████╗███╗   ██╗██╗  ██╗██╗           
██╔══██╗██╔════╝████╗  ██║██║ ██╔╝██║
██████╔╝█████╗  ██╔██╗ ██║█████╔╝ ██║
██╔══██╗██╔══╝  ██║╚██╗██║██╔═██╗ ██║
██║  ██║███████╗██║ ╚████║██║  ██╗██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝

        MIT License
        
        Copyright (c) 
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE. 

👥 Instagram : Renki.coders
📝 Github : TabawaX

Thank you for using HERTA-MD
        
#####################################*/




(async () => {
	require('./konfigurasi')
const {
	default: makeWASocket,
	useMultiFileAuthState,
	makeInMemoryStore,
	makeCacheableSignalKeyStore,
	makeWALegacySocket,
	DisconnectReason,
	fetchLatestBaileysVersion,
	PHONENUMBER_MCC,
getAggregateVotesInPollMessage
} = require('@whiskeysockets/baileys');
const WebSocket = require('ws');
const path = require('path');
const p = require('pino');
const pino = require('pino');
const Pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const readline = require('readline');
const NodeCache = require('node-cache');
const yargs = require('yargs/yargs');
const cp = require('child_process');
const { promisify } = require('util');
const exec = promisify(cp.exec).bind(cp);
const _ = require('lodash');
const syntaxerror = require('syntax-error');
const os = require('os');
const { randomBytes } = require('crypto');
const moment = require('moment-timezone');
const time = moment.tz('Asia/Makassar').format('HH:mm:ss');
const chalk = require('chalk');
const { color } = require('./perpus/color');
let simple = require('./perpus/simple');
var low;
try {
	low = require('lowdb');
} catch (e) {
	low = require('./perpus/lowdb');
}
	const {
		Low,
		JSONFile
	} = low
	const mongoDB = require('./perpus/mongoDB')
	const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

	API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
		...query,
		...(apikeyqueryname ? {
			[apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name]
		} : {})
	})) : '')
	timestamp = {
		start: new Date
	}

	const PORT = 8000

	global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
	global.prefix = new RegExp('^[' + (opts['prefix'] || 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

	db = new Low(
		/https?:\/\//.test(opts['db'] || '') ?
		new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
		new mongoDB(opts['db']) :
		new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
	)

	DATABASE = db
	loadDatabase = async function loadDatabase() {
		if (db.READ) return new Promise((resolve) => setInterval(function() {
			(!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null)
		}, 1 * 1000))
		if (db.data !== null) return
		db.READ = true
		await db.read()
		db.READ = false
		db.data = {
			users: {},
			chats: {},
			stats: {},
			msgs: {},
			sticker: {},
			settings: {},
			respon: {},
			...(db.data || {})
		}
		db.chain = _.chain(db.data)
	}
	loadDatabase()
global.authFile = 'Herta - MD';
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = MessageRetryMap => {};
const msgRetryCounterCache = new NodeCache();
const pairingCode = process.argv.includes('--pairing');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = texto => new Promise(resolver => rl.question(texto, resolver));
const connectionOptions = {
	logger: pino({ level: 'silent' }),
	printQRInTerminal: !pairingCode,
	browser: ['Ubuntu', 'Chrome', '20.0.04'],
	auth: {
		creds: state.creds,
		keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: 'fatal' }).child({ level: 'fatal' })),
	},
	markOnlineOnConnect: true,
	generateHighQualityLinkPreview: true,
	getMessage: async clave => {
		let jid = jidNormalizedUser(clave.remoteJid);
		let msg = await store.loadMessage(jid, clave.id);
		return msg?.message || '';
	},
	msgRetryCounterCache,
	msgRetryCounterMap,
	defaultQueryTimeoutMs: undefined
};

global.conn = simple.makeWASocket(connectionOptions);

if (pairingCode && !conn.authState.creds.registered) {
	const phoneNumber = await question(chalk.green.underline('mana nomornya sayangg:\n'));
	const code = await conn.requestPairingCode(phoneNumber);
	setTimeout(async () => {
		console.log(chalk.green.bold('Pairingnyaa sayangg ' + code))
	}, 3000);
}

conn.isInit = false;

	if (!opts['test']) {
		if (db) setInterval(async () => {
			if (global.db.data) await db.write()
			if (opts['autocleartmp'] && (support || {}).find)(tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
		}, 30 * 1000)
	}
	if (opts['server']) require('./server')(conn, PORT)

	function clearTmp() {
		const tmp = [os.tmpdir(), path.join(__dirname, './tmp')]
		const filename = []
		tmp.forEach(dirname => fs.readdirSync(dirname).forEach(file => filename.push(path.join(dirname, file))))
		filename.map(file => (
			stats = fs.statSync(file),
			stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3) ?
			fs.unlinkSync(file) :
			null))
	}

	setInterval(async () => {
		await exec("rm -rf ./tmp/*")
	}, 60 * 60 * 1000)

/*
thanks to syaii
*/
  async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "My name is hertaa"
        }
    }
    
   conn.ev.on('message.update', async (chatUpdate) => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdate && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix + toCmd
	                conn.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
    
	async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update;
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
 console.log(reloadHandler(true))
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase();

  if (connection == 'open') {   console.log(chalk.green.underline('udah konek'));
  }
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
if (connection === 'close') {
   console.log(chalk.red.underline("koneksinya gagal"))
}  

// usseles make spam
    	/*if (update.receivedPendingNotifications) {
			const deviceName = os.hostname();
			const message = `*[ Connection Open ]*
*•Name bot :* ${namebot}
*• Name Owner :* ${nameowner}
*• Owner Nunber :* wa.me/${nomorown}

*[ Server Network ]*
*• User :* ${process.env.USER || "Not Found"}
*• Node :* ${process.env.NODE_VERSION || "Not Found"}
*• Npm command :* ${process.env.npm_command || "Not Found"}
*• Command run :* ${process.env.CMD_RUN || "Not Found"}
*• Ip Address :* ${process.env.SERVER_IP || "Not Found"}
*• Ip Internal :* ${process.env.INTERNAL_IP || "Not Found"}`

await conn.sendMessage('6287869975929@s.whatsapp.net', { text: message })}*/
}
	process.on('uncaughtException', console.error)

	let isInit = true,
		handler = require('./handler')
	reloadHandler = function(restatConn) {
		let Handler = require('./handler')
		if (Object.keys(Handler || {}).length) handler = Handler
		if (restatConn) {
			try {
				conn.ws.close()
			} catch {}
			conn = {
				...conn,
				...simple.makeWASocket(connectionOptions)
			}
		}
		if (!isInit) {
			conn.ev.off('messages.upsert', conn.handler)
			conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
			conn.ev.off('connection.update', conn.connectionUpdate)
			conn.ev.off('creds.update', conn.credsUpdate)
		}

		conn.welcome = 'Welcome to *@subject* @user\nSemoga betah Dan jangan lupa baca deskripsi\n@desc'
		conn.bye = 'Goodbye @user,\nSemoga tenang di alam sana.'
		conn.spromote = '@user telah naik jabatan'
		conn.sdemote = '@user telah turun jabatan🗿'
		conn.handler = handler.handler.bind(conn)
        conn.onDelete = handler.delete.bind(conn)
   
		conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
		conn.connectionUpdate = connectionUpdate.bind(conn)
		conn.credsUpdate = saveCreds.bind(conn)

		conn.ev.on('messages.upsert', conn.handler)
		conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
		conn.ev.on('message.delete', conn.onDelete)
		conn.ev.on('connection.update', conn.connectionUpdate)
		conn.ev.on('creds.update', conn.credsUpdate)
		isInit = false
		return true
	}

	let pluginFolder = path.join(__dirname, 'fitur')
	let pluginFilter = filename => /\.js$/.test(filename)
	features = {}
	for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
		try {
			features[filename] = require(path.join(pluginFolder, filename))
		} catch (e) {
			conn.logger.error(e)
			delete features[filename]
		}
	}   
	
    reload = (_ev, filename) => {
		if (pluginFilter(filename)) {
			let dir = path.join(pluginFolder, filename)
			if (dir in require.cache) {
				delete require.cache[dir]
				if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
				else {
					conn.logger.warn(`deleted plugin '${filename}'`)
					return delete features[filename]
				}
			} else conn.logger.info(`requiring new plugin '${filename}'`)
			let err = syntaxerror(fs.readFileSync(dir), filename)
			if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
			else try {
				features[filename] = require(dir)
			} catch (e) {
				conn.logger.error(`error require plugin '${filename}\n${e}'`)
			} finally {
				features = Object.fromEntries(Object.entries(features).sort(([a], [b]) => a.localeCompare(b)))
			}
		}
	}
	Object.freeze(reload)
	fs.watch(path.join(__dirname, 'features'), reload)
	reloadHandler()

	async function _quickTest() {
		let test = await Promise.all([
			cp.spawn('ffmpeg'),
			cp.spawn('ffprobe'),
			cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
			cp.spawn('convert'),
			cp.spawn('magick'),
			cp.spawn('gm'),
			cp.spawn('find', ['--version'])
		].map(p => {
			return Promise.race([
				new Promise(resolve => {
					p.on('close', code => {
						resolve(code !== 127)
					})
				}),
				new Promise(resolve => {
					p.on('error', _ => resolve(false))
				})
			])
		}))
		let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
		console.log(test)
		let s = support = {
			ffmpeg,
			ffprobe,
			ffmpegWebp,
			convert,
			magick,
			gm,
			find
		}
		Object.freeze(support)

	}

	_quickTest()
		.then(() => console.log(chalk.green.bold('✅ Quick Test Done')))
		.catch(console.error)

	
})()

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}￼Enter			features[filename] = require(path.join(pluginFolder, filename))
		} catch (e) {
			conn.logger.error(e)
			delete features[filename]
		}
	}   
	
    reload = (_ev, filename) => {
		if (pluginFilter(filename)) {
			let dir = path.join(pluginFolder, filename)
			if (dir in require.cache) {
				delete require.cache[dir]
				if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
				else {
					conn.logger.warn(`deleted plugin '${filename}'`)
					return delete features[filename]
				}
			} else conn.logger.info(`requiring new plugin '${filename}'`)
			let err = syntaxerror(fs.readFileSync(dir), filename)
			if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
			else try {
				features[filename] = require(dir)
			} catch (e) {
				conn.logger.error(`error require plugin '${filename}\n${e}'`)
			} finally {
				features = Object.fromEntries(Object.entries(features).sort(([a], [b]) => a.localeCompare(b)))
	}
	}
	Object.freeze(reload)
	fs.watch(path.join(__dirname, 'features'), reload)
	reloadHandler()

	async function _quickTest() {
		let test = await Promise.all([
			cp.spawn('ffmpeg'),
			cp.spawn('ffprobe'),
			cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
			cp.spawn('convert'),
			cp.spawn('magick'),
			cp.spawn('gm'),
			cp.spawn('find', ['--version'])
		].map(p => {
			return Promise.race([
				new Promise(resolve => {
					p.on('close', code => {
						resolve(code !== 127)
					})
				}),
				new Promise(resolve => {
					p.on('error', _ => resolve(false))
				})
