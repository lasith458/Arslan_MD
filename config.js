const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VPSVVYeEtKaW9BS0krSkZtMkYxOHF5L0ZEbkVzd2tNdXZNdFFja2hVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTBoeW1sc0N5cE96TEhyRzRUYnlyNFBJT0xYOTdPR000eEgrV3JKVWZBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT0U0VzByWmhVdW9rR2k3N3M4T2s3VHdFeThWZGxoMDRVS3pSM0xjKzN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhY3VrVHU2MURTTG9XSW9OSUpCM2hYeEYwcUQweWgxZHJLUXlPRThpN2xrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPOFh0bXRUUHRJclNoemZUcjFVMFVmQjlOZ1ZhY1V5NFZEWFBoNU1XMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink2a3pLZ0twOS9xN0xUUGV4OW90Slg2YWJSdjNwemQ3K0RwWVZPOHRNQlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpOK1pTcXBkV3JRaUU5ci8yaG83MXRqZU5mTExtQytrOUJ5WU9GWlZGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEVqd2NHQSs1ZHplYWhlUlB3TE9tcHVPL0VTNldRUUUrYkdvVDZodmdBQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVOTG8xMDJMQm54aDJ4VWI2NGljelpjNnc4SkUwQzRCUDFRN3pNWCtGcUt5SlpORmM4THZGNStPSytDbUxwR1Bkamk2ZGtpYXRnTmNkNEh3MUhMMkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJmbHdNZHpTUm9YWVZRNnVOL283R3lvOTRhRXQvdWQrZVBlMFNqK0ZHUDZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJENzhLQVRITiIsIm1lIjp7ImlkIjoiOTQ3NTA5MTkzNTA6MTZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4MTI2NTY2MzQxMDI3MjoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l2aXVMd0hFTHFraWNjR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVSL2Z5a0pFR2hyMTZobDlTdUVPY3cwNEdrZnNuUGM5S0YyeXJjVXZNMjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Incybnd0UjkrQ09scW5KbjFyMWZpd0lLNWNWQWZVU3JyUG5rZUFVN0lVbVAvWnZ0OU5oV0lsajlhaStrdjVrNGhHbEpHYzJsOUV6WmRUT3JicGdTU0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJacjNEVTNaZ1ZyUUROSFNleG04b1Z6ZnYrQjNWRWppVmk1dVNuZ3E3T1FmUGZsVURIcVhiYTdpVWU5SjlCVXozY3VGemFKZEYwbk1aSjR0cFh6K2lEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUwOTE5MzUwOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhrZjM4cENSQm9hOWVvWmZVcmhEbk1OT0JwSDdKejNQU2hkc3EzRkx6TnYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTY2MjY1MywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJUWMifQ==VlhGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlnd3ZqaEZtRklCZUN1dVdmU2M0OUdsWitESnRoWHh0OUN5TlMwVkpRWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUEh2c0Q4emhRbVU0WTBCaUF5YTcwLy9VTUkzZmczb3I2UDRwSzdUcDFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNkh0dkdkUEJQemFLT05LNkpobjkzSk9NbVdoejJ5N3ppdUdnUFNIcHlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdISTNVQ1VVTnJHcnhKTk5yTDc0dnY2NGJJT0Ztb2VrTTBrbW9DZ2NIMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRXQWRZT1R3eGh3N1ZVRWVzSDNPVURZUmtPaFpTWnBnU0RzRU1RTXlsVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUM0YzI0SUlkd3NMNGxJZGIrNVArUWhpQXZxQlpNTXFaT01WYi9aY0EwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm12NVNOYndvSy9xdjVjVlo2U3V0T2d1M1RIZWY3QUFEdnhwVVVUUDBUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdEbkJnb3Y2elVvU1FpQlFjRkFEMUZ4TDJZSHhTajRua2Q2RWZzT1NMR1RGLzVtbmc5MmR0RkpueWNjbzV0VmxiTmVtRHJxN1FwNUhJL1RrVnhMOGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJQRmp6TnNQRWtDR1JJeHhVNlZxVGM3bTFaUC80UkRQZ0RqRWxGR0dlRE40PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEyODIzNzMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QkUwNzExN0JBMTY4QzlFMDUwOTYyNjYxNUFBRjkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3Nzc5NDd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEyODIzNzMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MUYzRDA1MDIwMzNFODAwNkQwREE3NkM1QTRGNTZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk3Nzc5NDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjlaOUFYSjU3IiwibWUiOnsiaWQiOiI5NDcxMjgyMzczMTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Imxhc2l0aCIsImxpZCI6IjMzMDA3MzYwNTk4MDgxOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNnZnOW9HRUpTcGtNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDRmFRaFVWWTlpa3d3em1mVzN2M1BrUTUvSDNNTlBpSU00S2xiQ2s5Y2drPSIsImFjY291bnRTaWduYXR1cmUiOiJUSW5NS1U4ZW53QXdsbkp1NUVZV2ZSUUExN3ZwdjlhTDM5bDlGRkNQL3VEMlZmcGVxN0duWDRSVlYzYUZqYzNVcG4zMThMbTNWYXhuQzZwVWU3aU1EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV1hOMHZWRXBwNGFuUzlRSnR1SkljbUthTWNnNkdQd0ViRVhpOXRTUlhMV2I2UUVyVVBBaEphanVNVVBxTDJ4SDFjbkFlS1E1NmYyMk5LSXFYWnp1alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjgyMzczMTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFoV2tJVkZXUFlwTU1NNW4xdDc5ejVFT2Z4OXpEVDRpRE9DcFd3cFBYSUoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTc3Nzk0NCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUYyaSJ9"
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_Lasith",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
