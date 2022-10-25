import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

const port = process.env.PORT; // henter lokal info

app.listen(3000, () => console.log(`Server på port 3000, envPort = ${port} `));
