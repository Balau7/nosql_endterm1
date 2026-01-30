const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
    pageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page",
        required: true
    },
    type: {
        type: String,
        enum: ["text", "todo", "heading"],
        required: true
    },
    content: String,
    isChecked: Boolean,
    order: Number
});

module.exports = mongoose.model("Block", blockSchema);
