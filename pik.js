require('@babel/register');
require('dotenv').config();
const express = require('express');

const app = express();

const config = require('./middleware/config');

config(app);

const homeRouter = require('./routes/home.routes');

const userRouter = require('./routes/userRouter');
// const tagRouter = require('./routes/tags.routes');
// const entriesRouter = require('./routes/entries.routes');

// пути к роутерам для сортировки по категориям
const roomRouter = require('./routes/sortRouters/roomRouter');
const flatRouter = require('./routes/sortRouters/flatRoute');
const houseRouter = require('./routes/sortRouters/houseRoute');

const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT ?? 3000;

app.use('/', homeRouter);

app.use('/user', userRouter);
// app.use('/tags', tagRouter);
// app.use('/entries', entriesRouter);

// мидл варки с путями для сортировки
app.use('/room', roomRouter);
app.use('/flat', flatRouter);
app.use('/house', houseRouter);


app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`<===== SERVER START at ${PORT} =====>`));
