let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan query!`
              awikwok = `${text} ${text} ${text} ð¤ ð¤ ð¤ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${text} wangyy aku mau nyiumin aroma wangynya ${text} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${text} keluar pertama kali di anime juga manis ð¤ ð¤ ð¤ banget AAAAAAAAH ${text} AAAAA LUCCUUUUUUUUUUUUUUU............ ${text} AAAAAAAAAAAAAAAAAAAAGH ð¤ ð¤ ð¤apa ? ${text} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ð¤ ð¤ ð¤ ${text} gw ... ${text} di laptop ngeliatin gw, ${text} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} aku gak mau merelakan ${text} aaaaaah ð¤ ð¤ ð¤ YEAAAAAAAAAAAH GUA MASIH PUNYA ${text} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              conn.reply(m.chat, awikwok, m)
}
handler.help = ['wangy <pasangan>']
handler.tags = ['kerang']
handler.command = /^wangy/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
