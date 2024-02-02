const { db } = require('../utils/firebase');

const inventoryService = {
  async createInventory(data) {
    const result = await db.collection('inventory').add(data);
    return result.id;
  },

  async updateInventory(id, data) {
    await db.collection('inventory').doc(id).update(data);
  },

  async getInventory() {
    const snapshot = await db.collection('inventory').get();
    const inventory = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return inventory;
  },

  async getInventoryById(id) {
    const snapshot = await db.collection('inventory').doc(id).get();
    const inventory = snapshot.data()
    return inventory;
  },

  async deleteInventory(id) {
    await db.collection('inventory').doc(id).delete();
  }
}

module.exports = inventoryService;
