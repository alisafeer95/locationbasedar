const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')

app.get('/' ,async (req,res)=>{
res.render('index1')
})

app.get('/iframe', function(req, res) {
  res.render('vr');
});
app.get('/iframear', function(req, res) {
  res.render('location');
});

app.get('/image', function(req, res) {
  res.sendFile(__dirname + '/public/images/beach.jpg');
});

app.get('/ball', function(req, res) {
  res.sendFile(__dirname + '/public/images/winter.jpg');
});

app.get('/pattern', function(req, res) {
  res.sendFile(__dirname + '/public/pattern-ball.patt');
});

app.get('/my-preset.js', function(req, res) {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/my-preset.js');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})