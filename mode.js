document.getElementById('toggle-mode').onclick = function() {
  document.body.classList.toggle('night');
  this.textContent = document.body.classList.contains('night') ? 'Day Mode' : 'Night Mode';
};