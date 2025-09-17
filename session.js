//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdlN3REaVl6d3FwRkI4OGJ6TnFzWWs4RDVxTVQ4cU5lK2RxTkxVV1lXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnhIU2ZsNEpqWURVMURiTjg3UWV5QUlrVlAxZjJPNHNGeDVRNkJFQmdtOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQXZ1dHMvbFBudW1CSVlKNUo1YmNmeGMxbFVLT1lkM3RSRVkybFpGQlZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNzROUG5CZnA2enEzT1c5R1grdkxTTVZ3T3dqZTZwNzJ5Z2ZQK3JPK1dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PVVhtaTJHRzJXZksxMjBZa0tJWmdGQStOY1BKbDNlc1RKR3hMTlFiVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZiWkJFc3JvNHdnNm10Z1hqSXJDd2VnSElEdlM3UGxGK3B3NjViYitibms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01QOVhXaE5Pa0JpSCtoMXAvRDJmdHRhOHo2SlIrT0NpaHg2dzdDZ2UwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGl4NDl1cUl3SDVSYStJRXQ4MkNPK1ErN2JZbk81blQ1T2k0U1c2Qm9sRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind3VDlXbE53N0JyQVppWUcrbTFvcSs3UXhVYVRUYVdZNC91YjEzbjZjZHUrYllNNlAybDRXZitzNWVFYnlCZnU4ZkNjZUtWZDNXaTl4VUNpc0tzaGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJMU1Q5TWRBVFJoWThkR21sbWpFSEtjUmFIaGFLQ3k5WXdmUFhSVU9OSTVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4NjYxMDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMzg1NTM2ODU1NTZEMUZEQTY0QjMzMzM2QzkxNDFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgxMzQ0MDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFYdGtUSmVWUzVxM3BmZjJFbXktR3ciLCJwaG9uZUlkIjoiY2RiMTVjZWEtNDIxOS00Nzg1LTgzNzUtZmY5NzQ4NDMxODkzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing5Q0cvK3kxdE1PNTREK2JWOEo1OGZEeEN5az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Z3d5aEMzYWNGUlJZaHEzckFpbzlRNmtzZHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFFMSFNHR0giLCJtZSI6eyJpZCI6Ijk0Nzc4NjYxMDExOjE1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM0NzI2NjczNjk1NDc6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUHM4T2tERVB1QXJNWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqOTF3aGNnWCszOHEvOHV0bFlxMnh0WCtYTlc3NGRMakVkNHd1cmxQbUFNPSIsImFjY291bnRTaWduYXR1cmUiOiJOYzl1NHcvN2pIWDF3cCtRTjJLTDV0UTFSd1Jra1JQRFI5QzYrNzJYZGQ3N05Pd2ZxeVpYZ3NQOHJxakYvNU1lOXlEU1VyNzl1b2ZHMXBIY1JBdXJDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGdYcXkxWHczQnlKWlNNMlZvUnRtWU5SQkp5V0tZSk5CM2xLS3VuRnZQMWFyY2ZFWmZWbUN0MmczYlJKSlBNNHRYTXNqK2ZtZXNFRnBnSXJJQk5sZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3ODY2MTAxMToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZL2RjSVhJRi90L0t2L0xyWldLdHNiVi9selZ1K0hTNHhIZU1McTVUNWdEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgxMzQ0MDcsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQk5yIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94778661011",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
