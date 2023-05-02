import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Input *URL*`
    if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\nContoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_source=ig_web_copy_link`
    let api = await (await axios.get(`https://sh.xznsenpai.xyz/api/igdl?url=`+args[0])).data
    let results = api.media[0] || api.media
    await m.reply('Sedang diproses...')
  for (let e of api.media)
    await conn.sendFile(m.chat, e, '', wm, m)
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.level = 3
handler.command = /^(ig(dl)?|instagram(dl)?)$/i
export default handler

//https://github.com/Chandra-XD/ItsukaChan/tree/0672bf93778ce7aa0b9d14d5d9294c88bc7c3bbd