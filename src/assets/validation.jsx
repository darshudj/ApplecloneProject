export function Validate(values){
    const errors={}
    const regexemail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/;
    const regexusername = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    const regexphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    const regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    if(!values.username){
      errors.username="username is requried"
    } else if(!regexusername.test(values.username)){
      errors.username="this is not a valid username"
    }

    if(!values.email){
      errors.email="email or phone is requried"
    } else if(!regexemail.test(values.email)){
      errors.email="this is not a valid email"
    }

    if(!values.phone){
        errors.phone="email or phone is requried"
    } else if(!regexphone.test(values.phone)){
      errors.phone="this is not a valid phonenumber"
    }

    if(!values.password){
      errors.password="password is requried"
    } else if(!regexpassword.test(values.password)){
      errors.password="password is not strong"
    }
    return errors;
  }


