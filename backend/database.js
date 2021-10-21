const mongoose = require("mongoose")

const atlas = "mongodb+srv://Admon:Holamundo2021.@cluster0.hm7de.mongodb.net/AppLogin?retryWrites=true&w=majority"
//const local = "mongodb://user:pass@localhost:27017/empresaDB"
//const local = "mongodb://localhost:27017/miProyecto"

mongoose.connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conectado Correctamente a la BD :)"))
    .catch(err => console.log(err))

module.exports = mongoose;