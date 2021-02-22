const path = require('path');
const express = require('express');
 
const app = new express();
 
app.use(express.static('assets'));
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});
 
app.listen(3000, () => {
    console.log('App listening on http://localhost:3000')
});