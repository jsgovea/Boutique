const express = require('express');
const path = require('path');


const app = express();

app.set('view engine', 'ejs') 
app.set("views", path.resolve(__dirname, "views")); 

app.get('/', (req, res) => {
    res.render('files');
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
});