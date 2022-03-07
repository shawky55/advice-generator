const ADVICE_CONTENT = document.querySelector('.advice__content');
const ADVICE_ID = document.getElementById('adviceid');
const ADVICE_BUTTON = document.querySelector('.advice__button');
console.log('hi');
function newAdvice() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.adviceslip.com/advice');
  request.send();
  request.addEventListener('load',()=>{
    let {
      slip: { id, advice },
    } = JSON.parse(request.responseText);
    ADVICE_CONTENT.textContent = advice;
    ADVICE_ID.textContent = id;
  });
}

ADVICE_BUTTON.addEventListener('click', function () {
  newAdvice();
});
