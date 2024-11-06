import express from 'express';

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');  

let tasks = [];


app.get('/', (req, res) => {
  res.render('index', { tasks }); 
});


app.post('/add', (req, res) => {
  const { task } = req.body;  
  if (task) {
    const newTask = {
      id: Date.now(),  
      name: task,
      checked: false,  
    };
    tasks.push(newTask);
  }
  res.redirect('/');  
});


app.post('/toggle/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.checked = !task.checked;  
  }
  res.redirect('/');  
});


app.post('/remove/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);  
  res.redirect('/');  
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
