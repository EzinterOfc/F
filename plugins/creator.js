let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
• @${nomorown.split`@`[0]} •
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp
• Chat gajelas = Block`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*💌 ɴᴀᴍᴀ ʙᴏᴛ* : ezn ʙᴏᴛ
*✉️ ɴᴀᴍᴀ ᴏᴡɴᴇʀ* : 𝓜.Rafi Lukmanu Faizal
*♂️ ɢᴇɴᴅᴇʀ* : Laki - laki
*🕋 ᴀɢᴀᴍᴀ* : Islam
*⏰ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ* : 05 Juni 2008
*🗺️ ᴛɪɴɢɢᴀʟ* : ɪɴᴅᴏɴᴇsɪᴀ , Jawa timur , kediri 

───────[ ɪᴍᴠ ʙᴏᴛ ]───────

📷 *ɪɴsᴛᴀɢʀᴀᴍ:* ${sig}
🐈 *ɢɪᴛʙᴜʜ:* ${sgh}
🥏 *ᴡʜᴀᴛsᴀᴘᴘ* wa.me/${nomorown}
🌏 *ᴡᴇʙsɪᴛᴇ:* https://yannmd-ofc.blogspot.com/?m=1

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • ᴍʏ ɴᴜᴍʙᴇʀ", rowId: ".owner nomor"},
	{title: "🎨 • ʙɪᴏᴅᴀᴛᴀ", rowId: ".owner bio"},
	{title: "🌐 • ᴡᴇʙsɪᴛᴇ", rowId: ".website"},
	{title: "🌎 • sᴄʀɪᴘᴛ", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • ᴅᴏɴᴀsɪ", rowId: ".donasi"},
	{title: "🔖 • sᴇᴡᴀ", rowId: ".sewa"},
	{title: "🌟 • ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴡᴇʙsɪᴛᴇ", '.website'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
