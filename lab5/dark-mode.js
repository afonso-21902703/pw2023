document.addEventListener('DOMContentLoaded', function () {

    const dataSet = document.documentElement.dataset;
    dataSet.theme = "light"
    document.querySelector('#toggle-dark').onclick = function() {
        
        const inDarkMode = (dataSet.theme ==='dark');
        dataSet.theme = inDarkMode ? "light" : "dark";
    }
});
