import React from 'react'

 const Siginin = () => {
 return (
  <div container class="form-group">


   <form action="" method="post">
   <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
  </div>

    <div>
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
    </div>

    <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck2"/>
    <label class="form-check-label" for="dropdownCheck2">
      Remember me
    </label>
  </div>
   </form>
  </div>
 )
}
export default Siginin;