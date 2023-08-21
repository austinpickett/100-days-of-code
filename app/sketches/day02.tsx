import P5 from 'p5';

export const day02 = () =>
  new P5((inst) => {
    const p = inst as P5;

    const columns = 20;
    const rows = 20;
    const fontSize = 48;

    p.setup = () => {
      p.createCanvas(1000, 1000);
      p.angleMode(p.DEGREES);
      p.background('#FFF');
      p.textSize(fontSize);
      p.textAlign(p.CENTER);

      p.translate(-fontSize, 0);
      p.translate(p.width / 2, p.height / 2);
      p.translate(-p.pow(columns, 2), -p.pow(rows, 2));

      for (var i = 1; i <= columns; i++) {
        for (var j = 1; j <= rows; j++) {
          let wave = p.sin(i + j);

          p.fill('#FF0000');
          p.push();
          p.translate(i * 40, j * 40);
          p.rotate(p.degrees(p.sin(i * j) * 2));
          p.text('I', 0, wave);
          p.pop();
        }
      }
    };
  }, document.querySelector('.day-02') as HTMLElement);
