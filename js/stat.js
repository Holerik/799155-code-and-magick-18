'use strict';
var CLOUD_LEFT = 100;
var CLOUD_TOP = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_WIDTH = 10;
var MSG_LEFT = CLOUD_LEFT + 20;
var MSG_TOP = CLOUD_TOP + 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GIST_HEIGHT = 150;
var TEXT_YSTEP = 20;
var FONT_GAP = 30;

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_LEFT + SHADOW_WIDTH, CLOUD_TOP + SHADOW_WIDTH, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(CLOUD_LEFT, CLOUD_TOP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText('Ура вы победили!', MSG_LEFT, MSG_TOP);
  ctx.fillText('Список результатов:', MSG_LEFT, MSG_TOP + TEXT_YSTEP);
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  var barScale = GIST_HEIGHT / maxTime;
  var txtBottom = CLOUD_TOP + CLOUD_HEIGHT - FONT_GAP;

  for (i = 0; i < names.length; i++) {
    var shift = BAR_GAP * (i + 1) + BAR_WIDTH * i;
    var barHeight = Math.ceil(times[i] * barScale);
    ctx.fillText(names[i], CLOUD_LEFT + shift, txtBottom);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100).toString() + '%, ' + '50%)';
    }
    ctx.fillRect(CLOUD_LEFT + shift, txtBottom - barHeight - TEXT_YSTEP / 2, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]).toString(), CLOUD_LEFT + shift, txtBottom - barHeight - FONT_GAP);
  }
};
