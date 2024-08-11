document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.burger').addEventListener('click', () => {
        document.querySelector('.rightNav').classList.toggle('v-class-resp');
        document.querySelector('.nav-list').classList.toggle('v-class-resp');
        document.querySelector('.navbar').classList.toggle('h-nav-resp');
    });


    const checkVisibility = () => {
        const windowHeight = window.innerHeight;
        document.querySelectorAll('section img').forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check

    document.querySelectorAll("button").forEach(button =>{
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            alert("This is a static website");
        });
    });
});
