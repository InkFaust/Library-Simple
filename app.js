var express = require("express"),
  bodyParser = require("body-parser"),
  http = require("http"),
  fs = require("fs"),
  path = require("path"),
  Sequelize = require("sequelize"),
  cors = require("cors");

var isDBExist = fs.existsSync(path.join(__dirname, "books.sqlite"));

sequelize = new Sequelize("sqlite://" + path.join(__dirname, "books.sqlite"), {
  dialect: "sqlite",
  storage: path.join(__dirname, "books.sqlite")
});

Author = sequelize.define("authors", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  }
});

Book = sequelize.define("books", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  language: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  pages: {
    type: Sequelize.INTEGER
  },
  author_id: {
    type: Sequelize.INTEGER
  }
});

Book.belongsTo(Author, {
  foreignKey: "author_id",
  targetKey: "id",
  as: "author"
});

// INIT DB IF NOT EXIST

if (!isDBExist)
  sequelize
    .sync()
    .then(function() {
      Author.create({
        name: "Fyodor Dostoevsky",
        country: "Russia"
      });

      Author.create({
        name: "William Faulkner",
        country: "United States"
      });

      Author.create({
        name: "Gustave Flaubert",
        country: "France"
      });

      Author.create({
        name: "Franz Kafka",
        country: "Czechoslovakia"
      });

      Author.create({
        name: "Hans Christian Andersen",
        country: "Denmark"
      });

      Book.create({
        title: "Crime and Punishment",
        language: "Russian",
        year: 1866,
        pages: 551,
        author_id: 1
      });

      Book.create({
        title: "The Idiot",
        language: "Russian",
        year: 1869,
        pages: 656,
        author_id: 1
      });

      Book.create({
        title: "The Possessed",
        language: "Russian",
        year: 1872,
        pages: 768,
        author_id: 1
      });

      Book.create({
        title: "The Brothers Karamazov",
        language: "Russian",
        year: 1880,
        pages: 824,
        author_id: 1
      });

      Book.create({
        title: "Absalom, Absalom!",
        language: "English",
        year: 1936,
        pages: 313,
        author_id: 2
      });

      Book.create({
        title: "The Sound and the Fury",
        language: "English",
        year: 1929,
        pages: 326,
        author_id: 2
      });

      Book.create({
        title: "Madame Bovary",
        language: "French",
        year: 1857,
        pages: 528,
        author_id: 3
      });

      Book.create({
        title: "Sentimental Education",
        language: "French",
        year: 1869,
        pages: 606,
        author_id: 3
      });

      Book.create({
        title: "Stories",
        language: "German",
        year: 1924,
        pages: 488,
        author_id: 4
      });

      Book.create({
        title: "The Trial",
        language: "German",
        year: 1925,
        pages: 160,
        author_id: 4
      });

      Book.create({
        title: "The Castle",
        language: "German",
        year: 1926,
        pages: 352,
        author_id: 4
      });

      Book.create({
        title: "Fairy tales",
        language: "Danish",
        year: 1836,
        pages: 784,
        author_id: 5
      });
    })
    .catch(function(e) {
      console.log("ERROR SYNCING WITH DB", e);
    });

var whitelist = [
  "http://localhost:3000",
  "https://library-simple.herokuapp.com"
];
var corsOptionsDelegate = function(req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

var app = (module.exports = express());
app.use(cors(corsOptionsDelegate));
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

// AUTHORS API

app.route("/api/authors").get(function(req, res) {
  Author.findAll({
    attributes: ["id", "name", "country"]
  }).then(function(authors) {
    res.json(authors);
  });
});

app.route("/api/authors/:author_id").get(function(req, res) {
  Author.findById(req.params.author_id, {
    attributes: ["id", "name", "country"]
  }).then(function(author) {
    res.json(author);
  });
});

app.route("/api/authors/:author_id/books").get(function(req, res) {
  Book.findAll({
    where: {
      author_id: req.params.author_id
    },
    attributes: ["id", "title", "year", "pages"]
  }).then(function(author) {
    res.json(author);
  });
});

// BOOKS API

app.route("/api/books").get(function(req, res) {
  Book.findAll({
    attributes: ["id", "title", "year", "pages"],
    include: [
      {
        model: Author,
        as: "author",
        attributes: ["id", "name", "country"]
      }
    ]
  }).then(function(books) {
    res.json(books);
  });
});

app.route("/api/books/:book_id").get(function(req, res) {
  Book.findById(req.params.book_id, {
    attributes: ["id", "title", "year", "pages"],
    include: [
      {
        model: Author,
        as: "author",
        attributes: ["id", "name", "country"]
      }
    ]
  }).then(function(book) {
    res.json(book);
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

http.createServer(app).listen(app.get("port"), function() {
  console.log("Server listening on port " + app.get("port"));
});
