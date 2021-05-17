const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: "YOUR_secret_key",
    mongoUri: "mongodb+srv://Oleg:gOKItSNAAQBAvuYz@cluster0.6w684.mongodb.net/Full-Stack-Book?retryWrites=true&w=majority"
}
//      env: process.env.NODE_ENV || 'development',
//      port: process.env.PORT || 6000,
//      jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
//      mongoUri: process.env.MONGODB_URI ||
//          process.env.MONGO_HOST ||
//          'mongodb://' + (process.env.IP || 'localhost') + ':' +
//          (process.env.MONGO_PORT || '27017') +
//          '/mernproject'
// }


module.exports = config
