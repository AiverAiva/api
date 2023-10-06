import { RouterBuilder } from 'next-api-handler';
const { registerFont, createCanvas, loadImage } = require('canvas');

const router = new RouterBuilder();

var canvas = createCanvas(1200, 624);
router.get((req, res) => 'ok');

export default router.build();