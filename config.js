const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6287760084807";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_31_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxWGNRazZ0QXJhcTZ1dlA0UCs3UVJVZ05jd1VoRXpzWHFReTN3R25sSTFFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODc3NjAwODQ4MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBMDVCMzkzMzU0MEI3ODQ1RDJERUQwQkM4Q0U4Nzc1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA2NTA5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODc3NjAwODQ4MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUzMzU3OTMzQTI4NDZGMkJEMTdERjFBQjYyOTVGOUVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA2NTA5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODc3NjAwODQ4MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5RUExMUI4NDNCMUE3OUZCQzgwMTA1NDAwREI0RDYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA2NTA5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODc3NjAwODQ4MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFCREMxODkxNEE4QTlDRDhERkFFMkM2QTdGNDY4MzI1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA2NTA5NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfMGV3enRBY1ExdXVXRXByd0d5c1pRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0YzQ4MTI5LTlkMGUtNGVmYi1iM2UzLTBmMzY0NTgwMGQ1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDIyNyxcbiAgICAgIDE5OCxcbiAgICAgIDI1MyxcbiAgICAgIDIyMSxcbiAgICAgIDI3LFxuICAgICAgMjEsXG4gICAgICAxNTksXG4gICAgICAxNzUsXG4gICAgICAyMDMsXG4gICAgICA5NyxcbiAgICAgIDQsXG4gICAgICAxMjAsXG4gICAgICA3MSxcbiAgICAgIDIwNSxcbiAgICAgIDEwOSxcbiAgICAgIDI1MyxcbiAgICAgIDIsXG4gICAgICAzNyxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAxOTQsXG4gICAgICAxODMsXG4gICAgICAxMTUsXG4gICAgICA2OSxcbiAgICAgIDE4MixcbiAgICAgIDUzLFxuICAgICAgMTAzLFxuICAgICAgMTg3LFxuICAgICAgMTkwLFxuICAgICAgNzgsXG4gICAgICAxNjAsXG4gICAgICAyNTIsXG4gICAgICAyNTQsXG4gICAgICAyNTEsXG4gICAgICAxLFxuICAgICAgMjUzLFxuICAgICAgMjQxLFxuICAgICAgMTUxLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzE2Sk0zNVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODc3NjAwODQ4MDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNhaXRlbXBpa1wiLFxuICAgIFwibGlkXCI6IFwiMjgwMjUxMjk2OTIzNzY1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5kdGVJREVQMnE0YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJNUFvRDVvNXZYVjl4NVVyaWFydG95Wkk3RnEvN2oyZlByTjJ5MUQ0QXc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJmTS8wQktZQmhjbjVhQmR6MG5EeXBRb2wva1l1RzZHS1FvNmluQXRtOVF4eUx1dmpITG4xMkJaZnlmZmZ4SlBHYzlMK3lFTDZXY1MzUEU0dHBYNENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBuTDYrbHZSNWpxTmdPaWNWaFFEdVRvS3p2UXBoQzhkQ1N1eDJxdC9RR0NvMDUybHhCbk16c1VheHcrNHpna3B6elU3TWROR1RwdkIyL3QvUjVCekRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODc3NjAwODQ4MDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwNjUwOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDdUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN1SC5qc29uIjogIntcImtleURhdGFcIjpcIkpyaUJsb1l1OVJLdm1uQXdncHgrVTVRRjZMWDFiRkN2QmkzM3pNNlg0TkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxMTcwNzUyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MDY1MDkzMzAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
