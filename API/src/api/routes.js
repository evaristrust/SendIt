const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();
router.put('/v1/parcels/:parcel_id/cancel', ParcelsController.cancelParcel);
export default router;