const express = require('express');
import ParcelsController from './controllers/parcels.controller';

const router = express.Router();
<<<<<<< HEAD
router.get('/v1/parcels', ParcelsController.showParcels);
router.post('/v1/parcels/', ParcelsController.newParcel);
=======
router.get('/v1/users/:user_id/parcels', ParcelsController.userParcels);
>>>>>>> ft-user-parcels-endpoint-162028267
export default router;