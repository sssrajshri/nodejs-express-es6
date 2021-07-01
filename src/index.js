import app from './app';

const { PORT = 3000 } = process.env;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
