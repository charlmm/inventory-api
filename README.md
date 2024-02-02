# Inventory Management API

This API is designed to handle inventory operations such as creating, updating, reading, and deleting inventory records. It is built using Firebase Cloud Functions and Firestore as the primary database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, update, read, and delete inventory records
- Seamless integration with Firebase Cloud Firestore
- Secure and scalable solution

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Firebase CLI: Install using `npm install -g firebase-tools`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/charlmm/inventory-api.git

2. Navigate to the project directory:

    cd inventory-api

3. Install dependancies

    npm install

4. Get service key from you project on firebase and add it to the project folder and project name in .firebase.js. 

    update. 
    var serviceAccount = require("Path/to/serviceKey.json");
    "projects": {
        "default": "YOUR_POJECT_ID"
    }

4. Initialize Firebase

    firebase login

    firebase init

## Usage Example

# Create Inventory
curl -X POST -H "Content-Type: application/json" -d '{}' http://localhost:5001/your-firebase-project-id/us-central1/api/inventory/create

# Update Inventory
curl -X PUT -H "Content-Type: application/json" -d '{}' http://localhost:5001/your-firebase-project-id/us-central1/api/inventory/update/inventoryId1

# Get Inventory
curl http://localhost:5001/your-firebase-project-id/us-central1/api/inventory/inventoryId1

# Delete Inventory
curl -X DELETE http://localhost:5001/your-firebase-project-id/us-central1/api/inventory/delete/inventoryId1


