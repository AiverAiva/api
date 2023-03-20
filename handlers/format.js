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

module.exports = { rect, number, numberSuffix };