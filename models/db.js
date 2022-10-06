const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sata_0312:sata_0312@devclustrer.9stfy.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(){
    console.log("Application is connected to Databse");
})  