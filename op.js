/*
  Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
Então você gostaria de ter algo que se esforçou muito de GRAÇA roubado de você? Pois eu não.

Se ainda planeja roubar, saiba que eu espero de coração que você nunca seja roubado.*/

//MODULES DO BOT
const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,  
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs")
const os = require('os');
const got = require("got");
const axios = require('axios')
const toMs = require('ms')
const crypto = require('crypto')
const encodeUrl = require('encodeurl')
const delay = require('delay')
const util = require('util');
const speed = require('performance-now')
const ig = require('insta-fetcher')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const tik = require ('tiktok-scraper') 
const googleImage = require('g-i-s')
const googleIt = require('google-it')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const PhoneNumber = require('awesome-phonenumber')
const gis = require('g-i-s');
const request = require('request')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { yag } = require('./asu')
const imageToBase64 = require('image-to-base64')
const path = require('path')
const { tiktokDown } = require("./lib/tiktok")
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const setiker = JSON.parse(fs.readFileSync('./lib/media/stick.json'))
const gambarnye = JSON.parse(fs.readFileSync('./lib/media/image.json'))
const videonye = JSON.parse(fs.readFileSync('./lib/media/video.json'))
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { onGoing } = require("./lib/otakudesu.js")
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { animesaran } = require('./lib/animesaran')
const { animesaran2 } = require('./lib/animesaran2')
const { donasi } = require('./lib/donasi')
const { webp2gifFile } = require("./lib/gif.js")
const { infown } = require('./lib/infown')
const daily = JSON.parse(fs.readFileSync('./database/diario.json'))
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR DO TTT
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { snk } = require('./lib/snk')
const fontPath = ('./lib/xcodefnt.ttf')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { removeBackgroundFromImageFile } = require('remove.bg')
const { wait, simih, h2k, generateMessageID, getGroupAdmins, getRandom, getBuffer, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
const textpro = require('./lib/textpro.js')
const { 
  pSmoky,
  pOuro,
  pSemi,
  pFogo,
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly } = require('./lib/photooxy')
const sotoy = JSON.parse(fs.readFileSync('./lib/sotoy.json'))
const { version, bugs } = require('./package.json')
const { uptotele, uptonaufal } = require('./lib/uploadimage')
const { cmdadd } = require('./lib/totalcmd.js')
const { convertSticker } = require("./lib/plugins/swm.js")
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') // JOGO DA VELHA
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const autofigurinha = JSON.parse(fs.readFileSync('./database/autofigurinha.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const palavra = JSON.parse(fs.readFileSync('./database/palavras.json'))
const palavrão = JSON.parse(fs.readFileSync('./database/palavrão.json'))
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json')); //DADOS JOGO DA VELHA
const antifake = JSON.parse(fs.readFileSync('./database/antifake.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const compraplay = JSON.parse(fs.readFileSync('./database/compraplay.json'))
const hyuga = JSON.parse(fs.readFileSync('./database/hyuga.json'))
const uzumaki = JSON.parse(fs.readFileSync('./database/uzumaki.json'))
const uchiha = JSON.parse(fs.readFileSync('./database/uchiha.json'))
//VCARD
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:sayo\n' //coloque seu nome
              + 'ORG: akame bot;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=556181496039:+62 89643739077\n'  //coloque seu número
              + 'END:VCARD'
             
const vcard = 'BEGIN:VCARD\n'  // Não mude para não obter um erro
            + 'VERSION:3.0\n'  // Não mude para não obter um erro
            + 'FN:Sayo\n'  // Mude para o seu nome
            + 'ORG: Gayteam BOT;\n'  // Mude para o seu nome ou o nome do bot
            + 'TEL;type=CELL;type=VOICE;waid=556181496039:+23479498931\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // não mude
const TechApi = "5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ"
//cofiguração
hit_today = [] // TOTAL DE COMANDOS USADOS POR DIA
offline = false
banChats = false
//multi = false. //MULTI PREFIX
p = '#'
antikbarkkk = 'hamsil.jpg'
useelacomobasepfv = '#FF0000'
pinghinkibadorsafado = './src/wel.jpg'
Plagiarmeuscomandosnãotetornacoderváestudarnãosejaumladrãomiserável = './src/font-gue.ttf'
antidel = true
limitawal = 30
nopref = false
publik = false
fake = 'self-akame'
baterai = 'não detectado'
charging = 'não detectado'
numbernye = '0'
waktunya = '-'
targetpc = '556181496039'
alasan = '-'
owner = '556181496039'
//_COMEÇO-DO_TIC-TAC-TOE
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');
//===================================================//
//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
 tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
 (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
 (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 =="🔲" || esp.a3 =="🔲" || esp.b2 =="🔲" || esp.c1 =="🔲" || esp.c3 =="🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "🔲") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}
///_ FIM DO TIC-TAC-TOE CONFIG


//AFK
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Boa noite'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Boa noite'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom dia'
                                         }
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
               const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
                const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
             const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })            
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        } 
                
            const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        ////FINALIZAR TTT AUTOMATICAMENTE
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
akame.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
akame.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
async function starts() {
const akame = new WAConnection()
akame.version = [2, 2119, 6]
akame.logger.level = 'warn'
console.log(banner.string)
akame.browserDescription=Browsers.macOS("SERVE.AKAME")
akame.on('qr', qr => {
qrcode.generate(qr, { small: true })
console.log(color('Akame','red'), color('leia o qr code acima','aqua'), color('sayo','yellow'))
})

fs.existsSync('./akame.json') && akame.loadAuthInfo('./akame.json')
akame.on('connecting', () => {
start('2', color('[ ! ]Conectando....','aqua'))
})
akame.on('open', () => { 
success('2', color('[ ! ]Conectado','red')),
    console.log(color('⎇','red'), color('Esse script foi totalmente recod por mim\nNota: Pfv não venda ou use para fins lucrativos', 'yellow'))
    console.log(color('⎇','red'), color('Versão do código fonte:', 'aqua'), color(version))
    console.log(color('⎇','red'), color('Bug? Error? Sugestão? Fale comigo =>:', 'aqua'), color('https://wa.me/556181496039'))
    console.log(color('[AKAME-SELF]'), color('akame está online agora!', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Bem-vindo de volta, meu criador 😄  Espero que você esteja bem~', 'magenta'))
})
await akame.connect({timeoutMs: 30*1000}) 
fs.writeFileSync('./akame.json', JSON.stringify(akame.base64EncodedAuthInfo(), null, '\t'))    
        
        akame.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
  console.log(color('[BATERIA]', 'yellow'), color('Bateria esta em : ' + batterylevel+'%', 'magenta'))
	})
	global.batrei = global.batrei ? global.batrei : []
		akame.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
/*akame.on('message-update', async (mek) => {
m = simple.smsg(akame, mek)
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
 bugsol = mek.participants[0]
 tekuss = `\`\`\`Bugs detectados\`\`\`

\`\`\`@⁨${bugsol.split('@')[0]} Enviando bugs no grupo ${groupName}\`\`\``
akame.sendMessage(mek.key.remoteJid, 'WOW BUGS', MessageType.text)
akame.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, { contexInfo: { mentionedJid:[bugsol] }})
}
})
*/
akame.on('message-delete', async (m) => {
	        /*****************DATA ********/
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domigo'; break;
                case 1: hari = 'Segunda-feira'; break;
                case 2: hari = 'terça'; break;
                case 3: hari = 'quarta-feira'; break;
                case 4: hari = 'quinta-feira'; break;
                case 5: hari = 'sexta-feira'; break;
                case 6: hari = 'sábado'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Janeiro'; break;
                case 1: bulan1 = 'fevereiro'; break;
                case 2: bulan1 = 'Março'; break;
                case 3: bulan1 = 'abril'; break;
                case 4: bulan1 = 'Maio'; break;
                case 5: bulan1 = 'Junho'; break;
                case 6: bulan1 = 'julho'; break;
                case 7: bulan1 = 'agosto'; break;
                case 8: bulan1 = 'setembro'; break;
                case 9: bulan1 = 'Outubro'; break;
                case 10: bulan1 = 'novembro'; break;
                case 11: bulan1 = 'dezembro'; break;
            }
                 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
                var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Horário';
var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Hora da meia-noite🌚'; break;
                case 1: waktoo = 'Hora da meia-noite🌚'; break;
                case 2: waktoo = 'De manhã cedo🌒'; break;
                case 3: waktoo = 'De manhã cedo🌓'; break;
                case 4: waktoo = 'Alvorecer🌔'; break;
                case 5: waktoo = 'Alvorecer🌔'; break;
                case 6: waktoo = 'bom dia 🌝'; break;
                case 7: waktoo = 'bom dia 🌝'; break;
                case 8: waktoo = 'bom dia 🌝'; break;
                case 9: waktoo = 'bom dia 🌝'; break;
                case 10: waktoo = 'bom dia 🌝'; break;
                case 11: waktoo = 'Boa tarde 🌞'; break;
                case 12: waktoo = 'Boa tarde 🌞'; break;
                case 13: waktoo = 'Boa tarde 🌞'; break;
                case 14: waktoo = 'Boa tarde 🌞'; break;
                case 15: waktoo = 'Boa tarde 🌝'; break;
                case 16: waktoo = 'Boa tarde 🌝'; break;
                case 17: waktoo = 'Boa tarde 🌖'; break;
                case 18: waktoo = 'Quase a noite 🌘'; break;
                case 19: waktoo = 'Quase a noite 🌚'; break;
                case 20: waktoo = 'Boa noite 🌚'; break;
                case 21: waktoo = 'Boa noite 🌚'; break;
                case 22: waktoo = 'Boa noite 🌚'; break;
                case 23: waktoo = 'Boa noite 🌚'; break;
            }
            var tampilUcapan = '' + waktoo;  
if (antidel === false) return
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
console.log(color('[ANTI APAGAR MSG]', 'red'), color(`DETECTADO`, 'blue')) 
akame.sendMessage(m.key.remoteJid, `
┌─❖
│*「 🗑ANTI APAGAR🗑️ 」*
└┬❖ ${ucapanWaktu}
││✑  *>Número* : wa.me/${m.participant.split("@")[0]}
││✑  *>Horário* : ${tampilJam}
││✑  *>Dia* : ${tampilHari}
│└────────────┈ ⳹
└─────────────┈ ⳹`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
setTimeout( () => {
		        akame.copyNForward(m.key.remoteJid, m.message)
		        }, 1000)
	            })
//=================================================//
akame.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
	const mdata = await akame.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				akame.sendMessage(mdata.id, '👮🏻‍♀️Números fake aqui não "amigo" 👮🏻‍♀️️', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O NÚMERO FAKE...','red'))
				akame.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}		
if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await akame.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = akame.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await akame.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await akame.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
             img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=BEM VINDO(A)&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&grupo=SEJA BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `[❗] Olá @${num.split('@')[0]} \n◪Seja Bem-vindo(a) Leia as regras e seja feliz`
            akame.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else if (anu.action == 'remove') {
         img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=ADEUS&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&grupo=SAIU DE ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `[❗] Tchau @${num.split('@')[0]} 👋\n◪Ja vai tarde baka kkkk~~`
            akame.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
          } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Parabéns por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `◪ PROMOVER DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ @${num.split('@')[0]} se tornou um administrador do grupo, parabéns`
            akame.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `◪ DESPROMOVER DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─  @${num.split('@')[0]} Não e mais um administrador do grupo`
            akame.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
	akame.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
			
	
	akame.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "AKAME", "caption": `AKAME-BOT️`, 'jpegThumbnail': fs.readFileSync(`src/logo.jpeg`)}}}
  metdata = await akame.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *[❗] GRUPO ABERTO* 」\n\n_O grupo foi aberto pelo administrador_\n_Agora todos os membros podem enviar mensagens_`
    akame.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(anu.announce == 'true'){
    teks = `「 *[❗] GRUPO FECHADO* 」\n\n_O grupo foi fechado pelo administrador_\n_Agora, apenas administradores podem enviar mensagens_`
    akame.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *[❗] DESCRIÇÃO DO GRUPO ALTERADA* 」\n\nA descrição do grupo foi alterada pelo administrador wa.me/${anu.descOwner.split('@')[0]}\n• Nova Descrição : \n${anu.desc}`
    akame.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(anu)
  }
  else if(anu.restrict == 'false'){
    teks = `「 *As configuração do grupo foi alterada* 」\nAgora todos os membros podem editar as informações deste grupo`
    akame.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(anu.restrict == 'true'){
    teks = `「 *As configuração do grupo foi alterada* 」\n\nos Membros comum não pode mais editar o grupo\nSomente admins`
    akame.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
})
	        /*****************DATA ********/
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domigo'; break;
                case 1: hari = 'Segunda-feira'; break;
                case 2: hari = 'terça'; break;
                case 3: hari = 'quarta-feira'; break;
                case 4: hari = 'quinta-feira'; break;
                case 5: hari = 'sexta-feira'; break;
                case 6: hari = 'sábado'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Janeiro'; break;
                case 1: bulan1 = 'fevereiro'; break;
                case 2: bulan1 = 'Março'; break;
                case 3: bulan1 = 'abril'; break;
                case 4: bulan1 = 'Maio'; break;
                case 5: bulan1 = 'Junho'; break;
                case 6: bulan1 = 'julho'; break;
                case 7: bulan1 = 'agosto'; break;
                case 8: bulan1 = 'setembro'; break;
                case 9: bulan1 = 'Outubro'; break;
                case 10: bulan1 = 'novembro'; break;
                case 11: bulan1 = 'dezembro'; break;
            }
                 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
                var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Horário';
var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Hora da meia-noite🌚'; break;
                case 1: waktoo = 'Hora da meia-noite🌚'; break;
                case 2: waktoo = 'De manhã cedo🌒'; break;
                case 3: waktoo = 'De manhã cedo🌓'; break;
                case 4: waktoo = 'Alvorecer🌔'; break;
                case 5: waktoo = 'Alvorecer🌔'; break;
                case 6: waktoo = 'bom dia 🌝'; break;
                case 7: waktoo = 'bom dia 🌝'; break;
                case 8: waktoo = 'bom dia 🌝'; break;
                case 9: waktoo = 'bom dia 🌝'; break;
                case 10: waktoo = 'bom dia 🌝'; break;
                case 11: waktoo = 'Boa tarde 🌞'; break;
                case 12: waktoo = 'Boa tarde 🌞'; break;
                case 13: waktoo = 'Boa tarde 🌞'; break;
                case 14: waktoo = 'Boa tarde 🌞'; break;
                case 15: waktoo = 'Boa tarde 🌝'; break;
                case 16: waktoo = 'Boa tarde 🌝'; break;
                case 17: waktoo = 'Boa tarde 🌖'; break;
                case 18: waktoo = 'Quase a noite 🌘'; break;
                case 19: waktoo = 'Quase a noite 🌚'; break;
                case 20: waktoo = 'Boa noite 🌚'; break;
                case 21: waktoo = 'Boa noite 🌚'; break;
                case 22: waktoo = 'Boa noite 🌚'; break;
                case 23: waktoo = 'Boa noite 🌚'; break;
            }
            var tampilUcapan = '' + waktoo;
       
//chat-update
akame.on('chat-update', async (mek) => {
	try {
    if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return 
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
       if (!publik) {
       	}
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
//		if (!mek.key.fromMe) return
         if (!mek.key.fromMe && banChats === true) return
        m = simple.smsg(akame, mek)
		global.p
		global.blocked
       mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { MessageType, WAMessageProto } = require('@adiwajshing/baileys')
		const { text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
		const jam = moment().tz('America/Sao_Paulo').format("HH:mm:ss")
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		let d = new Date
		let locale = 'id'
		let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
		let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
    	const type = Object.keys(mek.message)[0]
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
/*        if (multi){
		    var p = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
        } else {
            if (nopref){
                p = ''
            } else {
                p = prefa
            }
        }*/
        body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(p) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(p) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(p) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		hit_today.push(command)
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 1, budy.length)
		const isCmd = body.startsWith(p)
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./lib/totalcmd.json'))[0].totalcmd
		const q = args.join(' ')
		const botNumber = akame.user.jid
				var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
				const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const botNumberss = akame.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const hour_now = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? akame.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await akame.chats.all()
		const ownerNumber = ["556181496039@s.whatsapp.net"] // número do criador
        const ownerContact = ["556181496039", "6288286421519", "6282140744548", "79034187942"]
		const unread = await akame.loadAllUnreadMessages()
		const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
		const groupMetadata = isGroup ? await akame.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''	
		const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
	 const isPrem = premium.includes(sender)
	  const isHyuga = hyuga.includes(sender)
	  const isUchiha = uchiha.includes(sender)
	  const isUzumaki = uzumaki.includes(sender)
	 const isCompraplay = compraplay.includes(sender)
		const isOwner = ownerNumber.includes(sender)
		const isAntiFake = isGroup ? antifake.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isPalavrão = isGroup ? palavrão.includes(from) : false
    const isWelkom = isGroup ? welkom.includes(from) : false    
    const isAntiLink = isGroup ? antilink.includes(from) : false	
        const isAutofigurinha = isGroup ? autofigurinha.includes(from) : false	
     const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
         const sayor = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const sayor2 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
    const conts = mek.key.fromMe ? akame.user.jid : akame.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = mek.key.fromMe ? akame.user.name : conts.notify || conts.vname || conts.name || '-'
    const readmore = '͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏'
  /*      const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)*/
     
            //buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 1: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 2: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 3: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 4: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 5: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 6: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 7: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 8: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 9: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 10: waktoonyabro = `Bom Dia ${pushname}✨`; break;
                case 11: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 12: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 13: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 14: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
                case 15: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 16: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 17: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
                case 18: waktoonyabro = `Boa tarde ${pushname}🌛`; break;
                case 19: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 20: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 21: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 22: waktoonyabro = `Boa noite ${pushname}🌛`; break;
                case 23: waktoonyabro = `Boa noite ${pushname}🌛`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;
        //MESS
		mess = {
			wait: `[❗] AGUARDE`,
			success: `[❗] PRONTO`,
			wrongFormat: `[❗] FORMATO ERRADO`,
			error: {
				api: `[❗] DEU ERROR :(`,
				stick: `[❗] ISSO NÃO E UMA FIGURINHA`,
				Iv: `[❗] LINK INVALIDO`
			},
			only: {
				group: `[❗] SOMENTE EM GRUPOS`,
				criador: `[❗] SOMENTE O SAYO PODE USAR ESSE COMANDO 😂`,
			}
		} 
	
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
const costum = (pesan, tipe, target, target2) => {
 akame.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}
        const reply = (teks) => {
            akame.sendMessage(from, teks, text,  {quoted: say1, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
        }

        const sendMess = (hehe, teks) => {
            akame.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? akame.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./akame.jpeg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : akame.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./akame.jpeg')}, extendedText, { sendEphemeral: true, quoted: say1, contextInfo: { "mentionedJid": memberr } })
        }
        const math = (teks) => {
				return Math.floor(teks)
			} 
			const sendTextWithMentions = (teks, member, id) => {
          (id == null || id == undefined || id == false) ? akame.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : akame.sendMessage(from, teks.trim(), extendedText, { quoted: say1, contextInfo: { "mentionedJid": member } })
           } 
           let userAgent = () => {

os = [

'Macintosh; Intel Mac OS X 10_15_7',

'Macintosh; Intel Mac OS X 10_15_5',

'Macintosh; Intel Mac OS X 10_11_6',

'Macintosh; Intel Mac OS X 10_6_6',

'Macintosh; Intel Mac OS X 10_9_5',

'Macintosh; Intel Mac OS X 10_10_5',

'Macintosh; Intel Mac OS X 10_7_5',

'Macintosh; Intel Mac OS X 10_11_3',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_6_8',

'Macintosh; Intel Mac OS X 10_10_2',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_11_5',

'Windows NT 10.0; Win64; x64',

'Windows NT 10.0; WOW64',

'Windows NT 10.0',

];

return `Mozilla/5.0 (${os[Math.floor(Math.random() * os.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(

Math.random() * 3,

) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;

}

function ttaudio(url) {

return new Promise(async (resolve, reject) => {

getDataFirst = await axios.get('https://www.tiktok.com')

newCookie = getDataFirst.headers['set-cookie'].join('')

axios.get(url, {

headers: {

'user-agent': userAgent(),

'Cookie': newCookie

}

})

.then(({ data }) => {

$ = cheerio.load(data)

ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)

meta = ttdata.props.pageProps.itemInfo.itemStruct

resolve({

status: true,

message: success,

result: {

description: meta.desc,

duration: meta.video.duration,

resolution: meta.video.width + 'x' + meta.video.height,

jpeg_thumb: meta.video.originCover,

gif_thumb: meta.video.dynamicCover,

audio: meta.music.playUrl,

}

})

})

.catch((response) => {

reject({ status: false, message: response })

})

})

}
		const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        //BALANCEAMENTO DA MOEDA/DINHERO DO BOT
        	           if (isUser ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
	        
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
     
//VERIFICADO
const gp = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "PINGHIN GAY","groupName": "AKAME", "caption": `AKAME-BOT️`, 'jpegThumbnail': fs.readFileSync(`src/logo.jpeg`)}}}
const say1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": ucapanFakereply} } } 
const tescuk = ["0@s.whatsapp.net"]
const cdd = `AKAME`
const say2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`lib/logo.jpeg`), surface: 200, message: `⊳ Comando : ${p}${command}\n⊳${ucapanFakereply}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
//REGISTRO
        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        		   /*[--ANTI PALAVRÃO --]*/
 	   	if (isGroup && isPalavrão) { //ÍDEIA DO TIAGO
            if (palavra.includes(messagesC)) {
                if (!isGroupAdmins) {
                    try { 
                    akame.sendMessage(from, `SEM PALAVRÃO!! 😠!!`, text , {quoted : mek})                                    
                        setTimeout( () => {
 	                      akame.groupRemove(from, [sender])
 					   	}, 5000)
								setTimeout( () => {
								akame.updatePresence(from, Presence.composing)
								reply("1")
							}, 4000)
								setTimeout( () => {
								akame.updatePresence(from, Presence.composing)
								reply("2")
							}, 3000)
								setTimeout( () => {
								akame.updatePresence(from, Presence.composing)
								reply("3")
							}, 2000)
								setTimeout( () => {
								akame.updatePresence(from, Presence.composing)
								reply("4")
							}, 1000)
								setTimeout( () => {
								akame.updatePresence(from, Presence.composing)
								akame.sendMessage(from, `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`, text , {quoted : mek})           							
							}, 0)
                        } catch { akame.sendMessage(from, `InFelizmente, não sou um administrador, entt não posso te banir!!`, text , {quoted : mek}) }
                } else {
                    return reply(`VOCÊ PODE ${pushname} 😇`)
                }
            }
        }
             	                               
      //ANTI LINK
/*       if (messagesC.match('.com')){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('não posso banir adm 😭')
		if (isOwner) return reply('vou fingir que não vi 🙈') //BY BRUN
		if (isPrem) return reply('usuario premium não é banido 😎')
		akame.updatePresence(from, Presence.composing)
		if (messagesC.includes('#link')) return reply('#link')
		var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		setTimeout( () => {
		akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			akame.updatePresence(from, Presence.composing)
			
		}, 0)
	}
if (messagesC.match('http:')){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('não posso banir adm 😭')
		if (isOwner) return reply('vou fingir que não vi 🙈') //BY BRUN
		if (isPrem) return reply('usuario premium não é banido 😎')
		akame.updatePresence(from, Presence.composing)
		if (messagesC.includes('#link')) return reply('#link')
		var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		setTimeout( () => {
		akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			akame.updatePresence(from, Presence.composing)
		}, 0)
	}
if (messagesC.match('youtu.be')){
		if (!isGroup) return
	if (!isAntiLink) return
		if (isGroupAdmins) return reply('não posso banir adm 😭')
		if (isOwner) return reply('mandando link sayo?')
if (!isPrem)  return reply('usuario premium não é banido 😎')
		akame.updatePresence(from, Presence.composing)
		if (messagesC.includes('#link')) return reply('#link')
		var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		setTimeout( () => {
		akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			akame.updatePresence(from, Presence.composing)
			
		}, 0)
	}*/
         /* if (messagesC.match('chat.whatsapp.com')) {
		        if (!isGroup) return
		         	if (!isAntilink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic])
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	                    if (messagesC.match(`/https?:\/\/(www\.`)) {
		        if (!isGroup) return
		         	if (!isAntilink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	           if (messagesC.match('facebook.com/')) {
		        if (!isGroup) return
		         	if (!isAntilink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	         if (messagesC.match('instagram.com/')) {
		        if (!isGroup) return
		         	if (!isAntilink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	                  if (messagesC.match('://youtube.com/')) {
		        if (!isGroup) return
		         	if (!isAntilink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        setTimeout( () => {
		akame.groupRemove(from, [Kick]).catch((e) => {reply(`ERRO: ${e}`)}) 
		}, 3000)
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	                  if (messagesC.match('://t.me/')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		            var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        setTimeout( () => {
		akame.groupRemove(from, [Kick]).catch((e) => {reply(`ERRO: ${e}`)}) 
		}, 3000)
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	          if (messagesC.match('https://')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	             if (messagesC.match('http')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	             if (messagesC.match('.com')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	             if (messagesC.match('www.')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
 if (messagesC.match('wa.me')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	             if (messagesC.match('entre em meu grupo do whatsapp')) {
		        if (!isGroup) return
		         if (!isAntiLink) return
		        if (isGroupAdmins) return reply('porque você é administrador, o bot não vai banir você')
		        if (isOwner) return reply('porque você é meu criador não vou banir você')
		          console.log(color('[LINK DETECTADO]', 'cyan'), color(`BANINDO O INDIVIDO`, 'yellow'))     
		        akame.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		        
		        reply(`[❗] Link detectado ${sender.split('@')[0]} você será expulso do grupo`)
		        akame.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	
          if ((budy === `Bot`)){                                 
	          console.log(color('[AUTO RESPONDER]', 'cyan'), color('BOT', 'magenta'))       
		        setTimeout( () => {		        
		        }, 3000)
		        const F3 = fs.readFileSync('menu/falido.webp')
          akame.sendMessage(from, F3, sticker, {quoted: say1})
		        setTimeout( () => {		        
		        akame.updatePresence(from, Presence.composing)
		        reply(`Me deixaa`)	
		        }, 0)
	            }
	            
	            if (messagesC.match(`htt`)) {
	             if (messagesC.match('http'))
	             if (messagesC.match('entre em meu grupo do whatsapp'))
	             if (messagesC.match('instagram.com/'))
	             if (messagesC.match('www.'))
	              if (messagesC.match('https://'))
	                  if (messagesC.match('://youtube.com/'))
	               if (messagesC.match('://t.me/'))
	             if (messagesC.match('.com'))
	             if (messagesC.match('chat.whatsapp.com'))
	              if (messagesC.match('wa.me'))
	               if (!isAntiLink) return
	               if (isGroupAdmins) return reply(`porque você é administrador, o bot não vai banir você`)
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }	             */
	         if (messagesC.match('http')) {
	         console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return	               
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	         if (messagesC.match('entre em meu grupo do whatsapp')) {
	         console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	                if (messagesC.match('instagram.com/')) {
	                console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return	   
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	            if (messagesC.match('www.')) {
	            console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return	      
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	           if (messagesC.match('https://')) {
	           console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	                    if (messagesC.match('://youtube.com/')) {
	                    console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return	  
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	             if (messagesC.match('://t.me/')) {
	             console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	            if (messagesC.match('.com')) {
	            console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	             if (messagesC.match('chat.whatsapp.com')) {
	             console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	            if (messagesC.match('wa.me')) {
	            console.log(color('[LINK DETECTADO]', 'red'), color(``, 'yellow'))       
	               if (!isAntiLink) return
	               		         akame.groupSettingChange(from, GroupSettingChange.messageSend, true)		    
                reply(`LINK DE GRUPO DETECTADO\n\nLinks de grupos não são permitidos nesse grupo, você será expulso`)
                setTimeout(() =>{
                akame.groupRemove(from, [sender])
                }, 2000)
           setTimeout( () => {
		        akame.groupSettingChange(from, GroupSettingChange.messageSend, false)
		        }, 8000)
	            }
	            	const vcard2 = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
               if (messagesC.match(`${vcard2}`)) {
	            console.log(color('[VCARD DETECTADO]', 'red'), color(``, 'yellow'))       	           
                reply(`CONTATO DETECTADO`)
	            }
	            //************@AUTO RESPONDER**************@@//
 if ((budy === `gostosa`)){
  console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
				               if ((budy === `Gostosa`)){
				               console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `gostoso`)){
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
				               if ((budy === `Gostoso`)){
				               console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/tag.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `linda`)){
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/linda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Linda`)){
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/linda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Caralho`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/caralho.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `caralho`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/caralho.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `blz`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/blz.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Blz`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/blz.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Frefire`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `frefire`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Ff`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `ff`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/frefiro.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `pq`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/pq.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Pq`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/pq2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Porque`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/pq3.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `porque`)){          
                               console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/pq4.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `ara`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ara.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Ara`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ara.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `ARA`)){                    
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ara.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `cu`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Cu`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Aleatório`)){        
                                 console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `aleatório`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/cu.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }     
                    if ((budy === `@`)){
                      console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/@.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }                               
                    if ((budy === `bem vinda(o)`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bem vinda(o)`)){                   
                      console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bem vindo(a)`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bem vindo`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bem vinda`)){                   
                      console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `bem vindo`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `bem vinda`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/bv.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }     
                    if ((budy === `foda`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/foda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }     
                    if ((budy === `Foda`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/foda.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }                                                             
                    if ((budy === `gay`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/gay.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Gay`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/gay.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `xvideos`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/inocente.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Xvideos`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/inocente.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `to chorando`)){               
                           console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `To chorando`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `triste`)){               
                           console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Triste`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/falido.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `bot baiano`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bot baiano`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `baiano`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Baiano`)){                
                          console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/baiano.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bom dia`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                     reply(`Bom dia 🥱`)
                    const F3 = fs.readFileSync('menu/dia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `bom dia`)){            
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    reply(`Bom dia 🥱`)
                    const F3 = fs.readFileSync('menu/dia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `leticia`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/leticia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Leticia`)){               
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/leticia.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Ban`)){                    
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ban.webp')                 
                    const F4 = fs.readFileSync('menu/ban2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    }
                    if ((budy === `ban`)){                         
                     console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ban.webp')                 
                    const F4 = fs.readFileSync('menu/ban2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    }
                    if ((budy === `corno`)){                                        
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/corno1.webp')                 
                    const F4 = fs.readFileSync('menu/corno2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    }
                    if ((budy === `Corno`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/corno1.webp')                 
                    const F4 = fs.readFileSync('menu/corno2.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    }                    
                    if ((budy === `sayo`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/sayo.webp')
                    reply(`ele ta dormindo`)
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Sayo`)){            
                   console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/sayo.webp')
                    reply(`ele ta dormindo`)
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }                   
                    if ((budy === `Amor`)){                   
                       console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/amor.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `amor`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/amor.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `akame`)){             
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    reply(`ao deu dispor 😊`)         
                    const F3 = fs.readFileSync('menu/akame.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Akame`)){                   
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    reply(`ao deu dispor 😊`)         
                    const F3 = fs.readFileSync('menu/akame.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Bot`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    reply(`Que foi porra`)         
                    const F3 = fs.readFileSync('menu/porra.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `bot`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    reply(`Que foi porra`)         
                    const F3 = fs.readFileSync('menu/porra.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `safada`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/safada.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Safada`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/safada.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `yamete`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ya.webp')
                    const F2 = fs.readFileSync('som/ya.mp3')
                    reply(`yaaaaah`)         
                    akame.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Yamete`)){                   
                       console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/ya.webp')
                    const F2 = fs.readFileSync('som/ya.mp3')
                    reply(`yaaaaah`)         
                    akame.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `gozei`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Gozei`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Goza`)){                   
                       console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `goza`)){                
                          console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/goza.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Machista`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/machista.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `machista`)){            
                              console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/machista.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Análise`)){                 
                         console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/analize.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `análise`)){                
                          console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/analize.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Blz mas olha`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F = fs.readFileSync('menu/olha.webp')
                    const F2 = fs.readFileSync('menu/olha2.webp')
                    const F3 = fs.readFileSync('menu/olha3.webp')
                    const F4 = fs.readFileSync('menu/olha4.webp')
                    const F5 = fs.readFileSync('menu/olha5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: mek})
                    akame.sendMessage(from, F2, sticker, {quoted: mek})
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    akame.sendMessage(from, F5, sticker, {quoted: mek})
                    }
                    if ((budy === `blz mas olha`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F = fs.readFileSync('menu/olha.webp')
                    const F2 = fs.readFileSync('menu/olha2.webp')
                    const F3 = fs.readFileSync('menu/olha3.webp')
                    const F4 = fs.readFileSync('menu/olha4.webp')
                    const F5 = fs.readFileSync('menu/olha5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: mek})
                    akame.sendMessage(from, F2, sticker, {quoted: mek})
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    akame.sendMessage(from, F5, sticker, {quoted: mek})
                    }
                    if ((budy === `Grupo morto`)){             
                             console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                     const F = fs.readFileSync('menu/morto.webp')
                    const F2 = fs.readFileSync('menu/morto2.webp')
                    const F3 = fs.readFileSync('menu/morto3.webp')
                    const F4 = fs.readFileSync('menu/morto4.webp')
                    const F5 = fs.readFileSync('menu/morto5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: mek})
                    akame.sendMessage(from, F2, sticker, {quoted: mek})
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    akame.sendMessage(from, F5, sticker, {quoted: mek})
                    }
                    if ((budy === `grupo morto`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                     const F = fs.readFileSync('menu/morto.webp')
                    const F2 = fs.readFileSync('menu/morto2.webp')
                    const F3 = fs.readFileSync('menu/morto3.webp')
                    const F4 = fs.readFileSync('menu/morto4.webp')
                    const F5 = fs.readFileSync('menu/morto5.webp')
                    akame.sendMessage(from, F, sticker, {quoted: mek})
                    akame.sendMessage(from, F2, sticker, {quoted: mek})
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    akame.sendMessage(from, F4, sticker, {quoted: mek})
                    akame.sendMessage(from, F5, sticker, {quoted: mek})
                    }
                    if ((budy === `🤡`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/🤡.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Gb`)){                 
                         console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/gb.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                     if ((budy === `gb`)){                      
                     console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/gb.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `eita`)){           
                               console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/eita.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                     if ((budy === `Eita`)){                   
                        console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/eita.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                     if ((budy === `Bot falido`)){                  
                     console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    reply(`${pushname} Quero ver fazer melhor filho da puta`)     
                    const F3 = fs.readFileSync('menu/melhor.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                     if ((budy === `bot falido`)){                      
                     console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/melhor.webp')
                    reply(`${pushname} Quero ver fazer melhor filho da puta`)
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                     if ((budy === `gf`)){                    
                       console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/gf.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if ((budy === `Gf`)){                      
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                    const F3 = fs.readFileSync('menu/gf.webp')
                    akame.sendMessage(from, F3, sticker, {quoted: mek})
                    }
             if ((budy === "prefix")){
             console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
				    reply(`O meu prefix e ${p}`)
				    }
				    if ((budy === "Prefix")){
				    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
				    reply(`O meu prefix e ${p}`)
				    }
//PORCENTAGEM PARA O PROXIMO LVL        
						var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			//PATENTE
		const levelRole = getLevelingLevel(sender)
   var role = 'Bronze I🥉'
   	     if (levelRole <= 3) {
   	         role = 'Bronze  I🥉'
   	     } else if (levelRole <= 5) {
   	         role = 'Bronze II🥉'
   	     } else if (levelRole <= 7) {
   	         role = 'Bronze  III🥉'
   	     } else if (levelRole <= 8) {
   	         role = 'Bronze  IV🥉'
   	     } else if (levelRole <= 9) {
   	         role = 'Bronze  V🥉'
   	     } else if (levelRole <= 10) {
   	         role = 'Prata I🥈'
   	     } else if (levelRole <= 11) {
   	         role = 'Prata II🥈'
   	     } else if (levelRole <= 12) {
   	         role = 'Prata III🥈'
   	     } else if (levelRole <= 13) {
   	         role = 'Prata IV🥈'
   	     } else if (levelRole <= 14) {
   	         role = 'Prata V🥈'
   	     } else if (levelRole <= 14) {
   	         role = 'Ouro I🥇'
   	     } else if (levelRole <= 15) {
   	         role = 'Ouro II🥇'
   	     } else if (levelRole <= 16) {
   	         role = 'Ouro III🥇'
   	     } else if (levelRole <= 17) {
   	         role = 'Ouro IV🥇'
   	     } else if (levelRole <= 18) {
   	         role = 'Ouro V🥇'
   	     } else if (levelRole <= 19) {
   	         role = 'Campeão I🏆'
   	     } else if (levelRole <= 20) {
   	         role = 'Campeão II🏆'
   	     } else if (levelRole <= 21) {
   	         role = 'Campeão III🏆'
   	     } else if (levelRole <= 22) {
   	         role = 'Campeão IV🏆'
   	     } else if (levelRole <= 23) {
   	         role = 'Campeão V🏆'
   	     } else if (levelRole <= 24) {
   	         role = 'Diamante I 💎'   	         
   	     } else if (levelRole <= 25) {
   	         role = 'Diamante II 💎'    
   	     } else if (levelRole <= 26) {
   	         role = 'Diamante III 💎'   	     
   	     } else if (levelRole <= 27) {
   	         role = 'Diamante IV 💎️'   	         
   	     } else if (levelRole <= 28) {
   	         role = 'Diamante V 💎️'    
   	     } else if (levelRole <= 29) {
   	         role = 'Mestre I 🐂️'     
   	     } else if (levelRole <= 30) {
   	         role = 'Mestre II 🐂️'         
   	     } else if (levelRole <= 31) {
   	         role = 'Mestre III 🐂'   	         
   	     } else if (levelRole <= 32) {
   	         role = 'Mestre IV 🐂'    
   	     } else if (levelRole <= 33) {
   	         role = 'Mestre V 🐂'     
   	     } else if (levelRole <= 34) {
    	        role = 'Mítico I 🔮'            
    	    } else if (levelRole <= 31) {
   	         role = 'Mítico II 🔮'   	         
   	     } else if (levelRole <= 32) {
   	         role = 'Mítico III 🔮'    
   	     } else if (levelRole <= 33) {
   	         role = 'Mítico IV 🔮'     
   	     } else if (levelRole <= 34) {
    	        role = 'Mítico V 🔮'                   	    
   	    } else if (levelRole <= 35) {
    	        role = 'Lenda I ⚡'                
 	      } else if (levelRole <= 36) {
    	        role = 'Lenda II ⚡'                
        } else if (levelRole <= 37) {
    	        role = 'Lenda III ⚡'                
	       } else if (levelRole <= 38) {
    	        role = 'Lenda IV ⚡'                
        } else if (levelRole <= 39) {
    	        role = 'Lenda V ⚡'                
        } else if (levelRole <= 40) {
            role = 'Lendário 🔥'      
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
   	     }
   
			var premi = 'Comum 🏅'
			if (isPrem) {
			premi = '*PREMIUM*'
			} 
			if (!isOwner) {
 		premi = 'Criador ⚔️'
	  }
		    
		    var clã = 'Não esta em nenhum clã'		    
						if (isUzumaki) {
  				clã = '⚜️UZUMAKI🔱'
    	 	}     	 	
    			if (!isUchiha) {
   				clã = '🉐UCHIHA⚔️'
   				}   				
   					if (!isHyuga) {
   				clã = '🥋HYUGA🥋'
 		    }		    
		    //function leveling
            if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)            
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                try {
				ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)                 
                     bayarLimit(sender, 3)
                     const SS1 = fs.readFileSync('som/levelup.mp3')                   
                    yevel = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=genbotkey&img=${ppimg}&background=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&username=${encodeURI(pushname)}&level=${getLevelingLevel(sender)}&ranking=${getLevel} ~> ${getLevelingLevel(sender)}&currxp=${getLevelingXp(sender)}&xpneed=${requiredXp}`)
                    resul = `
╭◪ *「 🥳NÍVEL UP🥳 」* 
╰───────────────╮  
╭───────────────╯
├⊱❏ Nome : ${pushname}
├⊱❏ Número : ${sender.split("@")[0]}
├⊱❏ Xp : ${getLevelingXp(sender)}
├⊱❏ Patente :  ${role}
├⊱❏ Limit :  +3
├⊱❏ Nível : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰───────────────╯`
                     console.log(`ALGHEM UPO O NIVEL. 📌`)
                    akame.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
                    akame.sendMessage(from, yevel, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say1, caption: resul})
                }
            } catch (err) {
                console.error(err)
            }
        }
        
                //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return akame.sendMessage(from,`[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${p}compralimit* ou suba de nível...`, text,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say1})
                            akame.sendMessage(from, yag.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        akame.sendMessage(from, yag.limitcount(limitCounts), text, { quoted : say1})
                    }
				} 
							
		
			//funtion limitado
  const isLimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    akame.sendMessage(from, yag.limitend(pushname), text, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say1})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}

			const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "liveLocationMessage":{"caption":`${ucapanWaktu} ${pushname}\n⎇ ${command}`,"jpegThumbnail":fs.readFileSync('./akame.jpeg')
}}}
const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./akame.jpeg')
}}}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail":fs.readFileSync('./akame.jpeg')}, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
        const fakestatus = (teks) => {
            akame.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": `${ucapanWaktu} ${pushname}`,
                            "jpegThumbnail": fs.readFileSync('./akame.jpeg')
                        }
                    }
                }
            })
        } 
        const fstick = {
key: {
		participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "556181496039-1613049930@g.us" } : {}) 
                },
	 message: { 
					stickerMessage: {
			            url: "https://mmg.whatsapp.net/d/f/AsdWLvhs6HzTVXnUPeKx0HwaOu2fMULBOoWvcwSq7UFZ.enc", 
			            fileSha256: "rJo+aytbZuO3eBdqZv2LM0tNekFkS4xOJ32oWPuDANw=", 
                        fileEncSha256: "IuQDHy80VnTps8Z4SOVp29R7mM5MTZl+yMxbyjCAOPk=",
                        mediaKey: "o8nUNtr7Rt3xorRBkaoUXIG02FXYmpcfODamOO9LU/g=",
						mimetype: "image/webp",
						 height: 64,
						width: 64,
						directPath: "/v/t62.15575-24/13168186_543387126706005_212227891975731600_n.enc?ccb=11-4&oh=681a42dace0258a67544f4df45524b24&oe=60F422D8",
fileLength: "20236",
mediaKeyTimestamp: "1624176146"
					}
				}
			}
        const faketroli = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 1,

status: 200, 

surface: 200,

message: `${ucapanWaktu} ${pushname}\n⎇ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./akame.jpeg'),

sellerJid: '0@s.whatsapp.net'

}

}

}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
"caption": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
'jpegThumbnail': fs.readFileSync('./akame.jpeg')
		}
	}
}

        const fakethumb = (teks, yes) => {
            akame.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./fake.jpeg'),quoted:say1,caption:yes})
        }
        const fakegroup = (teks) => {
            akame.sendMessage(from, teks, text, {
                quoted: {
                    "key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `${ucapanWaktu} ${pushname}`, 
"caption": `${ucapanWaktu} ${pushname}`, 
'jpegThumbnail': fs.readFileSync('./akame.jpeg')
		}
	}
}
})
        } 
        const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '${ucapanWaktu} ${pushname}', 
                    jpegThumbnail: fs.readFileSync('./akame.jpeg')
                          }
                        }
                      }
        const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "556181496039-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999",
                 "ptt": "true"
                        }
	                  } 
                     } 
        const fvideo = {
	 key: { 
	      participant: '6285284001309@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '99999', 
                 'caption': '${ucapanWaktu} ${pushname}',
                 'jpegThumbnail': fs.readFileSync('./akame.jpeg')
                        }
                       }
	                  }
        const ftoko = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./akame.jpeg`)
					},
					"title": `${ucapanWaktu} ${pushname}`,
					"description": "ngab",
					"currencyCode": "IDR",
					"priceAmount1000": "50.000",
					"retailerId": "Self Bot",
					"productImageCount": 0
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const hideTag = async function(from, text){
	let anu = await akame.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	akame.sendMessage(from, text, 'extendedTextMessage', {quoted: say1, contextInfo: {"mentionedJid": ane}})
}  
const sendMention = async(from, text, mentioned, quoted = "") => {
    akame.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
}
const hideTagStiker = async(from, buffer) => {
    let anu = await akame.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    akame.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
}
const kick = function(from, orangnya){
	for (let i of orangnya){
		akame.groupRemove(from, [i])
	}
}
const add = function(from, orangnya){
	akame.groupAdd(from, orangnya)
}
const sendKontak = (from, nomor, nama, org = "") => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	akame.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: say1})
}
const hideTagKontak = async(from, nomor, nama) => {
    vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
    let anu = await akame.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    akame.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
}
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
akame.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
akame.sendMessage(from, hasil, type, options).catch(e => {
akame.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
const sendFileFromStorage = (path, type, options) => {
akame.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Erro ao enviar a mídia_')
console.log(e)
})
}
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await akame.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
const fakeReply = (teks, target, teks2) => {
akame.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}
let authorname = akame.contacts[from] != undefined ? akame.contacts[from].vname || akame.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'akame'; if (!author) author = 'pro';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./stik/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
				})	
			}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        akame.sendMessage(to, media, MessageType.sticker,{quoted:say1})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            } 
            const sendPTT = (res) => {

akame.sendMessage(from, res, audio, {mimetype: 'audio/mp4', ptt: false, quoted:say1})

}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    akame.sendMessage(to, media, type, { quoted: say1, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	akame.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	akame.sendMessage(from, hasil, type, options).catch(e => {
	akame.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Erro ao baixar e enviar mídia_')
	  console.log(e)
	})
	})
	})
	})
	}

	const sendGif = (from, gif) => {
	akame.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}
//FUNCTION
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return

            addafk(mek.key.remoteJid)
      heheh = ms(Date.now() - waktuafk) 
      akame.sendMessage(mek.key.remoteJid,`*Mohon Maaf @${owner} Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{quoted:say1, contextInfo:{ mentionedJid: ['556181496039@s.whatsapp.net']}})//ubah nomor lu
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === '556181496039@s.whatsapp.net'){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktuafk)
            akame.sendMessage(mek.key.remoteJid,`*Mohon Maaf @${owner} Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{quoted:say1,contextInfo:{ mentionedJid: ['556181496039@s.whatsapp.net']}})
      }
        }
            }
          }
        }
      }
    }
let palavrasANA = [
				{
					original: 'NETFLIX',
					embaralhada: 'TFLIXNE',
					dica: 'APLICATIVO'
				},
				{
					original: 'YOUTUBE',
					embaralhada: 'TUBEYOU',
					dica: 'APLICATIVO'
				},
				{
					original: 'PORTUGAL',
					embaralhada: 'TUGALPOR',
					dica: 'PAÍS'
				},
				{
					original: 'PISTOLA',
					embaralhada: 'TOPISLA',
					dica: 'OBJETO'
				},
		
				{
					original: 'CAMARÃO',
					embaralhada: 'MARÃOCA',
					dica: 'COMIDA'
				},
				{
					original: 'HIDRANTE',
					embaralhada: 'TEHDIRAN',
					dica: 'OBJETO'
				},
				{
					original: 'FOGUETE',
					embaralhada: 'TEFOGUE',
					dica: 'OBJETO'
				},
				{
					original: 'SKATE',
					embaralhada: 'TEASK',
					dica: 'OBJETO'
				},
				{
					original: 'MACACO',
					embaralhada: 'CACOMA',
					dica: 'ANIMAL'
				},
				{
					original: 'LASANHA',
					embaralhada: 'NHASALA',
					dica: 'COMIDA'
				},
				{
					original: 'PASTEL',
					embaralhada: 'PATELS',
					dica: 'COMIDA'
				},
				{
					original: 'COXINHA',
					embaralhada: 'XICONHA',
					dica: 'COMIDA'
				},
				{
					original: 'BICICLETA',
					embaralhada: 'CIBITACLE',
					dica: 'OBJETO'
				},
				{
					original: 'SASUKE',
					embaralhada: 'ESASUK',
					dica: 'PERSONAGEM'
				},
				{
					original: 'CAVALO',
					embaralhada: 'LACAVO',
					dica: 'ANIMAL'
				},
				{
					original: 'LEVI',
					embaralhada: 'EVIL',
					dica: 'PERSONAGEM'
				},
				{
					original: 'KAMAITACHI',
					embaralhada: 'TAICAMAKHI',
					dica: 'CANTOR'
				},
				{
					original: 'LUBA',
					embaralhada: 'UBAL',
					dica: 'YOUTUBER'
				},
				{
					original: 'GRÊMIO',
					embaralhada: 'OMÊGRI',
					dica: 'TIME'
				},
				{
					original: 'SATURNO',
					embaralhada: 'UTARSON',
					dica: 'PLANETA'
				},
				{
					original: 'MIKASA',
					embaralhada: 'KAMISA',
					dica: 'PERSONAGEM'
				},
				{
					original: 'LEÃO',
					embaralhada: 'OLEÃ',
					dica: 'ANIMAL'
				},
				{
					original: 'SAKURA',
					embaralhada: 'SUKARA',
					dica: 'PERSONAGEM'
				},
				{
					original: 'HADES',
					embaralhada: 'SEDAH',
					dica: 'MITOLOGIA'
				},
				{
					original: 'CORRIDA',
					embaralhada: 'ARROCID',
					dica: 'ESPORTE'
				},
				{
					original: 'ODIN',
					embaralhada: 'NODI',
					dica: 'MITOLOGIA'
				},
				{
					original: 'BICICLETA',
					embaralhada: 'CIBITACLE',
					dica: 'OBJETO'
				},
				{
					original: 'BICICLETA',
					embaralhada: 'CIBITACLE',
					dica: 'OBJETO'
				},
				{
					original: 'GUATEMALA',
					embaralhada: 'LATEMAGUA',
					dica: 'PAÍS'
				},
				{
					original: 'CEREJA',
					embaralhada: 'ECREJA',
					dica: 'FRUTA'
				},
				{
					original: 'VENEZUELA',
					embaralhada: 'ZUNEEVELA',
					dica: 'PAÍS'
				},
				{
					original: 'HISTÓRIA',
					embaralhada: 'TÓRISIAH',
					dica: 'MATÉRIA'
				},
				{
					original: 'INSTAGRAM',
					embaralhada: 'TAGRAMINS',
					dica: 'APLICATIVO'
				},
				{
					original: 'WHATSAPP',
					embaralhada: 'TSWHAAPP',
					dica: 'APLICATIVO'
				},
				{
					original: 'HIDRANTE',
					embaralhada: 'TEHDIRAN',
					dica: 'OBJETO'
				},
				{
					original: 'CELULAR',
					embaralhada: 'CELARLU',
					dica: 'OBJETO'
				},
				{
					original: 'NOTEBOOK',
					embaralhada: 'TENOBOOK',
					dica: 'OBJETO'
				},
				{
					original: 'COMPUTADOR',
					embaralhada: 'PUCOMDORTA',
					dica: 'OBJETO'
				},
				{
					original: 'LANTERNA',
					embaralhada: 'TERLANNA',
					dica: 'OBJETO'
				},
				{
					original: 'CACHORRO',
					embaralhada: 'CAORROCHO',
					dica: 'ANIMAL'
				},
				{
					original: 'DESENTUPIDOR',
					embaralhada: 'SENDETUDORPI',
					dica: 'OBJETO'
				},
				{
					original: 'TOMATE',
					embaralhada: 'ATEMOT',
					dica: 'ALIMENTO'
				},
				{
					original: 'SAXOFONE',
					embaralhada: 'ASXOEOFN',
					dica: 'INSTRUMENTO MUSICAL'
				},
				{
					original: 'CAZAQUISTÃO',
					embaralhada: 'ZAACQIUSÃOT',
					dica: 'PAÍS'
				},
				{
					original: 'CROÁCIA',
					embaralhada: 'CRCÁOAI',
					dica: 'PAÍS'
				},
				{
					original: 'HUNGRIA',
					embaralhada: 'UHGINRA',
					dica: 'PAÍS'
				},
				{
					original: 'MEGAFONE',
					embaralhada: 'MOEFGNEA',
					dica: 'OBJETO'
				},
				{
					original: 'CINTURA',
					embaralhada: 'RCIANUT',
					dica: 'CORPO HUMANO'
				},
				{
					original: 'ABDÔMEN',
					embaralhada: 'MBÔDENA',
					dica: 'CORPO HUMANO'
				},
				{
				original: 'VAGNER',
				embaralhada: 'GNEVAR',
				dica: 'NOME'
				},
				{
					original: 'TANGERINA',
					embaralhada: 'RITAANGNE',
					dica: 'ALIMENTO'
				}
			]		
		//JOGO DO ANAGRAMA
			if(isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
			console.log(budy)
				let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
			 if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
		 xp = Math.floor(Math.random() * 14) + 3000
		 dinhero = Math.floor(Math.random() * 10) + 500
		if(budy.toUpperCase() == dataAnagrama.original) { akame.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./src/anagrama-${from}.json`)		
		addLevelingXp(sender, xp)
	 addKoinUser(sender, dinhero)
	 recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp* e ${dinhero} em *dinhero*`
	 reply(recompensa)
		setTimeout(async() => {
		fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
			let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
			akame.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
		`, MessageType.text) 
		}, 5000)
			}}
//MSG NO CONSOLE/DETECTOR
akame.chatRead(from)
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'tamanho :', color(args.length))
      //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'em', color(groupName), 'tamanho :', color(args.length))
      //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && !isOwner && banChats === true) return 
//Troli detect
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
//if (antitroli === false) return
//reply('Sem troli 👍\n\n' + require('util').format(m.key))

//await akame.modifyChat(m.chat, 'delete', {

// includeStarred: false

//})

}

 /* if (!isMessageType.image) {
  	console.log('[', color('DOCUMENTO'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
   reply(`ta on`)             
   }                       */
   
if (m.message && m.isBaileys && m.mtype === 'orderMessage' && !(m.token && m.orderId)) {

reply('Mensagem de pedido \n\n' + require('util').format(m.key))

}
		if (budy.startsWith('>')){
		if(!isOwner) return
	console.log('[', color('EVAL', 'silver'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!q && !isOwner) return reply('somente meu criador')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
//
switch (command) {
//P
case 'public':
          	if (!mek.key.fromMe) return
          	if (banChats === false) return
          	uptime = process.uptime()
          	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 publico 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('./akame.jpeg')}}}}
          	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	console.log(color('[PUBLICO]', 'green'), color('O MODO PUBLICO FOI ATIVADO AGORA TODOS PODE USAR OS CMD DO BOT', 'magenta'))
          	akame.sendMessage(from, `「 *MODO-PUBLICO* 」`, text,anu)
          	await limitAdd(sender)
break 
          case 'ig': case 'instagram':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))          
if (!q) return reply('[❗] CADÊ O LINK ?')
reply(yag.wait())
ig.fetchPost(`${q}`).then(res => {
asu = res.links[0]
var { username,name, caption} = res
console.log(asu)
sendMediaURL (from,`${asu.url}`, `Nome do usuário : ${username}
Nome : ${name}
Caption : ${caption}`)
})
await limitAdd(sender)
break 
   case 'instaimg':
      if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))          
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    akame.sendMessage(from, insta, image, {quoted: say1})		
				    await limitAdd(sender)
break  
				case 'instavid':
				   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))          
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    akame.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: say1})				    
				    await limitAdd(sender)
break  
				    
				case 'instastory':
				   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))          
				if (args.length < 1) return reply('cade o nome??')			
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Envio:* ${story.uploaded}\n• *Termina:* ${story.expired}\n• *Tamanho: ${story.filesize}\n• *Tipo:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())			
				await limitAdd(sender)
break
case 'igstalk':
            if (!isUser) return reply(yag.rg(p))
            if (isBanned) return reply(yag.ban())
            if (!q) return reply('Onde está o nome do usuário?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Nome do usuário* : ${args.join('')}\n*Nome completo* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Seguidores* : ${Y.followers}\n*Seguindo* : ${Y.following}\n*Privado* : ${Y.is_private}\n*Verificado* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            await limitAdd(sender)
break
case 'tiktokstalk':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
  if (isLimit(sender)) return reply(yag.limitend(pusname))
					try {
						if (args.length < 1) return reply('Onde está o nome do usuário?')
						let { user, stats } = await tik.getUserProfileInfo(args[0])
						reply(yag.wait())
						teks = `*ID* : ${user.id}\n*Nome do usuário* : ${user.uniqueId}\n*Apelido* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Postagens* : ${stats.videoCount}\n*corações* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						akame.sendMessage(from, buffer, image, {quoted: say1, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nome de usuário Inválido')
					}
					await limitAdd(sender)
break
case 'ghstalk': case 'githubstalk':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
try {
if (!q) return reply('Onde está o nome do usuário?')
await fetchJson(`https://api.github.com/users/${args.join(' ')}`).then(Y => {
            console.log(`githubStalker`)
           var ten = `${Y.avatar_url}`
           var teks = `*Nome do usuário* : ${Y.name}\n*Blog* : ${Y.blog}\n*Localização* : ${Y.location}\n*Email* : ${Y.email}\n*Bio* : ${Y.bio}\n*Seguidores* : ${Y.followers}\n*Seguindo* : ${Y.following}\n*Repositórios-Públicos* : ${Y.public_repos}\n*Gits Públicas* : ${Y.public_gists}\n\n*Link* : ${Y.html_url}`
            sendMediaURL(from,ten,teks) 
            }) 
} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nome de usuário Inválido')
					}
					await limitAdd(sender)
break
            case 'facebook':
case 'fb':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」

• *Título:* ${a.judul}
• *Fonte :* ${a.source}
• *Tamanho :* ${a.size}
• *Qualidade :* ${a.quality}
• *Modelo :* ${a.type}
• *Nome do arquivo :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: say1})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: say1})
await limitAdd(sender)
break
             case 'texpro':        
               if (!isUser) return reply(yag.rg(p))
               if (isBanned) return reply(yag.ban())
               try {
        data = await textpro(args.join(' ').split('|')[0], args.join(' ').split('|')[1])
        ranp = getRandom('.png')
        exec(`wget ${data} -O ${ranp}`, (err) => {
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						akame.sendMessage(from, buffer, image, { quoted: say1 })
						fs.unlinkSync(ranp)
					})
					} catch (err) {
					reply(`${err}`)
					}
					await limitAdd(sender)
break
case 'smoky':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pSmoky(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break					
case 'naruto':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
		case 'semi':
		   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
		case 'ouro':
		   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pOuro(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
		case 'fogo':
		   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pFogo(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'shadow':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'romantic':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'smoke':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'burnpaper':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'lovemsg':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'grass':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'doubleheart':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'coffecup':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'lovetext':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'butterfly':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply('onde está o texto?')
pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break 
		case 'image':
case 'gimage':
case 'googleimage':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: say1, caption: `*Resultados da pesquisa de : * ${teks}`, thumbnail: fs.readFileSync('./akame.jpeg')})
}
}
await limitAdd(sender)
break
case 'phubkomen':
   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\nExemplo ${p + command} akame|yamette`)
				reply(yag.wait())
				ct = body.slice(10)
				teks1 = ct.split("|")[0];
                teks2 = ct.split("|")[1];
				anu = await fetchJson(`https://api.zeks.xyz/api/phub?apikey=sayozeksakame&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${teks1}&msg=${teks2}`)
				teted = await getBuffer(anu.result.url)
				akame.sendMessage(from, teted, image, { quoted: say1, caption: 'Nih kack' })
				await limitAdd(sender)
break
		case 'self':
		case 'privado':
		  if (!isUser) return reply(yag.rg(p))
    if (isBanned) return reply(yag.ban())
          	if (!mek.key.fromMe) return
          	if (banChats === true) return
          	uptime = process.uptime()
          	console.log(color('[PRIVADO]', 'red'), color('MODO PRIVADO FOI ATIVADO AGORA SO VOCÊ PODE USAR OS CMD', 'magenta'))
         	 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 privado 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('./akame.jpeg')}}}}
         	banChats = true
          	akame.sendMessage(from, `「 *MODO-PRIVADO* 」`, text,anu)
          	await limitAdd(sender)
break
          	case 'limparchat':
					case 'clearall':
					case 'limpar':
					case 'limpa':
									if (!isOwner) return reply(mess.only.criador)
					anu = await akame.chats.all()
					akame.setMaxListeners(25)
					for (let _ of anu) {
						akame.deleteChat(_.jid)
					}
					reply(`[❗] CHATS LIMPO`)
				await limitAdd(sender)
break
          	case 'block':   
          						if (!isOwner) return reply(mess.only.criador)
          	  if (!isUser) return reply(yag.rg(p))
             if (isBanned) return reply(yag.ban())
					bnnd = body.slice(8)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`O número wa.me/${bnnd} foi banido do bot !`)
					await limitAdd(sender)
break
				case 'unblock':			
									if (!isOwner) return reply(mess.only.criador)
				  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
					bnnd = body.slice(10)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`O número wa.me/${bnnd} foi desbanido do bot!`)
					await limitAdd(sender)
break
	//premium ._.
		case 'premlist':
		case 'listapremium':
			case 'listaprem':
				  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
					akame.updatePresence(from, Presence.composing) 
					teks = `╭─「 *NÚMERO DOS USUÁRIOS PREMIUM* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Total : ${premium.length}\n╰──────「 *AKAME* 」`
					akame.sendMessage(from, teks.trim(), extendedText, {quoted: say1, contextInfo: {"mentionedJid": premium}})
					await limitAdd(sender)
break					

case 'loja':            				
				try {						
			if (!isUser) return reply(yag.rg(p))       
		  if (isBanned) return reply(yag.ban())   
		  	if (isLimit(sender)) return reply(yag.limitend(pusname))
				ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg' //ARRUMADO
			}
	 		const dinhero = checkATMuser(sender)
				const loja = 
`
╭─「 LOJA 」
│ *${p}buyplay*
│libera o ${p}play e o ${p}playvideo
│VALOR : 50.000 💰
├────────────────
│ *${p}buyprem*
│libera o recurso premium 
│VALOR : 100.000 💰
╰────────────────
`
    //             let buff = await getBuffer(`https://api-gdr2.herokuapp.com/api/leave?titulo=LOJA&nome=${encodeURI(pushname)}&perfil=${ppimg}&fundo=${imglu}&grupo=DINHERO: ${uangkau}&numero=${user.length}&membroConta=999`)
   //            let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                		exec(`magick './src/wel.jpg' -gravity west -fill '#FF0000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushname}' -pointsize 35 -annotate +460+83 'LOJA' -pointsize 50 -annotate +460+200 'DINHERO: ${dinhero}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			akame.sendMessage(from, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${loja}`, contextInfo: { forwardingScore: 508, isForwarded: true}})
			})
break
//AINDA ESTÁ EM TEST
case 'clãns':            				
				try {						
			if (!isUser) return reply(yag.rg(p))       
		  if (isBanned) return reply(yag.ban())   
		  	if (isLimit(sender)) return reply(yag.limitend(pusname))
				ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg' //ARRUMADO
			}
	 		const dinhero2 = checkATMuser(sender)
				const clãns = 
`
╭─「 🥷🏻TABELA⚔️ 」
│ *${p}hyuga*
│ *clãn hyuga*
│PARA ENTRAR DIGITE ${p}rghyuga
│PREÇO DA TAXA :  : 150.000 💰
├────────────────
│ *${p}uzumaki*
│ *clãn uzumaki*
│PARA ENTRAR DIGITE ${p}rguzumaki
│PREÇO DA TAXA :  : 150.000 💰
├───────────────
│ *${p}uchiha*
│ *clãn uzumaki*
│PARA ENTRAR DIGITE ${p}rguzumaki
│PREÇO DA TAXA :  : 150.000 💰
╰────────────────
`
    //             let buff = await getBuffer(`https://api-gdr2.herokuapp.com/api/leave?titulo=LOJA&nome=${encodeURI(pushname)}&perfil=${ppimg}&fundo=${imglu}&grupo=DINHERO: ${uangkau}&numero=${user.length}&membroConta=999`)
   //            let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                		exec(`magick './src/wel.jpg' -gravity west -fill '#FF0000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushname}' -pointsize 35 -annotate +460+83 'TABELA' -pointsize 50 -annotate +460+200 'DINHERO: ${dinhero2}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			akame.sendMessage(from, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${clãns}`, contextInfo: { forwardingScore: 508, isForwarded: true}})
			})
break
					 case 'blocklist':
					 case 'listablock':
					 	  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
				teks = 'Lista das pessoas que eu estou  ignorando :\n'
				for (let block of ban) {
				teks += `~> @${block.split('@')[0]}\n`
				}
				teks += `Total : ${ban.length}`
				akame.sendMessage(from, teks.trim(), extendedText, {quoted: say1, contextInfo: {"mentionedJid": ban}})
				await limitAdd(sender)
break
            				case 'transfer':
             			case 'transferir':
			          	  if (!isUser) return reply(yag.rg(p))
                if (isBanned) return reply(yag.ban())
            				if (!q.includes('/')) return  reply(`[❗] Use assim : ${p}transferir @/2500`)
                const tujuan = q.substring(0, q.indexOf('/') - 1)
                const jumblah = q.substring(q.lastIndexOf('/') + 1)
                if(isNaN(jumblah)) return await reply('[❗] PRECISA SER UM NÚMERO')
                if (jumblah < 100 ) return reply(`transfrência mínima e de 100 reais`)
                if (checkATMuser(sender) < jumblah) return reply(`[❗] você não tem dinheiro suficiente para fazer uma transferência, você precisa ter no minímo 100 de dinhero`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.010 *  jumblah //IMPOSTO CADA 1 DE DINHERO, ALMENTA E CAI NA SUA CONTA, TODA VEZ QUÊ ALGHEM FASER TRANSFERENCIA
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('556181496039@s.whatsapp.net', fee)
                reply(`💱TRANSFERÊNCIA💱\n\n✙◗🤵🏻‍♂transferidor🤵🏻‍♂: wa.me/${sender.split("@")[0]}\n✙◗recebidor : +${tujuan}\n✙◗valor da transferência : ${jumblah}🤑\n✙◗imposto : ${fee}`)
                await limitAdd(sender)
break
case 'buylimit':				
				case 'compralimit':				
				case 'comprarlimit':
				if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
				payout = body.slice(10)
				if (args.length < 1) return reply(`[❗] Coloque a quantidade, exemplo : ${p}buylimit 50`)
				if(isNaN(payout)) return await reply('[❗] O limite deve ser um número!!')
				const koinPerlimit = 300
				const total2 = koinPerlimit * payout
				if ( checkATMuser(sender) <= total2) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do limit : 300`)
				if ( checkATMuser(sender) >= total2 ) {
					confirmATM(sender, total2)
					bayarLimit(sender, payout)
					await reply(`🛍️COMPRA BEM SUCEDIDA 🛒\n\n*vendedor* : akame\n*comprador* : ${pushname}\n*quantidade da compra* : ${payout}🤑\n*preço do limit* : ${koinPerlimit}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\ncompra bem sucedida com o id : \n💳: ${createSerial(15)}`)
				} 
				break
/*				case 'buyxp':
				if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
				const xp = 50000
				const preço = 0
				const totalxp = preço * xp
				if ( checkATMuser(sender) <= totalxp) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do xp : 300`)
				if ( checkATMuser(sender) >= totalxp ) {
					confirmATM(sender, totalxp)
					addLevelingXp(sender, xp)
					await reply(`🛍️COMPRA BEM SUCEDIDA 🛒\n\n*vendedor* : akame\n*comprador* : ${pushname}\n*quantidade da compra* : ${xp}🤑\n*preço do xp* : ${preço}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\ncompra bem sucedida com o id : \n💳: ${createSerial(15)}`)
				} 
				break*/
				case 'buyprem':						
				if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())      
    payout2 = 1
				const koinPerlimit2 = 100000
				const total3 = koinPerlimit2 * payout2
				if ( checkATMuser(sender) <= total3) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : 100000 mil`)
				if ( checkATMuser(sender) >= total3) {
					confirmATM(sender, total3)
							premium.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					await reply(`🛍️COMPRA BEM SUCEDIDA 🛒\n\n*vendedor* : akame\n*comprador* : ${pushname}\n*preço do premiun* : ${koinPerlimit2}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\ncompra bem sucedida com o id : \n💳: ${createSerial(15)}`)				
					}
				break
				case 'buyplay':						
				if (!isUser) return reply(yag.rg(p))
   if (isBanned) return reply(yag.ban())      
    payout3 = 1 //NÃO TROQUE ESSE NMR
				const koinPerlimit3 = 50000 //QUANTIDADE DO PLAY
				const total4 = koinPerlimit3 * payout3
				if ( checkATMuser(sender) <= total4) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do play : 50000 mil`)
				if ( checkATMuser(sender) >= total4) {
					confirmATM(sender, total4)
					compraplay.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/compraplay.json', JSON.stringify(compraplay))
					await reply(`🛍️COMPRA BEM SUCEDIDA 🛒\n\n*vendedor* : akame\n*comprador* : ${pushname}\n*preço do play* : ${koinPerlimit3}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\ncompra bem sucedida com o id : \n💳: ${createSerial(15)}`)				
					}
				break	
								   
				case 'darlimit': 				
		        	if (!isOwner) return reply(mess.only.criador)
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`Precisa dar no minímo 1 limit`)
                if (isNaN(jmla)) return reply(`[❗] USE ASSIM\n ${p}darlimit @556181496039 5`)
                if (!nomerr) return reply(`[❗] USE ASSIM\n ${p}darlimit @556181496039 5`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `[❗] SUCESSO AO ADICIONAR LIMIT NO ID : 💳${createSerial(8)}\nhorário ${moment().format('DD/MM/YY HH:mm:ss')}\n
*「 🎁DOAÇÃO BEM SUCEDIDA🎁 」*

• Usúario : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`[❗] Desculpe ${pushname},  este  ${nomerr} número não está registrado no bot...`)
                        }
                break            	                             
		  		case 'dompet':          
      case 'dinhero':          
      case 'dinheiro':       
	     case 'meudinhero':
	  	  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
				const uangkau = checkATMuser(sender)
				sayo = `*┏⊱ 「 🤑DINHERO🤑 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${uangkau}\n┗━━━━━━━━━━`
				reply(sayo)
				await limitAdd(sender)
break
				case 'limit':		
 				case 'meulimit':					  
 				if (!isUser) return reply(yag.rg(p))
 				checkLimit(sender)
break 
							case 'adicionarprem':
						case 'addprem':
				     if (!isUser) return reply(yag.rg(p))
					if (!isOwner) return reply(mess.only.criador)
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					reply(`Adicionado com sucesso o ${addp} na lista premium`)
					await limitAdd(sender)
break
	              					case 'addpalavra':
                    if (!isUser) return reply(yag.rg(p))
               					if (!isOwner) return reply(mess.only.criador)                    
                    if (args.length < 1) return reply( `Use assim : ${p + command} [palavrão]. exemplo ${p + command} puta`)
                    const bw = body.slice(12)
                    palavra.push(bw)
                    fs.writeFileSync('./database/palavras.json', JSON.stringify(palavra))
                    reply('Palavrão adicionado com sucesso!')
                    await limitAdd(sender)
break
                      case 'delpalavra':
                    if (!isUser) return reply(yag.rg(p))
               					if (!isOwner) return reply(mess.only.criador)        
                    if (args.length < 1) return reply( `Use assim : ${p + command} [palavrão]. exemplo ${p + command} puta`)
                    let dbw = body.slice(12)
                    palavra.splice(dbw)
                    fs.writeFileSync('./database/palavras.json', JSON.stringify(palavra))
                    reply('Palavra removida da lista com sucesso!')
                    await limitAdd(sender)
break 
                     case 'listapalavrão':
                    let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
                    for (let i of palavra) {
                        lbw += `➸ ${i.replace(palavra)}\n`
                    }
                    await reply(lbw)
                    await limitAdd(sender)
break 
				case 'tirarprem':
				case 'delprem':
			     if (!isUser) return reply(yag.rg(p))
					if (sender.split("@")[0] != isOwner) return reply("Comando apenas para o meu criador")
					oh = body.slice(11)
					delp = premium.indexOf(oh)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					reply(`Excluído com sucesso o ${oh} Da Lista Premium`)
					await limitAdd(sender)
break					
            case 'nano':
              if (!isUser) return reply(yag.rg(p))
              if (isBanned) return reply(yag.ban())
             if (!q) return reply('como você é burro')
             anu = fs.readFileSync(`${q}`)
             reply(String(anu))
             await limitAdd(sender)
break 
			case 'addvideo':
			  if (!isUser) return reply(yag.rg(p))
     if (isBanned) return reply(yag.ban())
				if (!q) return reply('Qual é o nome do video?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await akame.downloadMediaMessage(boij)
				videonye.push(`${q}`)
				fs.writeFileSync(`./lib/media/video/${q}.mp4`, delb)
				fs.writeFileSync('./lib/media/video.json', JSON.stringify(videonye))
				akame.sendMessage(from, `Vídeo Adicionando com Sucesso\nPara ver. a lista dos vídeos use : ${p}listvideo`, MessageType.text, { quoted: say1 })
				await limitAdd(sender)
break
			case 'getvideo':
			   if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
				if(!q) return reply('qual é o nome do video?')
				buffer = fs.readFileSync(`./lib/media/video/${q}.mp4`)
				akame.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: say1 })
				await limitAdd(sender)
break
           case 'addvn':
              if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isQuotedAudio) return reply('Marque o aúdio')
				if (!q) return reply('Qual é o nome do audio?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await akame.downloadMediaMessage(boij)
				audionye.push(`${q}`)
				fs.writeFileSync(`./lib/media/audio/${q}.mp3`, delb)
				fs.writeFileSync('./lib/media/audio.json', JSON.stringify(audionye))
				akame.sendMessage(from, `Aúdio Adicionando com Sucesso  Vn\nPara ver a lista dos aúdios use : ${p}listvn`, MessageType.text, { quoted: say1 })
				await limitAdd(sender)
break 
		    case 'hidetag':
		       if (!isUser) return reply(yag.rg(p))
  if (isBanned) return reply(yag.ban())
  if (isLimit(sender)) return reply(yag.limitend(pusname))
				try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
				} catch {
hideTag(from, `${q}`)
				  }
				    await limitAdd(sender)
break
				    // ******** NOME DO GRUPO  *********
if (isGroup && isBotGroupAdmins) {
  setTimeout( (async) => {
 akame.groupUpdateSubject("556181496039-1626318524@g.us", `DIA ${date} ${time}`)
  },200)
}

           case 'getvn':
             if (!isUser) return reply(yag.rg(p))
             if (isBanned) return reply(yag.ban())
                if(!q) return reply('nama vnnya apa?')
				buffer = fs.readFileSync(`./lib/media/audio/${q}.mp3`)
				akame.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: say1, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                await limitAdd(sender)
break 
                case 'stiker':
	case 'sticker':
    case 's':
    case 'stickergif':
    case 'stikergif':
      if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
            var a = `akame`
            var b = `bot`
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await akame.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            akame.sendMessage(from, 'Há um erro', 'conversação', { quoted: say1 })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            akame.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: say1 })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await akame.downloadAndSaveMediaMessage(encmedia)
            var a = `self`
            var b = `akame`
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            akame.sendMessage(from, 'Há um erro', 'conversação', { quoted: say1 })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            akame.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: say1 })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Envie uma foto ou vídeo/gif, com a legenda scrito ${p + command}\nA duração do video precisa ter no maximo 1 a 10 segundos`)
            }
            await limitAdd(sender)
break 
            case '':     
            if (!isAutofigurinha) return
            var a = `akame`
            var b = `bot`
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await akame.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)            
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            akame.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: say1 })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await akame.downloadAndSaveMediaMessage(encmedia)
            var a = `self`
            var b = `akame`
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            akame.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: say1 })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            console.log(color('[AUTO FIGURINHA]', 'cyan'), color(`ONLINE`, 'magenta'))       
            }
            await limitAdd(sender)
break 
            case 'owner':
            case 'criador':
            case 'dono':
              if (!isUser) return reply(yag.rg(p))
              if (isBanned) return reply(yag.ban())
             let ini_list = []
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
const vname = akame.contacts[i] != undefined ? akame.contacts[i].vname || akame.contacts[i].notify : undefined
  ini_list.push({
            "displayName": 'p',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  hehe = await akame.sendMessage(from, {
        "displayName": `${ini_list.length} kontak`,
        "contacts": ini_list 
        }, 'contactsArrayMessage', { quoted: say1 })
        akame.sendMessage(from,'Esse e meu criador ><',text,{quoted: hehe})
        await limitAdd(sender)
break 
        case 'q':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
    if (!m.quoted) return reply('Marque alguma mensagem')
    let rii = akame.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return reply('a mensagem que você respondeu não contém uma resposta!')
    console.log(m) 
    await rii.quoted.copyNForward(m.chat, true)
    await limitAdd(sender)
break
           case 'getsticker':
			case 'gets':
        			if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				var itsme = `${numbernye}@s.whatsapp.net`
	            if(!q) return reply('Qual é o nome da figurinha?')
				result = fs.readFileSync(`./lib/media/sticker/${q}.webp`)
				akame.sendMessage(from, result, sticker, {quoted: say1, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				await limitAdd(sender)
break 
           case 'addsticker':
           if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isQuotedSticker) return reply('Marque a figurinha')
				if (!q) return reply('Qual é o nome da figurinha?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await akame.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./lib/media/sticker/${q}.webp`, delb)
				fs.writeFileSync('./lib/media/stick.json', JSON.stringify(setiker))
				akame.sendMessage(from, `Figurinha Adicionada com Sucesso \nPara ver a lista das figurinhas use ${p}liststicker`, MessageType.text, { quoted: say1 })
				await limitAdd(sender)
break
case 'tovideo': case 'tovid':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await akame.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
akame.sendMessage(from, mp4, video, {mimetype: 'video/mp4',duration:99999999, quoted: say1, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
await limitAdd(sender)
break
case 'buggc':
case 'buggp':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
await akame.toggleDisappearingMessages(from)
reply("AKAME 🐦")
await limitAdd(sender)
break

case 'bug':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
					if (!isOwner) return reply(mess.only.criador)
					if (args.length < 1) return reply('Cadê?')
				 for (let i = 0; i < args[0]; i++) {
await akame.toggleDisappearingMessages(from, 0)
}
reply('Bug enviado com sucesso '+args.join(' '))
					await limitAdd(sender)
break
case 'komunis':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'thuglife':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/thuglife?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'drip':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`https://api-exteam.herokuapp.com/api/dripp?img=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'procurado':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`https://api-exteam.herokuapp.com/api/procurado?img=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
      case 'morto':
                           case 'morte':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/rip?img=${teks}`)
                        abc = await getBuffer(anu8)
                        akame.sendMessage(from, abc, image, {
                            quoted: say1
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    await limitAdd(sender)
break                              
case 'putin':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/putin?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'rip':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'hitler':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/hitler?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break

            case 'addimage':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isQuotedImage) return reply('Marque alguma imagem')
				if (!q) return reply('Qual é o nome da imagem??')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await akame.downloadMediaMessage(boij)
				gambarnye.push(`${q}`)
				fs.writeFileSync(`./lib/media/image/${q}.jpeg`, delb)
				fs.writeFileSync('./lib/media/image.json', JSON.stringify(gambarnye))
				akame.sendMessage(from, `Imagem Adicionanda com Sucesso \nPara ver a lista das imagens use ${p}listimage`, MessageType.text, { quoted: say1 })
				await limitAdd(sender)
break
			case 'getimage':
			if (!isUser) return reply(yag.rg(p))
    if (isBanned) return reply(yag.ban())
			    if (!q) return reply(`nama imagenya apa?`)
				buffer = fs.readFileSync(`./lib/media/image/${q}.jpeg`)
				akame.sendMessage(from, buffer, image, { quoted: say1, caption: `Resultado do banco de dados : ${q}.jpeg` })
				await limitAdd(sender)
break 
				case 'ytmp4':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
	 		if (args.length < 1) return reply('Cadê o link?')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvtext)});
    		} catch {
        	return await akame.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		await reply(yag.wait())
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `*「 VÍDEOS DO YOUTUBE 」*\n\n❏ *Título* : ${aramav.title}\n❏ *De* : ${aramav.author.name}\n\n◩ *akame-bot*`	
        	await akame.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: say1, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			await limitAdd(sender)
break 
			case 'ytmp3':
			if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (args.length === 0) return reply(`Use assim :  *${p + command} [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesizeF) >= 30000) return sendMediaURL(from, thumb, `*Dados obtidos com sucesso!*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para tamanhos superiores a 30 MB, é apresentado na forma de um link_`)
				 captions = `*「 YOUTUBE MP3 」*\n\n*Titulo* : ${title}\n*Ext* : mp3\n*Tamanho* : ${filesizeF}\n\n_Enviando o áudio..._`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				await limitAdd(sender)
break
case 'mp3':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await y2mateA(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp3* 」

• *Título:* ${res[0].judul}
• *Tamanho:* ${res[0].size}
• *Qualidade:* ${res[0].quality}kbps
• *Nome do arquivo:* ${res[0].output}
• *Modelo:* ${res[0].tipe}

_*Aguarde o processo do upload.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: say1}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: say1, mimetype: 'audio/mp3', filename: res[0].output})
})
await limitAdd(sender)
break
case 'mp4':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp4* 」

• *Título:* ${res[0].judul}
• *Tamanho:* ${res[1].size}
• *Qualidade:* ${res[2].quality}p
• *Nome do arquivo:* ${res[0].output}
• *Modelo:* ${res[0].tipe}

_*Aguarde o processo do upload.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: say1}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: say1, mimetype: 'video/mp4', filename: res[0].output})
})
await limitAdd(sender)
break
			case 'playvid':  
        case 'playvideo':
        if (!isUser) return reply(yag.rg(p))       
           if (isBanned) return reply(yag.ban())            
           if (!isCompraplay) return reply(`Você não comprou esse item...\n dê ${p}loja para ver o preço`)
            if (args.length === 0) return reply(`Use assim : *${p + command}* _O título da música_`)            
           aramas = await yts(q);
            aramat = aramas.all 
            mulaikah = aramat[0].url                            
            console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
                        const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   await limitAdd(sender)
break 
                   case 'play':                   
                   if (!isUser) return reply(yag.rg(p))                      
           if (isBanned) return reply(yag.ban())
           if (!isCompraplay) return reply(`Você não comprou esse item...\n dê ${p}loja para ver o preço`)
			if (args.length === 0) return reply(`Use assim *${p + command}* _O título da música a ser pesquisada_`)
			reply(yag.wait())
    		aramas = await yts(q);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
   			console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
                        const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(err)
                        }
                   await limitAdd(sender)
break 
                   case 'imgtourl': case 'tourl':                   
                      if (!isPrem) return reply(yag.prem())
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  akame.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMAGEM PARA LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensão : ${data.image.extension}\n│\n│• LINK : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
akame.sendMessage(from, ibb, image, { quoted: say1, caption: caps })
})
.catch(err => {
throw err 
})
await limitAdd(sender)
break

case 'bemvindo':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isGroup) return reply(mess.only.group)				
				if (args.length < 1) return reply(`[❗] Use ativar para ativar e desativar para desativar, exemplo : ${p +command} 1`)
		  if (args[0] === 'ativar') {
				if (isWelkom) return reply(`[❗] O ${command} ja esta ativado...`)
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply('❬ 📍 ❭ Modo de boas vindas *ATIVADO*...')
				reply(`❬ ❗ ❭ Toda vez que alghem entrar no grupo eu vou enviar uma foto de boas vindas 😊`)
		 } else if (args[0] === 'desativar') {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply('❬ 📍 ❭ Modo de boas vindas *DESATIVADO*...')
				reply('🤐')
				} else {
				reply(`ativar/desativar`)
				}
				await limitAdd(sender)
break
			case 'toimg': 
			if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isQuotedSticker) return reply('❬ 📍 ❭ Marque alguma figurinha...')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await akame.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uploadimg(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await sendMediaURL(from, anjj.data.result, 'Pronto')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							reply(`gagal`)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							akame.sendMessage(from, buffer, image, { caption:mess.success,quoted: gp })
							fs.unlinkSync(ran)
						}
					})
				}
				await limitAdd(sender)
break  
				case 'sticktag':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            await limitAdd(sender)
break 
            case 'tourl2':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            	reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await akame.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('[❗] enviar/responder fotos/vídeos')
            }
            await limitAdd(sender)
break
            case 'togif':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await akame.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
akame.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: say1, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
await limitAdd(sender)
break 
/*case 'antitroli':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args[0] == '1') {

antitroli = true

reply(`[📌] ${command} ativado com sucesso`)

} else if (args[0] == '0') {

antitroli = false

reply(`[📌] ${command} desativado com sucesso`)

}

await limitAdd(sender)
break*/

case 'antidel':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args[0] == '1') {

antidel = true

reply(`[📌] ${command} ativado com sucesso`)

} else if (args[0] == '0') {

antidel = false

reply(`[📌] ${command} desativado com sucesso`)

}

await limitAdd(sender)
break
        	case 'antipalavrão':
                     if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
                if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${p + command} ativar`)
                if (args[0] === 'ativar') {
                if (isPalavrão) return reply('*Já esta ativado...*')
                 	   palavrão.push(from)
                 	   fs.writeFileSync('./database/palavrão.json', JSON.stringify(palavrão))
                  	   reply(`[❗] anti palavrão ativado`)
              	  } else if (args[0] === 'desativar') {
                  	  palavrão.splice(from, 1)
                 	   fs.writeFileSync('./database//palavrão.json', JSON.stringify(palavrão))
                 	    reply(`[❗] anti palavrão desativado...`)
             	   } else {
                 	   reply(`[❗]ativar/desativar, Exemplo ${p + command} ativar`)
                	}
                    await limitAdd(sender)
break
       case 'antilink':  
            if (!isUser) return reply(yag.rg(p))
     if (isBanned) return reply(yag.ban())
       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
      if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					if (args.length < 1) return reply('SELECIONE 1/0')					
					if (args[0] === 'ativar') {
					if (isGroup) {
 if (!isAntiLink) return akame.sendMessage(from, `O antilink já estava ativo!!`, MessageType.text, {quoted: mek})
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))					
					reply('*[❗] ATIVADO ANTILINK*')
					reply('*❗ATENÇÃO QUALQUER MEMBRO DO GRUPO QUÊ ENVIAR ALGUM TIPO DE LINK SERA BANIDO AUTOMATICAMENTE DO GRUPO⚠️*')
					 } else if (args[0] === 'desativar') {
					antilink.splice(from, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DESATIVADO ANTILINK*')
					} else {
					reply(`SELECIONE 1/0`)
					}
					}
					await limitAdd(sender)
break					 
/*			case 'antilink':
if (!isGroupAdmins) return reply(dpa.admin)
if (!isBotGroupAdmins) return reply(dpa.badmin)
 argzi = body.split(' ')
		if (argzi[1] == 'on') {
if (isGroup) {
if (isantilink) return akame.sendMessage(from, `O antilink já estava ativo!!`, MessageType.text, {quoted: mek})
antilink.push(from)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2))
akame.sendMessage(from, `O recurso foi ativo!`, MessageType.text, {quoted: mek})
}
if (!isGroup) return reply(dpa.group)
} else if (argzi[1] == 'off') {
if (isGroup) {
const index = antilink.indexOf(from)
antilink.splice(index, 1)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2))
akame.sendMessage(from, `Sucesso na desativação do Antilink em grupos`, MessageType.text, {quoted: mek})
}
}
await limitAdd(sender)
break*/
					case 'autofigurinha':
          if (!isUser) return reply(yag.rg(p))
     if (isBanned) return reply(yag.ban())       
      if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
 argzi = body.split(' ')
		if (argzi[1] == 'on') {
if (isGroup) {
if (isAutofigurinha) return akame.sendMessage(from, `O ${command} já estava ativo!!`, MessageType.text, {quoted: mek})
autofigurinha.push(from)
fs.writeFileSync('./src/autofigurinha.json', JSON.stringify(autofigurinha, null, 2))
akame.sendMessage(from, `O recurso foi ativado!`, MessageType.text, {quoted: mek})
}
if (!isGroup) return reply(mess.only.group)
} else if (argzi[1] == 'off') {
if (isGroup) {
const index = autofigurinha.indexOf(from)
autofigurinha.splice(index, 1)
fs.writeFileSync('./src/autofigurinha.json', JSON.stringify(autofigurinha, null, 2))
akame.sendMessage(from, `Sucesso na desativação do ${command} nesse grupo`, MessageType.text, {quoted: mek})
}
}
await limitAdd(sender)
break
    	case 'antifake':
     if (!isUser) return reply(yag.rg(p))
     if (isBanned) return reply(yag.ban())
       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     await limitAdd(sender)
break
case 'leveling':
                case 'farmlevel':
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${p + command} ativar`)
                if (args[0] === 'ativar') {
                if (isLevelingOn) return reply('*[❗] ja esta ativado amigo...*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                  	reply(`「 FARM 」 LEVELING ATIVADO ✅`)
              	  } else if (args[0] === 'desativar') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                 	    reply(`「 FARM 」 LEVELING DESATIVADO ✅`)
             	   } else {
                 	   reply(`[❗]ativar/desativar, Exemplo ${p + command} ativar`)
                	}
				await limitAdd(sender)
break 
				case 'level':
				case 'nivel':
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                try {
				ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg' //ARRUMADO
			}
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(`[❗] Você esta sem nivel`)
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
 //               yevel = await getBuffer(` https://api-gdr2.herokuapp.com/api/canvas/rank?avatar=${ppimg}&fotoFundo=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&xp=${userXp}&requerXp=${requiredXp}&nome=${encodeUrl(pushname)}&numero=1010&level=${userLevel}&rank=${userLevel}`)
                yevel = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=genbotkey&img=${ppimg}&background=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPFLzisE7v4QRm82Bg0OmuWRq1fTkB0bGbg&usqp=CAU&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${userLevel}&currxp=${userXp}&xpneed=${requiredXp}`)
                resul = `
□ *📈SEU NÍVEL📈*
┝ *Nome* : ${pushname}
┝ *Número* : ${sender.split("@")[0]}
┝ *XP* : ${userXp}/${requiredXp}
┝ *Nível* : ${userLevel}
┝ *Dinhero* : ${checkATMuser(sender)}
┝ *Patente* : ${role}
┝ *Clãn* : ${clã}
┝ *Porcentagem* : ${per}
┕`
                akame.sendMessage(from, yevel, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say1, caption: resul})
                .catch(async (e) => {
                console.error(e)
                await reply(`Error!\n${e}`)
                })
                await limitAdd(sender)
break           
                			case 'leaderboard':
				case 'lb':
				case 'rank':
	   if (!isUser) return reply(yag.rg(p))
    if (isBanned) return reply(yag.ban())
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				user.sort((a, b) => (a.name < b.name) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ 🏆 *RANK DE NÍVEL* 🏆 ]----\n\n'
                let leaderboarduang = '-----[ 🏆 *RANK DE DINHERO* 🏆 ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]*wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Nível*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Dinhero*: _${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`Precisa ter mais Usuários registrados`)
                }
				await limitAdd(sender)
break
                  case 'take':
                    case 'roubar':
                  if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
    		if (!isQuotedSticker) return reply('❬ 📍 ❭ Marque alguma figurinha...')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await akame.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, akame, mek, from)
			await limitAdd(sender)
break 
			case 'tiktok':
			if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Cadê o link?')
 		reply(mess.wait)
 		tiktokDown(`${args[0]}`)
         .then(res => {
    	console.log(res) 
    var fachri = res.result.nowatermark
    akame.sendMessage(from, buff, document,{mimetype:'video/mp4',filename:'AKAME-BOT', quoted:say1})
		}) 	
     		await limitAdd(sender)
break
		case 'help':
case 'menu':
case '?':
case 'ajuda':
case 'comandos':
			try {						
			if (!isUser) return reply(yag.rg(p))       
		  if (isBanned) return reply(yag.ban())   
		  	if (isLimit(sender)) return reply(yag.limitend(pusname))		   
				ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg' //ARRUMADO
			}
			            l = 1
			charge = charging ? 'true' : 'false'

listrik = charging ? '⚡' : 'ga di cas'

			uptime = process.uptime();
					 timestampe = speed();
					 latensie = speed() - timestampe 
					spek = await akame.user.phone
			me = '556181496039@s.whatsapp.net'
					sayo = `
┌┌────────────┈ ⳹
┌┤         ⏱️️DATA⏱️
││⦿ Hora : ${tampilJam}
││⦿ Dia : ${tampilHari}
││⦿ Ativo desde : ${runtime(process.uptime())}
│╰────────────┈ ⳹
└─────────────┈ ⳹

┌─❖*「 👨🏻USUÁRIO👨🏻 」*
│❦ Nome: ${pushname}
│❦ Número: wa.me/${senderr.split('@')[0]}
│❦ Nível: ${getLevelingLevel(sender)}
│❦ Dinhero: ${checkATMuser(sender)}
│❦ Xp: ${getLevelingXp(sender)}
│❦ Patente: ${role}
└─❖
   
*┌─❖ 「 👾BOT👾 」*
*│➫* Nome : ${akame.user.name}
*│➫* Versão : ${akame.browserDescription[2]}
*│➫* Velocidade : ${latensie.toFixed(4)}
*│➫* Bateria : ${JSON.stringify(baterai)}%
*│➫* Prefix : *${p}*
*│➫* *ATIVO A: ${runtime(process.uptime())}*
*├─────────────┈ ⳹*
*│➫* Total de comandos usados: ${totalhit}
*│➫* Total de comandos usados por dia: ${hit_today.length}
*└─❖*

┌─❖
│*「 ⚙️-❪SELF/PUBLIC❫-⚙️ 」*
└┬❖
    │ *「 privado e publico」*
┌┤✑  *>public*
││✑  *>self*
│└────────────┈ ⳹
│ *「🎴 FIGURINHA🎴 」*
│✙ ${l++}.•${p}sticker
│✙ ${l++}.•${p}roubar {autor|pacote}
│✙ ${l++}.•${p}figupet
│✙ ${l++}.•${p}figuwasted
│✙ ${l++}.•${p}figuc
│✙ ${l++}.•${p}figulgbt
│✙ ${l++}.•${p}figuinvert
│✙ ${l++}.•${p}figuborrada
│✙ ${l++}.•${p}figupreso
│✙ ${l++}.•${p}figuarma
│✙ ${l++}.•${p}figuprocurado
│✙ ${l++}.•${p}sticktag
│✙ ${l++}.•${p}stickloli
│✙ ${l++}.•${p}wasted
│✙ ${l++}.•${p}stickmeme {texto1|texto2}
│✙ ${l++}.•${p}ttp  nome|cor
│✙ ${l++}.•${p}attp [txt]
│✙ ${l++}.•${p}swm autor|pacote
│✙ ${l++}.•${p}sticknime
│✙ ${l++}.•${p}doge
│✙ ${l++}.•${p}semoji
├─────────────┈ ⳹
│ *「 🎨EDITOR🎨 」*
│✙ ${l++}.•${p}shadow
│✙ ${l++}.•${p}romantic
│✙ ${l++}.•${p}smoke
│✙ ${l++}.•${p}smoky
│✙ ${l++}.•${p}fogo
│✙ ${l++}.•${p}semiterio
│✙ ${l++}.•${p}ouro
│✙ ${l++}.•${p}burnpaper
│✙ ${l++}.•${p}naruto
│✙ ${l++}.•${p}lovemsg
│✙ ${l++}.•${p}grass
│✙ ${l++}.•${p}doubleheart
│✙ ${l++}.•${p}coffecup
│✙ ${l++}.•${p}lovetext
│✙ ${l++}.•${p}butterfly
│✙ ${l++}.•${p}tahta
│✙ ${l++}.•${p}phubkomen
│✙ ${l++}.•${p}nulis
│✙ ${l++}.•${p}changemymind
│✙ ${l++}.•${p}kannagen
│✙ ${l++}.•${p}trumptweet
│✙ ${l++}.•${p}sponsburn
│✙ ${l++}.•${p}presentasi
├─────────────┈ ⳹
│ *「📠CANVAS📠 」*
│✙ ${l++}.•${p}rip
│✙ ${l++}.•${p}hitler
│✙ ${l++}.•${p}thuglife
│✙ ${l++}.•${p}putin
│✙ ${l++}.•${p}rotate
│✙ ${l++}.•${p}komunis
│✙ ${l++}.•${p}deletepc
│✙ ${l++}.•${p}trash
│✙ ${l++}.•${p}drip
│✙ ${l++}.•${p}procurado
│✙ ${l++}.•${p}morte
│✙ ${l++}.•${p}piseinamerda
├─────────────┈ ⳹
│ *「 💾DOWLOAD💾 」*
│✙ ${l++}.•${p}play (premium)
│✙ ${l++}.•${p}playvide (premium)
│✙ ${l++}.•${p}mp3 [link]
│✙ ${l++}.•${p}mp4 [link]
│✙ ${l++}.•${p}ytmp3 [link]
│✙ ${l++}.•${p}ytmp4 [link]
│✙ ${l++}.•${p}tiktokmusic [link]
│✙ ${l++}.•${p}image [nome]
│✙ ${l++}.•${p}fb [link]
│✙ ${l++}.•${p}ig [link]
│✙ ${l++}.•${p}instaimg [link]
│✙ ${l++}.•${p}instavid [link]
├─────────
│ *「 🔎STALK🔍️ 」*
│✙ ${l++}.•${p}igstalk [nome]
│✙ ${l++}.•${p}instastory [nome]
│✙ ${l++}.•${p}tiktokstalk [nome]
│✙ ${l++}.•${p}githubstalk [nome]
│✙ ${l++}.•${p}ytsearch [nome]
├─────────
│ *「 💱NÍVEL/DINHERO💱 」*
│✙ ${l++}.•${p}transferir @|quantidade
│✙ ${l++}.•${p}dinhero
│✙ ${l++}.•${p}buylimit
│✙ ${l++}.•${p}darlimit [@ quantidade] (criador)
│✙ ${l++}.•${p}limit
│✙ ${l++}.•${p}nivel
│✙ ${l++}.•${p}rank
│✙ ${l++}.•${p}loja
├─────────────┈ ⳹
│ *「🕹️GAMES🖲️ 」*
│✙ ${l++}.•${p}slot
│✙ ${l++}.•${p}ppt
│✙ ${l++}.•${p}minerar
│✙ ${l++}.•${p}anagrama (beta)
│✙ ${l++}.•${p}ttt easy,normal,hard,impossible
│✙ ${l++}.•${p}tttme
│✙ ${l++}.•${p}tttrank
│✙ ${l++}.•${p}ttthelp
├─────────
│ *「 🥷🏻CLÃN⚔️️ 」*
│✙ ${l++}.•${p}clãns
│✙ ${l++}.•${p}hyuga
│✙ ${l++}.•${p}uzumaki
├─────────
│ *「 🤹🏻‍♂️DIVERSÃO🤹🏻‍♂️ 」*
│✙ ${l++}.•${p}gay2
│✙ ${l++}.•${p}gado2
│✙ ${l++}.•${p}gostosa2
│✙ ${l++}.•${p}feio2
│✙ ${l++}.•${p}bonito2
│✙ ${l++}.•${p}nazista2
│✙ ${l++}.•${p}gordo2
│✙ ${l++}.•${p}magro2
│✙ ${l++}.•${p}feliz2
│✙ ${l++}.•${p}triste2
│✙ ${l++}.•${p}lolicon2
│✙ ${l++}.•${p}punhetero2
│✙ ${l++}.•${p}safado2
│✙ ${l++}.•${p}santo2
│✙ ${l++}.•${p}mentiroso2
│✙ ${l++}.•${p}dragão2
│✙ ${l++}.•${p}calculista2
│✙ ${l++}.•${p}otaku2
│✙ ${l++}.•${p}homofobico2
│✙ ${l++}.•${p}pedro
│✙ ${l++}.•${p}macaco
│✙ ${l++}.•${p}lindo
│✙ ${l++}.•${p}feio
│✙ ${l++}.•${p}bonito
│✙ ${l++}.•${p}gay
│✙ ${l++}.•${p}gado
│✙ ${l++}.•${p}frio
│✙ ${l++}.•${p}cauculista
│✙ ${l++}.•${p}chato
│✙ ${l++}.•${p}legal
│✙ ${l++}.•${p}retardado
│✙ ${l++}.•${p}homofobico
│✙ ${l++}.•${p}inativo
│✙ ${l++}.•${p}presente
│✙ ${l++}.•${p}rico
│✙ ${l++}.•${p}pobre
│✙ ${l++}.•${p}sadboy
│✙ ${l++}.•${p}toxico
│✙ ${l++}.•${p}rockeiro
│✙ ${l++}.•${p}baiano
│✙ ${l++}.•${p}nazista
│✙ ${l++}.•${p}lixo
│✙ ${l++}.•${p}gostoso
├─────────
│ *「 👥GRUPO👥 」*
│✙ ${l++}.•${p}bemvindo ativar/desativar
│✙ ${l++}.•${p}antifake 1/0
│✙ ${l++}.•${p}antilink ativar/desativar
│✙ ${l++}.•${p}autofigurinha on/off
│✙ ${l++}.•${p}leveling ativar/desativar
│✙ ${l++}.•${p}antidel 1/0
│✙ ${l++}.•${p}rptag [@]
│✙ ${l++}.•${p}tagall
│✙ ${l++}.•${p}tagall2
│✙ ${l++}.•${p}tagall3
│✙ ${l++}.•${p}totag video/img/figurinha
│✙ ${l++}.•${p}add
│✙ ${l++}.•${p}ban
│✙ ${l++}.•${p}hidetag [txt]
│✙ ${l++}.•${p}linkgc
│✙ ${l++}.•${p}g
│✙ ${l++}.•${p}totag
│✙ ${l++}.•${p}add
│✙ ${l++}.•${p}kick
│✙ ${l++}.•${p}promover
│✙ ${l++}.•${p}rebaixar
│✙ ${l++}.•${p}linkgc
│✙ ${l++}.•${p}suit
│✙ ${l++}.•${p}gp [abrir/fechar]
│✙ ${l++}.•${p}linkgp
│✙ ${l++}.•${p}leveling [1/0]
│✙ ${l++}.•${p}listadmin
│✙ ${l++}.•${p}listonline
│✙ ${l++}.•${p}sider
│✙ ${l++}.•${p}searchmsg [msg]
│✙ ${l++}.•${p}getpp [@]
│✙ ${l++}.•${p}getpic
├─────────
│ *「 🔞HENTAI😏 」*
│✙ ${l++}.•${p}holo
│✙ ${l++}.•${p}solo (o melhor)
│✙ ${l++}.•${p}ero
│✙ ${l++}.•${p}erofeet
│✙ ${l++}.•${p}spank
│✙ ${l++}.•${p}feet
│✙ ${l++}.•${p}classic
│✙ ${l++}.•${p}holoero
│✙ ${l++}.•${p}cum
│✙ ${l++}.•${p}eroyuri
│✙ ${l++}.•${p}eron
│✙ ${l++}.•${p}pwankg
│✙ ${l++}.•${p}anal
│✙ ${l++}.•${p}lewd
│✙ ${l++}.•${p}lewdkemo
│✙ ${l++}.•${p}solog
│✙ ${l++}.•${p}lewdk
│✙ ${l++}.•${p}blowjob
│✙ ${l++}.•${p}hentai
│✙ ${l++}.•${p}hololewd
│✙ ${l++}.•${p}trap
│✙ ${l++}.•${p}les
│✙ ${l++}.•${p}smallboobs
│✙ ${l++}.•${p}futanari
│✙ ${l++}.•${p}femdom
│✙ ${l++}.•${p}erok
│✙ ${l++}.•${p}feetg
│✙ ${l++}.•${p}erokemo
│✙ ${l++}.•${p}boobs
│✙ ${l++}.•${p}pussy
├─────────
│ *「 📂NÚVEM📂 」*
│✙ ${l++}.•${p}addsticker [reply stick]
│✙ ${l++}.•${p}addvn [reply audio]
│✙ ${l++}.•${p}addimage [reply image]
│✙ ${l++}.•${p}addvideo [reply video]
│✙ ${l++}.•${p}getsticker
│✙ ${l++}.•${p}getvn
│✙ ${l++}.•${p}getimage
│✙ ${l++}.•${p}getvideo
│✙ ${l++}.•${p}liststicker
│✙ ${l++}.•${p}listvn
│✙ ${l++}.•${p}listimage
│✙ ${l++}.•${p}listvideo
│✙ ${l++}.•${p}delsticker
│✙ ${l++}.•${p}delimage
│✙ ${l++}.•${p}delvideo
│✙ ${l++}.•${p}delvn
├─────────
│ *「 🛠️FFERRAMENTAS🛠️ 」*
│✙ ${l++}.•${p}tovid (figu)
│✙ ${l++}.•${p}toimg (figu)
│✙ ${l++}.•${p}q [CopyNForward]
│✙ ${l++}.•${p}chat
│✙ ${l++}.•${p}kalkulator
│✙ ${l++}.•${p}fdeface
│✙ ${l++}.•${p}timer
│✙ ${l++}.•${p}dorking
│✙ ${l++}.•${p}encode64
│✙ ${l++}.•${p}decode64
│✙ ${l++}.•${p}decode32
│✙ ${l++}.•${p}encode32
│✙ ${l++}.•${p}encbinary
│✙ ${l++}.•${p}decbinary
│✙ ${l++}.•${p}encoctal
│✙ ${l++}.•${p}decoctal
│✙ ${l++}.•${p}becrypt
│✙ ${l++}.•${p}tinyurl [creat link]
│✙ ${l++}.•${p}tourl [img]
│✙ ${l++}.•${p}timer
│✙ ${l++}.•${p}dorking
├─────────────┈ ⳹
│ *「 ❔INFO❓ 」*
│✙ ${l++}.•${p}mystat
│✙ ${l++}.•${p}status
│✙ ${l++}.•${p}listgroup
│✙ ${l++}.•${p}listapremium
│✙ ${l++}.•${p}blocklist
│✙ ${l++}.•${p}owner
├────────────┈ ⳹
│ *「 🧙🏻‍♂️CRIADOR🧙🏻‍♂️ 」*
│✙ ${l++}.•${p}block
│✙ ${l++}.•${p}unblock
│✙ ${l++}.•${p}addprem
│✙ ${l++}.•${p}delprem
│✙ ${l++}.•${p}addpalavra
│✙ ${l++}.•${p}delpalavra
│✙ ${l++}.•${p}antipalavrão ativar/desativar
│✙ ${l++}.•${p}listapalavrão
│✙ ${l++}.•${p}on
│✙ ${l++}.•${p}off
│✙ ${l++}.•${p}antitroli [off]
│✙ ${l++}.•${p}setprfix [Text]
│✙ ${l++}.•${p}setprefix2 [multi/nopref] [off]
│✙ ${l++}.•${p}desligar
│✙ ${l++}.•${p}delete/delthischat
│✙ ${l++}.•${p}restart
│✙ ${l++}.•${p}buggc
│✙ ${l++}.•${p}bug [resultar]
│✙ ${l++}.•${p}nano [get source file]
│✙ ${l++}.•${p}join [link]
│✙ ${l++}.•${p}upswteks [teks]
│✙ ${l++}.•${p}upswvideo [capt]
│✙ ${l++}.•${p}upswimage [capt]
│✙ ${l++}.•${p}upswgif [capt]
│✙ ${l++}.•${p}upswvoice
│✙ ${l++}.•${p}limpar
╰┬────────────┈ ⳹
┌┤➤ *CMD*
││
││• > [eval]
││• => [eval async]
││• $ [executor]
││
│├────────
││✙◗ _AKAME SELF_
│└────────
│✙◗ esse bot e 80% sem api
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
      *「 Akame bot 」*`
		exec(`magick '${pinghinkibadorsafado}' -gravity west -fill '${useelacomobasepfv}' -font '${Plagiarmeuscomandosnãotetornacoderváestudarnãosejaumladrãomiserável}' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushname}' -pointsize 35 -annotate +460+83 '${waktoonyabro}' -pointsize 50 -annotate +460+200 'Bem vindo ao menu' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite '${antikbarkkk}'`)
				.on('error', () => reply('error'))
				.on('exit', () => {				
			akame.sendMessage(from, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${sayo}`, contextInfo: { forwardingScore: 508, isForwarded: true}})			
			})			 
			await limitAdd(sender)
break
case 'join':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isOwner) return reply(mess.only.criador)
				 if (args.length < 1) return ephe('Onde está o link?')
					denz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`[📌] Pronto`)
await limitAdd(sender)
break
case 'shutdown':
case 'desligar':
  if (!mek.key.fromMe && !isOwner) return reply(`[❗] somente meu criador pode usar o ${p + command}`)
  reply(`desligado 😢`) 
       setTimeout(() => {       
                        akame.close()
                    }, 3000)			        					
                    await limitAdd(sender)
break
case 'delthischat': case 'delete':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                if (!mek.key.fromMe) return reply('criador?')
                reply('*sucesso ao deletar este chat*')
                console.log('sucesso na exclusão do chat = ' + from)
                await sleep(4000)
                akame.modifyChat(from, ChatModification.delete)
                await limitAdd(sender)
break
case 'on':
          	if (!mek.key.fromMe) return reply(`Você não e o wa.me/${owner} so ele pode usar esse comando kkkk`)
          	offline = false
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${owner}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./akame.jpeg')}}}}
          	akame.sendMessage(from, `[❗] AGORA ESTOU ONLINE`,MessageType.text,anu)
          	await limitAdd(sender)
break       
      	case 'off':      	
         	if (!mek.key.fromMe) return reply(`Você não e o wa.me/${owner} so ele pode usar esse comando kkkk`)
          	offline = true
          	waktuafk = Date.now()
          	anuu = args[0] ? args[0] : 'ativar'
          	alasanafk = anuu
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${owner}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': fs.readFileSync('./akame.jpeg')}}}}
          	akame.sendMessage(from, `[❗] AGORA EU ESTOU OFFLINE`,MessageType.text,anu)
          	await limitAdd(sender)
break 
case 'tinyurl':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break
          case 'restart':
          if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!isOwner) return reply(mess.only.criador)
reply(`_Reiniciando..._`)
exec(`node main`)
setTimeout( () => {
					akame.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					akame.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					akame.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					akame.sendMessage(from, '_Reiniciado com sucesso_', text, {quoted: fgclink}) // ur cods
					},4000) // 1000 = 1s, 
					await limitAdd(sender)
break
    case 'status':
    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            reply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            await limitAdd(sender)
break  
            case 'hacked':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Cadê o texto??')
              reply('Hackeando 👩🏻‍💻')
                tessgc = await getBuffer(`https://i.ibb.co/VSXQfw7/IMG-20210629-WA0004.jpg`)
                   akame.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                akame.groupUpdateSubject(from, `HACKEADO POR ${body.slice(8)}`)
                await sleep(1000)
                akame.groupUpdateDescription(from, `_${pushname} esta hackeado este grupokkkkk_`)             
                await sleep(1000)
                akame.sendMessage(from, 'Grupo hackeado com sucesso 👍', text, {quoted: say1})
					await limitAdd(sender)
break
            case 'delsticker':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isOwner) return reply(mess.only.criador)
					try {
					 nmm = body.slice(12)
					 wanu = setiker.indexOf(nmm)
					 setiker.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/sticker/${nmm}.webp`)
					 reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					await limitAdd(sender)
break 
									
					case 'upswgif':
					if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                     if (!isOwner) return reply(mess.only.criador)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    akame.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sucesso no upload do gif:\n${konti}`)
                    await limitAdd(sender)
break 
                    case 'upswvoice':
                    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    if (!isOwner) return reply(mess.only.criador)
                    if (!isQuotedAudio) return reply('Reply audionya!')
                    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await akame.downloadMediaMessage(encmedia)
						akame.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
						}
						reply(`Sucesso no upload de aúdio`)
						await limitAdd(sender)
break
					case 'delvn':
					if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					if (!isOwner) return reply(mess.only.criador)
					try {
					 nmm = body.slice(7)
					 wanu = audionye.indexOf(nmm)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/audio/${nmm}.mp3`)
					reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					await limitAdd(sender)
break 															
// TESTS					
/*					
				=> sayo = `LIXOSO`
anu = ["555596274433@s.whatsapp.net"]

            akame.groupCreate(sayo[0], anu)
            
  anu = ["556181496039@s.whatsapp.net"]
  reply(`1 minuto`)
setTimeout( () => {
			akame.groupRemove(from, (anu))}
					}, 10000)

=>  setTimeout( (async) => {
 akame.groupUpdateSubject("559481417512-1624660045@g.us", `VOU COMER SEU CU EM ${date} ${time}`)
  },200)

=> test = ('k'.repeat(999999))
reply(test)

!exc setInterval (() => {
reply("*ATENÇÃO, ESSE TREM SEGUIRÁ PARA RECIFE:* ")
}, 10000)
*/
	//		if(time2 < "14:10:00") var ucapanWaktu = reply('Ja e 2:10 kkkk')
					case 'setprefix':
			if (!isOwner) return reply(mess.only.criador)
			if (args.length < 1) return reply('Cadê o texto seu burro?')
				p = args[0]
				reply('Pronto')
				await limitAdd(sender)
break 
								case 'setprefix2':
                if (!isOwner) return reply(mess.only.criador)
                if (args.length < 1) return reply(`Use assim\nOpcões :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Prefixo alterado com sucesso para ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Prefixo alterado com sucesso para ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Prefixo alterado com sucesso para ${q}`)
                }
                await limitAdd(sender)
break
					case 'delimage':
					case 'delimage':
				if (!isOwner) return reply(mess.only.criador)
					try {
					 nmm = body.slice(10)
					 wanu = gambarnye.indexOf(nmm)
					 gambarnye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/image/${nmm}.jpeg`)
					 reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					await limitAdd(sender)
break 
					case 'delvideo':
				if (!isOwner) return reply(mess.only.criador)
					try {
					 nmm = body.slice(10)
					 wanu = videonye.indexOf(nmm)
					 videonye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/video/${nmm}.mp4`)
					 reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					await limitAdd(sender)
break 
					case 'detikvn':
					if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
			        akame.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:say1})
				    fs.unlinkSync(media)
				    await limitAdd(sender)
break
				    case 'detikvideo':
				    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
				    akame.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: say1})
			        fs.unlinkSync(media)
				    await limitAdd(sender)
break

				case 'chat':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (args[0].startsWith('08')) return reply('Coloque o codigo do país 55 🇧🇷')
            if (args[0].startsWith('+55')) return reply('Coloque o codigo do país so pode +55 🇧🇷')
			if (args.length < 1) return reply(`Use assim ${p +command} 55xnxx|texto`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            akame.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Conversa enviada com sucesso:\n${org},@${nomor}`)
            await limitAdd(sender)
break 
            case 'semoji':
            if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (args === 0) return reply(`Cadê o emoji? exemplo : ${p +command} 😡`)   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
		   sendStickerFromUrl(from, `${link}`).catch(() => reply('Deu erro 😢'))
           })
    	   await limitAdd(sender)
break
case 'totag':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await akame.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await akame.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: say1
            }
            ini_buffer = fs.readFileSync(file)
            akame.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + command}`)
        }
        await limitAdd(sender)
break

case 'lenin':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
reply(yag.wait())
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=lenin`, {method: 'get'})
var n = JSON.parse(JSON.stringify(anu));
var nime2k1 =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime2k1)
akame.sendMessage(from, pok, image, { caption: mess.success,quoted: say1 })
await limitAdd(sender)
break
case 'kalashnikov':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=kalashnikov`, {method: 'get'})
reply(yag.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime1k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime1k)
akame.sendMessage(from, pok, image, {caption:mess.success,quoted: say1 })
await limitAdd(sender)
break
case 'unisoviet':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=unisoviet`, {method: 'get'})
reply(yag.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime3k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime3k)
akame.sendMessage(from, pok, image, {caption:mess.success,quoted: say1 })
await limitAdd(sender)
break
case 'nikitakhrushchev':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=nikita khrushchev`, {method: 'get'})
reply(yag.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime7k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime7k)
akame.sendMessage(from, pok, image, {caption:mess.success,quoted: say1 })
await limitAdd(sender)
break
case 'andreigromyko':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=andrei gromyko`, {method: 'get'})
reply(yag.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime6k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime6k)
akame.sendMessage(from, pok, image, {caption:mess.success,quoted: say1 })
await limitAdd(sender)
break
case 'covidglobal': 
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))				
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/covidworld')
				teks = `➸ *Total de Casos* : ${anu.result.totalCases}\n*➸ recuperados :* ${anu.result.recovered}\n*➸ Mortes :* ${anu.result.deaths}\n*➸ Casos ativos :* ${anu.result.activeCases}\n*➸ Casos Fechados :* ${anu.result.closedCases}\n*➸ Última atualização :* ${anu.result.lastUpdate}`
				akame.sendMessage(from, teks, text, {quoted: say1})
				await limitAdd(sender)
break

					case 'getgrup': 
                    case 'getgroup': 
                    case 'getg':
                    case 'gruplist':
                    case 'listgrup':
                    case 'grouplist':
                    case 'listgroup':
                    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			         ingfo = await getGroup(totalchat)
				     let txt = `*Lista dos grupos*\nNúmero de Grupos: ${ingfo.length}\n\n`
				     for (let i = 0; i < ingfo.length; i++){
					txt += `Nome do grupo : ${ingfo[i].subject}\nID : ${ingfo[i].id}\nFeito : ${moment(`${ingfo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nNúmero de participantes : ${ingfo[i].participants.length}\n\n`
				    }
				    reply(txt)
	                await limitAdd(sender)
break
case 'group': case 'grup': case 'gp':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args[0] === 'abrir') {

reply('Grupo aberto com sucesso')

akame.groupSettingChange(from, GroupSettingChange.messageSend, false)

} else if (args[0] === 'fechar') {

await akame.groupSettingChange(from, GroupSettingChange.messageSend, true)

reply('Grupo fechado com sucesso')

}

await limitAdd(sender)
break                  
case 'mystat':

 if (!mek.key.fromMe) return reply('Este comando e so pro meu criador')

var groups = akame.chats.array.filter(v => v.jid.endsWith('g.us'))

var privat = akame.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

	uptime = process.uptime();

timestamp = speed();

totalChat = await akame.chats.all()

charge = charging ? 'sim' : 'não'

listrik = charging ? '⚡' : 'ga di cas'

latensi = speed() - timestamp

	var total = math(`${groups.length}*${privat.length}`)

	teks = `❏ ESTATÍSTICAS DO BOT:
├ Total de grupos : ${groups.length}
├ Total de usuários no pv do bot : ${privat.length}
├ Total de chats : ${totalChat.length}
├ Velocidade : ${latensi.toFixed(4)} Second
└ Ativo desde : ${kyun(uptime)}

❏ ESTATÍSTICAS DO CELULAR:
├ Bateria : ${JSON.stringify(baterai)}% ${listrik}
├ Uso de Ram : ${ram2}
├ Plataforma : ${os.platform()}
├ Nome do host : ${os.hostname()}
├ Tempo de atividade : ${kyun(os.uptime())}
├ Versão do Wa: ${akame.user.phone.wa_version}
├ Versão do cll: ${akame.user.phone.os_version}
└ Modelo do dispositivo: ${akame.user.phone.device_model}`

reply(`${teks}`)

await limitAdd(sender)
break
case 'dorking':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson('https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}', {method: 'get'})
					hasil = `${anu.result}`
					akame.sendMessage(from, hasil, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'encode64':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson('https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}', {method: 'get'})
				akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break 
				case 'decode64':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'decode32':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'encode32':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'encbinary':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'decbinary':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'encoctal':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
			//	//if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					
					await limitAdd(sender)
break  
				case 'decoctal':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}', {method: 'get'})
					akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
					 
					await limitAdd(sender)
break  
				case 'becrypt':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson('https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}', {method: 'get'})
				akame.sendMessage(from, `${anu.result}`, text, {quoted: say1})
				 
				await limitAdd(sender)
break 
				
                  case 'timer':
                  if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (args[1]=="segundos") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*selecionar:*\nsegundos\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				await limitAdd(sender)
break		

case 'suit': //pedra,papel,tesoura
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                if (!q) return reply(`Use assim ${p + command} tesoura / pedra / papel`)
                const userspilih = q
                if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Escolha pedra, papel, tesoura`)
                var computer = Math.random();
                if (computer < 0.34 ) {
                    computer = 'pedra';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'tesoura';
                } else {
                    computer = 'papel';
                }
                if ( userspilih == computer ) {
                    reply(`Pertandingan Seri!`)
                } else if ( userspilih == 'pedra' ) {
                    if( computer == 'tesoura' ) {
                        // hasil = 'MENANG';
                        reply(`Você escolheu pedra e a akame escolheu tesoura\nVocê ganhou!`)
                    } else {
                        reply(`Você escolheu pedra e a akame escolheu papel\nVocê perdeu!`)
                    }
                } else if ( userspilih == 'tesoura' ) {
                    if( computer == 'pedra' ) {
                        // hasil = 'MENANG';
                        reply(`Você perdeu, Você escolheu tesoura e a akame escolheu pedra, E você não ganha nada`)
                    } else {
                        reply(`Você escolheu tesoura e a akame papel você ganhou!!!!`)
                    }
                } else if ( userspilih == 'papel' ) {
                    if( computer == 'pedra' ) {
                        // hasil = 'MENANG';
                        reply(`Você escolheu papel e a akame pedra Você ganhou!!!`)
                    } else {
                        reply(`Você perdeu, Você escolheu papel e a akame escolheu tesoura`)
                    }
                    }
            await limitAdd(sender)
break
case 'gay2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% GAY* 🏳️‍🌈`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'gado2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% GADO🐂*`
                    reply(N)
                    await limitAdd(sender)
break
                    case 'gostosa2':  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))                      	
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% GOSTOSA* 😳`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'feio2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% FEIO* 🤢`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'bonito2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% BONITO* 😎`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'nazista2':                      	 
       if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% NAZISTA* 🚩`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'gordo2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% GORDO* 😐`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'magro2':                    
                      	  		if (!isRegistered) return reply(sayo.noregis())
                    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% MAGRO* 😑`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'feliz2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% FELIZ* 😁`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'triste2':                    
                      	  		if (!isRegistered) return reply(sayo.noregis())
                    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% TRISTE* 😞`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'lolicon2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% LOLICON* 👮🏻‍♀️`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'punhetero2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% PUNHETERO* 🍆💦`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'safado2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% SAFADO* 😈`
                    reply(N)
                    await limitAdd(sender)
break                      
                    case 'santo2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% SANTO* 😇`
                    reply(N)
                    await limitAdd(sender)
break  
                    case 'mentiroso2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% MENTIROSO* 🤥`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'dragão2':                      	 
       if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname)) 
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% DRAGÃO* 🐲`
                    reply(N)
                    await limitAdd(sender)
break 
                    case 'calculista2':                  
                     		if (!isRegistered) return reply(sayo.noregis())   	  
                    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))	
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% FRIO E CALCULISTA* 🕵🏻‍♂️`
                    reply(N)
                    await limitAdd(sender)
break             
                    case 'otaku2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% OTAKU* 💮`
                    reply(N)
                    await limitAdd(sender)
break
                    case 'homofóbico2':                  
                    case 'homofobico2':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% HOMOFÓBICO* 🧐`
                    reply(N)
                    await limitAdd(sender)
break                                      
                    case 'pedro':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% PEDRO* 🐵`
                    reply(N)
                    await limitAdd(sender)
break                   
                     case 'macaco':                      	  
      if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    N = `VOCÊ\n`
                    N += `É : *${sayor}${sayor2}% MACACO* 🐒`
                    reply(N)
                    await limitAdd(sender)
break               
              case 'lindo': case 'frio': case 'homofobico': case 'pobre':  
                   case 'feio': case 'cauculista': case 'inativo': case 'baiano': case 'lixo':                 	 
                   case 'bonito': case 'chato': case 'presente': case 'nazista': case 'gostoso': 
                   case 'gay': case 'legal': case 'rico': case 'rockeiro': 
               	   case 'gado': case 'retardado': case 'sadboy': case 'toxico':  
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				   if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `O mais *${command}* do grupo ${groupName} é o @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   await limitAdd(sender)
break				   				
				   
				   case 'casal':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				   if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
 				   jds = []
				   const A11 = groupMembers
  		 		const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Meus cálculos dizem que @${C11.jid.split('@')[0]} e @${C22.jid.split('@')[0]}\nFORMÃO UM BELO CASAL ❤`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   await limitAdd(sender)
break
				   case 'holo':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

//GIF

case 'solo':
try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'ero':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'erofeet':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'spank':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'feet':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'classic':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'holoero':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'cum':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'eroyuri':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'eron':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'pwankg':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'anal':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'lewd':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'lewdkemo':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'solog':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'lewdk':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break


case 'blowjob':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'hentai':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'hololewd':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'trap':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'les':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'smallboobs':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'futanari':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'femdom':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case 'feed':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case'erok':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case'feetg':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break

case'erokemo':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break
case'boobs':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break
case 'pussy':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply('[❌] deu error ao enviar o hentai 😞')
} 
}
await limitAdd(sender)
break
                                         
                

//GIFS
case 'ngif':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break
case 'smug':

try {
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
akame.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
await limitAdd(sender)
break
case 'rptag':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Marque a pessoa [@]")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Marcação repetida*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
await limitAdd(sender)
break
case 'add':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Use assim ${p + command} 55×××××××`)
				akame.groupAdd(from, [args[0] + '@s.whatsapp.net'])
				reply(`Pronto`)
				await limitAdd(sender)
break
					case 'ban': //Grupo
					case 'kick': //Grupo
					case 'banir': //Grupo
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
akame.groupRemove(from, M_exe)
} else {
akame.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
const F3 = fs.readFileSync('menu/ban.webp')                 
const F4 = fs.readFileSync('menu/ban2.webp')
akame.sendMessage(from, F3, sticker, {quoted: say1})
setTimeout( () => {		        
akame.sendMessage(from, F4, sticker, {quoted: say1})
		        }, 1000)
setTimeout( () => {		        
akame.groupRemove(from, [exe1])
		        }, 2000)
}
akame.sendMessage(from, F4, sticker, {quoted: say1})
await limitAdd(sender)
break
	case 'rebaixar': //Grupo
					case 'demote': //Grupo
		if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
akame.groupDemoteAdmin(from, M_exe)
} else {
akame.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
akame.groupDemoteAdmin(from, [exe1])
}
reply("[📍] pronto!")
await limitAdd(sender)
break
					case 'promover': //Grupo
					case 'promote': //Grupo
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
akame.groupMakeAdmin(from, M_exe)
} else {
akame.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
akame.groupMakeAdmin(from, [exe1])
}
reply("[📍] pronto!")
await limitAdd(sender)
break
case 'tagall':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					await limitAdd(sender)
break
case 'ttmp3': case 'tiktokmusic':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(`onde está o link?`)
ttaud = await ttaudio(q)

sendFile(ttaud.result.audio, audio, {mimetype: 'audio/mp4', ptt:true})

await limitAdd(sender)
break

case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await denz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink do Grupo *${groupName}*`
					akame.sendMessage(from, yeh, text, { quoted: say1 })
					await limitAdd(sender)
break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					await limitAdd(sender)
break
                                case 'tagall3':
                                if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					akame.sendMessage(from, teks, text, {detectLinks: false, quoted: say1})
					await limitAdd(sender)
break
case 'searchmsg':
case 'searchmessage':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
 xtext = args.join(' ')
                cond = xtext.split(" ")
                 a = await akame.searchMessages(xtext, from, 10, 1)// count 10 
                 fox = '*「 Pesquisa de msg do grupo 」*\n\n'
                num = 0
                for (j of a.messages){
                    num += 1
                    if (j.message.conversation) {
                        if (j.key.fromMe){ 
                            fox += num+'. Quem envio: '+akame.user.jid+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
                        }else{
                            fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
                        } 
                    }
                    else if (j.message.extendedTextMessage){
                        if (j.key.fromMe){ 
                            fox += num+'. Quem envio: '+akame.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
                        }else{
                            fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
                        } 
                    }
                }
                reply(fox)
                await limitAdd(sender)
break
    case 'upswteks':
    case 'enviatxts':    
    if (!mek.key.fromMe) return
try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
				    akame.sendMessage('status@broadcast', `${quotedText}`, extendedText)
				reply(`Sukses Up story wea teks ${quotedText}`)
				} catch {
					if (!q) return reply('Cadê o texto!')
akame.sendMessage('status@broadcast', `${q}`, extendedText)
reply(`Texto enviado para os status:  ${q}`)
}
				    await limitAdd(sender)
break
    case 'upswimage':
    if (!mek.key.fromMe) return
            if (isQuotedImage) {
            swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await akame.downloadMediaMessage(swsw)
            akame.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Imagem enviada para os status: ${q}`
            akame.sendMessage(from, bur, text, { quoted: say1 })
            } else {
            reply('Marque a foto!')
            }
            await limitAdd(sender)
break
    case 'upswvideo':
    if (!mek.key.fromMe) return
            if (isQuotedVideo) {
            swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await akame.downloadMediaMessage(swsw)
            akame.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Video enviado para os status: ${q}`
            akame.sendMessage(from, bur, text, { quoted: say1 })
            } else {
            reply('Marque o vídeo!')
            }
            await limitAdd(sender)
break
    case 'fdeface':
    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `enviar/responder a imagem com a legenda ${p + command} link|título|desc|texto`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await akame.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await akame.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		akame.sendMessage(from, mat, MessageType.extendedText, anu)
            await limitAdd(sender)
break
case 'getpp':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
linkpp = await akame.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
akame.sendMessage(from, buffer, image, {caption: "Nih", quoted: say1 })
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = mek.message.extendedTextMessage.contextInfo.participant
linkpp = await akame.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
akame.sendMessage(from, buffer, image, { quoted: say1, caption: `Essa e a foto de perfil do @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await akame.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
akame.sendMessage(from, buffer, image, { quoted: say1, caption: `Essa e a foto de perfil do @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
await limitAdd(sender)
break
case 'lixo2':
                           case 'trash':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/trash?img=${teks}`)
                        abc = await getBuffer(anu8)
                        akame.sendMessage(from, abc, image, {
                            quoted: say1
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    await limitAdd(sender)
break                       
case 'getpic':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Pronto chefe')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await akame.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						akame.sendMessage(from, buffer, image, {quoted: say1, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
					await akame.sendMessage(from, buffer, image, {quoted: say1, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				await limitAdd(sender)
break
case 'ytsearch':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
			if (args.length < 1) return reply('Tolong masukan query!')
			const srch = args[0];
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await akame.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Titulo: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
    		});
    		ytresult += '◩ *akame-self*'
    		await akame.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./akame.jpeg'),quoted: faketroli, caption: ytresult})
			await limitAdd(sender)
break 
/*case 'translate':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
                            tolang = args[0]
                            entah = body.slice(10+args[0].length+1)
                            translate(entah, tolang)
                            .then((res) => { reply(`${res}`) })
                        } else {
                            tolang = args[0]
                            entah = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                            translate(entah, tolang)
                            .then((res) => { reply(`${res}`) })
                        }
                        await limitAdd(sender)
break
*/
case 'restart':
if (!mek.key.fromMe) return reply('Quem e você?')
reply('_Reiniciando o BOT_')
exec(`node main`)
setTimeout( () => {
					akame.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					akame.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					akame.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					akame.sendMessage(from, `_Bot reiniciado com sucesso_`,text,{quoted: say1 }) // ur cods
					},4000) // 1000 = 1s,
await limitAdd(sender)
break
case 'stikerwm':
	case 'stickerwm':
    case 'swm':
    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await akame.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            akame.sendMessage(from, 'Deu erro', 'conversação', { quoted: say1 })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            akame.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: say1 })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await akame.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            akame.sendMessage(from, 'Deu erro', 'conversation', { quoted: say1 })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            akame.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: say1 })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${p}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            await limitAdd(sender)
break
case 'deletepc':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'tahta':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(yag.wrongf())
sendMediaURL(from, `http://zekais-api.herokuapp.com/hartatahta?text=${q}`, mess.success)
await limitAdd(sender)
break
case 'sponsburn':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(yag.wrongf())
sendMediaURL(from, `http://zekais-api.herokuapp.com/sbburn?text=${q}`, mess.success)
await limitAdd(sender)
break
case 'presentasi':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(yag.wrongf())
sendMediaURL(from, `https://api-yogipw.herokuapp.com/api/imgedit/presentasi?text=${q}`, mess.success)
await limitAdd(sender)
break
case 'patrik':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            sendMediaURL(from,media,mess.success)
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            await limitAdd(sender)
break
case 'doge':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break
case 'sticknime':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
reply(mess.wait)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break
case 'waifu':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
				    try {
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					akame.sendMessage(from, buf, image, {quoted: say1,caption: "Nih"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('emror')
					}
					await limitAdd(sender)
break
					case 'lizard':
					if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
             try {
						axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					akame.sendMessage(from, buf, image, {quoted: say1,caption: "Nih"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('emror')
					}
					await limitAdd(sender)
break
case 'randomnime':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            akame.sendMessage(from,media,image,{quoted:say1,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            await limitAdd(sender)
break
case 'pinterest':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            reply(mess.wait)
             data = await fetchJson('http://zekais-api.herokuapp.com/pinterest?query=${body.slice(11)}')
               n = JSON.parse(JSON.stringify(data.result));
          	nimek =  n[Math.floor(Math.random() * n.length)];
          	pok = await getBuffer(nimek) 
            akame.sendMessage(from, pok, image,{quoted:say1,caption:'Nih'})
            await limitAdd(sender)
break
case 'loli':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
anu = await fetchJson('https://fdciabdul.tech/api/pinterest?keyword=loli', {method: 'get'})
reply(yag.wait())
var n = JSON.parse(JSON.stringify(anu));
var nimek =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
akame.sendMessage(from, pok, image, {quoted: say1,  caption: `nih`})
await limitAdd(sender)
break 
case 'quotemaker':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					gh = body.slice(12)
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${p}quotemaker teks/watermark/theme\n\nEx :\n${p}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					akame.sendMessage(from, buffer, image, {quoted: say1})
					await limitAdd(sender)
break 
case 'sider':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
infom = await akame.messageInfo(from, m.quoted.id)
hemm = infom.reads
readdin = hemm.map(v => v.jid)

stamp = hemm.map(v => v.t)
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
}
 
//criar índice do mês
var months = ["Janeiro","fevereiro","Março","abril","Maio","Junho","julho","agosto","setembro","Outubro","novembro","dezembro"];

 // pega uma fração de cada vez
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();

// combinar em tempo variável
var time = hour + ':' + min + ':' + sec ;
return time;
}
teksx = `Nossa, so lendo as conversas safados :\n`
hiks = 0
for (let i of hemm) {
hiks += 1
 teksx += `~> @${i.jid.split('@')[0]} > ${toTime(i.t, true)}\n`
 }
akame.sendMessage(from, teksx, text, { quoted: say1, contextInfo: { mentionedJid: readdin }})
await limitAdd(sender)
break
case 'magik':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
						reply(mess.wait)
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						owgi = await akame.downloadAndSaveMediaMessage(ger)
						data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
						buff = await getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${data.display_url}&intensity=${args[0]}`)
						akame.sendMessage(from, buff, image, {quoted: say1, caption: mess.success})
					} else {
						reply(`Envie uma foto ou responda uma ja enviada com ${p + command} intensidade`)
					}
					await limitAdd(sender)
break 					
case 'changemymind':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
reply(yag.wait())
anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${q}`)
sendMediaURL(from, anu.message, mess.success)
await limitAdd(sender)
break
case 'kannagen':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
reply(yag.wait())
anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendMediaURL(from, anu.message, mess.success)
await limitAdd(sender)
break
case 'triggered':
case 'ger':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !fakevn.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(yag.wait())
owgi = await akame.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
tggrd = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tggrd}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
akame.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})                                    
} else {
reply('Marque a foto!')
}
await limitAdd(sender)
break 
                    case 'raimbow':
                case 'arcoirirs':
                case 'figulgbt':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                    case 'figuc':
                case 'circulo':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                                        
                                        case 'borra':
                case 'figuborrada':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break           
                case 'figuprocurado':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                    case 'figuwasted':              
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                    
                    case 'arma':
                case 'figuarma':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                      case 'figuinvert':
                case 'invert':
                case 'figuinvertida':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                    
                    case 'preso':
                case 'figupreso':
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                    case 'figupet':               
               if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
                      case 'triggered':
                case 'figuger':
                       if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(yag.wait())  
                        owgi = await akame.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            akame.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    await limitAdd(sender)
break
case 'nulis':
case 'tulis':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args.length < 1) return reply('O que você quer escrever??')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
akame.sendMessage(from, buff, image, {quoted: say1, caption: mess.success}).catch(e => {
return reply('_[ ! ] Erro ao baixar e enviar os arquivos_')
})
await limitAdd(sender)
break
case 'ttp':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args.length < 1) return reply(`cadê o texto mano?\nexemplo ${p + command} ${pushname}`)
var kntl = body.slice("5")
var nama = kntl.split("|")[0];
var impostor = kntl.split("|")[1];
reply(yag.wait())
anjay = `http://zekais-api.herokuapp.com/text2png?text=${encodeUrl(nama)}&color=${impostor}`
sendStickerFromUrl(from, anjay)
await limitAdd(sender)
break
case 'attp':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (args.length < 1) return reply(`cadê o texto mano?\nexemplo ${p + command} ${pushname}`)
woy = args.join(" ")
reply(yag.wait())
bebeb = `http://zekais-api.herokuapp.com/attg?text=${encodeUrl(woy)}`
sendStickerFromUrl(from, bebeb)
await limitAdd(sender)
break
case 'lolistick': case 'stickloli':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
reply(yag.wait()) 
fetchJson(`http://zekais-api.herokuapp.com/randomloli`).then(res =>  {
console.log(res)
sendStickerFromUrl(from, res.result)
})
await limitAdd(sender)
break
case 'get':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!q) return reply(mess.wrongFormat)
axios.get(`${args[0]}`).then(data => reply(JSON.stringify(data.data, null, 3)))
await limitAdd(sender)
break
case 'listonline': 
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(akame.chats.get(ido).presences), akame.user.jid]
			    akame.sendMessage(from, '*SIM EU VI VC ONLINE*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*online*`, text, { quoted: say1,
  			  contextInfo: { mentionedJid: online }
			    })
				await limitAdd(sender)
break 
case 'smeme': case 'stickmeme':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  akame.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Use fotos/adesivos!')
}
await limitAdd(sender)
break
case 'listadmin':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!isGroup) return reply(yag.groupo())
teks = `Lista dos admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
await limitAdd(sender)
break 
case 'wanted':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
tels = body.slice(8)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/wanted?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'rotate':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await akame.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/rotate?url=${anu.display_url}`)
akame.sendMessage(from, hehe, image, {quoted: say1})
} else {
reply('Marque alguma imagem!!')
}
await limitAdd(sender)
break
case 'stickerlist': case 'liststicker':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
teks = '*Lista das figurinhas :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
akame.sendMessage(from, teks.trim(), extendedText, { quoted: fvideo, contextInfo: { "mentionedJid": setiker } })
await limitAdd(sender)
break
case 'listvn': case 'vnlist':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
teks = '*Lista dos aúdio :*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*`
akame.sendMessage(from, teks.trim(), extendedText, { quoted: say1, contextInfo: { "mentionedJid": audionye } })
await limitAdd(sender)
break
case 'imagelist': case 'listimage':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
teks = '*Lista das imagens :*\n\n'
for (let awokwkwk of gambarnye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${gambarnye.length}*`
akame.sendMessage(from, teks.trim(), extendedText, { quoted: say1, contextInfo: { "mentionedJid": gambarnye } })
await limitAdd(sender)
break
case 'videolist': case 'listvideo':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
teks = '*Lista dos vídeos :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*`
akame.sendMessage(from, teks.trim(), extendedText, { quoted: say1, contextInfo: { "mentionedJid": videonye } })
await limitAdd(sender)
break
case 'hode':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						akame.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fgclink})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
break
         case 'hode-v':
         if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						akame.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: fgclink})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
break
case 'reverse':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
	})
await limitAdd(sender)
break

case 'volume':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
	})
await limitAdd(sender)
break

case 'budek':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "volume=50" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
	})
await limitAdd(sender)
break
case 'imut':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
	})
await limitAdd(sender)
break
case 'nightcore':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!isQuotedAudio) return reply('Marque algum aúdio')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*${args[0]} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
akame.sendMessage(from, hah, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break 
case 'bass': 
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
req = q
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
random = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${random}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(random)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(random)
})
await limitAdd(sender)
break
case 'vibra': 
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
var req = q
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break

case 'trigger':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break
case 'tempo':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
 var req = q
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break

case 'robot':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
akame.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break
case 'vibrav':     
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						akame.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: say1 })
})
					await limitAdd(sender)
break
case 'triggervid':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=3:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
akame.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
await limitAdd(sender)
break
case 'tupai':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!isQuotedAudio) return reply('Marque algum aúdio')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
akame.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break
case 'blub':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!isQuotedAudio) return reply('Marque algum aúdio')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
akame.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: say1})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break
case 'gemuk':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
if (!isQuotedAudio) return reply('Marque algum aúdio')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await akame.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
akame.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: say1})
fs.unlinkSync(ran)
 })
  await limitAdd(sender)
break
				case 'ghost':
	                 if (!isQuotedAudio) return reply('Marque algum aúdio')
	             reply(mess.wait)
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						 akame.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: say1})
						fs.unlinkSync(ran)
					    })
				       await limitAdd(sender)
break
case 'earrape':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument || args.length < 1){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af volume=${args[0]} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: say1, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            await limitAdd(sender)
break
case 'apulsator':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "apulsator=mode=sine:hz=3:width=0.1:offset_r=0" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: say1, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            await limitAdd(sender)
break
case 'tomp3':
case 'tovn':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
	if (!isQuotedAudio || isQuotedVideo) return reply('Marque aúdio/video')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akame.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter áudio para ptt')
						topt = fs.readFileSync(ran)
						akame.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', duration: 999999999, quoted: say1, ptt:false})
						})
						await limitAdd(sender)
break
case 'fast-v':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (!isQuotedVideo) return reply('Marque algum vídeo!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: say1 })
            fs.unlinkSync(ran)
            })
            await limitAdd(sender)
break
    case 'slow-v':
    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (!isQuotedVideo) return reply('Marque algum vídeo!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: say1 })
            fs.unlinkSync(ran)
            })
            await limitAdd(sender)
break
    case 'reverse-v':
    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (!isQuotedVideo) return reply('Marque algum vídeo!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: say1 })
            fs.unlinkSync(ran)
            })
            break
case 'fast':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (!isQuotedVideo) return reply('Marque algum vídeo!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, audio, { mimetype: 'video/mp4', ptt: true, quoted: say1 })
            fs.unlinkSync(ran)
            })
            await limitAdd(sender)
break
    case 'slow':
    if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
           if (isLimit(sender)) return reply(yag.limitend(pusname))
            if (!isQuotedVideo) return reply('Marque algum vídeo!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await akame.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            akame.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: say1 })
            fs.unlinkSync(ran)
            })
            await limitAdd(sender)
break
 //CLÃNS

			    	case 'rghyuga':						
			     	if (!isUser) return reply(yag.rg(p))
                    if (isBanned) return reply(yag.ban())      
                    payout2 = 1 //NÃO MUDE NADA AQUI
				    const koinPerlimit5 = 150000 //QUANTIDADE DA TAXA
			    	const totalhy = koinPerlimit5 * payout2
			        if ( checkATMuser(sender) <= totalhy)  return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit5} mil`)
			    	if ( checkATMuser(sender) >= totalhy) {
					confirmATM(sender, totalhy)
				    hyuga.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/hyuga.json', JSON.stringify(hyuga))
	                await reply(`🥋CLÂN HYUGA🥋\n\n*📝RECRUTADOR📝* : akame\n*🥷🏻NINJA RECRUTADO🥷🏻* : ${pushname}\n*📜PREÇO DA TAXA📜* : ${koinPerlimit5}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\nrecrutamento bem sucedido com o id : \n💳: ${createSerial(15)}`)				
					}
			    	break
			    		case 'hyuga':
				  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())
					akame.updatePresence(from, Presence.composing) 
					teks = `╭─「 *🥋CLÂN HYUGA🥋️️* 」\n`
					no = 0
					for (let hyu of hyuga) {
						no += 1
						teks += `│「${no.toString()}」 @${hyu.split('@')[0]}\n` //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
					}
					teks += `│ Total : ${hyuga.length}\n╰──────「 *🥷🏻MEMBROS⚔️* 」`
					akame.sendMessage(from, teks.trim(), extendedText, {quoted: say1, contextInfo: {"mentionedJid": hyuga}})
					await limitAdd(sender)
break					
			    	case 'rguzumaki':						
			     	if (!isUser) return reply(yag.rg(p))
         if (isBanned) return reply(yag.ban())      
         akame.updatePresence(from, Presence.composing) 
                    payout2 = 1 //NÃO MUDE NADA AQUI
				    const koinPerlimit6 = 150000 //QUANTIDADE DA TAXA
			    	const totaluz = koinPerlimit6 * payout2
			        if ( checkATMuser(sender) <= totaluz)  return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit6} mil`)
			    	if ( checkATMuser(sender) >= totaluz) {
					confirmATM(sender, totaluz)
				    uzumaki.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/uzumaki.json', JSON.stringify(uzumaki))
	                await reply(`💮CLÃN UZUMAKI💮\n\n*📝RECRUTADOR📝* : akame\n*🥷🏻NINJA RECRUTADO🥷🏻* : ${pushname}\n*📜PREÇO DA TAXA📜* : ${koinPerlimit6}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\nrecrutamento bem sucedido com o id : \n💳: ${createSerial(15)}`)				
					}
			    	break
			case 'uzumaki':
				  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())      
					akame.updatePresence(from, Presence.composing) 
					teks = `╭─「 *🔱CLÃN UZUMAKI⚜️️* 」\n`
					no = 0
					for (let uzu of uzumaki) {
						no += 1
						teks += `│「${no.toString()}」 @${uzu.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
					}
					teks += `│ Total : ${uzumaki.length}\n╰──────「 *🥷🏻MEMBROS⚔️* 」`
					akame.sendMessage(from, teks.trim(), extendedText, {quoted: say1, contextInfo: {"mentionedJid": uzumaki}})
					await limitAdd(sender)
break					
			    	case 'rguchiha':						
			     	if (!isUser) return reply(yag.rg(p))
                    if (isBanned) return reply(yag.ban())      
                    payout2 = 1//NÃO MUDE NADA AQUI
				    const koinPerlimit4 = 150000//QUANTIDADE DA TAXA
			    	const totaluc = koinPerlimit4 * payout2
			        if ( checkATMuser(sender) <= totaluc)  return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit4} mil`)
			    	if ( checkATMuser(sender) >= totaluc) {
					confirmATM(sender, totaluc)
				    uchiha.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/uchiha.json', JSON.stringify(uchiha))
	                await reply(`🉐CLÃN UCHIHA🥷🏻\n\n*📝RECRUTADOR📝* : akame\n*🥷🏻NINJA RECRUTADO🥷🏻* : ${pushname}\n*📜PREÇO DA TAXA📜* : ${koinPerlimit4}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\nrecrutamento bem sucedido com o id : \n💳: ${createSerial(15)}`)				
					}
			    	break
			    	case 'uchiha':
				  if (!isUser) return reply(yag.rg(p))
      if (isBanned) return reply(yag.ban())      
					akame.updatePresence(from, Presence.composing) 
					teks = `╭─「 *🉐CLÃN UCHIHA㊙️* 」\n`
					no = 0
					for (let uch of uchiha) {
						no += 1
						teks += `│「${no.toString()}」 @${uch.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
					}
					teks += `│ Total : ${uchiha.length}\n╰──────「 *🥷🏻MEMBROS⚔️* 」`
					akame.sendMessage(from, teks.trim(), extendedText, {quoted: say1, contextInfo: {"mentionedJid": uchiha}})
					await limitAdd(sender)
break					
//JOGOS
case 'slot':
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
if (isLimit(sender)) return reply(yag.limitend(pusname))
akame.updatePresence(from, Presence.composing) 
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
ppg = Math.floor(Math.random() * 15) + 5490
dinheroslot = Math.floor(Math.random() * 14) + 500
addLevelingXp(sender, ppg)
addKoinUser(sender, dinheroslot)
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
                     

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp e ${dinheroslot} em dinhero!!!`)
}, 1100)
}
akame.sendMessage(from, slott, text, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say1})
break
case "ppt":
if (!isUser) return reply(yag.rg(p))
if (isBanned) return reply(yag.ban())
if (isLimit(sender)) return reply(yag.limitend(pusname))
akame.updatePresence(from, Presence.composing) 
if (args.length < 1) return reply(`Use assim: ${p + command} pedra/papel/tesoura`)
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 14) + 3490
addLevelingXp(sender, ppg)
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply('deu error')
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é da akame"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`akame jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
await limitAdd(sender)
break
                      case 'minerar':
                      if (!isUser) return reply(yag.rg(p))
                      if (isBanned) return reply(yag.ban())
                      if (isLimit(sender)) return reply(yag.limitend(pusname))                   
                      if (isOwner) {
                      const one = 99999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 5)
                      reply(`Esse e pra vc  ${one} e +5 nível 🙈`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining) 
                      await reply(`*${pushname} minérou⛏️ na mina e conseguiu* ${mining} de xp...*`)
                      }                                      
                   await limitAdd(sender)
             					break

		//JOGO DO ANAGRAMA
case 'anagrama':
 if (!isUser) return reply(yag.rg(p))
                      if (isBanned) return reply(yag.ban())
                      if (isLimit(sender)) return reply(yag.limitend(pusname))
						if(!isGroup) return reply('comando apenas para grupos')
					const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
					if(!isGroupAdmins) return reply('comando apenas para admins')
				 if(args.length == 0) return reply('use *anagrama ativar para ativar o jogo do anagrama\npara desativar user *anagrama desativar')
						if (args.join(' ') === 'ativar') {
							if(fs.existsSync(`./src/anagrama-${from}.json`)) {
							let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
							reply(`o jogo já foi iniciado neste grupo:
				palavra: ${dataAnagrama2.embaralhada}
				dica: ${dataAnagrama2.dica}
				`)} else {
					fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
					akame.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
				`,MessageType.text)
				}
						} else if (args.join(' ') ==='desativar') {
						if(!fs.existsSync(`./src/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
				fs.unlinkSync(`./src/anagrama-${from}.json`)
				reply("desativado com sucesso")
						}
					break 
             					//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(dpa.group)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${p}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Opa, deixe seus amigos jogarem também, tente novamente em 8 minutos.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
tttf = `JOGO DA VELHA MODO ${tttset.tttdifficulty}`
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, tttf)
akame.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
akame.sendMessage(from,`Caso não saiba como jogar digite: ${p}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break
case 'ttthelp':
akame.sendMessage(from, ttthelp(p), text)
break
case 'tttme':
if (!isGroup) return reply(dpa.group)
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
akame.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break
case 'tttrank':
if (!isGroup) return reply(dpa.group)
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await akame.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(dpa.group)
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${p}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${p}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 20000) + 20000
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 30000) + 30000
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 40000) + 40000
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000000) + 10000000
addLevelingXp(tttset.player, randomTTTXP)
break
}
akame.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
akame.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 2000) + 2000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 3000) + 3000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 4000) + 4000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
akame.sendMessage(from, `VITÓRIA DA AKAME 😎\n\n➣PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
akame.sendMessage(from, ` VITÓRIA DA AKAME 😎`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
akame.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
akame.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
            				case 'rg':            				
				if (isUser) return reply(`「📌 」 VOCÊ JA ESTA REGISTRADO...`)
		  try {
				ppimg = await akame.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg' //ARRUMADO
			}
				const seriTod = bikinSerial(20)
				const uangku2 = checkATMuser(sender)
				imglu = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU' //FOTO DO FUNDO DA VERIFICAÇÃO MUDE COMO QUISER
				veri = sender
    addATM(sender)
    addLevelingId(sender)
				user.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				jadiUser(sender, seriTod)
				const kentod = 
`
╭─「 REGISTRO DO ÚSUARIO 」
│Registro bem-sucedido com
│ID: ${seriTod}
│horário ${date} ${time}
│Nome: ${pushname}
│Número: wa.me/${sender.split('@')[0]}
│Obrigada por se registrar
│Para usar o bot digite ${p}menu
│Total de usuários registrados: ${user.length}
╰─────────────────────────
`
    //             let buff = await getBuffer(`https://api-gdr2.herokuapp.com/api/leave?titulo=REGISTRO&nome=${encodeURI(pushname)}&perfil=${ppimg}&fundo=${imglu}&grupo=ID: ${seriTod}&numero=${user.length}&membroConta=999`)
   //            let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                		exec(`magick './src/wel.jpg' -gravity west -fill '#FF0000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushname}' -pointsize 35 -annotate +460+83 'REGISTRADO' -pointsize 50 -annotate +460+200 'ID ${seriTod}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			akame.sendMessage(from, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `${kentod}`, contextInfo: { forwardingScore: 508, isForwarded: true}})
			})
break
//==============================================//
				default:											          
			if (isGroup && !isCmd && budy != undefined) {
					} else {
						console.log(color('[ERROR]','red'), 'Comando não registrado de', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
//FIM