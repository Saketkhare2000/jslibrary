const intro = new Animator('h1');
const para = new Animator('.para');
const button = document.querySelector('button');
const para2 = new Animator('.para2');

button.addEventListener('click', () => {
  intro.move(1, true, {x: 0, y: 200});
  intro.fadeOut(1, true);

  para.move(1, true, {x: 200, y: 0});
  para.fadeOut(1, true);

  para2.fadeIn(1, true);
});
