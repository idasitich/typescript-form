// Import stylesheets
import './style.css';

// Write TypeScript code!
let text: string = ' ';
let text2: string = ' ';
type arr = string;

for (let j = 0; j < 1; j++) {
  var yoo: string = prompt('Please enter your name.');
  if (yoo == '') {
    yoo;
    break;
  }
  var yoo2: string = prompt('Please enter your school.');
  if (yoo == '') {
    yoo;
    break;
  }
  text = yoo;
  text2 = yoo2;

  const Name = {
    ' Nama anda adalah': text,
    ' Sekolah anda adalah': text2,
  };

  const arr: arr = Object.entries(Name);
  let display = document.getElementById('app');
  display.innerHTML =
    arr[0].toString().replace(',', ' ') +
    '<br>' +
    arr[1].toString().replace(',', ' ');
}
