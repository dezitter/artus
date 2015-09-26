import express from 'express';

import router from './router';

let api = express();

router(api);

export default api;
