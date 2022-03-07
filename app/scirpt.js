const ADVICE_CONTENT = document.querySelector('.advice__content p');
const ADVICE_ID = document.getElementById('adviceid');
const ADVICE_BUTTON = document.querySelector('.advice__button');
const errorMessage=document.querySelector('.error');
let adviceData;
function renderAdvice(id,adviceText){
    ADVICE_CONTENT.textContent = adviceText;
    ADVICE_ID.textContent = id;
    errorMessage.classList.add("hidden")
}

const newAdvice=()=>{
 fetch('https://api.adviceslip.com/advice')
 .then((respone)=>respone.json())
 .then((data)=>{
let { slip: {id,advice} } = data;
renderAdvice(id,advice);
  }).catch(function(error){
error.message='lose connection';
errorMessage.classList.remove('hidden')
  });

}

ADVICE_BUTTON.addEventListener('click', ()=> {
  newAdvice();
});
