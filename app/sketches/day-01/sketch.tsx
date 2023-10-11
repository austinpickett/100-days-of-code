'use client';
import P5 from 'p5';

export const sketch = () => {
  new P5((inst) => {
    const p = inst as P5;

    const lashCount = 18;
    const eyeWidth = 100;
    const eyeHeight = 34.3;
    const pupil = eyeHeight / 1.343;

    p.setup = () => {
      p.createCanvas(1000, 1000);
      p.rectMode(p.CENTER);
      p.angleMode(p.DEGREES);
      p.frameRate(1);
    };

    p.draw = () => {
      p.background('#fff6e6');
      p.noStroke();

      const rand = Math.round(p.random(100));
      const rand2 = Math.round(p.random(100));
      const rows = 10;
      const cols = 10;
      const spacing = 40;

      let counter = 1;

      const cw = p.width / (cols + 2);
      const ch = p.height / (rows + 2);
      p.translate(cw * 1.5, ch * 1.5);

      for (let i = 1; i <= cols; i++) {
        for (let j = 1; j <= rows; j++) {
          if (rand2 === counter) {
            drawLashes(i, j, spacing, 'rebeccapurple', 'down');
            drawEye(i, j, spacing);
          } else if (rand === counter) {
            drawLashes(i, j, spacing, '#FF0000', 'up');
            drawEye(i, j, spacing);
          }

          counter++;
        }
      }
    };

    const drawLashes = (
      i: number,
      j: number,
      spacing: number,
      color: string,
      direction = 'up'
    ) => {
      for (let x = 1; x <= lashCount; x++) {
        p.push();
        p.noFill();
        p.stroke(color);
        p.strokeWeight(3);

        p.translate(-eyeWidth / 2 + lashCount / 2 - 2, 0);
        let start, end;

        p.beginShape();
        p.curveVertex(j * spacing + x * 5, i * spacing);
        p.curveVertex(j * spacing + x * 5, i * spacing);

        let multiplier = 2;

        for (let y = 1; y <= 60; y++) {
          start = i * spacing - 20 * y;
          end = -i * spacing;

          if (direction != 'up') {
            start = i * spacing + 20 * y;
            end = p.height;
          }

          p.curveVertex(j * spacing - multiplier + x * 5, start);
          multiplier *= -1;
        }

        p.curveVertex(j * spacing + x * 5, end as number);
        p.curveVertex(j * spacing + x * 5, end as number);
        p.endShape();

        p.pop();
      }
    };

    const drawEye = (i: number, j: number, spacing: number) => {
      p.push();
      p.fill('#FFF');
      p.ellipse(j * spacing, i * spacing, eyeWidth, eyeHeight);

      p.fill('#000');
      p.circle(j * spacing, i * spacing, pupil);
      p.pop();
    };
  }, document.querySelector('.day-01') as HTMLElement);
};

export default sketch;
