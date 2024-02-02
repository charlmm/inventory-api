const express = require('express');
const router = express.Router();
const inventoryService = require('../services/inventoryService');

router.post('/create', async (req, res) => {
  try {
    const data = req.body;
    const id = await inventoryService.createInventory(data);
    res.status(201).json({ id });
  } catch (error) {
    console.error('Error creating inventory:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await inventoryService.updateInventory(id, data);
    res.status(200).send('Inventory updated successfully');
  } catch (error) {
    console.error('Error updating inventory:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const inventory = await inventoryService.getInventory();
    res.status(200).json({"success": true, data:inventory});
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await inventoryService.getInventoryById(id);
    res.status(200).json({ inventory });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await inventoryService.deleteInventory(id);
    res.status(200).send('Inventory deleted successfully');
  } catch (error) {
    console.error('Error deleting inventory:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
