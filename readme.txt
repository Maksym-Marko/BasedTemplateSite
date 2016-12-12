Базовый шаблон для верстки страниц сайта.

Используются препроцессоры Jade и SASS.

Для работы с шаблоном необходимо предварительно установить node.js ( https://nodejs.org/en/ ).

Сборка инструментов - gulp.


		Install BrowserSynс, Sass, Jade, Plumber

npm install --save-dev gulp gulp-jade gulp-sass gulp-plumber browser-sync


gulp:
 - npm install --save-dev gulp

BrowserSynс:
 - npm install browser-sync gulp --save-dev

jade:
 - npm install --save-dev gulp-jade

sass:
 - npm install --save-dev gulp-sass


plumber:
 - npm install --save-dev gulp-plumber


start: gulp
stop: Ctrl + C