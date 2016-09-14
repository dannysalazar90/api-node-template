import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import helmet from 'helmet'
import config from './configuration';
import routes from '../routes';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(methodOverride());

app.use(helmet());

app.use(express.static('public'));

app.use('/api', routes);

app.use((err, req, res, next) =>		// eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'dev' ? err.stack : {}
  })
);

export default app;