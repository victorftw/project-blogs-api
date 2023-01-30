const express = require('express');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use(loginRouter);

app.use(userRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
