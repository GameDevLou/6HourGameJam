var peterriver = "rgba(52, 152, 219, 1)",
  nephritis = "rgba(39, 174, 96, 1)",
  pomegranate = "rgba(192, 57, 43, 1)";

var totalVotes = 0;

var canvasRed = document.getElementById('redCanvas');
var contextRed = canvasRed.getContext('2d');
var redCount = 0;
$('.team.red').click(function() {
  redCount++;
  totalVotes++;

});

var canvasBlue = document.getElementById('blueCanvas');
var contextBlue = canvasBlue.getContext('2d');
var blueCount = 0;
$('.team.blue').click(function() {
  blueCount++;
  totalVotes++;

});

var canvasGreen = document.getElementById('greenCanvas');
var contextGreen = canvasGreen.getContext('2d');
var greenCount = 0;
$('.team.green').click(function() {
  greenCount++;
  totalVotes++;

});


setInterval(update, 60);

function update() {
  $('#totalVotes').text(totalVotes);
  $('.team.red .counter').text(percentOf(redCount, totalVotes) + "%");
  $('.team.blue .counter').text(percentOf(blueCount, totalVotes) + "%");
  $('.team.green .counter').text(percentOf(greenCount, totalVotes) + "%");


  contextRed.clearRect(0, 0, canvasRed.width, canvasRed.height);
  updateColor(canvasRed, contextRed, percentOf(redCount, totalVotes));

  contextBlue.clearRect(0, 0, canvasBlue.width, canvasBlue.height);
  updateColor(canvasBlue, contextBlue, percentOf(blueCount, totalVotes));

  contextGreen.clearRect(0, 0, canvasGreen.width, canvasGreen.height);
  updateColor(canvasGreen, contextGreen, percentOf(greenCount, totalVotes));
}

function updateColor(canvas, context, percentFull) {
  if (context === contextRed) {
    drawFill(canvas, context, percentFull, pomegranate);
  } else if (context === contextBlue) {
    drawFill(canvas, context, percentFull, peterriver);
  } else if (context === contextGreen) {
    drawFill(canvas, context, percentFull, nephritis);
  }
}



function drawFill(canvas, context, percentFull, color) {
  var size = Math.floor(canvas.height * (percentFull / 100));
  console.log(size);
  context.fillStyle = color;
  context.fillRect(0, canvas.height - size, canvas.width, size);
}



function percentOf(number, total) {
  return Math.floor((number / total) * 100);
}



function drawLines(canvas, context, qty, color) {
  for (var i = 0; i < qty; i++) {
    var size = 5;
    var offset = (i + 1) * size;
    console.log(offset);
    context.fillStyle = color;
    context.fillRect(0, canvas.height - offset, canvas.width, size);
  }
}