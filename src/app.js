const express = require('express');
const categoryRouter = require('./routes/categoryRoutes');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use(loginRouter);

app.use(userRouter);

app.use(categoryRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
