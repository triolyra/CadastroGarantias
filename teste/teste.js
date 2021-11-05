//function capturar() {
   // var  resgatando = document.getElementById("produto").value;
//document.getElementById("prodValor").innerHTML = resgatando;
//}

const input1 = document.querySelector('[name="exemplo1"]');
const input2 = document.querySelector('[name="exemplo2"]');
const texto = document.querySelector('p.texto1');
const texto2 = document.querySelector('p.texto2');
//const card = document.querySelector('.card')
let textoInput1 = '';
let textoInput2 = '';

const verificaInput = () => {
  if((textoInput1.length = 5) && (textoInput2.length > 11)) {
    //card.style.display = 'block';
  }
}

input1.addEventListener('input', () => {
  // console.log(input.value);
  texto.innerText = input1.value;
  textoInput1 = input1.value;
  verificaInput();
});

input2.addEventListener('input', () => {
  // console.log(input.value);
  // texto.innerText = input.value;
  texto2.innerText = input2.value;
  textoInput2 = input2.value;
  verificaInput();
});