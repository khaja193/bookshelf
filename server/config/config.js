const URI ='mongodb+srv://@cluster0.cdk0b.mongodb.net/bookshelf?retryWrites=true&w=majority';
/*const connectDB = async() =>{
    await mongoose.connect(URI,{
        useNewUrlParser: true ,
        useUnifiedTopology:true,
        useCreateIndex: true
    });
    console.log('mongo connected')
} */



const config ={
    production:{
        SECRET : process.env.SECRET,
        DATABASE: URI    
    },
    default:{
        SECRET : 'Saddy0101',
        DATABASE: URI
    }
}


exports.get = function get(env){
    return config[env] || config.default
}