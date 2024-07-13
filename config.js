//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZvbUp6TGovS1dlTzBmTW55QnRnZk9lS1Y5QTdxcmp1WUVzOGQ1TE9IUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibS83cWZSWWEzMGpXTm0vbUY3ZTVZK0dkY29vQmxqYThYOEVvTTNscVIyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT09YZmdKelgzN1VwOXlsY0hIcVVaQjdLbXR3L0dkL0JHSklPUkozdEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVVBOM2VJNEluSnpab0swYnBDUFFqckV5SkNlMjlRNTErb0E1UnRVN0ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMQU9Gcm1IZWQvaEJEZ29DU2h2aE9wSExQUUtNWTFoNkZFRDJkcGdJMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5hVHZGd0VhamEyYTkyWmlVZ1FPWHpLSFg0Y2VoNTR0VkFnTmVCMU1zVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlYVXJZbDJURDlvSHN0TU1OZzc2MkMzZktnbU8vYkNsVEt5NjZyUGxFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWExOQ0g1YmhVZkFDY3ZKU3BHVUFvdHJSSXRsQ0RQZndCL3VUNU0rM2VFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRUbngxQzNpTU5ja2dMZ3hzK0hYTDEvdXl6NjE0aUxNSmxLZUFzNmQ4ZUhVaTlPSmhVcE5tZTBHT3IwZEQ5UmJQTm8zbWZzNEJOTUZ6aW00MXgySWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJpM0FMOU0xQU80UVdkNXhwZjlKSkVVWVNlSnQ4UkZzVjlRSnllbDVSWmNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkyQzcxRTJBRUZDNEQ2RDEyREY2NUNGN0JFRjJGRTA1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NTY0NTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyMjc5ODVDRDVFNERDQjlFNkQwMTc1QzQ4ODk3MjQ5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NTY0NTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk4NjgyN0UwODFEMzM3NkYyQjI2NjA4N0U1OTMzRUFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NTY0NTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM3QkNDNkVFQUMyNDM5MjQ1QThFNkM5NzJBQTQ5QkQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NTY0NTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9CdlhWa3lVU051Q0V2RWhYdUpmQ2ciLCJwaG9uZUlkIjoiNTgxOTBlMjEtMzA1OC00Yzc4LTk5MTQtNTZlOTJhNjNhMzIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZWb01ycmwzUFRXbFp0eUR3SVRKV1ByR3h4WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRStjeGZ2THUzcWhUcVZnRDV4eWJ0T1lTdEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkxXQkpMUDQiLCJtZSI6eyJpZCI6Ijk0NzU1NDExNTY4OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSXJ1c2hhIE5pbWVzaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlhlajkwQ0VQZmV5TFFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0dBRzQ1d3NEc3ZTMHFGY0xwb25EYlRQVWJ2SmNUeDdYSi9TcGdHS2VrOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoid0lURHpySFlncXN5ZkxjZXMzcm1TeENCaWN4em1IaE15a0Y4ZXZXZVRDNGtvcGFzZ2NuY3ozUHR2N1phalNzUGZUNE5TTjZJOHZiWG9CMytzWS83QWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhsNkNkcGw2OUJQUUo3TGpIVlQzdzF5aXVIODVqSTBrZ2NxSllCWEhObFBRdU5tOWxkai9zT3k1djBjaHJ6b1VVa282Nm81b1BMTEV5OG11b1hMNmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTU0MTE1Njg6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaGdCdU9jTEE3TDB0S2hYQzZhSncyMHoxRzd5WEU4ZTF5ZjBxWUJpbnBQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODU2NDUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpoKyJ9="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
