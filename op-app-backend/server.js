const express = require('express');
const path = require('path');
const app = express();
const port = 3000;




app.use(express.static(path.resolve(__dirname, 'api')));

// обработка get-запроса:
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'api', 'test.json'));
})

app.listen(port, () => console.log(`Server has been started on port ${port}`));