const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.port || 3001;


app.use(cors());


app.get('/location', (req, res) => {
    console.log('HELLO')
    res.json({
        
        "formatted_query": "Seattle, WA, USA",
        "latitude": "47.606210",
        "longitude": "-122.332071"
        
    });
});


app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });