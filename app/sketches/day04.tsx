import P5 from 'p5';

export const day04 = () =>
  new P5((inst) => {
    const p = inst as P5;

    const h = 1000;
    const w = 1000;
    const weight = 50;
    const blurSize = 50;
    const diameter = 200;
    const circlesNum = 40;

    p.setup = () => {
      p.createCanvas(w, h);
      p.background('#FFF');
      p.noStroke();

      for (let i = 0; i <= circlesNum; i++) {
        let r = p.random(255);
        let g = p.random(255);
        let b = p.random(255);
        let alpha = p.random(255);

        let c = p.color(r, g, b, alpha);

        p.fill(c);
        p.circle(p.random(w), p.random(h), diameter);
      }

      p.filter(p.BLUR, blurSize);

      p.noFill();
      p.stroke('#FFF');
      p.strokeWeight(weight);
      p.rect(0, 0, w, h);
    };
  }, document.querySelector('.day-04') as HTMLElement);
