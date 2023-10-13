const { registerFont, createCanvas, loadImage } = require('canvas');
const { v2, auth } = require('osu-api-extended')
const path = require('path');
const fs = require('fs')

const format = require('../../../../handlers/formatter.js')
require('dotenv').config();

registerFont(path.resolve(process.cwd(), 'src/assets/VarelaRound.ttf'), {
	family: 'VarelaRound'
});

export default async (req, res) => {
    const {
      query: { username, mode = 'osu' },
    } = req;

    if (!username) {
      res.statusCode = 400;
      res.json({ error: 'Missing username' });
      return;
    }

    const read = fs.readFileSync(path.resolve(process.cwd(),'token.txt'), 'utf8');
    auth.set_v2(read);

    // const verification = await v2.user.details(username, mode)
    // if(verification.authentication){
    //   await auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET, ['public']);
    //   fs.writeFileSync('token.txt', auth.cache_v2, 'utf8');
    // }

    const data = await v2.user.details(username, mode)
    // console.log(data)
    if(!data.id){
      res.statusCode = 400;
      res.json({ error: 'Unknown username or mode, please check the documents. (api.weikuwu.me)' });
      return;
    }
    
    var mainColour = '#ffffff';
    var canvas = createCanvas(1200, 624);
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = '#303F76';
    format.rect(ctx, 0, 0, canvas.width, canvas.height, 45);
    ctx.fill();

    // path.resolve(process.cwd(), 'src/assets/background.png')
    let backgroundImage = await loadImage(data.cover_url);
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 40;
    ctx.save();
    format.rect(ctx, 0, 0, canvas.width, 432, 45);
    ctx.clip();
 
    ctx.globalAlpha = 0.5
    ctx.drawImage(backgroundImage, -200, 0, 1620, 361 + 71);
    ctx.restore();
    ctx.shadowBlur = 0;
    ctx.save();

    var userPictureUrl = data.avatar_url

    // https://a.ppy.sh/14984648?1678641738.jpeg
    // 1679089720951
    // if (options.type == 1) {
    //   userPictureUrl = `https://a.gatari.pw/${data.user_id}?${Date.now().toString()}`;
    // } else if (options.type == 2) {
    //   userPictureUrl = `https://a.akatsuki.pw/${data.user_id}?${Date.now().toString()}`;
    // }
    var userPicture;
    try {
      userPicture = await loadImage(userPictureUrl);
    } catch (err) {
      userPicture = await loadImage('https://osu.ppy.sh/images/layout/avatar-guest.png');
    }
    format.rect(ctx, 44, 55, 277, 277, 47);
    ctx.clip();

    var scale = Math.max(280 / userPicture.width, 280 / userPicture.height);
    var x = 170 + 14 - (userPicture.width / 2) * scale;
    var y = 170 + 25 - (userPicture.height / 2) * scale;
    ctx.drawImage(userPicture, x, y, userPicture.width * scale, userPicture.height * scale);
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.ellipse(268 + 30, 277 + 30, 40, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    // var modes = ['osu', 'taiko', 'catch', 'mania'];
    var icon = await loadImage(`https://cdn.weikuwu.me/src/osu/${mode}.png`);
    ctx.drawImage(icon, 252, 261, 86, 86);
    ctx.restore();
    

    ctx.fillStyle = mainColour;
    ctx.font = '63px VarelaRound';
    ctx.fillText(data.username, 347, 56 + 63);

    ctx.font = '40px VarelaRound';
    // let country = countryCodes[data.country_code];
    var flag = await loadImage(`https://osu.ppy.sh/images/flags/${data.country.code}.png`);
    ctx.drawImage(flag, 350, 130, 60, 40);
    ctx.fillText(data.country.name, 420, 127 + 40);

    var gradeA = await loadImage('https://cdn.weikuwu.me/src/osu/grade_a.png');
    var gradeS = await loadImage('https://cdn.weikuwu.me/src/osu/grade_s.png');
    var gradeSS = await loadImage('https://cdn.weikuwu.me/src/osu/grade_ss.png');
    var gradeSH = await loadImage('https://cdn.weikuwu.me/src/osu/grade_sh.png');
    var gradeSSH = await loadImage('https://cdn.weikuwu.me/src/osu/grade_ssh.png');

    ctx.drawImage(gradeA, 766, 112 + 25, 98, 50);
    ctx.drawImage(gradeS, 922, 112 + 25, 98, 50);
    ctx.drawImage(gradeSH, 1080, 112 + 25, 98, 50);
    ctx.drawImage(gradeSS, 847, 221 + 25, 98, 50);
    ctx.drawImage(gradeSSH, 1002, 221 + 25, 98, 50);

    ctx.font = '28px VarelaRound';
    ctx.textAlign = 'center';
    ctx.fillText(format.number(parseInt(data.statistics.grade_counts.a) || 0), 792 + 22, 171 + 25 + 28);
    ctx.fillText(format.number(parseInt(data.statistics.grade_counts.s) || 0), 955 + 16, 171 + 25 + 28);
    ctx.fillText(format.number(parseInt(data.statistics.grade_counts.sh) || 0), 1108 + 22, 171 + 25 + 28);
    ctx.fillText(format.number(parseInt(data.statistics.grade_counts.ss) || 0), 888 + 9, 279 + 25 + 28);
    ctx.fillText(format.number(parseInt(data.statistics.grade_counts.ssh) || 0), 1038 + 13, 279 + 25 + 28);

    ctx.textAlign = 'left';
    ctx.font = '75px VarelaRound';
    ctx.fillText('#' + format.number(parseInt(data.statistics.global_rank) || 0), 347, 170 + 75);

    ctx.font = '57px VarelaRound';
    ctx.fillText('#' + format.number(parseInt(data.statistics.country_rank) || 0), 347, 259 + 57);

    var hexagon = await loadImage('https://cdn.weikuwu.me/src/osu/hexagon.png');
    ctx.drawImage(hexagon, 342, 332, 72, 77);

    ctx.textAlign = 'center';
    ctx.font = '33px VarelaRound';
    if (data.statistics.level.current.toString().length == 3){
      ctx.fillText(Math.floor(data.statistics.level.current || 0), 376, 332 + 50);
    }else{
      ctx.fillText(Math.floor(data.statistics.level.current || 0), 378, 332 + 50);
    }

    format.rect(ctx, 441, 364, 504, 12, 7);
    ctx.fillStyle = '#FFCC22';
    format.rect(ctx, 441, 364, 504 * (data.statistics.level.progress/100 > 0.02 ? data.statistics.level.progress/100 : 0.02), 12, 7);
    ctx.textAlign = 'left';
    ctx.fillStyle = mainColour;
    ctx.font = '21px VarelaRound';
    ctx.fillText((data.statistics.level.progress || 0) + '%', 960, 359 + 21);

    ctx.fillStyle = mainColour + '21';
    format.rect(ctx, 44, 472, 191, 53, 30);
    format.rect(ctx, 278, 472, 232, 53, 30);
    format.rect(ctx, 547, 472, 306, 53, 30);
    format.rect(ctx, 897, 472, 250, 53, 30);


    ctx.fillStyle = mainColour;
    ctx.textAlign = 'center';
    ctx.font = '30px VarelaRound';
    ctx.fillText('pp', 118 + 20, 476 + 30);
    ctx.fillText('Accuracy', 314 + 80, 478 + 30);
    ctx.fillText('Hours Played', 592 + 110, 476 + 30);
    ctx.fillText('Playcount', 973 + 50, 478 + 30);

    ctx.font = '40px VarelaRound';
    ctx.fillText((format.number(Math.floor(parseFloat(data.statistics.pp) || 0))), 78 + 60, 534 + 40);
    ctx.fillText(((Math.round((parseFloat(data.statistics.hit_accuracy) || 0) * 100) / 100)) + '%', 320 + 75, 537 + 40);
    ctx.fillText(format.number(Math.floor((parseFloat(data.statistics.play_time) || 0) / 60 / 60)) + 'h', 647 + 50, 536 + 40);
    // ctx.fillText(format.format.number(Math.floor(parseInt(data.total_seconds_played) || 0) / 60 / 60) + 'h', 651 + 50, 536 + 40);
    ctx.fillText(format.number(data.statistics.play_count || 0), 925 + 100, 536 + 40);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);
  }