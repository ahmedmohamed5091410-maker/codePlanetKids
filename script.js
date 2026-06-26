// تفاعل نموذج التسجيل
const form = document.getElementById('registrationForm');
if(form){
    const successMsg = document.getElementById('successMsg');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        successMsg.textContent = "تم تسجيل الطفل بنجاح! سنتواصل معكم قريبًا.";
        successMsg.style.color = "#4caf50";
        form.reset();
    });
}
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleBtn.innerText = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerText = '☀️';
    }
});
