const path = require('path');
const express = require('express');
 
const app = new express();
 
app.use(express.static('assets'));
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/admin.html'));
});
 
app.listen(3000, () => {
    console.log('App listening on http://localhost:3000')
});