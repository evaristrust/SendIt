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

            res.status(http_status).json({message: msg});
         

 },
 
 userParcels(req, res, next){
        /*
        Show parcels ordered by a specific user
        */


    const user_id = req.params.user_id;

    // find the parcels in parcel array whose id is equal to customer_id

    const parcels = parcel.filter(p => p.customer_id == user_id);

    // do we have parcels by the user?

    if(parcels.length === 0 ){
        res.status(400).json({'msg':'The customer was not found'});
    }
    else{
    res.status(200).json(parcels);
    }
    },


     showParcels(req, res, next){
        /*
        Show list of parcels
        */
        
        res.status(200).json(parcel);

     },

    parcelDetail(req, res, next){
        /*
        Show detail of a specific parcel. Pass id of the parcel as part of the URL
        */

    const parcel_id = req.params.parcel_id;

    // find the parcel in parcel array whose id is equal to parcel_id

    const parcel_detail = parcel.filter(p => p.id == parcel_id);

    // parcel found?

    if(parcel_detail.length === 0){
        res.status(400).json({'msg':`There is no parcel with parcel id ${parcel_id}`});
    }
    else{
        res.status(200).json(parcel_detail);
    }
    
    },
    
    newParcel(req, res, next){
        /*
        Create a new parcel order.

        Method: Post

        @input name : String. Name of the customer making the order
        @input quantity : Number. Quanity of parcels ordered
        @input phone: Number. Phone number of the customer making the order
        */

        const { name, quantity , phone , country } = req.body;
        
        // new parcel id.
        const new_id = parcel.length + 1;
        const order_code = new_id +'UIOO';

        let customer_id = 0; // initalize it

        // generate customer id or use existing? Check the phone
        const check_phone = parcel.filter(p => p.customer_phone == phone );

        if ( check_phone.length == 0){
            // phone not found so it must be new customer. so generate customer id
            customer_id =  Math.floor(Math.random() * (9000-1000)+1000);

        }
        else {
            // the customer is not new. previously he/she is registered
            customer_id = check_phone[0]['customer_id'];
        }

        // create the order now
        parcel.push({
            id:new_id,
            order_code: order_code,
            customer_phone: phone,
            customer_name: name,
            customer_id: customer_id,
            quantity: quantity,
            status: 'incomplete',
            country: country
        });
        res.status(200).json(parcel[parcel.length-1]);

    } 
 }