<script>
const resultDOM = document.getElementById('result');
const copybtnDOM = document.getElementById('copy');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');
const form = document.getElementById('passwordGeneratorForm');
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
copybtnDOM.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const passwordToCopy = resultDOM.innerText;
  if (!passwordToCopy) return;
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password Copied to Clipboard');
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});
let generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
</script>