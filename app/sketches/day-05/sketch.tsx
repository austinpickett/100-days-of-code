import P5 from 'p5';

// eslint-disable-next-line import/no-anonymous-default-export
export const sketch = () =>
  new P5((inst) => {
    const p = inst as P5;

    p.setup = () => {
      p.createCanvas(1000, 1000);

      p.frameRate(1);
    };

    p.draw = () => {
      p.background(255);
      p.noFill();

      const layers = 6;
      const sqSize = 40;
      const spacing = 100;
      const rows = p.height / spacing;
      const cols = p.width / spacing;

      p.translate(50, 50);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          for (let z = 0; z < layers; z++) {
            p.stroke(0, 0, 255, p.random() * 100);

            p.push();
            p.beginShape();
            p.vertex(p.random() * -sqSize, p.random() * -sqSize);
            p.vertex(p.random() * sqSize, p.random() * -sqSize);
            p.vertex(p.random() * sqSize, p.random() * sqSize);
            p.vertex(p.random() * -sqSize, p.random() * sqSize);

            p.translate(spacing * j, spacing * i);
            p.endShape(p.CLOSE);
            p.pop();
          }
        }
      }
    };
  }, document.querySelector('.day-05') as HTMLElement);
