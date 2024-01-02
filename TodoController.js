const TodoModel = require("./TodoModel");

module.exports.getTodo = async(req, res) => {
    const myTodo = await TodoModel.find();
    res.send(myTodo)
}

module.exports.saveTodoList = async(req, res) => {
    const {title} = req.body;
    TodoModel.create({ title })
    .then((data) => {console.log("Задача добавлена")
    res.send(data)
})
}

module.exports.deleteTodo = async(req, res) => {
    const {_id} = req.body;
    TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("Дело удалено"))
}

module.exports.editTodo = async(req, res) => {
    const {_id, title} = req.body;
    TodoModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send("Дело изменено"))
}