const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // TODO: find all categories
  // TODO: be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // TODO: find one category by its `id` value
  // TODO: be sure to include its associated Products
});

router.post('/', (req, res) => {
  // TODO: create a new category
});

router.put('/:id', (req, res) => {
  // TODO: update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // TODO: delete a category by its `id` value
});

module.exports = router;
