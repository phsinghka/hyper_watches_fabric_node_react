'use strict';

const { Contract } = require('fabric-contract-api');

class HyperWatches extends Contract {

    async createWatch(ctx, id, brand, model, condition, owner) {
        const watch = {
            id,
            brand,
            model,
            condition,
            owner,
        };
        await ctx.stub.putState(id, Buffer.from(JSON.stringify(watch)));
        return JSON.stringify(watch);
    }

    async transferWatch(ctx, id, newOwner) {
        const watch = await this.getWatch(ctx, id);
        watch.owner = newOwner;
        await ctx.stub.putState(id, Buffer.from(JSON.stringify(watch)));
        return JSON.stringify(watch);
    }

    async getWatch(ctx, id) {
        const watchJSON = await ctx.stub.getState(id);
        if (!watchJSON || watchJSON.length === 0) {
            throw new Error(`Watch ${id} does not exist`);
        }
        return JSON.parse(watchJSON.toString());
    }

    async queryWatch(ctx, id) {
        return this.getWatch(ctx, id);
    }

    async queryAllWatches(ctx) {
        const startKey = '';
        const endKey = '';
        const resultsIterator = await ctx.stub.getStateByRange(startKey, endKey);
        const results = [];
        for await (const { key, value } of resultsIterator) {
            const watch = JSON.parse(value.toString());
            results.push(watch);
        }
        return JSON.stringify(results);
    }

}

module.exports = HyperWatches;
