import generatesPassword from './generators';

const pwGenerated = document.querySelector('.pw-generated');
const charQty = document.querySelector('.char-qty');
const chkUppercase = document.querySelector('.chk-uppercase');
const chkLowercase = document.querySelector('.chk-lowercase');
const chkNum = document.querySelector('.chk-num');
const chkSymbols = document.querySelector('.chk-symbols');
const generatesPw = document.querySelector('.pw-generates');

export default () => {
  generatesPw.addEventListener('click', () => {
    pwGenerated.innerHTML = generate();
  });
};

function generate() {
  const password = generatesPassword(
    charQty.value,
    chkUppercase.checked,
    chkLowercase.checked,
    chkNum.checked,
    chkSymbols.checked

  );
    return password || 'Nada selecionado.';
}