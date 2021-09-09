const express = require('express');
const path = require('path');


const app = express();


app.use(express.static(path.join(__dirname + '/')));
app.set('views', path.join(__dirname, "/views"));


app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('home')
});


app.all('*', (req, res) =>{
    res.render('error')
})

app.listen(3000, ()=>{
    console.log("Startted")
});