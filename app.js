let numberContainer = document.querySelector('.numbers');
let numberResult = document.querySelector('.resultrate');
let submit = document.querySelector('.submit');
let rating = document.querySelector('.rating');
let thankyou = document.querySelector('.thankyou');

numberContainer.addEventListener('click', event=> {
    let numberSelected = event.target.innerText;
    numberResult.innerText = numberSelected;
    if (numberSelected >= 1 && numberSelected <= 5) {
        submit.addEventListener('click', ()=> {
            rating.style.display = 'none';
            thankyou.style.display = 'block';
        })
    }
}); 

