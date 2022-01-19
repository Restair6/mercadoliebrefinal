const express = require('express');
const app = express();

const path = require('path');

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath))

app.listen(process.env.PORT || 3031, () => {
    console.log("Servidor corriendo en puerto 3031")
})


app.get("/", (req, res) => {
 let = htmlPath = path.resolve (__dirname, './views/home.html');
res.sendFile(htmlPath);
   })

app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});