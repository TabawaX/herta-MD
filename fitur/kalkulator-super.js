let handler = async (m, { conn, text }) => {
  let id = m.chat;
  let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let key = Array.from({ length: 16 }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
  let encode = encode(text, key);
  
  conn.math = conn.math ? conn.math : {};
  if (id in conn.math) {
    clearTimeout(conn.math[id][3]);
    delete conn.math[id];
    m.reply('apalah?');
  }
  
  let val = encode;
  let format = val
    .split('')
    .sort(() => Math.random() - 0.5) // Acak Aj
    .join('');
    
  try {
    console.log(val);
    let result = decode(val, key);
    if (!result) throw result;
    m.reply(`*${format}* = _${result}_`);
  } catch (e) {
    if (e == undefined) throw 'Isinya?';
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport';
  }
};

// makann nih algoritma
function encode(text, key) {
  let encode = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyChar = key.charCodeAt(i % key.length);
    let encodedCharCode = charCode + keyChar;
    encode += String.fromCharCode(encodedCharCode);
  }
  return encode;
}

function decode(text, key) {
  let decode = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyChar = key.charCodeAt(i % key.length);
    let decodedCharCode = charCode - keyChar;
    decode += String.fromCharCode(decodedCharCode);
  }
  return decode;
}

handler.help = ['kalkulator <soal>'];
handler.tags = ['tools'];
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i;
handler.exp = 5;
handler.register = false;
module.exports = handler;￼Enter
