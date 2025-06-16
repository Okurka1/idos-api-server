const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/odjezdy', (req, res) => {
    const typ = req.query.typ?.toLowerCase();  // Převod na malá písmena

    if (typ === 'mhd') {
        res.json([
            { cas: "13:05", linka: "108", cil: "Kaufland", zruseno: false },
            { cas: "13:25", linka: "108", cil: "Nova Ves", zruseno: true }
        ]);
    } else if (typ === 'vlak') {
        res.json([
            { cas: "14:10", linka: "U1", cil: "Usti n.L.", zruseno: false },
            { cas: "14:55", linka: "U3", cil: "Litomerice", zruseno: false }
        ]);
    } else {
        res.status(400).json({ error: "Neplatny typ. Pouzij ?typ=mhd nebo ?typ=vlak" });
    }
});

app.get('/', (req, res) => {
    res.send("IDOS API je v provozu. Pouzij /odjezdy?typ=mhd nebo /odjezdy?typ=vlak");
});

app.listen(PORT, () => {
    console.log(`Server bezi na porte ${PORT}`);
});
