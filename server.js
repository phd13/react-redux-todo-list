const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.json');
const app = express();
let id = 0;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/task', (req, res) => {
	const { content } = req.body;
	let task = {
		id: id++,
		isDone: false,
		content,
		category: ''
	};

	db.tasks.push(task);

	res.status(200).send(task);
});

app.put('/api/task', (req, res) => {
	console.log(req.body);
	const task = req.body;
	const { id } = task;

	db.tasks = db.tasks.map(item => {
		if (item.id === id) {
			item = task;
		}
		return item;
	});
	console.log(db.tasks, task);
	res.status(200).send(task);
});

app.get('/api/tasks', (req, res) => {
	res.status(200).send(db.tasks);
});

app.put('/api/toggle-task', (req, res) => {
	const { id } = req.body;
	db.tasks = db.tasks.map(task => {
		if (task.id === id) {
			task.isDone = !task.isDone;
		}
		return task;
	});

	const task = db.tasks.find(task => task.id === id);
	res.status(200).send(task);
});

app.listen(8080);
