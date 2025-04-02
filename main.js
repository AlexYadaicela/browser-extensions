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