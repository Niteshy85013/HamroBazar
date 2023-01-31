import React from 'react'
import Contact from "./Contact"
import Product from "../products/Product"
const Home = () => {
  return (
    <>
  <section className="home  ">
    <div className="container-fluid ">
        <div class="row">
            <div class="col-md-6 mt-5 py-3">
            
               
                <h1 class="text-dark ms-5 fw-bold">Sell your Products Here <span class="text-info">Without any charges</span></h1>
                <br/>
                <p class="text-dark ms-5 fs-5 fst-italic">Looking to buy and sell the product then enroll now.</p>
                <br/>
                <a href="/" class="btn btn-primary ms-5 fw-bold fs-5">Start now</a>

            </div>
            <div class="col-md-4   text-center ">
              
                <img src="https://imgs.search.brave.com/FqqAVw_FNcRHdo6iBfOs1IcHcfidsuCRJITxE8L61JI/rs:fit:510:450:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvZS1jb21tZXJj/ZS1wbmctZWNvbW1l/cmNlLTUxMC5wbmc" alt="" style={{width:'40rem',height:'30rem'}} class="py-2" />
                
            </div>

        </div>
    </div>
   
  

  {/* <!-- {{!-- Main section ends --}} --> */}
  
  <Product/>

    {/* {{!-- banner section  --}} --> */}

<div class="container   rgbs shadow-lg p-3 mb-5 rounded">
     <div class="row">
        <div class="col-md-6">
            <p class="fs-5 ">Need Help?</p>
            <h1>Talk to us Directly to clear your confusion.</h1>
            <p class="fs-5">Admin will get in touch with you shortly.</p>
        </div>
        <div class="col-md-6 mt-5 py-5 text-center">
            <a href="#contact-form" class="btn btn-success  fw-bold fs-5">Contact Us</a>
        </div>
     </div>
   
</div>

{/* {{!-- Banner section --}} --> */}

<div class="container shadow-lg p-3 mb-5 rounded bg-info py-3">
        
        <div class="row py-2">
            <div class="col-md-5 py-2">
                <img src="./images/bn.png" style={{width:'25rem',height:'20rem'}}alt="" class="img-fluid ms-5 ps-5"  />
            </div>
            <div class="col-md-6">
            <h1 class="text-center text-danger">Want to become a Seller?</h1>
                <h2 class="fst-italic py-2">Enroll now and Sell your Products </h2>
                <p class="fs-4">Enroll now and Sell your products here without paying extra cost or commission.</p>
                <a href="/" class="btn  btn-warning ms-2 fw-bold fs-5 text-center" type="submit">Enroll now</a>
            </div>
        </div>
    </div>

 {/* <!-- {{!-- Banner section ends --}} */}
</section>
<Contact/>
    </>
    
  )
}

export default Home