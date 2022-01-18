// using selectors inside the elements => method : 1

const questions = document.querySelectorAll('.question');

questions.forEach(function (question){
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn); shows the which btn im reffering
    btn.addEventListener('click', function (){

        questions.forEach(function(item){
            if(item !== question){
                // closes the any other question-text, and only open which btn is clicked 
                item.classList.remove('show-text')
            }
        });

        question.classList.toggle('show-text');
    });
});


// traversing the DOM => method : 2

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//     const question = e.currentTarget.parentElement.parentElement; //parentelement qustion-title > question, 
//     question.classList.toggle('show-text');
//     });
// });