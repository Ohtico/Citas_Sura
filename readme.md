document.addEventListener('DOMContentLoaded', () => {
    getLocalStorage()
    citas = (JSON.parse(localStorage.getItem('Citas')))
});

