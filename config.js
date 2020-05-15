
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/studentsdb';
//mongodb+srv://marthaarnaud:HostingAtlas1@cluster0-w8aio.mongodb.net/studentsdb?retryWrites=true&w=majority
//exports.DATABASE_URL = "mongodb+srv://admin:admin@cluster0-w8aio.mongodb.net/studentsdb?retryWrites=true&w=majority";
exports.TOKEN = process.env.API_TOKEN || 'password12345';
exports.PORT = process.env.PORT || '8080';



