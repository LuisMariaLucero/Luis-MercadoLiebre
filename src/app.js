const express = require('express');

const app = express();

const PORT = 3001;

const path = require('path');

app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando ${PORT}`);
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"))
});
