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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tDR2haWmlPL3ZXOHZUT0M2TVU3TDlUQzJVbWhwRjI4eUJKdlRaYjgwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk84MndtYVVEenVSWEJ4SnlkNXdENS9aYUw0Q3docnVJazJRWW56djNuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTnU5R2ZuYXM5U0JKNVFnVWRlTEIxaU80cGhnTE5ScGl2SWVoSE4vNUU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsSExaakhmelhzbDdJcGtJTWRlekdMcEFIUDQwQWlFdDNXdkZFTTh5WGlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIQm4wOWl1R1lLOS9PeXBLOU16aFlVUDdBTVEycENCTnNNYzdKLy9mV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNaOEJ5WjZOdG1jVFpzVzgzMXRjZklUMlhYSFJON0NsR0o5NmQ0ODcrak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZKQkVzbE9uNFV4eld5RHhBb0o0ZFBLVytVWGMvNUVQbGErM01SNktGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUl6SjVUVzEvU1NiTlRBTWVFWXZ4VkhSM0pnS0ZpM21HcHVucHRHalVCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBVUGh3VGVYWHo2eUNzUEcxcXdFUnZUbnlQS1JmWDEvbWRpNndsc1dKeGlEc2FrOUdXU2JUSjVwU092N3JKN0ZCNVFCVklFSkVpcHpOd3h5TFkvQ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJSbzBCcmR2ZmpuUlFpNWZmc0ptVXZZVThtMGhkdHZVOHIrUGc2WHk0OVpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY0MjE3NzE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNkJBQkU4RTZGMkIyM0NFNUI2QkY1MTQ0OEI0MENBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgyMDE1Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY0MjE3NzE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRUJBRTk1OTMwNjU5QUQ2NThCRUQxN0JFOTIzRTc1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgyMDE1Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY0MjE3NzE4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMDIxRjQyRTRDODQ4QkE2QTlEN0EyMEYyM0M0NThDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgyMDE1Mzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFYQlY0RzQ5IiwibWUiOnsiaWQiOiI5NDc2NDIxNzcxODozNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkzNDcxOTk0MDM2MzQyOjM0QGxpZCIsIm5hbWUiOiJQaSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEtNMEtzRkVMT05zTVlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQTN4aTNMcFNsVGR4OEw1RGV3QTR2U1hJZmhaUWVDL2kxZ3U2dW04MFczUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQUFTUVlVZWpNMTJEeVNPZzlFL0IrZm5yR3VVekg4M1dMSGVmbnY4ME5TRE56NHlHQUF3elNNaEdHbWgzRDE4b2xkdyt2ZUx0ODBtYmpiTUZTV1V1Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjZyemZET2VtZWYvTUJkNXlVcUh5cGxINmprQzlOYmdqVWxsd0pzVVFrS09QV0VwMEdrZ1NkYXA0SEhBLytHRkd5aTRnK3BWZEhLaDZudXF6NWs2S2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjQyMTc3MTg6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUU44WXR5NlVwVTNjZkMrUTNzQU9MMGx5SDRXVUhndjR0WUx1cnB2TkZ0MCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MjAxNTM2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1yNiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94764217718",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
