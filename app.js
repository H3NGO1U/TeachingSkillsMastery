const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/bot', (req, res) => {
    res.render('full_view_bot');
});

app.get('/about', (req, res) => {
    res.render('about');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));