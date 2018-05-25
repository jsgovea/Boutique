const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'loginlayout'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('signup');
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});