const fetchBtn = document.querySelector('.fetch-btn');
const displayData = document.querySelector('.display-data');

function getData() {
  fetch('http://127.0.0.1:5500/data.txt')
    .then((response) => response.text())
    .then((data) => {
      displayData.innerText = data;
    });
}
