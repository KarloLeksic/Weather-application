// Get canvas and set 2d context
let canvas = document.querySelector('#uv-index-graph');
let ctx = canvas.getContext('2d');

// Center of the circle
let centerX = canvas.width / 2;
let centerY = canvas.height / 2 + 45;

// Circle radius to fit in canvas
let radius = 79;

// Gray line thickness
let lineThickness = 15;

// Colored line thickness
let coloredLineThickness = 25;

// Draw graph base (gray line)
function drawGrayArc() {
  // Drawing graph base
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, Math.PI, 0);
  ctx.strokeStyle = '#d3d3d3';
  ctx.lineWidth = lineThickness;
  ctx.stroke();
  ctx.closePath();
}

// Draw line depending on percentage
function drawColoredLine(percentage) {
  // Calculating angle
  let angle = Math.PI + Math.PI * percentage / 100;

  // Calculating color depending on percentage
  let hue = 120 - (percentage / 100) * 120;
  let rgbColor = hslToRgb(hue, 100, 50);

  // Draw colored line
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, Math.PI, angle);
  ctx.strokeStyle = 'rgb(' + rgbColor.join(', ') + ')';
  ctx.lineWidth = coloredLineThickness;
  ctx.stroke();
  ctx.closePath();
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    let hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Draw label in the middle of graph
function drawLabel(percentage) {
  ctx.font = '40px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(percentage, centerX, centerY - 30);
}

function animateGraph(uvIndex) {
  const uvIndexPercentage = scale(uvIndex, 0, 15, 0, 100);
  let percentage = 0;
  let uvIndexCounter = 0;

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrayArc();
    drawColoredLine(percentage);
    drawLabel(uvIndexCounter);

    if (percentage < uvIndexPercentage) {
      percentage += 1;
      requestAnimationFrame(drawFrame);
    }

    if (percentage % 6 === 0) {
      uvIndexCounter++;
      if (uvIndexCounter > uvIndex) {
        uvIndexCounter = uvIndex;
      }
    }
  }

  drawFrame();
}

// Pokretanje animacije
//const uvIndex = 15;
//animateGraph(uvIndex);

function scale(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}