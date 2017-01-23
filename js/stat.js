/**
 * Created by FoxyGirl on 21.01.2017.
 */
'use strict';

window.renderStatistics = function (ctx, names, times) {
  var rectWidth = 420;
  var rectHeight = 270;
  var heightBarChart = 150;
  var widthBar = 40;
  var stepBar = 50;
  var colorCurrentPlayer = 'rgba(255, 0, 0, 1)';
  var topOut = 90;
  var textOut = 5;
  var sizeFont = 16;
  var stepHeight;
  var startXCloud = 100;
  var startYCloud = 10;
  var offsetShadow = 10;
  var paddingCloud = 20;
  var offsetText = sizeFont / 2 - 2;
  var startXBar = (startXCloud + paddingCloud) + (rectWidth - 2 * paddingCloud - stepBar * (times.length - 1) - widthBar * times.length) / 2;

  drawCloud('rgba(0, 0, 0, 0.7)', startXCloud + offsetShadow, startYCloud + offsetShadow, rectWidth, rectHeight);
  drawCloud('#FFFFFF', startXCloud, startYCloud, rectWidth, rectHeight);

  ctx.fillStyle = '#000000';
  ctx.font = 'normal' + sizeFont + 'px PT Mono';
  ctx.fillText('Ура вы победили!', startXCloud + paddingCloud, paddingCloud + sizeFont + offsetText);
  ctx.fillText('Список результатов:', startXCloud + paddingCloud, paddingCloud + (sizeFont + offsetText) * 2);

  var maxTime = Math.max.apply(null, times);
  stepHeight = heightBarChart / maxTime;

  for (var i = 0; i < times.length; i++) {
    var barHeight = Math.round(times[i] * stepHeight);
    var startYBar = topOut + heightBarChart - barHeight;

    if (names[i] === 'Вы') {
      ctx.fillStyle = colorCurrentPlayer;
      ctx.font = 'bold ' + sizeFont + 'px PT Mono';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + (Math.random() * 5 * 50).toFixed() + ', ' + (Math.random() * 0.9 + 0.1) + ')';
      ctx.font = 'normal ' + sizeFont + 'px PT Mono';
    }
    ctx.fillRect(startXBar, startYBar, widthBar, barHeight);

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round(times[i]), startXBar + widthBar / 2, startYBar - textOut);
    ctx.fillText(names[i], startXBar + widthBar / 2, startYBar + barHeight + textOut + sizeFont);

    startXBar = startXBar + widthBar + stepBar;
  }

  function drawCloud(fillStyle, x, y, width, height) {
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
  }

};
