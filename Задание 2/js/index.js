const btnNode = document.querySelector('.j-btn-test');
btnNode.addEventListener('click', () => {
  alert(`Ширина: ${window.innerWidth}, Высота: ${window.innerHeight}`);
});