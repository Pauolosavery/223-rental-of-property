require('@babel/register');
require('dotenv').config();
const express = require('express');

const app = express();

const config = require('./middleware/config');

config(app);

const homeRouter = require('./routes/home.routes');
// const userRouter = require('./routes/user.routes');
// const tagRouter = require('./routes/tags.routes');
// const entriesRouter = require('./routes/entries.routes');
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT ?? 3000;

app.use('/', homeRouter);

// app.use('/user', userRouter);
// app.use('/tags', tagRouter);
// app.use('/entries', entriesRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`<===== SERVER START at ${PORT} =====>`));
