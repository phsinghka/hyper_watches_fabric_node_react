const express = require('express');
const app = express();
const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

// Connection options for the gateway
const ccpPath = path.resolve(__dirname, '..', 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

// Function to interact with the Hyperledger Fabric network
async function interactWithChaincode(functionName, args) {
    try {
        // Create a new gateway for connecting to our peer node
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network channel and smart contract
        const network = await gateway.getNetwork('mychannel');
        const contract = network.getContract('mychaincode');

        // Submit the transaction to the smart contract and wait for the response
        const result = await contract.submitTransaction(functionName, ...args);

        // Disconnect from the gateway
        await gateway.disconnect();

        // Return the result
        return result.toString();
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

// Route to transfer watch ownership
app.post('/transfer', async (req, res) => {
    const { watchId, newOwner } = req.body;

    const result = await interactWithChaincode('transfer', [watchId, newOwner]);

    res.json({ message: result });
});

// Route to create a new watch product
app.post('/create', async (req, res) => {
    const { watchId, brand, model, condition } = req.body;

    const result = await interactWithChaincode('create', [watchId, brand, model, condition]);

    res.json({ message: result });
});

// Route to query a single watch entry
app.get('/query/:watchId', async (req, res) => {
    const { watchId } = req.params;

    const result = await interactWithChaincode('query', [watchId]);

    res.json({ message: result });
});

// Route to query all watch entries
app.get('/queryAll', async (req, res) => {
    const result = await interactWithChaincode('queryAll', []);

    res.json({ message: result });
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
