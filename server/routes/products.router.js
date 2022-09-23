const router = require('express').Router();
const pool = require('../modules/pool');


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

// GET route /products
router.get('/', (req,res) => {
    console.log('In router get /products');
    const queryText = `SELECT * FROM "products" ORDER BY "id";`;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log(`Error getting products`, err);
        res.sendStatus(500);
    });
});

// DELETE route /products/clear
router.delete('/clear', (req,res) => {
    console.log('In router DELETE /products/clear');
    // I am gonna delete all the data in your database >:)
    const queryText = `TRUNCATE TABLE "products";`;
    pool.query(queryText)
    .then(()=> {
        console.log('All products deleted!');
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error in deleting rows', err)
        res.sendStatus(500);
    })
});
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
router.put('/reset', (req,res) => {
    console.log('In router PUT for reset');
    // reset the isPurchased values equal to false.
    const queryText = `UPDATE "products" SET "isPurchased"='false';`;

    pool.query(queryText)
    .then(()=>{
        console.log('isPurchased has been reset');
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error in resetting isPurchased', err);
        res.sendStatus(500);
    })
})

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