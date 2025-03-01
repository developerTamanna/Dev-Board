// alert()
// task page a jawar jonno

document.getElementById('another_page').addEventListener('click', function(){
    window.location.href="taskmeeter.html"
})


// current-date  part

const currentDate = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayName = days[currentDate.getDay()];
const monthName = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
document.getElementById('current-date').innerText= `${dayName}, ${monthName} ${date}, ${year}
`;


// theme part change dynamically


const changeButton = document.getElementById('change-bg');
changeButton.addEventListener('click',function(){
    const body = document.body;
    const colors = ['#f0f8ff', '#ffebcd', '#8a2be2', '#a52a2a', '#5f9ea0', '#d2691e', '#ff7f50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor
})


