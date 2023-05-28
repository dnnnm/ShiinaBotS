import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Input *URL*`
    if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_source=ig_web_copy_link`
    let api = await axios.get(`https://sh.xznsenpai.xyz/api/igdl?url=`+args[0])
    let results = api.data.media
    let wm = `${api.data.caption}
    
    *${global.wm}*`
    await m.reply('Sedang diproses...')
    for (let e of api.data.media)
    await conn.sendFile(m.chat, e, '', wm, m)
}

handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.level = 3
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler