var bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //important !!!!!!!!! but can't understand
	extended: false
}));

app.post('/edit', /*urlencodedParser,*/ function(req, res) {
	console.log('body', req.body);
})