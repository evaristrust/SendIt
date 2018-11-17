import parcel from '../models/parcel';

export default {

    cancelParcel(req, res, next){
        /*
        Cancel the parcel. Pass parcelid as parameter

        Only incomplete parcels can be cancelled
        */
        const parcel_id = req.params.parcel_id;

         // get the parcel

         let order = parcel.filter(p => p.id == parcel_id);

         let http_status = 200;

         let msg = '';

         // did we find the parcel?

         if(order.length == 0){
            http_status = 400;
            msg ='The parcel was not found';
         }
         else{
            // the parcel exists but can it be cancelled?
            
            if (order[0].status == 'complete'){
                http_status = 400;
                msg = 'The parcel cannot be cancelled because it is already complete';
            }
            else{
                msg='The order has been cancelled successfully';
                order[0]['status'] = 'cancelled';
            }
         }

            res.status(http_status).send(msg);
         

 }

    
   

    }