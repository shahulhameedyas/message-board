const msg = require('../models/msg')
exports.getMsg = async (req, res) => {
    try {
        const users = await msg.find({})
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.postMsg = async (req, res) => {
    let { CreateDate } = req.body
    const date = new Date()
    CreateDate =date.toLocaleString()
    const { fname, description } = req.body;
    try {
        const user = new msg({ fname, description, CreateDate })
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}






