let step = document.getElementsByClassName('step');
console.log(document)

let prevBtn = document.getElementById("prev-btn");
console.log(prevBtn)
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let bodyElement = document.querySelector('body');
form.onsubmit= () => {
    return false;
}
let current_step=1;
let stepCount=6;
console.log("step")
step[current_step].classList.add('d-block');
if(current_step==0){
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-none');
}
const progressbar = (value) => {
    document.getElementsByClassName('progress-bar ')[0].style.width='$(value)%';
}
nextBtn.addEventListener('click',()=>{
    current_step++;
    let Previous_step=current_step-1;
    if((current_step > 0)&&(current_step<=stepCount)){
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[Previous_step].classList.remove('d-block');
        step[Previous_step].classList.add('d-none');
        if(current_step==stepCount){
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-block');
            nextBtn.classList.add('d-none');
        }else{
            if(current_step> stepCount) {
                form.onsubmit  = () => {
                    return true
                }
            }

        }

    }
    progress((100/stepCount) * current_step);
})
prevBtn.addEventListener('click',()=>{
    if(current_step>0)
    {
        current_step--;
        let Previous_step=current_step+1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.remove('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[Previous_step].classList.remove('d-block');
        step[Previous_step].classList.add('d-none');
        if(current_step<stepCount)
        {
            submit.classList.remove('d-inline-block');
            submit.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.add('d-inline-block');
        }
        if(current_step==0) {
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
        }

    }
})




