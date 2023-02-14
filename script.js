let mainList = document.getElementById('mainListDiv');
let mediaButton = document.getElementById('mediaButton');

mediaButton.onclick = function () {
  mainList.classList.toggle('show_list');
  mediaButton.classList.toggle('active');
};
