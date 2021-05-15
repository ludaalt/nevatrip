const timeItems = document.querySelectorAll('.time-line time');
let timeItemHeight = document.querySelector('.time-line time').offsetTop;

let replacedTimeValue;

for (let i = 0; i < timeItems.length; i += 1) {

    if(timeItems[i].offsetTop > timeItemHeight) {
        timeItems[i].classList.add('hide');
        replacedTimeValue = timeItems[i - 1].textContent;
        timeItems[i - 1].textContent = 'ещё..';
        timeItems[i - 1].classList.add('more-button');
    }
}

for (let j = 0; j < timeItems.length; j += 1) {
    if(timeItems[j].classList.contains('more-button')) {        
        timeItems[j].addEventListener('click', showAllTimeButton)
    }
}

function showAllTimeButton() {
    for (let j = 0; j < timeItems.length; j += 1) {
        
        if(timeItems[j].classList.contains('more-button')) {        
            timeItems[j].textContent = replacedTimeValue;
        }

        if(timeItems[j].classList.contains('hide')) {        
            timeItems[j].classList.remove('hide')
        }
    }
}