import menu from "./menu.json";  
import './styles.css';
import menuTemplate from './template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//menu render creating
const menuMarkup = createMenuMarkup(menu);
function createMenuMarkup(menu) {
  // return menu.map(menuItem=>menuTemplate(menuItem)).join('');
  return menu.map(menuTemplate).join('');
};

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);


// button switching

const toolbarColor = document.body;
const inputChange = document.querySelector('#theme-switch-toggle');
inputChange.addEventListener('change', colorChange);

restoreTheme();

function colorChange() {
  toolbarColor.classList.toggle('dark-theme');

  switch (getCurrentTheme()) {
    case 'dark':
      localStorage.setItem('switch', 'light');
      break;
    
    case 'light':
      localStorage.setItem('switch', 'dark');
      break;
    
    default:
      break;
  }
}

function restoreTheme() {
  switch (getCurrentTheme()) {
    case 'dark':
      toolbarColor.classList.add('dark-theme');
      inputChange.checked = true;
      break;
    
    case 'light':
      toolbarColor.classList.remove('dark-theme');
      break;
    
    default:
      break;
  }
}

function getCurrentTheme() {
  let currentThemeValue = null;

  if (!localStorage.getItem('switch')){
    currentThemeValue = localStorage.setItem('switch', 'light');
  } else {
    currentThemeValue = localStorage.getItem('switch');
  }
  return currentThemeValue;
}
 
