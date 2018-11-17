import parcel from '../models/parcel';

export default {


    parcelDetail(req, res, next){
        /*
        Show detail of a specific parcel. Pass id of the parcel as part of the URL
        */

    const parcel_id = req.params.parcel_id;

    // find the parcel in parcel array whose id is equal to parcel_id

    const parcel_detail = parcel.filter(p => p.id == parcel_id);

    res.send(parcel_detail);
    }
    
   

    }