/* Урок 10. Работа с JSON
Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.

Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию). */

import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);
const content = document.querySelector('.content');

data.forEach(({id, name, description, url }) => {
    const div = document.createElement('div');
    div.classList.add('planet');
    div.style.maxWidth  = '1170px';
    div.style.margin = '0 auto';
    div.style.color='#34026c';
    div.style.fontSize= '30px';
    div.style.textAlign = 'center';
   
    const title = document.createElement('h2');
    title.classList.add('planet-name');
    title.textContent = `${id}. ${name}`;

    const img = document.createElement('img');
    img.classList.add('planet-img');
    img.src = url;
    img.style.maxWidth = '50%';
    img.style.minWidth = '300px';

    const desc = document.createElement('p');
    desc.classList.add('planet-desc');
    desc.textContent = description;
    desc.style.textAlign = 'justify';

    content.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(desc);
});
