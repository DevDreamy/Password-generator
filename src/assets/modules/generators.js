const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUppercase = () => String.fromCharCode(rand(65, 91));
const generateLowercase = () => String.fromCharCode(rand(97, 123));
const generateNum = () => String.fromCharCode(rand(48, 58));
const specialchar = ',.;~^[]{}!@#$%&*()_+=-';
const generateSym = () => specialchar[rand(0, specialchar.length)];

export default function generatesPassword(
  qty,
  uppercase,
  lowercase,
  numbers,
  specialchar,
) {
  const pwArray = [];
  qty = Number(qty);

  for (let i = 0; i < qty; i++) {
    uppercase && pwArray.push(generateUppercase());
    lowercase && pwArray.push(generateLowercase());
    numbers && pwArray.push(generateNum());
    specialchar && pwArray.push(generateSym());
  }

  return pwArray.join('').slice(0, qty);
}
