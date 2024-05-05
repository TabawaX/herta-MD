const fs = require('fs');
const crypto = require('crypto');
const { promisify } = require('util');
const { MessageMedia } = require('whatsapp-web.js');

const readFileAsync = promisify(fs.readFile);

const handler = async (m, { conn, text }) => {
  try {
    m.reply('Tunggu Sebentar, Proses Getting File database.json');
    const dbBuffer = await readFileAsync('./database.json');
    const dbString = dbBuffer.toString('utf8');
    const dbNamanya = `database-${generateRandomID(10)}.json`;
    const dbMimetype = 'application/json';
    const dbTextnya = `Berikut adalah database bot:\n\n${generateReadMore(4001)}`;
    const contextInfo = {
      mentionedJid: [m.chat],
    };

    const media = new MessageMedia(dbMimetype, dbBuffer, dbNamanya);
    await conn.sendMessage(m.chat, media, {
      caption: dbTextnya,
      contextInfo,
    });

    m.reply('File database.json telah dikirim!');
  } catch (error) {
    console.error(error);
    m.reply('Gagal mengirim file database.json!');
  }
};


handler.command = /^(db|gitdb)$/i;
handler.owner = true;

module.exports = handler;

const generateRandomID = (length) => {
  return crypto.randomBytes(Math.ceil(length * 0.5)).toString('hex').slice(0, length);
};

const generateReadMore = (length) => {
  const more = String.fromCharCode(8206);
  return more.repeat(length);
};￼Enter
