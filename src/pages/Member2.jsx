import axios from 'axios';
import { useState,useEffect } from 'react';

const Member2 = () => {

  const [MemberShip , setMemberShip] = useState([]);
  const [MemberShipModel , setMemberShipModel] = useState({});

  useEffect(() => {
    MemberShipPlan();
  }, []);

  const MemberShipPlan = async() =>{
    const res = await axios.get('http://127.0.0.1:5000/plans');
   setMemberShip(res.data.plans)  
  
  }

  const BuyPlan = () => {

    var options = {
      "key": "rzp_test_6mPpNf7iVMWqEy", // Enter the Key ID generated from the Dashboard
      "amount": MemberShipModel.price*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "YOUTUBE", //your business name
      "description": MemberShipModel.description,
      "image": "https://example.com/your_logo",
      //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
  }

    return (
        <>
    
            <div className="container-fluid vh-100 bg-black  ">
                <div className="container ">
                    <div className="row">
                        <div className="col-8 mx-auto">


                    <img className="w-25 mt-5" src="https://www.gstatic.com/youtube/img/unlimited/ytu_mobile_premium_logo_short_dark_310x40.png" alt="" />
                    <p className="fw-light text-white">Individual Membership</p>
                    </div>

                    </div>
                    <div className="row mx-auto ">

                    <div className=" col-8 mx-auto ">

                    <div className="row mx-auto text-light">
        <p className=" fw-bold m-0 p-0 ">Pre-paid plans</p>
        <p className="p-0">Pay up front. Top up anytime. We accept many forms of payment, including UPI.</p>
    </div>

<div className="  ">

{MemberShip && MemberShip.map((item,index) => {
   return (
    <div className="row mx-auto border p-2">
    <div className="col-6">
    <p className="m-0 fw-bold text-light">{item.plan_name}</p>
    <p className="m-0 text-light">₹{item.price}</p>
    </div>
    <div className="col-6">
    <button onClick={()=> setMemberShipModel(item)} className="Btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
<div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></div>
<div className="text text-light">Buy</div> 
</button>
<div>

<div className="modal fade mt-5" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">Complete your purchase</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    </div>
    <div className="modal-body">
      <div className='row'>
        <div className='col-6'>
          <div className='d-flex'>
            <img className='yu' src="https://lh3.googleusercontent.com/fHAb32xEQIqF9OS96AAZkk9AcuzkJcI14UfMwEkXOwsJ6SgzXUDByGc0aVwPqouPnOeV2UweeQ=w156-rw" alt="" /> 
           <div>
           <p className=' fw-semibold  m-0'>YouTube Premium </p>
            <p className='yt m-0'>Membership</p>
           </div>
            
          </div>
          </div>
          <div className='col-2'>
          <p>{MemberShipModel.price}</p>

          </div>
      </div>
    </div>
    <div className="modal-footer">
      <button type="button" className="  btn btn-primary w-100" onClick={() => BuyPlan(MemberShipModel)}>BUY</button>
    </div>
  </div>
</div>
</div>
</div>


    </div>
</div>

   )
})}
    
   
</div>

                    </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Member2