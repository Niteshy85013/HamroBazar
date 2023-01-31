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

  
{/* <!-- {{!-- Popular Courses Section --}} --> */}

<div class="container py-5 mt-4">
    <div class="row">
        <h1 class="text-center">Browse Popular <span class="fst-italic"> Learn</span><span class="text-danger fst-italic">Mania</span> Courses</h1>
       
            <div class="col-md-4">
                <div class="card shadow-lg mb-5 bg-body rounded mt-3 border-dark">
                    <div class="card-body alls">
                        <div class="container text-center py-3">
                              <img src="./images/pythonpr.png"  class="card-img-top" alt="..."/>
                        </div>
                        <h5 class="card-title">Python Programming language</h5>
                        <p class="fs-8">Learn python programming language and develop skills for machine larnings for free.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow-lg mb-5 bg-body rounded mt-3 border-dark">
                    <div class="card-body alls">
                        <div class="container text-center py-3">
                              <img src="./images/javalogo.png"  class="card-img-top" alt="..."/>
                        </div>
                        <h5 class="card-title">Java Programming language</h5>
                        <p class="fs-8">Learn java and advance java programming and develop innovative softwares. </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-lg mb-5 bg-body rounded mt-3 border-dark">
                    <div class="card-body alls">
                        <div class="container text-center py-3">
                              <img src="./images/flutter.png"  class="card-img-top" alt="..."/>
                        </div>
                        <h5 class="card-title">Flutter Programming language</h5>
                        <p class="fs-8">Learn Flutter programing language and boost your skill in mobile app development for free.</p>
                    </div>
                </div>
            </div>
    </div>
   </div>

   {/* <!-- {{!-- Popular course section ends --}} */}

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
</section>
<Contact/>
    </>
    
  )
}

export default Home