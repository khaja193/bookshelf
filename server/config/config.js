const URI ='mongodb+srv://khaja:khaja@cluster0.cdk0b.mongodb.net/bookshelf?retryWrites=true';
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
        DATABASE: process.env.DATABASE    
    },
    default:{
        SECRET : 'Saddy0101',
        DATABASE: URI
    }
}


exports.get = function get(env){
    return config[env] || config.default
}