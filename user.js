
//********************* first way of one to many(few-(mean under the 10^3)) that we store the child document inside the parents*****************/
const mongoose=require("mongoose");

main().then((result)=>{
    console.log("Connecton stablished successfuly");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipSchema');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
   user:String,
   address:[
    {    _id:false,    
        location:String,
        city:String,

    }
] 
});

const User=mongoose.model("User",userSchema);


let addUser=async()=>{
    let user1=new User({
    user:"j.Donald",
    address:[{             //**************One to few(many) relationship************************* */
       
        location:"usa",
        city:"newyark",
    }],
    
})
user1.address.push({location:"Delhi",city:"greaterNoida"});

let result=await user1.save();
console.log(result);
}

addUser();