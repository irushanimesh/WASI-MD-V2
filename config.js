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
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUM5Yk1mMkRONGwvVFJUV1hCaWFqZVI2WUpuMHRzaEY1ZDhLU1NXVlJWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHJpKzZmTXllQXUxdFZkVjhXRkVpN3ZjckRJYTluZ0VWdmJGSXYrRjRDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R1VkSnAraDB2dW1oVktjdFJZTzM3K2QvYzY1UGhUd2NpYU04WGhHTm1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVK0d0dU1tVHRUSzlOQ01OczhDcVFHQXJrV2o3SldzbnA4MDA1aExtQ0ZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBNXlFb2YvTXJ5RWhlZXhyMjdBK003TFhqU004Z3Y5NVlQa25MZHJrWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0cGtoTk54MHNrem1WRGdWcWtJQWs3SXIrZEc2REVHV2cveXNDYU1xRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtwdysrTHZPVFErOTM5NEZkWWxPc2lldC9qQ2lldE44M21VbldwTVVXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNytFQmRrTDkxMUgvclRKV1B5SDRiMXRlazJINnBYZ2dldlVhNExKNGJDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBad1E2eTJCMXFINnlNbFlWT1plWXByc1Rzb1hoeExOZUhoRVVDU2orMml3V1V1K1FCanJuUytuR0pOMVMzdmEzYzl4N3JwenRET0xHOXpoSFh1Z2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJjMENQbGs4eVVQRDN6QlU0Yk9mYVgyK1N3bFZnYXVlQmMvQkpYMGVTclN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwN0QzMEFENUQ4RTUwNEJBMkU3RjU1MzQ0MzVDMEExIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NjEzOTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI5NkIxMEM4MUVEOERCRTRFNTM4NkQwNEU0QUM0REEyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NjEzOTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCRUMxRDZEMTNFMzM0NDNFODY2N0EyM0Y5QUM5RDZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NjE0MDB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU1RTA2Q0JEMkQxMDYzNjhGRDMyQjYyMTk2QjhCOTUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4NjE0MDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNvRkUzZnExVDA2cTd4bHM0ZS1LY1EiLCJwaG9uZUlkIjoiZWIyNjdlNTktOTQ0MC00YmRiLWIzNGEtMWI5YzI0OGJiYTIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllXbWFVM1NFZlFLcjFLRzVxb1FDUTZFZE81OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEUVFZUlo0T0FuT205bXkramhSV3REeG1LelU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1ZCQjJKSDkiLCJtZSI6eyJpZCI6Ijk0NzU1NDExNTY4OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSXJ1c2hhIE5pbWVzaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlhlajkwQ0VNaUZ5YlFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0dBRzQ1d3NEc3ZTMHFGY0xwb25EYlRQVWJ2SmNUeDdYSi9TcGdHS2VrOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiREw2WkFQU01hOG94WkZDaW1GdU5GMnBuc2JUUmpKTHI5UmE0bkNPeTBtN2gvUVpKNzBxN1FZSkVYekFBOEtQdVI0M1Z3TkZXNlhoRGJraGRnNTlZRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImdGOUZ2RHJkUStvS1dSL0VSSEh4ODlKakpEKzdKYUxuNE1WMGJpRmgzTDA1ZDRIQTV2czhmbldhNUxsK3ZucjV6S2RPU3hKVWkrNGs3OG80djZ1TmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTU0MTE1Njg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaGdCdU9jTEE3TDB0S2hYQzZhSncyMHoxRzd5WEU4ZTF5ZjBxWUJpbnBQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODYxMzk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpoLyJ9="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
