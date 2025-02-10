const model = document.querySelector('.modal.hidden');
const overlay = document.querySelector('.overlay.hidden');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

// function for closing model
const closeModel = function (){
    console.log("BUTTON PRESS");
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModel = function() {
    console.log('BUTTON CLICKED');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const escapeKey = function(e){
    if (e.key === 'Escape' && !model.classList.contains('hidden')){
        closeModel();
    }
}

// opening model 
for (let i=0; i<btnOpenModel.length ; i++)
    btnOpenModel[i].addEventListener('click', openModel); 


btnCloseModel.addEventListener('click' , closeModel);
overlay.addEventListener('click' , closeModel);

document.addEventListener('keydown',escapeKey);