import fetch from 'node-fetch'
let handler = async (m, { conn, command, args, usedPrefix }) => {
if (!args[0]) return conn.reply(m.chat, `*[ ! ] USE FORMAT :* ${usedPrefix}${command} [url] [type]\n*[ ! ] EXAMPLE :* ${usedPrefix}${command} https://m.adamdani2.repl.co phone\n\n*[ ! ] TYPE LIST :*\n🖥️ desktop\n📱 phone\n📱 tablet`, m)
let ss = await (await fetch(`https://sh.xznsenpai.xyz/api/ssweb?url=${args[0]}/&type=${args[1]}`)).buffer()
conn.sendFile(m.chat, ss, '', '', m)}

handler.help = ['ssweb']
handler.tags = ['tools']
handler.alias = ['ss', 'ssweb', 'ssf', 'sswebf']
handler.command = /^ss(web)?f?$/i

export default handler