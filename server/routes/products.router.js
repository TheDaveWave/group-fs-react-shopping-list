const router = require('express').Router();
const pool = require('../modules/pool');

// GET route /products
router.get('/', (req,res) => {
    console.log('In router get /products');
    const queryText = `SELECT * FROM "products";`;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log(`Error getting products`, err);
        res.sendStatus(500);
    });
});
// POST route /products

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

// PUT route /products/reset

// PUT route /products/purchase/:id


module.exports = router;