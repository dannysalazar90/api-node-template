/**
 * Application entry point file.
 *
 * @author Danny Salazar <dssm_15@hotmail.com>
 */

import app from './config/express';
import config from './config/configuration';
import * as mongoDb from './db/mongo';

const port = config.port;

// Connect to mongodb, if something fails, the app should not start
mongoDb.connect(listen);

function listen() {
    app.listen(port, () => {
    	console.log(`Express app started on port ${port}`);
    });
}

export default app;
