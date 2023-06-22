const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=>console.log("Base conectada."))
.catch(err =>console.error(err))

