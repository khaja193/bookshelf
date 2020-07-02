//const URI ='mongodb+srv://@cluster0.cdk0b.mongodb.net/bookshelf?retryWrites=true';
/*const connectDB = async() =>{
    await mongoose.connect(URI,{
        useNewUrlParser: true ,
        useUnifiedTopology:true,
        useCreateIndex: true
    });
    console.log('mongo connected')
} 
"heroku-postbuild":"NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
*/



const config ={
    production:{
        SECRET : process.env.SECRET,
        DATABASE: process.env.MONGODB_URI    
    },
    default:{
        SECRET : 'Saddy0101',
        DATABASE: 'mongodb://localhost:27017/bookShelf'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}