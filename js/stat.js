/**
 * Created by FoxyGirl on 21.01.2017.
 */
'use strict'

window.renderStatistics = function(ctx, names, times){

  var drawCloudNew = function(ctx, fillStyle, x, y, width, height) {
    var offset = 10;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + offset, y + height / 2);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + width / 2, y + height - offset);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width - offset, y + height / 2);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y + offset);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
  };

  var rectWidth = 420;
  var rectHeight = 270;
  var heightBarChart = 150;
  var widthBar = 40;
  var stepBar = 50;
  var colorCurrentPlayer = 'rgba(255, 0, 0, 1)';
  var barColor;
  var topOut = 90;
  var textOut = 5;
  var sizeFont = 16;

  drawCloudNew(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20, rectWidth, rectHeight);
  drawCloudNew(ctx, '#FFFFFF', 100, 10, rectWidth, rectHeight);

  ctx.fillStyle = '#000000';
  ctx.font = 'normal' + sizeFont + 'px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 42);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = 0;

  for (var i = 0; i < times.length; i++) {
    maxTime = maxTime < times[i] ? times[i] : maxTime;
  }

  var stepHeight = heightBarChart / maxTime;
  var startX = 120 + (380 - stepBar * (times.length - 1) - widthBar * times.length) / 2;

  for (var i = 0; i < times.length; i++) {
    var barHeight = Math.round(times[i] * stepHeight);
    var startY = topOut + heightBarChart - barHeight;

    if (names[i] === 'Вы') {
      barColor = colorCurrentPlayer;
      ctx.font = 'bold ' + sizeFont + 'px PT Mono';
    } else {
      barColor = 'rgba(0, 0, ' + ( Math.random() * 5 * 50 ).toFixed() + ', ' + ( Math.random()*0.9 + 0.1 ) + ')';
      ctx.font = 'normal ' + sizeFont + 'px PT Mono';
    }

    ctx.fillStyle = barColor;
    ctx.fillRect(startX, startY, widthBar, barHeight);

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round(times[i]), startX + widthBar / 2, startY - textOut);
    ctx.fillText(names[i], startX + widthBar / 2, startY + barHeight + textOut + sizeFont);

    startX = startX + widthBar + stepBar;
  }

};
