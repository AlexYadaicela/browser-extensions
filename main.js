const toggleColorScheme = document.querySelector('.toggle-color-scheme'); 

toggleColorScheme.addEventListener('click', () => {
    const currColorScheme = toggleColorScheme.getAttribute('data-color'); 
    switch(currColorScheme){
        case 'light': 
            toggleColorScheme.setAttribute('data-color', 'dark');
            break;
        case 'dark':
            toggleColorScheme.setAttribute('data-color', 'light');
            break; 
    }
});