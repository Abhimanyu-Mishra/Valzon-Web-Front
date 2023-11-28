// export default function Validation({data}){
//     const errors={}
//     const name_pattern = /^[a-zA-Z ]*$/;
//     const email_pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/;
//     const phone_pattern = /^[6-9]\d{9}$/;
//     if(data.name ===""){
//         errors.name ="Name is Required !"
//     }
//     if(data.email ===""){
//         errors.email ="Email is Required !"
//     }
//     else if(!email_pattern.test(data.email)){
//         errors.email = "Please Enter Valid Email"
//     }
//     if(data.phone ===""){
//         errors.phone ="Number is Required !"
//     }
//     if(data.password ===""){
//         errors.password ="Password is Required !"
//     }
//     else if(!password_pattern.test(data.password)){
//         errors.password = "Please Enter Valid Password"
//     }
//    return errors;
// }