import React from 'react'
const Header = () => {
  return (
  <>
  <nav class="navbar border-bottom navbar-expand-lg   rounded  homeback  ">
  <div class="container">
         
    <a class="navbar-brand" href="/">
        {/* <img src="" alt="logo" width="250" height="20"  class="d-inline-block align-text-top"/> */}
        HamroBazar
       </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto    mb-lg-0">

    
        

        <li class="nav-item dropdown">
                <a href="/" class="nav-link active dropdown-toggle ms-2 fs-5" data-bs-toggle="dropdown">Category</a>
                     <div class="dropdown-menu">
                        <a href="/" class="dropdown-item">AutoMobiles</a>
                        <a href="/" class="dropdown-item">Furnishing</a>
                        <a href="/" class="dropdown-item">Electronics</a>
                        <a href="/computer" class="dropdown-item">Computers</a>
                     </div>
          </li>

         

        <li class="nav-item">
          <a class="nav-link active ms-2 fs-5" aria-current="page" href="/contact">Contact</a>
        </li>
      </ul>

       <a href="/" class="btn btn-dark ms-2 fw-bold fs-5">Post for free</a>
       <div class="vr  ms-2 " style={{width:'3px'}}></div>
        <a href="/" class="btn   ms-2 fw-bold fs-5 " type="submit">Login</a>
        <a href="/" class="btn btn-outline-success ms-2 fw-bold fs-5 " type="submit">Sign Up</a>
    </div>
  </div>
</nav>
  </>

  )
}

export default Header