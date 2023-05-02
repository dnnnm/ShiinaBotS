import fetch from 'node-fetch'
import { Sticker } from 'wa-sticker-formatter'
import uploadFile from '../lib/uploadFilee.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let txt = text ? text : typeof q.text == 'string' ? q.text : ''
	if (!txt) throw `Example: ${usedPrefix + command} halo`
	let avatar = await conn.profilePictureUrl(q.sender, 'image').catch(_ => 'https://telegra.ph//file/c4044a0d3b4cc8b8dc2dd.jpg')
	avatar = /tele/.test(avatar) ? avatar : await uploadFile(conn, (await conn.getFile(avatar)).data, 'tele')
	let req = await fetch(`https://sh.xznsenpai.xyz/api/fakechat?text=${encodeURIComponent(txt)}&username=${q.name}&avatar=${avatar}`)
	if (req.status != 200) throw req.statusText
	let stiker = await (new Sticker(await req.buffer(), { type: 'full', pack: '', author: 'https://sh.xznsenpai.xyz' })).toBuffer()
	await conn.sendFile(m.chat, stiker, '', '', m, '')
}
handler.help = ['fakechat']
handler.tags = ['']
handler.command = /^fakechat$/i

export default handler