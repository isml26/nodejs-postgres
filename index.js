//DATABASE_URL=postgres://postgres:123@localhost:5432/socialnetwork npm run migrate up
const app = require("./src/app.js");
const pool = require("./src/pool");

pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: '123'
}).then(() => {
    app.listen(5000, () => {
        console.log('Listening on 5000')
    });
}).catch((err) => {
    console.error(err)
});
