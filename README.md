# Задание:

Создать приложение для отображения книг и авторов используя React, контроль состояния - Redux. Для стилизации использовать препроцессор Sass или Less. Каждая страница должна иметь уникальную ссылку. Переходы по страницам в приложении осуществляются без перезагрузки страницы.

## Страницы:

###### Список книг

Перечень доступных книг. Отображаем заголовок и автора. При клике на заголовок переходим на страницу о книге, при клике на автора переходим на страницу автора.

###### Список авторов

Перечень авторов. При клике на автора переход на страницу автора

###### Страница автор

Отображаем данные по автору:

* ФИО
* Список книг написанные автором с возможностью перехода на каждую книгу

###### Cтраница книга

* Название книги
* Автор с возможностью перехода на его страницу
* Количество страниц
* Год, в котором книга была выпущена

# Старт проекта

###### Установить npm зависимости

`npm install`

###### Запустить node-сервер

`npm start`

###### Открыть ссылку для просмотра проекта

`http://localhost:3000`

# API

```
/api/books              получить список книг
/api/books/{id}         получить информацию о текущей книге
```

```
/api/authors            получить список авторов
/api/authors/{id}       получить информацию о текущем авторе
/api/authors/{id}/books получить список книг автора
```

## Дополнение:

* yarn instead of npm
  `Brings the multi loading, the lock file with etc`
* 4000 port instead 3000
  `4000 port for the server, 3000 port for the client`
* Static folder from `public` to `client/bind`
  `That's making for the deploying to Heroku and splitting up the project`

###### Run Locally the Server:

`yarn start`

###### Run Locally the Client:

`cd client && yarn start`

###### Deploy to Heroku:

Require the account!

`git push heroku master`

The package.json has a script for the directory changing and running the client.

`"heroku-postbuild": "cd client && yarn --production=false && yarn run build"`
