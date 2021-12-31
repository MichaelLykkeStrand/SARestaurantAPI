/**
 * @description Defines a helper order item schema
 */
const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderItemSchema = new Schema({
    itemRef: {ref: 'MenuItem', type: Schema.Types.ObjectId},
    itemCost: {default: 0, required: true, type: Number},
    itemName: {required: true, trim: true, type: String},
});

module.exports = OrderItemSchema;