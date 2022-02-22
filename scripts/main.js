/*let myHeading = document.querySelector('h1'); //объявляю переменную и привязываю её к элементу H1 из HTML страницы
myHeading.textContent = 'Hello world!';
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src', 'images/Alan_Rosen.png');
    } else {
        myImage.setAttribute ('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

const setUserName = () => {
    var myName = prompt('Пожалуйста введите ваше имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать на мой сайт, ' + myName;
}

if (!localStorage.getItem('name')) { //используя оператор отрицания выполняется проверка наличия данных в пункте name.
    setUserName(); //если данных нет, то выполняется созданная нами ранее функция setUserName
    } else {
    var storedName = localStorage.getItem('name');// если данные уже есть то создаем переменную и записываем туда значение из API localStorage
    myHeading.textContent = 'Добро пожаловать на мой сайт, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
