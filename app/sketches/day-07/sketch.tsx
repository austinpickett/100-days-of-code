import P5 from 'p5';

export const sketch = () =>
  new P5((inst) => {
    const p = inst as P5;

    p.setup = () => {
      p.angleMode(p.DEGREES);
      p.rectMode(p.CENTER);
      p.createCanvas(p.windowWidth, p.windowHeight);

      p.background(0);
      p.fill(0);
      p.stroke(255);
    };

    p.draw = () => {
      p.translate(p.width / 2 - 10, p.height / 2 - 10);
      p.rotate(p.frameCount);

      for (let i = 1; i <= p.width * 2; i += 2) {
        p.rotate(1);
        p.square(0, 0, p.width * 2 - i);
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  }, document.querySelector('.day-06') as HTMLElement);

export default sketch;
