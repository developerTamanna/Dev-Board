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



// disable button and complete task


document.addEventListener('DOMContentLoaded', function() {
    const completedButtons = document.querySelectorAll('.btn-completed'); // সব "Completed" বাটন সিলেক্ট করুন
    const taskCountElement = document.getElementById('taskA'); // টাস্ক কাউন্ট এলিমেন্ট
    const navbarCountElement = document.querySelector('.bg-blue-100'); // ন্যাভবার কাউন্ট এলিমেন্ট
    const activityLogContainer = document.getElementById('activityLogContainer'); // অ্যাক্টিভিটি লগের এলিমেন্ট
    const clearHistoryButton = document.querySelector('.bg-white.rounded .btn-primary'); // Clear History বাটন

    // Completed বাটনে ক্লিক করার ইভেন্ট
    completedButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Alert দেখানো
            const taskName = button.parentElement.parentElement.querySelector('h2').textContent;
            const confirmCompletion = confirm(`Are you sure you want to mark "${taskName}" as completed?`);

            // 2. যদি ব্যবহারকারী "OK" ক্লিক করে
            if (confirmCompletion) {
                // বাটনটি ডিসেবল করুন
                button.disabled = true;

                // টাস্ক কাউন্ট ১ কমিয়ে দিন
                let taskCount = parseInt(taskCountElement.textContent);
                taskCountElement.textContent = taskCount - 1;

                // ন্যাভবার কাউন্ট ১ বাড়িয়ে দিন
                let navbarCount = parseInt(navbarCountElement.textContent.trim());
                navbarCountElement.textContent = ` ${navbarCount + 1} `;

                // অ্যাক্টিভিটি লগে নতুন এন্ট্রি যোগ করুন
                const now = new Date();
                const timeString = now.toLocaleTimeString();
                const logEntry = document.createElement('p');
                logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}`;
                
                // অ্যাক্টিভিটি লগের সঠিক জায়গায় এন্ট্রি যোগ করুন
                activityLogContainer.appendChild(logEntry);
            }
        });
    });

    // Clear History বাটনে ক্লিক করার ইভেন্ট
    clearHistoryButton.addEventListener('click', function() {
        // অ্যাক্টিভিটি লগের সব এন্ট্রি মুছে ফেলুন
        activityLogContainer.innerHTML = '';
    });
});