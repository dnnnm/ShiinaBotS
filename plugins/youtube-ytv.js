import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Input *URL*`
        let p = await fetch(`https://xznsenpai.xyz/api/y2mate?url=`+args[0])
        let o = await p.json()
        let u = await fetch(o.links.video['1080p'].url)
        let y = await u.json()
        let i = `${y.title}
        
        *${global.wm}*`
        await m.reply('Sedang diproses...')
        await conn.sendFile(m.chat, y.dlink, '', i, m)
        }

handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 0
handler.register = true
handler.limit = true

export default handler