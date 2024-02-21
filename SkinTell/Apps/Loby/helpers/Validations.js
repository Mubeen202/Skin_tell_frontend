const nameValidator=(name) =>{
    if (!name) return "Please fill in this field."
    return ''
  }

  const emailValidator=(email)=> {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Please fill in this field."
    if (!re.test(email)) return 'Please enter a valid email address!'
    return ''
  }
  
  const ageValidator = (age)=> {
    const re = /^\d+$/
    if (!age) return "Please fill in this field."
    if (!re.test(age)) return 'Age must be a number!'
    if (parseInt(age) <= 1 || parseInt(age) >= 100) return 'Please enter a valid age!'
    return ''
  }

  const genderValidator =(gender)=> {
    if (!gender) return "Please fill in this field."
    return ''
  }

  const passwordValidator=(password)=> {
    if (!password) return "Please fill in this field."
    if (password.length < 8) return 'Password should contain at least 8 characters.'
    return ''
  }

  

const contactValidator = (contactNumber) => {
  const re = /^\d{10}$/; // Assumes a 10-digit contact number
  if (!contactNumber) return "Please fill in this field.";
  if (!re.test(contactNumber)) return 'Contact number must be a 10-digit number!';
  return '';
}

  export default{
    nameValidator,
    emailValidator,
    passwordValidator,
    genderValidator,
    ageValidator,
    contactValidator

  }
  

