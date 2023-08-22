import P5 from 'p5';

export const day03 = () =>
  new P5((inst) => {
    const p = inst as P5;

    p.setup = () => {
      p.createCanvas(1000, 640);
      p.background('#FFF');
      p.noFill();

      for (let i = 0; i <= 90; i++) {
        p.push();
        p.translate(0, 5 * i);

        p.strokeWeight(1);
        p.beginShape();
        p.curveVertex(10, 65);
        p.curveVertex(10, 85);
        p.curveVertex(25, 55);
        p.curveVertex(80, 150);

        p.curveVertex(150, 55);
        p.curveVertex(250, 125);
        p.curveVertex(350, 65);

        p.curveVertex(450, 100);
        p.curveVertex(520, 80);

        p.curveVertex(p.width - 10, 90);
        p.curveVertex(p.width - 10, 90);
        p.endShape();
        p.pop();
      }
    };
  }, document.querySelector('.day-03') as HTMLElement);
