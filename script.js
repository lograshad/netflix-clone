const questionBtn = document.querySelectorAll('.question');
const dropdownBtn = document.querySelectorAll('.drop-btn');
const answer = document.querySelector('.answer');


const dropdown = () => {
    dropdownBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            e.target.parentElement.nextElementSibling.classList.toggle('active');
            btn.classList.toggle('rotate');
            
            console.log('clicked')
        });
    })
//     dropdownBtn.addEventListener('click', e => {
//         answer.classList.toggle('active');
//         dropdownBtn.classList.toggle('rotate');
        
//         console.log('clicked')
//     });
 }




   dropdown();


