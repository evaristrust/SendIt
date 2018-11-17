const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();
router.get('/v1/parcels', ParcelsController.showParcels);

export default router;