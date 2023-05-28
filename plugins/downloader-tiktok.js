import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Input *URL*`
        let p = await axios.get(`https://sh.xznsenpai.xyz/api/tiktok?url=`+args[0])
        let o = p.data.data.play
        let i = `${p.data.data.title}
        
        *${global.wm}*`
        await m.reply('Sedang diproses...')
        await conn.sendFile(m.chat, o, '', i, m)
        }

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler