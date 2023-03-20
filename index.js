const express = require("express");
const app = express();
// const axios = require('axios');
const { registerFont, createCanvas, loadImage } = require('canvas');
// const app = express();
const path = require('path');
const { v2, auth } = require('osu-api-extended')
// require('dotenv').config();
// const port = process.env.PORT || 3000;
// const router = express.Router();

// var countryCodes = require('./country_codes.json' );
// const { user } = require('osu-api-extended/dist/api/v1');

auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
registerFont(path.resolve(__dirname, 'assets/VarelaRound.ttf'), {
	family: 'VarelaRound'
});
// GlobalFonts.registerFromPath(path.resolve(__dirname, 'assets', 'VarelaRound.ttf'))

// const key = process.env.KEY;
 
// const config = {
//   headers: {
//     Authorization: `Bearer ${key}`
//   }
// };

function rect(ctx, x, y, width, height, radius){
	if (typeof radius === 'number') {
		radius = {
			tl: radius,
			tr: radius,
			br: radius,
			bl: radius
		};
	}
	ctx.beginPath();
	ctx.moveTo(x + radius.tl, y);
	ctx.lineTo(x + width - radius.tr, y);
	ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
	ctx.lineTo(x + width, y + height - radius.br);
	ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
	ctx.lineTo(x + radius.bl, y + height);
	ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
	ctx.lineTo(x, y + radius.tl);
	ctx.quadraticCurveTo(x, y, x + radius.tl, y);
	ctx.closePath();
	ctx.fill();
}

function number(number){
	return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function numberSuffix(value, formatString){
	if (value >= 1000000000) {
		return ((formatString ? number(Math.floor(value / 10 ** 8) / 10) : Math.floor(value / 10 ** 8) / 10) + 'b');
	} else if (value >= 1000000) {
		return ((formatString ? number(Math.floor(value / 10 ** 5) / 10) : Math.floor(value / 10 ** 5) / 10) + 'm');
	} else {
		return (formatString ? number(value) : value.toString());
	}
}


// const main = async () => {
    
//     console.log(data)
// }

// main()

// app.get('/', async (req, res) => {
//   res.send("Missing username")
// })
const profileRouter = require('./api/profile.js');

app.use('/api/profile', profileRouter);
app.get('/', (req, res) => {
    res.send("this is just a router page")
});

// app.get('/:username.png', async (req, res) => { 
//   const { username } = req.params;
//   let mode = req.query.mode;
//   mode = (!mode)?"osu":mode 
//   // console.log(username, mode)
//   // if (!mode){
//   //   mode = "1"
//   // }
//   // console.log(mode)
//   // const url = `https://osu.ppy.sh/api/get_user?k=${key}&u=${username}&m=${mode}`
//   // const url = `https://osu.ppy.sh/api/v2/user/weikuu`
  
//   try {
//     const data = await v2.user.details(username, mode)
//     // const response = await axios.get(url, config);
//     // const data = response.data[0]
//     // console.log(data)
//     var mainColour = '#ffffff';
//     var canvas = createCanvas(1200, 624);
//     var ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     ctx.fillStyle = '#303F76';
//     rect(ctx, 0, 0, canvas.width, canvas.height, 45);
//     ctx.fill();

//     let backgroundImage = await loadImage(path.resolve(__dirname, 'assets/background.png'));
//     ctx.shadowColor = 'rgba(0,0,0,0.5)';
//     ctx.shadowBlur = 40;
//     ctx.save();
//     rect(ctx, 0, 0, canvas.width, 432, 45);
//     ctx.clip();
//     ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height + 71);
//     ctx.restore();
//     ctx.shadowBlur = 0;
//     ctx.save();


//     // console.log(data.user_id)
//     var userPictureUrl = data.avatar_url
//     // console.log(userPictureUrl)
//     // console.log(data.user_id)
//     // https://a.ppy.sh/14984648?1678641738.jpeg
//     // 1679089720951
//     // if (options.type == 1) {
//     //   userPictureUrl = `https://a.gatari.pw/${data.user_id}?${Date.now().toString()}`;
//     // } else if (options.type == 2) {
//     //   userPictureUrl = `https://a.akatsuki.pw/${data.user_id}?${Date.now().toString()}`;
//     // }

//     var userPicture;
//     try {
//       userPicture = await loadImage(userPictureUrl);
//     } catch (err) {
//       userPicture = await loadImage('https://osu.ppy.sh/images/layout/avatar-guest.png');
//     }
//     rect(ctx, 44, 55, 277, 277, 47);
//     ctx.clip();

//     var scale = Math.max(280 / userPicture.width, 280 / userPicture.height);
//     var x = 170 + 14 - (userPicture.width / 2) * scale;
//     var y = 170 + 25 - (userPicture.height / 2) * scale;
//     ctx.drawImage(userPicture, x, y, userPicture.width * scale, userPicture.height * scale);
//     ctx.restore();

//     ctx.save();
//     ctx.globalAlpha = 0.4;
//     ctx.beginPath();
//     ctx.ellipse(268 + 30, 277 + 30, 40, 40, 0, 0, Math.PI * 2);
//     ctx.fill();
//     // var modes = ['osu', 'taiko', 'catch', 'mania'];
//     var icon = await loadImage(path.resolve(__dirname, `assets/${mode}.png`));
//     ctx.drawImage(icon, 252, 261, 86, 86);
//     ctx.restore();

//     ctx.fillStyle = mainColour;
//     ctx.font = '63px VarelaRound';
//     ctx.fillText(data.username, 347, 56 + 63);
    
//     ctx.font = '40px VarelaRound';
//     // let country = countryCodes[data.country_code];
//     // console.log(data.country.code)
//     var flag = await loadImage(`https://osu.ppy.sh/images/flags/${data.country.code}.png`);
//     ctx.drawImage(flag, 350, 130, 60, 40);
//     ctx.fillText(data.country.name, 420, 127 + 40);

//     var gradeA = await loadImage(path.resolve(__dirname, 'assets/grade_a.png'));
//     var gradeS = await loadImage(path.resolve(__dirname, 'assets/grade_s.png'));
//     var gradeSS = await loadImage(path.resolve(__dirname, 'assets/grade_ss.png'));
//     var gradeSH = await loadImage(path.resolve(__dirname, 'assets/grade_sh.png'));
//     var gradeSSH = await loadImage(path.resolve(__dirname, 'assets/grade_ssh.png'));

//     ctx.drawImage(gradeA, 766, 112 + 25, 98, 50);
//     ctx.drawImage(gradeS, 922, 112 + 25, 98, 50);
//     ctx.drawImage(gradeSH, 1080, 112 + 25, 98, 50);
//     ctx.drawImage(gradeSS, 847, 221 + 25, 98, 50);
//     ctx.drawImage(gradeSSH, 1002, 221 + 25, 98, 50);

//     ctx.font = '28px VarelaRound';
//     ctx.textAlign = 'center';
//     ctx.fillText(number(parseInt(data.statistics.grade_counts.a) || 0), 792 + 22, 171 + 25 + 28);
//     ctx.fillText(number(parseInt(data.statistics.grade_counts.s) || 0), 955 + 16, 171 + 25 + 28);
//     ctx.fillText(number(parseInt(data.statistics.grade_counts.sh) || 0), 1108 + 22, 171 + 25 + 28);
//     ctx.fillText(number(parseInt(data.statistics.grade_counts.ss) || 0), 888 + 9, 279 + 25 + 28);
//     ctx.fillText(number(parseInt(data.statistics.grade_counts.ssh) || 0), 1038 + 13, 279 + 25 + 28);

//     ctx.textAlign = 'left';
//     ctx.font = '75px VarelaRound';
//     ctx.fillText('#' + number(parseInt(data.statistics.global_rank) || 0), 347, 170 + 75);

//     ctx.font = '57px VarelaRound';
//     ctx.fillText('#' + number(parseInt(data.statistics.country_rank) || 0), 347, 259 + 57);

//     var hexagon = await loadImage(path.resolve(__dirname, 'assets/hexagon.png'));
//     ctx.drawImage(hexagon, 342, 332, 72, 77);

//     // console.log(data.level)
//     // console.log(level)

//     ctx.textAlign = 'center';
//     ctx.font = '33px VarelaRound';
//     if (data.statistics.level.current.toString().length == 3){
//       ctx.fillText(Math.floor(data.statistics.level.current || 0), 376, 332 + 50);
//     }else{
//       ctx.fillText(Math.floor(data.statistics.level.current || 0), 378, 332 + 50);
//     }

//     rect(ctx, 441, 364, 504, 12, 7);
//     ctx.fillStyle = '#FFCC22';
//     rect(ctx, 441, 364, 504 * (data.statistics.level.progress/100 > 0.02 ? data.statistics.level.progress/100 : 0.02), 12, 7);
//     ctx.textAlign = 'left';
//     ctx.fillStyle = mainColour;
//     ctx.font = '21px VarelaRound';
//     ctx.fillText((data.statistics.level.progress || 0) + '%', 960, 359 + 21);

//     ctx.fillStyle = mainColour + '21';
//     rect(ctx, 44, 472, 191, 53, 30);
//     rect(ctx, 278, 472, 232, 53, 30);
//     rect(ctx, 547, 472, 306, 53, 30);
//     rect(ctx, 897, 472, 250, 53, 30);


//     ctx.fillStyle = mainColour;
//     ctx.textAlign = 'center';
//     ctx.font = '30px VarelaRound';
//     ctx.fillText('pp', 118 + 20, 476 + 30);
//     ctx.fillText('Accuracy', 314 + 80, 478 + 30);
//     ctx.fillText('Hours Played', 592 + 110, 476 + 30);
//     ctx.fillText('Playcount', 973 + 50, 478 + 30);

//     ctx.font = '40px VarelaRound';
//     ctx.fillText((number(Math.floor(parseFloat(data.statistics.pp) || 0))), 78 + 60, 534 + 40);
//     ctx.fillText(((Math.round((parseFloat(data.statistics.hit_accuracy) || 0) * 100) / 100)) + '%', 320 + 75, 537 + 40);
//     ctx.fillText(number(Math.floor((parseFloat(data.statistics.play_time) || 0) / 60 / 60)) + 'h', 647 + 50, 536 + 40);
//     // ctx.fillText(format.number(Math.floor(parseInt(data.total_seconds_played) || 0) / 60 / 60) + 'h', 651 + 50, 536 + 40);
//     ctx.fillText(number(data.statistics.play_count || 0), 925 + 100, 536 + 40);
//     // res.setHeader('content-type', 'image/png')
//     // res.send(await canvas.encode('png'))
//     res.writeHead(200, { 'Content-Type': 'image/png' });
//     canvas.createPNGStream().pipe(res);

//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });

app.listen(3000, () => {
    console.log("Running on port 3000.");
  });

// Export the Express API
module.exports = app;

// const express = require('express');
// const app = express();
// const { createServer } = require('http');
 
// const server = createServer(app);
// module.exports = (req, res) => {
//   server(req, res);
// };
