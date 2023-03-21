const app = require('./app');
const loadres = require('./loaders');

loadres.init();

app.listen(process.env.PORT , () => {
    console.log("Server is runing")
})