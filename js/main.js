let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');
form.onsubmit = () => {
    return false
}
let current_step = 0;
let stepCount = 6
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}
const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}
nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});


prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }

    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});

submitBtn.addEventListener('click', () => {
    // Create an object with the data you want to send to the server
    const formData = {
        Contact: getValue('contact'),  // Replace 'contact' with the actual id of the input field
        Fever: getValue('fever'),
        Headache: getValue('headache'),
        Traveled: getValue('traveled'),
        Symptoms: getValue('symptoms'),
        FullName: getValue('full_name'),
        CompleteAddress: getValue('address'),
        Email: getValue('email'),
        MobileNumber: getValue('phone'),
        Age: getValue('age'),
        Gender: getValue('gender'),
    };

    // Make a POST request to the backend API
    fetch('https://aarogya-setu-server-2.onrender.com/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    
    .then(response => response.json())
    .then(data => {
        console.log('Data sent to the server:', data);

        // Optionally, you can reset the form or navigate to a success page
        // Reset the form
        form.reset();
        
        // Display a success message or navigate to a success page
        preloader.classList.add('d-block');
        const timer = ms => new Promise(res => setTimeout(res, ms));
        timer(3000)
            .then(() => {
                bodyElement.classList.add('loaded');
            })
            .then(() => {
                // Your success handling logic here
                succcessDiv.classList.remove('d-none');
                succcessDiv.classList.add('d-block');
            });
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
        // Handle the error as needed
    });
});

function getValue(id) {
    const element = document.getElementById(id);
    
    if (element) {
        return element.value;
    } else {
        console.error(`Element with ID '${id}' not found`);
        return null; // or handle the error appropriately
    }
}


// submitBtn.addEventListener('click', () => {


    
    
//     preloader.classList.add('d-block');

//     const timer = ms => new Promise(res => setTimeout(res, ms));

//     timer(3000)
//         .then(() => {
//             bodyElement.classList.add('loaded');
//         }).then(() => {
//             step[stepCount].classList.remove('d-block');
//             step[stepCount].classList.add('d-none');
//             prevBtn.classList.remove('d-inline-block');
//             prevBtn.classList.add('d-none');
//             submitBtn.classList.remove('d-inline-block');
//             submitBtn.classList.add('d-none');
//             succcessDiv.classList.remove('d-none');
//             succcessDiv.classList.add('d-block');
//         })

// });