![alt text](https://image.ibb.co/guiX87/lib_simple.png "Main Page")

###### Install dependencies:

`yarn`

`cd client/ && yarn`

###### Run Locally the Server:

`yarn start`

###### Run Locally the Client:

`cd client/ && yarn start`

###### Deploy to Heroku :rocket: :

Require an account has connected!

I'll fix the axios instance soon... :grin:

`git push heroku master`

The package.json has a script for the directory changing and running the client.

`heroku-postbuild`

###### About the client:

At first, I'm not designer at all as you'll see...

Also, I'd love to ask you pay attention that I've never used the `Redux` before (the first time, hope everything is fine);

Well, I guess I've paid attention to all errors may show up, and all (I'd better don't say 'all') data have passed through validation.

I don't like the way with styles, there are for refactoring, but without taking a look at a design, makings more difficult to choose between ways.

I'll love to implement the `styled-components` or try the `compass sass` soon.

# API

```
/api/books              get books list
/api/books/{id}         get information of current book
```

```
/api/authors            get authors list
/api/authors/{id}       get information of current author
/api/authors/{id}/books get books list of current author
```
