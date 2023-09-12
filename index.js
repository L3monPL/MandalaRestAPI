const express = require('express')
const db = require('./db');
const bodyParser = require('body-parser')
const ACCESS_TOKEN = 'gfdssdff43f45f45fe3as45e4wfs656f45'
const app = express()

app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Witaj!');
});
  
// Middleware for JWT authentication
function authenticateJWT(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
  
      req.user = user;
      next();
    });
}

app.use('/api', authenticateJWT);

app.get('/api', authenticateJWT, (req, res) => {
    // res.json({ message: 'You have access to this protected route' });
});



(async () => {
    const client = await db.connect();
    console.log('Połączenie z bazą danych nawiązane!');
    client.release();
  })().catch(err => console.error(err.stack));




//   const sql = 'INSERT INTO users (email, password)  VALUES($1, $2)'

// db.query(sql,["biuro@mandalanieruchomosci.pl", "mandala123321"], (err) => {
//     if(err) return console.error(err.message)

//     console.log("A new row has been created")
// })

// db.query(
//     'DROP TABLE user'
// )


// db.query(`CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     email text UNIQUE, 
//     password text,
//     created_at text,
//     CONSTRAINT email_unique UNIQUE (email)
//     )`).then(() => {
//     console.log('Users table created successfully!');
//     }).catch((err) => {
//     console.error('Error creating users table:', err);
// })

//   const sql = 'INSERT INTO company (name, email, password)  VALUES($1, $2, $3)'

// db.query(`CREATE TABLE realizations (
//     id SERIAL PRIMARY KEY,
//     title text, 
//     description text,
//     created_at text
//     )`).then(() => {
//     console.log('Realization table created successfully!');
//     }).catch((err) => {
//     console.error('Error creating realizations table:', err);
// })

// db.query(`CREATE TABLE images (
//     id SERIAL PRIMARY KEY,
//     realizationId integer,
//     position integer,
//     image bytea,
//     description text,
//     created_at text
//     )`).then(() => {
//     console.log('Images table created successfully!');
//     }).catch((err) => {
//     console.error('Error creating images table:', err);
// })

// db.query(
//     'DROP TABLE images'
// )

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const PagesController = require('./controllers/PagesController')
app.use("/api", PagesController)


app.listen(3000, function () {
    console.log('Serwer nasłuchuje na porcie 3000!');
});
