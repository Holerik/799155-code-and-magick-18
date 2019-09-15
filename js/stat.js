'use strict';
var CLOUD_LEFT = 100;
var CLOUD_TOP = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_WIDTH = 10;
var MSG_SHIFT = 20;
var MSG_LEFT = CLOUD_LEFT + MSG_SHIFT;
var MSG_TOP = CLOUD_TOP + MSG_SHIFT;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GIST_HEIGHT = 150;
var TEXT_YSTEP = 20;
var FONT_GAP = 30;
var HSL_COLOR = 240;

var randomHsl = function (hslColor) {
  return 'hsl(' + hslColor.toString() + ', ' + Math.floor(Math.random() * 100).toString() + '%, ' + '50%)';
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxValue = function (values) {
  var maxValue = 0;
  for (var i = 0; i < values.length; i++) {
    if (maxValue < values[i]) {
      maxValue = values[i];
    }
  }
  return maxValue;
};

var renderBar = function (ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_LEFT + SHADOW_WIDTH, CLOUD_TOP + SHADOW_WIDTH, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_LEFT, CLOUD_TOP, '#fff');
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', MSG_LEFT, MSG_TOP);
  ctx.fillText('Список результатов:', MSG_LEFT, MSG_TOP + TEXT_YSTEP);
  var barScale = GIST_HEIGHT / getMaxValue(times);
  var txtBottom = CLOUD_TOP + CLOUD_HEIGHT - FONT_GAP;

  for (var i = 0; i < names.length; i++) {
    var barShift = BAR_GAP * (i + 1) + BAR_WIDTH * i;
    var barHeight = Math.ceil(times[i] * barScale);
    ctx.fillText(names[i], CLOUD_LEFT + barShift, txtBottom);
    var color = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomHsl(HSL_COLOR);
    renderBar(ctx, color, CLOUD_LEFT + barShift, txtBottom - barHeight - TEXT_YSTEP / 2, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]).toString(), CLOUD_LEFT + barShift, txtBottom - barHeight - FONT_GAP);
  }
};
