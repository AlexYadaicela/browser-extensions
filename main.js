const toggleColorScheme = document.querySelector('.toggle-color-scheme'); 
const pageLogo = document.querySelector('.page-logo'); 
const colorSchemeImage = document.querySelector('.toggle-color-scheme img'); 

toggleColorScheme.addEventListener('click', () => {
    const currColorScheme = toggleColorScheme.getAttribute('data-color'); 
    switch(currColorScheme){
        case 'light': 
            toggleColorScheme.setAttribute('data-color', 'dark');
            pageLogo.src = 'assets/images/logo-dark.svg';
            colorSchemeImage.src = './assets/images/icon-sun.svg';
            break;
        case 'dark':
            toggleColorScheme.setAttribute('data-color', 'light');
            pageLogo.src = 'assets/images/logo.svg';
            colorSchemeImage.src = './assets/images/icon-moon.svg';  
            break; 
    }
});



const toggleExtensions = document.querySelectorAll('menu li button');

toggleExtensions.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const curr = document.getElementsByClassName('active'); 
        if(curr.length > 0){
            curr[0].classList.remove('active'); 
        }

        toggleExtensions[index].classList.add('active'); 
    });
});


// remove extension item
const removeButtons = document.querySelectorAll('.extension-controls button'); 
const extensionItem = document.querySelectorAll('.extension-item'); 
removeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        extensionItem[index].classList.add('is-removed'); 
        extensionItem[index].style.display = 'none'; 
    });
});


const extensionStatus = document.querySelectorAll('input[type="checkbox"');

const showAll = document.getElementById('show-all'); 
const showActive = document.getElementById('show-active'); 
const showInactive = document.getElementById('show-inactive'); 


showAll.addEventListener('click', () => {
    extensionItem.forEach((e) => {
        if(!e.classList.contains('is-removed')){
            e.style.display = 'grid'; 
        }
    });
});


showActive.addEventListener('click', () => {
    const inactiveElements = document.querySelectorAll('.view-inactive'); 
    const activeElements = document.querySelectorAll('.view-active'); 
    inactiveElements.forEach((e) => {
        e.style.display = 'none'; 
    }); 

    activeElements.forEach((e) => {
        e.style.display = 'grid'; 
    });
});

showInactive.addEventListener('click', () => {
    const inactiveElements = document.querySelectorAll('.view-inactive'); 
    const activeElements = document.querySelectorAll('.view-active'); 
    inactiveElements.forEach((e) => {
        e.style.display = 'grid'; 
    }); 

    activeElements.forEach((e) => {
        e.style.display = 'none'; 
    });
});

extensionStatus.forEach((btn, index) => {
    extensionItem[index].classList.add('view-inactive'); 
    btn.addEventListener('change', () => {
        if(btn.checked){
            extensionItem[index].classList.add('view-active');
            extensionItem[index].classList.remove('view-inactive'); 
        }else{
            extensionItem[index].classList.remove('view-active'); 
            extensionItem[index].classList.add('view-inactive');
        }
    });
});

