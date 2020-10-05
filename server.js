const express = requires('express');
const serveStatic = requires('serve-statis');
const history = requires('connect-history-api-fallback');
const enforce = requires('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic( __dirname + '/dist'));
app.use(history());

app.listen(process.env.PORT || 5000);
