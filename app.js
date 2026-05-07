const http = require('http');
const fs = require('fs');
const app = express();
const port = 50000;

app.get('/', (res, req) => {
  res.send('Running App');
});

app.listen(port, () => {
  console.log('Running app at https://localhost${port}');
});
