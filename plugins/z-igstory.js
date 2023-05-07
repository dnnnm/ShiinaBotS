import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw `*[ ! ] ENTER INSTAGRAM USERNAME*\n*EXAMPLE:* ${usedPrefix + command} adam_daniam`

await m.reply(global.wait)

const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=SGWN`)

var anu = await res.json()

var anuku = anu.result

if (anuku == '') return m.reply('*[❗] INVALID USERNAME*')  

for (var i of anuku) {

let res = await axios.head(i)

let mime = res.headers['content-type']

if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply('*[❗] INVALID USERNAME*')})

if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply('*[❗] INVALID USERNAME*')})

}}

handler.help = ['igstory <username>']

handler.tags = ['']

handler.command = /^(igs(tory)?|instagrams(tory)?)$/i

export default handler