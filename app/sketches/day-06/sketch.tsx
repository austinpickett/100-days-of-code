import P5 from 'p5';

export const sketch = () =>
  new P5((inst) => {
    const p = inst as P5;

    p.setup = () => {
      p.createCanvas(640, 640);

      p.background(23, 24, 21);
      p.noStroke();

      const layers = 6;
      const sqSize = 40;
      const spacing = 100;
      const rows = Math.floor(p.height / spacing) - 1;
      const cols = Math.floor(p.width / spacing) - 1;
      const x = p.width - cols * spacing - sqSize / 2;
      const y = p.height - rows * spacing - sqSize / 2;

      p.translate(x, y);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          for (let z = 0; z < layers; z++) {
            p.fill(255, p.random() * 255);

            p.push();
            p.beginShape();
            p.vertex(p.random() * -sqSize, p.random() * -sqSize);
            p.vertex(p.random() * sqSize, p.random() * -sqSize);
            p.vertex(p.random() * sqSize, p.random() * sqSize);
            p.vertex(p.random() * -sqSize, p.random() * sqSize);

            p.translate(spacing * j, spacing * i);
            p.blendMode(p.OVERLAY);
            p.endShape(p.CLOSE);
            p.pop();
          }
        }
      }
    };
  }, document.querySelector('.day-06') as HTMLElement);

export default sketch;
