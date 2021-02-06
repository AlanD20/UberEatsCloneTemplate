const ham = document.querySelector('.ham');
const nav = document.querySelector('.navTop');
const navLeft = document.querySelector('.navLeft');
const addressContainer = document.querySelector('.addressContainer');
const deliverTime = document.querySelector('.deliverTime');
const deliverTimeBox = document.querySelector('.deliverTimeBox');


ham.addEventListener('click', e=>{
    document.body.style.overflowY = 'hidden';
    e.target.classList.add('active');
    navLeft.style.display = 'flex';
    navLeft.children[0].classList.remove('navLeft-close');
    navLeft.children[0].classList.add('navLeft-open');
    navLeft.addEventListener('click',e=>{
        if(!e.target.classList.contains('navLeftContainer'))
        {
            navLeft.children[0].classList.remove('navLeft-open');
        navLeft.children[0].classList.add('navLeft-close');
        setTimeout(_=>{
            navLeft.style.display = 'none';
            document.body.style.overflowY = 'scroll';
        },300);
        }
    });
});

document.addEventListener('scroll', e=>{
    deliverTimeBox.style.opacity = '0';
    if(pageYOffset > 140)
    nav.classList.add('navTop-Active');
    else 
    nav.classList.remove('navTop-Active');
});

deliverTime.addEventListener('mouseenter', e=>{
    deliverTimeBox.classList.toggle('deliverTimeBox-Active');
    setTimeout(_=>deliverTimeBox.style.opacity = '1',100);
});
deliverTime.addEventListener('mouseleave', e=>{
    deliverTimeBox.style.opacity = '0';
    setTimeout(_=>deliverTimeBox.classList.remove('deliverTimeBox-Active'),100);
    
});

