//********************* Second way(APPROACH) of one to many(few-(mean under the 10^5)) that we store the child document  reference inside the parents*****************/
const mongoose=require("mongoose");

main().then((result)=>{
    console.log("Connecton stablished successfuly");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipSchema');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema=new mongoose.Schema({
   item:String,
   price:Number,
});

const customerSchema=new mongoose.Schema({
    name:String,
    order:[
        {
         type: mongoose.Schema.Types.ObjectId,
         ref:"Order",
    }
],
});

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

// let addOrder=async()=>{
//     let result=await Order.insertMany([
//         {item:"sprite",price:99},
//         {item:"chips",price:25},
//         {item:"cola",price:95}
//     ]);
//     console.log(result);
// }
// addOrder();
// let addCustomer=async()=>{
//     let cust1=new Customer({
//         name:"Deepak_Kumar_Kushwaha",
//     });
//    let order1=await Order.findOne({item:"sprite"});
//     let order2=await Order.findOne({item:"chips"});

//     cust1.order.push(order1._id);
//     cust1.order.push(order2._id);

//    let result= await cust1.save();
//    console.log(result);
// }
// addCustomer();


let findCustomer=async()=>{
    let result=await Customer.find({}).populate("order");//********* basicaly populate is used to provide or add extra info to extract data  */
    console.log(result[0]);
}
findCustomer();