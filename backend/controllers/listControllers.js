const listModel = require("../model/ListModel");

exports.getListItems = async function (req, res, next) {
    try {
        const allItems = await listModel.find().sort({ _id: -1 });
        res.status(200).json({ success: "true", allItems });
    } catch (error) {
        res.status(400).json(error);
    }
}


exports.createItem = async function (req, res, next) {
    try {
        const { title, task } = req.body;
        const newItem = await listModel.create({ title, task });
        res.status(201).json({ success: "true", newItem });
    } catch (error) {
        res.status(400).json(error);
    }
}
