const fetch = require('node-fetch');
const { addExif } = require('../perpus/_ngetes.js');
const { Sticker } = require('wa-sticker-formatter');
const fs = require('fs');
let hertakawaiiCooldown = false; // cuma buat cooldown

let sekai = async (m, { conn, args, usedPrefix, command }) => { 
    let _a = (r, s) => { let t = ""; for (let i = 0; i < r.length; i++) t += String.fromCharCode(r.charCodeAt(i) + s); return t };
    let _b = (_c) => { let _d = ""; for (let _e = 0; _e < _c.length; _e++) _d += String.fromCharCode(_c.charCodeAt(_e) - 1); return _d };
    
    let _f = false;
    let _g = (_h, _i) => { _h ? console.log(_a("Uijt efdlupgjmm", -1)) : console.log(_a("Sqbq efoufesje", -1)) };
    
    let _j = true; 
    setTimeout(() => { _j = false; }, 10000); 
    
    let _k = false;
    try { 
        let _l = m.quoted ? m.quoted : m;
        let _m = (_l.msg || _l).mimetype || _l.mediaType || '';
        if (/image/.test(_m)) {
            m.reply(_a("Tfeoh nbujoh tubsdl", -1));
            let _n = await _l.download();
            let _o = await conn.sendImageAsSticker(m.chat, _n, m, {
                packname: _a(global.packname, 1),
                author: _a(global.author, 1),
            });
            await fs.unlinkSync(_o);
        } else if (/webp/g.test(_m)) { 
            m.reply(_a("Uvohv tfoufoubufe...", -1));
            let _p = await _l.download?.();
            _k = await addExif(_p, _a(global.packname, 1), _a(global.author, 1));
        } else if (/video/g.test(_m)) {  
            m.reply(_a("Tfeoh nbujoh tubsdl gps wjefp...", -1));
            let _p = await _l.download?.();
            _k = await mp4ToWebp(_p, { pack: _a(global.packname, 1), author: _a(global.author, 1) });
        } else if (args[0] && isUrl(args[0])) { 
            m.reply(_a("Tfeoh nbujoh tubsdl...", -1));
            _k = await createSticker(false, _a(global.packname, 1), '', _a(global.author, 1), 20);
        } else {
            throw _a(`Ljosn/Sfqz Fotp/Wjefp Efobof Nfou Ofoejt ${usedPrefix + command}`, -1);
        }
    } catch (_q) {
        console.log(_q);
        _k = _q;
    } finally {
        if (!_k) console.log(_a('Tufdvmf csbztu ejcvuj!', -1));
        if (_k) m.reply(_k)
    }
};

sekai.command = ["sticker"]
sekai.limit = true
const fetch = require('node-fetch');
const { addExif } = require('../perpus/_ngetes.js');
const { Sticker } = require('wa-sticker-formatter');
const fs = require('fs');
let hertakawaiiCooldown = false; // cuma buat cooldown

let sekai = async (m, { conn, args, usedPrefix, command }) => { 
    let _a = (r, s) => { let t = ""; for (let i = 0; i < r.length; i++) t += String.fromCharCode(r.charCodeAt(i) + s); return t };
    let _b = (_c) => { let _d = ""; for (let _e = 0; _e < _c.length; _e++) _d += String.fromCharCode(_c.charCodeAt(_e) - 1); return _d };
    
    let _f = false;
    let _g = (_h, _i) => { _h ? console.log(_a("Uijt efdlupgjmm", -1)) : console.log(_a("Sqbq efoufesje", -1)) };
    
    let _j = true; 
    setTimeout(() => { _j = false; }, 10000); 
    
    let _k = false;
    try { 
        let _l = m.quoted ? m.quoted : m;
        let _m = (_l.msg || _l).mimetype || _l.mediaType || '';
        if (/image/.test(_m)) {
            m.reply(_a("Tfeoh nbujoh tubsdl", -1));
            let _n = await _l.download();
            let _o = await conn.sendImageAsSticker(m.chat, _n, m, {
                packname: _a(global.packname, 1),
                author: _a(global.author, 1),
            });
            await fs.unlinkSync(_o);
        } else if (/webp/g.test(_m)) { 
            m.reply(_a("Uvohv tfoufoubufe...", -1));
            let _p = await _l.download?.();
            _k = await addExif(_p, _a(global.packname, 1), _a(global.author, 1));
        } else if (/video/g.test(_m)) {  
            m.reply(_a("Tfeoh nbujoh tubsdl gps wjefp...", -1));
            let _p = await _l.download?.();
            _k = await mp4ToWebp(_p, { pack: _a(global.packname, 1), author: _a(global.author, 1) });
        } else if (args[0] && isUrl(args[0])) { 
            m.reply(_a("Tfeoh nbujoh tubsdl...", -1));
            _k = await createSticker(false, _a(global.packname, 1), '', _a(global.author, 1), 20);
        } else {
            throw _a(`Ljosn/Sfqz Fotp/Wjefp Efobof Nfou Ofoejt ${usedPrefix + command}`, -1);
        }
    } catch (_q) {
        console.log(_q);
        _k = _q;
    } finally {
        if (!_k) console.log(_a('Tufdvmf csbztu ejcvuj!', -1));
        if (_k) m.reply(_k)
    }
};

sekai.command = ["sticker"]
sekai.limit = true
module.exports = sekai;

const isUrl = (text) => text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));

async function createSticker(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: stickpack,
        author: stickauth,
        quality
    };
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}

async function mp4ToWebp(file, stickerMetadata) {
    if (stickerMetadata) {
        if (!stickerMetadata.pack) stickerMetadata.pack = '‎';
        if (!stickerMetadata.author) stickerMetadata.author = '‎';
        if (!stickerMetadata.crop) stickerMetadata.crop = false;
    } else if (!stickerMetadata) {
        stickerMetadata = { pack: '‎', author: '‎', crop: false };
    }
    let getBase64 = file.toString('base64');
    const Format = {
        file: `data:video/mp4;base64,${getBase64}`,
        processOptions: {
            crop: stickerMetadata?.crop,
            startTime: '00:00:00.0',
            endTime: '00:00:7.0',
            loop: 0
        },
        stickerMetadata: {
            ...stickerMetadata
        },
        sessionInfo: {
            WA_VERSION: '2.2106.5',
            PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
            WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
            BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
            OS: 'Windows Server 2016',
            START_TS: 1614310326309,
            NUM: '6247',
            LAUNCH_TIME_MS: 7934,
            PHONE_VERSION: '2.20.205.16'
        },
        config: {
            sessionId: 'session',
            headless: true,
            qrTimeout: 20,
            authTimeout: 0,
            cacheEnabled: false,
            useChrome: true,
            killProcessOnBrowserClose: true,
            throwErrorOnTosBlock: false,
            chromiumArgs: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--aggressive-cache-discard',
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0'
            ],
            executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
            skipBrokenMethodsCheck: true,
            stickerServerEndpoint: true
        }
    };
    let res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', {
        method: 'post',
        headers: {
            Accept: 'application/json, text/plain, /',
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(Format)
    });
    return Buffer.from((await res.text()).split(';base64,')[1], 'base64');
}
￼Entermodule.exports = sekai;

const isUrl = (text) => text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));

async function createSticker(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: stickpack,
        author: stickauth,
        quality
    };
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}

async function mp4ToWebp(file, stickerMetadata) {
    if (stickerMetadata) {
        if (!stickerMetadata.pack) stickerMetadata.pack = '‎';
        if (!stickerMetadata.author) stickerMetadata.author = '‎';
        if (!stickerMetadata.crop) stickerMetadata.crop = false;
    } else if (!stickerMetadata) {
        stickerMetadata = { pack: '‎', author: '‎', crop: false };
    }
    let getBase64 = file.toString('base64');
    const Format = {
        file: `data:video/mp4;base64,${getBase64}`,
        processOptions: {
      crop: stickerMetadata?.crop,
            startTime: '00:00:00.0',
            endTime: '00:00:7.0',
            loop: 0
        },
        stickerMetadata: {
            ...stickerMetadata
        },
        sessionInfo: {
            WA_VERSION: '2.2106.5',
            PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
            WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
            BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
            OS: 'Windows Server 2016',
            START_TS: 1614310326309,
            NUM: '6247',
            LAUNCH_TIME_MS: 7934,
            PHONE_VERSION: '2.20.205.16'
        },
        config: {
            sessionId: 'session',
            headless: true,
            qrTimeout: 20,
            authTimeout: 0,
            cacheEnabled: false,
            useChrome: true,
