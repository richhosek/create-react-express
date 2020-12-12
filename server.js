const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(express.json());

require('./routes/test_route')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});