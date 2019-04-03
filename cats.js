var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number
});

var Cat = mongoose.model("Cat", catSchema);

var google = new Cat({
    name: "Jason",
    age: 19
});


google.save(function(err, cat) {
    if(err) {
        console.log("something went wrong");
    } else {
        console.log("We just saved a cat to the DB:");
        console.log(cat);
    }
});


Cat.create({
   name: "Fred",
   age: 15,
   temperament: "raivoso"
}, function(err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});


//retrieve with console.log
Cat.find({}, function(err, cats) {
   if(err) {
       console.log("Oh shit");
       console.log(err);
   } else {
       console.log("Hmm right");
       console.log(cats);
   }
});

