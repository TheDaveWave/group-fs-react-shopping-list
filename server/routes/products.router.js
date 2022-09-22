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

// DELETE route /products/remove/:id

// PUT route /products/reset

// PUT route /products/purchase/:id


module.exports = router;