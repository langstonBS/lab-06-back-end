const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.port || 3001;
const geo = require('./data/geo.json')

const app = express();
app.use(cors());


app.get('/location', (req, res) => {
    try {
        res.json({
        
            "formatted_query": "Seattle, WA, USA",
            "latitude": "47.606210",
            "longitude": "-122.332071"
        })
    } catch (e) {
        console.error(e);
        res.json({
            status: 500,
            responseText: e,
        
        });
    }
});





app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });