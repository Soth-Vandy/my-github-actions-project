const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`);
  });
}

module.exports = app; // export for testing
