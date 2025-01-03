  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJOdWljTC9TZURQYm5pejQwalhVQVNuYVh4cXRDNVBEYXY4ZExwWUFGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFpZa0Q1b3F1dnJtZy8wZW9hVjcrOWZ1TlNFU2RXaEcrM3pycXZ4L3JTaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTEFBck9RbzFNUldCTHUvN1ptSEZ3TC9YMXErQWxnbEVYbDhDQlFIMUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTjliT0lkbEd0U3NDL1RxNFZVYmRlbkpXOGUrY3ViTVB4andyNVRxQzBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFaXpjdmtXSEZpVzZlVVhQV2VIYW9IcFdyYTR2ckxLZ2dPQWhqbitHbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJPZU54U1h4ZEJQOVU1UWd0Uis2Rld5NnYzMFp4MmpVNjlQdnJoWDF2bFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpzLzNOS0FjMlYvR1RCakVEQ1kzNVQ5MEhySlNOS1hpM25jYk5Kd25ITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWEyVjBPUldHNVVYNjNITkJ2WndnR01ncmF4bHdzMFF5YnQ0a0dDWUJ3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRBZU45U1hZWEZsUGVEUjdCNjNtVUZpbXZ6aHVTOFc4cXFMdkwwNUlZUEhUSy9lSTlqUm54NDIvY2I4aW9GU0F0dmlVMUpNOFJLOHVrWmw0TjVac2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6InJNZkJCeExVOTR3VjA1MkszWEtIWS9nWFRhbHZONElSclphSTEzRzBWd009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpCVlF0R0hzVDItWHFIdzRFRlZkVlEiLCJwaG9uZUlkIjoiNDI1Y2QzYmUtNjcwNi00YTUxLWExNjEtMGRjYWQ3OTA5YjVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBqMzkrRGRyRUV3RkE0U1N5YjlEVHlGdmFTUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTjE1SFZ6Q3JBb3BreGZLOHpXMXg4OGJXOXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0g3TEc1RDYiLCJtZSI6eyJpZCI6IjI2MzcxNDMyMDgwMDoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPdGhlciIsImxpZCI6IjQ0MDE5MTcwMTc3MjA3OjI0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTW52bjlnQ0VPMi8zN3NHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ1dxandtMXZmcWJCTUxJMHl3bS9VV3EvRitnRGloaThRTE5sU1RQc0NTdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHRPRHRiTWV0WnkxNVFqdllzL1RRSXhndUU4akVxNS81empJaytiVFdRRzFBRFJsN01sWjFBb0M5c2ZqMnNJQzZnWUdXMW9KV2kxeXdWSkJCbE1BQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImFqY1YrSUlaZnlGbmIvQ0dVaTRpUERrODd3L3lWekZLenI3anp4SVpLaHMwNjFydUNLM0hzaVZRVVdrMnNVTGFzRm1tNW80ZndVQkJJcU1QUDJqSWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MzIwODAwOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllGcW84SnRiMzZtd1RDeU5Nc0p2MUZxdnhmb0E0b1l2RUN6WlVrejdBa3MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MDkzNzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmF1In0=' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '254754783972' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Tylor' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "᙭ᑭᒪOᗩᗪᗴᖇ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
