
//********************* third way(APPROACH) of one to many(few-(mean under the billians)) that we store the parent document  reference inside the child     ****************/
const mongoose=require("mongoose");

main().then((result)=>{
    console.log("Connecton stablished successfuly");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipSchema');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userchema=new mongoose.Schema({
   name:String,
   email:String,
});

const postSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

const User=mongoose.model("User",userchema);
const Post=mongoose.model("Post",postSchema);

const addPost=async()=>{
    // const user1= new User({
    //     name:"Vishal",
    //     email:"vishal@gmail.com",
    // });
   const user= await User.findOne({name:"Vishal"});
    const post2=new Post({
        content:"Accurate is the worst collage into the greater Noida",
        likes:1000,
    });
    post2.user=user;
  
   await post2.save();

    
}
addPost();