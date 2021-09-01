import menuTemplate from './template/markup.hbs';
import menuList from './menu.json';
import './styles.css';

const refs = {
    menu: document.querySelector('.js-menu'),
    checkBox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const currentTheme = localStorage.getItem("theme")
const theme = JSON.parse(currentTheme)

refs.checkBox.addEventListener('change', onChangeTheme);


function createMarkup(menuList) {
    return menuList.map(menuTemplate).join('');
};
const markup = createMarkup(menuList);
refs.menu.insertAdjacentHTML('beforeend', markup);


switch (theme) {
    case null:
    localStorage.setItem("theme", JSON.stringify(Theme.LIGHT))   
    break;

    case Theme.DARK:
    refs.body.classList.add(theme)
    refs.checkBox.setAttribute("checked", true) 
    break;  

    default:
    refs.body.classList.add(theme)  
}


function onChangeTheme() {
    if (refs.checkBox.checked === true) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
        refs.checkBox.setAttribute("checked", true)
        localStorage.setItem ("theme", JSON.stringify(Theme.DARK))
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK)
        refs.checkBox.setAttribute("checked", false)
        localStorage.setItem ("theme", JSON.stringify(Theme.LIGHT))
    };
};