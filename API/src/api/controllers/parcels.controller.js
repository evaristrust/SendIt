import parcel from '../models/parcel';

export default {



     showParcels(req, res, next){
        /*
        Show list of parcels
        */
        res.send(parcel);
        // res.json({'parcels':parcel});

     }
    
   

    }