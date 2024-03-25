const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Gifted_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function GIFTED_BOTS_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Gifted_Tech = Gifted_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.baileys("Desktop"),
			});

			Qr_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Gifted_Tech.sendMessage(Qr_Code_By_Gifted_Tech.user.id, { text: '' + b64data });
	
				   let GIFTED_BOTS_TEXT = `
*✅sᴇssɪᴏɴ ᴄᴏɴɴᴇᴄᴛᴇᴅ✅*
*Made With 💜*
*By ɢɪғᴛᴇᴅ ᴛᴇᴄʜ💜*
____________________________________
╔════◇
║『 𝐖𝐎𝐖 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _youtube.com/@giftedtechnexus_
║❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/message/NHCZC5DSOEUXB1_
║❒ 𝐑𝐞𝐩𝐨: _https://github.com/Giftedmaurice/gifted-mdV2_
║❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/FPzB9wRD9RN4Zk2y2rnH3S_
║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o_
║❒ 𝐏𝐥𝐮𝐠𝐢𝐧𝐬: _https://github.com/Giftedmaurice/gifted-bot-md-plugins_
║  *©²⁰²⁴ ᴳᴵᶠᵀᴱᴰ ᵂᴴᴬᵀˢᴬᴾᴾ ᴮᴼᵀˢ*
╚════════════════════╝ 
___________________________________

_Don't Forget To Give Star⭐ To My Repo_`
	 await Qr_Code_By_Gifted_Tech.sendMessage(Qr_Code_By_Gifted_Tech.user.id,{text:GIFTED_BOTS_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Gifted_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await GIFTED_BOTS_QR_CODE()
});
module.exports = router
