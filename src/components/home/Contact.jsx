import React from 'react'

const Contact = () => {
  return (
    <>

<section id="contact-form">
    
    <div class="container shadow-lg p-3 mb-2 rounded text-center ">
       <div class="row ">
            <h1 class="text-center">Contact Us</h1>
           <div class="col-md-6 mt-5">
              
               <div class="card   mt-3">
                   <div class="card-body homeit">
                       <h4 class="fst-italic">Fill this form to get in touch with us...</h4>
  
                       <form action="/contact" method="POST"autocomplete="off">
  
                       <div class="form-floating">
                           <input type="text" class="form-control" name="fullname"   placeholder="Full Name"
                                required/>
                           <label for="floatingInputGroup1">Fullname</label>
                       </div>
  
                       <div class="form-floating mt-3">
                           <input type="email" class="form-control" name="email" placeholder="Email" required/>
                           <label for="floatingInputGroup1">Email</label>
                       </div>
  
                       <div class="form-floating mt-3">
                           <textarea class="form-control" placeholder="Leave a comment here" name="desc"  
                                 required></textarea>
                           <label for="floatingTextarea2">Leave Your Comments</label>
                       </div>
  
                        
                       <button type="submit" class="btn btn-success text-center mt-4 ">Submit</button>
                       </form>
  
                   </div>
  
               </div>
               </div>
  
               <div class="col-md-6 mt-3">
                   <img src="https://imgs.search.brave.com/I41ikO_ADjMpfOXh93dF0x0GfqsF0vOnvzdPdNmMlok/rs:fit:729:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/QzRvYkhQZEo4akFO/cUxJdUU1c29RSGFF/MCZwaWQ9QXBp" alt="" class="mt-5 img-fluid"   />
               </div>
           </div>
       </div>
  
  </section>
    </>
  )
}

export default Contact