import fetch from 'node-fetch'

let handler = async (m, { conn, command, args, usedPrefix }) => {

if (!args[0]) return conn.reply(m.chat, `*[ ! ] Membuat gambar dari AI.\nContoh:\n${usedPrefix}${command} Wooden house on snow mountain`, m)

let ss = await (await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${args[0]}`)).buffer()

conn.sendFile(m.chat, ss, '', '', m)}

handler.help = ['dall']

handler.tags = ['']

handler.alias = ['dall', 'dalle', 'dall-e']

handler.command = /^dall(-)?e?$/i

export default handler