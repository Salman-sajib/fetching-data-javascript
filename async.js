const fetchBtn = document.querySelector('.fetch-btn');
const displayData = document.querySelector('.display-data');

async function getData() {
  const response = await fetch('http://127.0.0.1:5500/data.txt');
  // console.log(response);
  const data = await response.text();
  // console.log(data);

  displayData.innerText = data;
}
