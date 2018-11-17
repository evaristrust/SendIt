const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();
router.get('/v1/parcels', ParcelsController.showParcels);
router.post('/v1/parcels/', ParcelsController.newParcel);
router.get('/v1/users/:user_id/parcels', ParcelsController.userParcels);
router.get('/v1/parcels/:parcel_id', ParcelsController.parcelDetail);
router.put('/v1/parcels/:parcel_id/cancel', ParcelsController.cancelParcel);
export default router;