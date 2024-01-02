const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./TodoRoutes")
const cors = require("cors");
require ("dotenv").config();

mongoose.set("strictQuery", false);

const PORT = 8000 || process.env.port;

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("Соединено с MONGO DB"))
.catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use(routes);

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${PORT}`)
})
