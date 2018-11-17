const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();
router.get('/v1/parcels', ParcelsController.showParcels);
router.post('/v1/parcels/', ParcelsController.newParcel);
export default router;