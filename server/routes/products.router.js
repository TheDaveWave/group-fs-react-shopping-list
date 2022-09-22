const router = require('express').Router();
const pool = require('../modules/pool');

// GET route /products

// POST route /products (Add a new product)
// incoming data will {name: , quantity: , unit: }
router.post('/', (req, res) => {
    const  newProduct = req.body;
    console.log("trying to add,", newProduct);
    const sqlText = `INSERT INTO "products" ("name", "quantity", "unit")
                    VALUES ($1, $2, $3);`
    
    pool.query(sqlText, [newProduct.name, newProduct.quantity, newProduct.unit])
    .then((result) => {
        console.log('new product posted!')
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding to database', error);
        res.sendStatus(500);
    })
})

// DELETE route /products/clear

// DELETE route /products/remove/:id
router.delete('/remove/:id', (req, res) => {
    const productId = req.params.id;
    console.log('deleting item:', productId);
    const queryText = `DELETE FROM "products" WHERE "id"=$1;`
    pool.query(queryText, [productId])
    .then(() => {
        res.sendStatus(204)
        console.log('Delete Successful for ID:', productId);
    })
    .catch(err => res.sendStatus(500));
})


// PUT route /products/reset

// PUT route /products/purchase/:id
router.put('/purchase/:id', (req, res) => {
    const productId = req.params.id;
    console.log('purchasing (PUT) item:', productId);
    const queryText = `UPDATE "products" SET "isPurchased"=(NOT "isPurchased") WHERE "id"=$1;`
    pool.query(queryText, [productId])
    .then(() => {
        res.sendStatus(204)
        console.log('Purchase Successful for ID:', productId);
    })
    .catch(err => res.sendStatus(500));
})


module.exports = router;