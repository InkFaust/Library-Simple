###### Run Locally the Server:

`yarn start`

###### Run Locally the Client:

`cd client && yarn start`

###### Deploy to Heroku:

Require the account!
I'll fix the axios instance soon... :)

`git push heroku master`

The package.json has a script for the directory changing and running the client.

`heroku-postbuild`

###### About the client:

At first, I'm not designer at all as you'll see...

Also, I'd love to ask you pay attention that I've never used the `Redux` before (first time, hope everything is fine);

Well, I guess I've paid attention to all errors may show up, and all (I'd better don't say 'all') data passed through validation.

I don't like the way with styles, there are for refactoring, but without taking a look at a design, makings more difficult to choose between ways.

I'll love to implement `styled-components`, and `compass sass` soon.

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
