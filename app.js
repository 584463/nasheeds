const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://mstr3sl:vip222111@nasheeds.8ovgh0e.mongodb.net/").then(() => {
            console.log('\x1b[32mConnected to MongoDB\x1b[37m');
        }).catch(err => {
            console.error('\x1b[31mConnection error\x1b[37m', err);
        });
