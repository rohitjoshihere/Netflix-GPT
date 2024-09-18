export const checkValidate = (name,email, password) => {
    const isNameValid =   /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/.test(name);
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(password);
    if(!isNameValid) return "Name is not valid"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    
    return null;
}