const app = require('./app')

//? Server Configuration ----------------------------------------------------------------------------------------------------

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});