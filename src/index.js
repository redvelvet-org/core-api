const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`started server on ${process.env.PORT}`);
});
