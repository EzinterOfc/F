let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} GOPAY ${htka}

Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Gopay
• Nomor: 082252285143
• A/n: Ryan
• Mitra: Ryan Store
• Metode pembayaran: Online ( ~Cod~ )

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


📮KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Join Gc', url: 'https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^gopay$/i
handler.private = true

export default handler