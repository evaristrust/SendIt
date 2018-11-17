const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();
router.get('/v1/users/:user_id/parcels', ParcelsController.userParcels);
export default router;