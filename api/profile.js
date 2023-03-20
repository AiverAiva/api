const express = require('express');
const path = require('path');
const { registerFont, createCanvas, loadImage } = require('canvas');
const { v2, auth } = require('osu-api-extended')

const router = express.Router();

const format = require('../handlers/format.js')
require('dotenv').config();
auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
registerFont(path.resolve(__dirname, '../assets/VarelaRound.ttf'), {
	family: 'VarelaRound'
});


router.get('/', async (req, res) => {
  res.send("Missing username")
})
// router.get('/:username/', async (req, res) => {
//   const { username } = req.params;
//   res.redirect(`/api/profile/${username}.png`)
// })
router.get('/:username.png', async (req, res) => {
  const { username } = req.params;
  let mode = req.query.mode;
  mode = (!mode)?"osu":mode 

  try {
    const data = await v2.user.details(username, mode)
    var mainColour = '#ffffff';
    var canvas = createCanvas(1200, 624);
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = '#303F76';
    format.rect(ctx, 0, 0, canvas.width, canvas.height, 45);
    ctx.fill();

    // path.resolve(__dirname, '../assets/background.png')
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
    var icon = await loadImage(path.resolve(__dirname, `../assets/${mode}.png`));
    ctx.drawImage(icon, 252, 261, 86, 86);
    ctx.restore();
    

    ctx.fillStyle = mainColour;
    ctx.font = '63px VarelaRound';
    ctx.fillText(data.username, 347, 56 + 63);

    ctx.font = '40px VarelaRound';
    // let country = countryCodes[data.country_code];
    // console.log(data.country.code)
    var flag = await loadImage(`https://osu.ppy.sh/images/flags/${data.country.code}.png`);
    ctx.drawImage(flag, 350, 130, 60, 40);
    ctx.fillText(data.country.name, 420, 127 + 40);

    var gradeA = await loadImage(path.resolve(__dirname, '../assets/grade_a.png'));
    var gradeS = await loadImage(path.resolve(__dirname, '../assets/grade_s.png'));
    var gradeSS = await loadImage(path.resolve(__dirname, '../assets/grade_ss.png'));
    var gradeSH = await loadImage(path.resolve(__dirname, '../assets/grade_sh.png'));
    var gradeSSH = await loadImage(path.resolve(__dirname, '../assets/grade_ssh.png'));

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

    var hexagon = await loadImage(path.resolve(__dirname, '../assets/hexagon.png'));
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

    res.writeHead(200, { 'Content-Type': 'image/png' });
    canvas.createPNGStream().pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;

// {
//   avatar_url: 'https://a.ppy.sh/14984648?1678641738.jpeg',
//   country_code: 'TW',
//   default_group: 'default',
//   id: 14984648,
//   is_active: true,
//   is_bot: false,
//   is_deleted: false,
//   is_online: true,
//   is_supporter: false,
//   last_visit: '2023-03-20T17:15:26+00:00',
//   pm_friends_only: false,
//   profile_colour: null,
//   username: 'weikuu',
//   cover_url: 'https://assets.ppy.sh/user-profile-covers/14984648/38be6d103e3794fa190ca711744adf1066190f5114766d1d6144ae94fc2134f7.png',
//   discord: 'AiverAiva#1234',
//   has_supported: true,
//   interests: '抱抱//',
//   join_date: '2019-08-13T15:50:16+00:00',
//   kudosu: { total: 0, available: 0 },
//   location: 'Taiwan',
//   max_blocks: 50,
//   max_friends: 250,
//   occupation: null,
//   playmode: 'osu',
//   playstyle: [ 'mouse', 'keyboard' ],
//   post_count: 0,
//   profile_order: [
//     'me',
//     'recent_activity',
//     'top_ranks',
//     'medals',
//     'historical',
//     'beatmaps',
//     'kudosu'
//   ],
//   title: null,
//   title_url: null,
//   twitter: null,
//   website: 'https://weikuwu.me',
//   country: { code: 'TW', name: 'Taiwan' },
//   cover: {
//     custom_url: 'https://assets.ppy.sh/user-profile-covers/14984648/38be6d103e3794fa190ca711744adf1066190f5114766d1d6144ae94fc2134f7.png',
//     url: 'https://assets.ppy.sh/user-profile-covers/14984648/38be6d103e3794fa190ca711744adf1066190f5114766d1d6144ae94fc2134f7.png',
//     id: null
//   },
//   account_history: [],
//   active_tournament_banner: null,
//   badges: [],
//   beatmap_playcounts_count: 6253,
//   comments_count: 0,
//   favourite_beatmapset_count: 4,
//   follower_count: 135,
//   graveyard_beatmapset_count: 0,
//   groups: [],
//   guest_beatmapset_count: 0,
//   loved_beatmapset_count: 0,
//   mapping_follower_count: 0,
//   monthly_playcounts: [
//     { start_date: '2019-08-01', count: 6 },
//     { start_date: '2020-07-01', count: 1319 },
//     { start_date: '2020-08-01', count: 1413 },
//     { start_date: '2020-09-01', count: 910 },
//     { start_date: '2020-10-01', count: 654 },
//     { start_date: '2020-11-01', count: 747 },
//     { start_date: '2020-12-01', count: 397 },
//     { start_date: '2021-01-01', count: 391 },
//     { start_date: '2021-02-01', count: 369 },
//     { start_date: '2021-03-01', count: 502 },
//     { start_date: '2021-04-01', count: 326 },
//     { start_date: '2021-05-01', count: 879 },
//     { start_date: '2021-06-01', count: 1655 },
//     { start_date: '2021-07-01', count: 2391 },
//     { start_date: '2021-08-01', count: 1489 },
//     { start_date: '2021-09-01', count: 998 },
//     { start_date: '2021-10-01', count: 748 },
//     { start_date: '2021-11-01', count: 810 },
//     { start_date: '2021-12-01', count: 520 },
//     { start_date: '2022-01-01', count: 383 },
//     { start_date: '2022-02-01', count: 666 },
//     { start_date: '2022-03-01', count: 1199 },
//     { start_date: '2022-04-01', count: 3692 },
//     { start_date: '2022-05-01', count: 1248 },
//     { start_date: '2022-06-01', count: 1036 },
//     { start_date: '2022-07-01', count: 741 },
//     { start_date: '2022-08-01', count: 1593 },
//     { start_date: '2022-09-01', count: 1326 },
//     { start_date: '2022-10-01', count: 926 },
//     { start_date: '2022-11-01', count: 578 },
//     { start_date: '2022-12-01', count: 191 },
//     { start_date: '2023-01-01', count: 986 },
//     { start_date: '2023-02-01', count: 964 },
//     { start_date: '2023-03-01', count: 713 }
//   ],
//   nominated_beatmapset_count: 0,
//   page: {
//     html: `<div class='bbcode bbcode--profile-page'>我好爛我好爛我好爛我好爛我好爛<br />qwq<br /><br /><div class="well"><div class="js-spoilerbox bbcode-spoilerbox"><button class="js-spoilerbox__link bbcode-spoilerbox__link" type="button"><span class="bbcode-spoilerbox__link-icon"></span>Supporter &lt;3</button><div class="bbcode-spoilerbox__body"><ol class="unordered"><li><span class="size-100">2021/7/11 Bongocat_- (1 month)</span><br /></li><li><span class="size-100">2021/8/11 - Howe - (4 months)</span><br /></li><li><span class="size-100">2022/11/23 -Zopz- (1 months)</span><br 
// /></li></ol></div></div></div></div>`,
//     raw: '我好爛我好爛我好爛我好爛我好爛\n' +
//       'qwq\n' +
//       '\n' +
//       '[notice]\n' +
//       '[box=Supporter <3]\n' +
//       '[list]\n' +
//       '[*][size=100]2021/7/11 Bongocat_- (1 month)[/size]\n' +
//       '[*][size=100]2021/8/11 - Howe - (4 months)[/size]\n' +
//       '[*][size=100]2022/11/23 -Zopz- (1 months)[/size]\n' +
//       '[/list]\n' +
//       '[/box]\n' +
//       '[/notice]'
//   },
//   pending_beatmapset_count: 0,
//   previous_usernames: [ 'WeiKuOuO' ],
//   rank_highest: { rank: 54934, updated_at: '2022-11-03T14:27:08Z' },
//   ranked_beatmapset_count: 0,
//   replays_watched_counts: [
//     { start_date: '2020-07-01', count: 1 },
//     { start_date: '2021-10-01', count: 1 },
//     { start_date: '2022-04-01', count: 1 },
//     { start_date: '2022-06-01', count: 1 },
//     { start_date: '2022-11-01', count: 1 },
//     { start_date: '2023-01-01', count: 1 }
//   ],
//   scores_best_count: 100,
//   scores_first_count: 0,
//   scores_pinned_count: 4,
//   scores_recent_count: 4,
//   statistics: {
//     count_100: 881776,
//     count_300: 5527510,
//     count_50: 94310,
//     count_miss: 362749,
//     level: { current: 100, progress: 5 },
//     global_rank: 57727,
//     global_rank_exp: null,
//     pp: 5177.98,
//     pp_exp: 0,
//     ranked_score: 8569579179,
//     hit_accuracy: 98.0114,
//     play_count: 32101,
//     play_time: 1745556,
//     total_score: 32060710104,
//     total_hits: 6503596,
//     maximum_combo: 1639,
//     replays_watched_by_others: 6,
//     is_ranked: true,
//     grade_counts: { ss: 0, ssh: 104, s: 0, sh: 503, a: 626 },
//     country_rank: 1002,
//     rank: { country: 1002 }
//   },
//   support_level: 0,
//   user_achievements: [
//     { achieved_at: '2023-03-11T12:46:33Z', achievement_id: 6 },
//     { achieved_at: '2023-02-03T17:49:56Z', achievement_id: 79 },
//     { achieved_at: '2023-02-03T17:38:58Z', achievement_id: 297 },
//     { achieved_at: '2023-02-03T16:58:55Z', achievement_id: 41 },
//     { achieved_at: '2022-10-16T11:31:14Z', achievement_id: 171 },
//     { achieved_at: '2022-10-16T10:09:32Z', achievement_id: 178 },
//     { achieved_at: '2022-10-16T10:06:29Z', achievement_id: 197 },
//     { achieved_at: '2022-10-16T06:53:07Z', achievement_id: 287 },
//     { achieved_at: '2022-10-16T06:42:12Z', achievement_id: 200 },
//     { achieved_at: '2022-10-15T04:57:10Z', achievement_id: 112 },
//     { achieved_at: '2022-10-05T15:40:42Z', achievement_id: 276 },
//     { achieved_at: '2022-10-05T15:37:09Z', achievement_id: 131 },
//     { achieved_at: '2022-10-05T15:35:57Z', achievement_id: 128 },
//     { achieved_at: '2022-10-05T15:34:50Z', achievement_id: 125 },
//     { achieved_at: '2022-10-05T15:32:17Z', achievement_id: 120 },
//     { achieved_at: '2022-10-05T15:26:48Z', achievement_id: 119 },
//     { achieved_at: '2022-10-05T15:21:35Z', achievement_id: 241 },
//     { achieved_at: '2022-09-30T09:58:05Z', achievement_id: 147 },
//     { achieved_at: '2022-09-30T09:58:05Z', achievement_id: 138 },
//     { achieved_at: '2022-09-12T07:49:04Z', achievement_id: 126 },
//     { achieved_at: '2022-08-03T14:15:25Z', achievement_id: 22 },
//     { achieved_at: '2022-07-25T06:21:05Z', achievement_id: 68 },
//     { achieved_at: '2022-04-25T09:58:41Z', achievement_id: 222 },
//     { achieved_at: '2022-03-25T13:48:56Z', achievement_id: 89 },
//     { achieved_at: '2022-03-11T09:44:15Z', achievement_id: 123 },
//     { achieved_at: '2022-02-21T08:56:22Z', achievement_id: 111 },
//     { achieved_at: '2022-02-20T13:54:26Z', achievement_id: 46 },
//     { achieved_at: '2022-01-20T12:37:28Z', achievement_id: 88 },
//     { achieved_at: '2021-12-25T17:18:38Z', achievement_id: 4 },
//     { achieved_at: '2021-10-28T11:43:44Z', achievement_id: 21 },
//     { achieved_at: '2021-10-18T12:52:35Z', achievement_id: 61 },
//     { achieved_at: '2021-08-12T22:06:02Z', achievement_id: 67 },
//     { achieved_at: '2021-08-05T05:40:43Z', achievement_id: 141 },
//     { achieved_at: '2021-07-26T14:57:18Z', achievement_id: 177 },
//     { achieved_at: '2021-07-19T00:35:58Z', achievement_id: 132 },
//     { achieved_at: '2021-06-22T03:09:54Z', achievement_id: 43 },
//     { achieved_at: '2021-05-21T06:33:42Z', achievement_id: 3 },
//     { achieved_at: '2021-03-13T06:14:09Z', achievement_id: 152 },
//     { achieved_at: '2020-12-12T15:05:08Z', achievement_id: 39 },
//     { achieved_at: '2020-12-10T14:44:11Z', achievement_id: 87 },
//     { achieved_at: '2020-12-10T14:39:18Z', achievement_id: 54 },
//     { achieved_at: '2020-11-30T12:19:40Z', achievement_id: 20 },
//     { achieved_at: '2020-09-19T15:12:29Z', achievement_id: 60 },
//     { achieved_at: '2020-08-31T14:59:03Z', achievement_id: 59 },
//     { achieved_at: '2020-08-25T14:17:10Z', achievement_id: 124 },
//     { achieved_at: '2020-08-18T15:40:32Z', achievement_id: 71 },
//     { achieved_at: '2020-08-16T09:59:47Z', achievement_id: 66 },
//     { achieved_at: '2020-08-16T09:45:32Z', achievement_id: 58 },
//     { achieved_at: '2020-07-23T00:44:04Z', achievement_id: 65 },
//     { achieved_at: '2020-07-22T15:35:13Z', achievement_id: 148 },
//     { achieved_at: '2020-07-22T14:44:29Z', achievement_id: 40 },
//     { achieved_at: '2020-07-22T07:27:41Z', achievement_id: 194 },
//     { achieved_at: '2020-07-22T07:08:53Z', achievement_id: 1 },
//     { achieved_at: '2020-07-22T06:23:11Z', achievement_id: 15 },
//     { achieved_at: '2020-07-20T00:44:23Z', achievement_id: 137 },
//     { achieved_at: '2020-07-20T00:39:49Z', achievement_id: 176 },
//     { achieved_at: '2020-07-18T18:40:52Z', achievement_id: 121 },
//     { achieved_at: '2020-07-16T23:17:13Z', achievement_id: 64 },
//     { achieved_at: '2020-07-11T06:55:06Z', achievement_id: 63 },
//     { achieved_at: '2020-07-07T14:10:55Z', achievement_id: 57 },
//     { achieved_at: '2020-07-07T14:02:43Z', achievement_id: 127 },
//     { achieved_at: '2020-07-06T15:34:38Z', achievement_id: 122 },
//     { achieved_at: '2020-07-05T11:47:12Z', achievement_id: 56 },
//     { achieved_at: '2020-07-04T15:54:02Z', achievement_id: 55 }
//   ],
//   rank_history: {
//     mode: 'osu',
//     data: [
//       57417, 57474, 57540, 57582, 57640, 57693, 57744, 57814,
//       57880, 57927, 57973, 58010, 58057, 58109, 58166, 58208,
//       58251, 58307, 58358, 58412, 58468, 58508, 58556, 58600,
//       58649, 57960, 57965, 57961, 58009, 58048, 58109, 58145,
//       58191, 58234, 58275, 58316, 58339, 58385, 58397, 58366,
//       58347, 58199, 58224, 58266, 58284, 58296, 58113, 58132,
//       58161, 58178, 58224, 58257, 58282, 58323, 58354, 58397,
//       58427, 58459, 58507, 58530, 58553, 57911, 57954, 57901,
//       57930, 57853, 58001, 58032, 58062, 58098, 58104, 58108,
//       58105, 58126, 58166, 58172, 57704, 57686, 57719, 57602,
//       57626, 57662, 57540, 57570, 57594, 57620, 57664, 57691,
//       57721, 57727
//     ]
//   },
//   rankHistory: {
//     mode: 'osu',
//     data: [
//       57417, 57474, 57540, 57582, 57640, 57693, 57744, 57814,
//       57880, 57927, 57973, 58010, 58057, 58109, 58166, 58208,
//       58251, 58307, 58358, 58412, 58468, 58508, 58556, 58600,
//       58649, 57960, 57965, 57961, 58009, 58048, 58109, 58145,
//       58191, 58234, 58275, 58316, 58339, 58385, 58397, 58366,
//       58347, 58199, 58224, 58266, 58284, 58296, 58113, 58132,
//       58161, 58178, 58224, 58257, 58282, 58323, 58354, 58397,
//       58427, 58459, 58507, 58530, 58553, 57911, 57954, 57901,
//       57930, 57853, 58001, 58032, 58062, 58098, 58104, 58108,
//       58105, 58126, 58166, 58172, 57704, 57686, 57719, 57602,
//       57626, 57662, 57540, 57570, 57594, 57620, 57664, 57691,
//       57721, 57727
//     ]
//   },
//   ranked_and_approved_beatmapset_count: 0,
//   unranked_beatmapset_count: 0
// }