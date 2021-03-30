// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');

const port = process.env.PORT || 3080
const dev = process.env.NODE_ENV !== 'production'

//  Connect all our routes to our application
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});