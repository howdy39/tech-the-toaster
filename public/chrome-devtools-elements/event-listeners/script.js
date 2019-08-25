document.querySelector('.ancestor').addEventListener('click', () => {
  console.log('.ancestor-click');
});

document.querySelector('button').addEventListener('click', () => {
  console.log('button-click');
});

$('button').click( ()=> {
  console.log('jquery-button-click');
});

document.addEventListener('wheel', () => {
  console.log('document-wheel');
}, { passive: true });

