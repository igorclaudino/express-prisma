import app from './app';

console.log(process.env.DATABASE_URL);
app.listen(3333, () => console.log('Server iniciado em 3333'));
