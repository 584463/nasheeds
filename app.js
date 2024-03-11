mongoose.connect("mongodb://localhost:27017/hasana").then(() => {
            console.log('\x1b[32mConnected to MongoDB\x1b[37m');
        }).catch(err => {
            console.error('\x1b[31mConnection error\x1b[37m', err);
        });