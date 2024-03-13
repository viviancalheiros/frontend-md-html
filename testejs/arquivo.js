
const numero_p = document.getElementById('#numero_p').value;
const numero_q = document.getElementById('#numero_q').value;
const numero_e = document.getElementById('#numero_e').value;

console.log(numero_p);

let blob = new Blob([numero_p, numero_q, numero_e],
{type: 'text/plain;charset=utf-8'});

fileSaver.saveAs(blob, 'chavepublica.txt'); 