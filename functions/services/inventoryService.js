const { db } = require('../utils/firebase');

// funtions responsible for actual database CRUD operations
const inventoryService = {
  // create new inentory entry
  async createInventory(data) {
    const result = await db.collection('inventory').add(data);
    return result.id;
  },

  // update an existing inventory
  async updateInventory(id, data) {
    await db.collection('inventory').doc(id).update(data);
  },

  // fetching all the inventories
  async getInventory() {
    const snapshot = await db.collection('inventory').get();
    const inventory = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return inventory;
  },

  //fething a single inventory
  async getInventoryById(id) {
    const snapshot = await db.collection('inventory').doc(id).get();
    const inventory = snapshot.data()
    return inventory;
  },

  //deleting an inventory
  async deleteInventory(id) {
    await db.collection('inventory').doc(id).delete();
  }
}

module.exports = inventoryService;
