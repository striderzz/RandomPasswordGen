const inputBox=document.querySelector('.password');
const passwordButton=document.querySelector('.generate');
const copyButton=document.querySelector('.copybutton');

passwordButton.addEventListener('click',CreatePassword);
copyButton.addEventListener('click',copyPassword);


const Upper="ABCDEFGHIJKLMNOPQUVXYZ";
const Numbers="1234567890";
const Symbols="!@#$%^&*()_";
let maxLength=12;

const AllSymbols=Upper+Numbers+Symbols;
console.log(AllSymbols);

function CreatePassword()
{
  password='';
  console.log('click');
  while(password.length<maxLength)
  {
    password+= AllSymbols[Math.floor(Math.random() * AllSymbols.length)];
  }
  inputBox.value=password;

}
function copyPassword()
{
    inputBox.select();
    document.execCommand("copy");
}