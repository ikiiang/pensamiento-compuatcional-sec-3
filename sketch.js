function setup() {
  createCanvas(300, 300);
}

function draw() {
  //circulos negros
  background('#e9e7ea');
  let c= color (0,0,0);
  fill(c);
  ellipse (53, 53, 45, 45)
ellipse (101,53, 45, 45)
ellipse (149,53, 45, 45)
ellipse (197,53,45,45)
ellipse (245,53,45,45)
ellipse (53, 101, 45, 45)
ellipse (101, 101 ,45, 45)
//circulo rosado
  let c1= color ('#e35c7a');
  fill(c1);
  noStroke();
ellipse (149, 101, 45, 45)
//circulos negros de nuevo
  let c2= color (0,0,0);
  fill (c2);
ellipse (197, 101, 45, 45)
ellipse (245, 101, 45, 45)
ellipse (53, 149, 45, 45)
ellipse (101, 149, 45, 45)
ellipse (149, 149, 45, 45)
ellipse (197, 149, 45, 45)
ellipse (245, 149, 45, 45)
ellipse (53, 197, 45, 45)
ellipse (101, 197, 45, 45)
ellipse (149, 197, 45, 45)
ellipse (197, 197, 45, 45)
ellipse (245, 197, 45, 45)
ellipse (53, 245, 45, 45)
ellipse (101,245, 45, 45)
ellipse (149, 245, 45, 45)
ellipse (197, 245, 45, 45) 
ellipse (245, 245, 45, 45)
//empezar con los circulos
 let c3= color ('#4f2b51');
  fill (c3);
square (196, 53, 50)
  let c4= color ('#306062')
  fill(c4);
square (52,100, 50)
 let c5= color ('#cc5a36')
 fill (c5);
square(102, 150, 50)
  let c6= color ('#ecd45a')
  fill (c6);
square( 152, 200, 50)
  let c7= color ('#1b2f78')
  fill(c7);
square (52, 200,50)
  let c8=color ('#e9e7ea')
  fill(c8);
//triangulo final
triangle(150, 151, 200, 151, 173, 105);
}