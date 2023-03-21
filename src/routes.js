const { Router } = require("express");

const ProductController = require('./controllers/ProductController');

const routers = Router();

routers.get('/health', (req, res) => {
    return res.status(200).json({message : "Server is on..."});
});

routers.post('/products', ProductController.store);
routers.get('/products/:id', ProductController.showUnique);
routers.get('/products', ProductController.showAll);

routers.put('/products/:id', ProductController.update);
routers.delete('/products/:id', ProductController.destroy);



module.exports = routers;