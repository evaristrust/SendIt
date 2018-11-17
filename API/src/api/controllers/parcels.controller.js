import parcel from '../models/parcel';

export default {


 userParcels(req, res, next){
        /*
        Show parcels ordered by a specific user
        */

    const user_id = req.params.user_id;

    // find the parcels in parcel array whose id is equal to customer_id

    const parcels = parcel.filter(p => p.customer_id == user_id);

    res.send(parcels);
    }


    
   

    }