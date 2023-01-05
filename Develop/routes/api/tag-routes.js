const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      },
    ],
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "stock", "price", "category_id"],
      },
    ],
    (tagData => {
      if (!tagData) {
        res.status(404).json({message: 'No product found with this id'});
        return;
      }
      res.json(tagData);
    })
    (err => {
      console.log(err);
      res.status(500).json(err);
    });
    }
  });

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//put is an update
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update({
      tag_name:req.body.tag_name,
    }, {
      where: {
        id:req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({
        message: 'we cannot find a tag with this id'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Product.delete ({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({
        message: 'we cannot find a product with this id'
      });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
