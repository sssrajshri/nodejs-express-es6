/**
* @file Main entry point to enter to the app
* @author Shri 
*/

import app from './app';

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
