document.querySelector('.button1').addEventListener('click', () => {
  document.querySelector('.child').remove();
});

document.querySelector('.button2').addEventListener('click', () => {
  const element = document.querySelector('.target');
  element.setAttribute('my-attribute', 'hoge');

});

document.querySelector('.button3').addEventListener('click', (e) => {
  const element = document.querySelector('.target');
  element.parentElement.removeChild(element);
});
