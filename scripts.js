const inputs=document.querySelectorAll(".inp");
document.addEventListener('DOMContentLoaded',()=>{
    inputs.forEach((input,index) =>{
        const savedState = localStorage.getItem(`checkbox-${index}`);   
        input.checked=savedState==="true"     
    })
});

inputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        localStorage.setItem(`checkbox-${index}`, input.checked);
    });
});

// احصل على العنصر "week" والعنصر "container"
const weekButton = document.querySelector('.week');
const container = document.querySelector('.container');

// عند النقر على الزر "week"
weekButton.addEventListener('click', () => {
    // إضافة كلاس لإظهار الجدول ونقل الزر إلى الأعلى
    document.body.classList.add('show-container');
   container.style.marginRight = 'auto';
    // التمرير إلى الأعلى بسلاسة
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

