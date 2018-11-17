import parcel from '../models/parcel';

export default {



     showParcels(req, res, next){
        /*
        Show list of parcels
        */
        res.send(parcel);
        // res.json({'parcels':parcel});

     }
    
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

        res.send(`The order was created successfully with order code ${order_code}`);

    }   

    }