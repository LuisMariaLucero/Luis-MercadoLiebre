const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const path = require('path');

app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando ${PORT}`);
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
  });