import React from 'react'

const Login = () => {
  return (
    <>

    <section id="login-form">
        
        <div class="container shadow-lg p-3  py-5 mt-5 rounded text-center ">
           <div class="row ">
                <h1 class="text-center">Login Here</h1>
               <div class="col-md-6 mt-5">
                  
                   <div class="card   mt-3">
                       <div class="card-body homeit">
                            
      
                           <form action="/login" method="POST"autocomplete="off">
       
                           <div class="form-floating mt-3">
                               <input type="text" class="form-control" name="username"   placeholder="UserName"
                                    required/>
                               <label for="floatingInputGroup1">Username</label>
                           </div>
       
                           <div class="form-floating mt-3">
                               <input type="password" class="form-control" name='password' placeholder='Password'/>
                               <label  for="floatingInputGroup1">Password</label>
                            </div>
                           <button type="submit" class="btn btn-warning text-center mt-4 fw-bold fs-5">Sign in</button>
                           <a href="/register" class="btn btn-info ms-4  mt-4 fw-bold fs-5 " type="submit">Sign Up</a>
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

export default Login