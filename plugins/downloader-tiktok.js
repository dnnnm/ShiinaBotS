/*import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`

  const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, await (await fetch(url)).buffer(),
        url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['ᴅᴏɴᴀꜱɪ', `.donasi`],
        ['ᴀᴜᴅɪᴏ', `.tiktokaudio ${args}`],
        [null, null]], m)
}*/

import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
🧏 *Nickname:* ${nickname}${description ? `🖹 *Description:* ${description}` : ''}
`.trim(), m)
      }

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler

//https://github.com/Conejitobrr/bot/blob/master/plugins/downloader-tiktok.js