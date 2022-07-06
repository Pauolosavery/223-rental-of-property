require('@babel/register');
require('dotenv').config();
const express = require('express');

const app = express();

const config = require('./middleware/config');

config(app);

const homeRouter = require('./routes/homeRouter');
// const userRouter = require('./routes/user.routes');
// const tagRouter = require('./routes/tags.routes');
// const entriesRouter = require('./routes/entries.routes');
// const authRuter = require('./routes/auth.routes');

const PORT = process.env.PORT ?? 3000;

app.use('/', homeRouter);
// app.use('/user', userRouter);
// app.use('/tags', tagRouter);
// app.use('/entries', entriesRouter);
// app.use('/auth', authRuter);

app.listen(PORT, () => console.log(`<===== SERVER START at ${PORT} =====>`));
