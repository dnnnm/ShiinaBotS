import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Input *URL*`
    let p = await fetch(`https://xznsenpai.xyz/api/download?url=`+args[0])
    let v = await p.json()
    let o = v.url[0].url
    await m.reply('Sedang diproses...')
    await conn.sendFile(m.chat, o, '', wm, m)
        }
        
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.level = 3
export default handler