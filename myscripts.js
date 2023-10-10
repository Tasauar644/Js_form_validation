const array=[];

function firstNameValidation(){

    let firstName=document.getElementById("firstName").value;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if(firstName==""){
        document.getElementById("spanFirstName").style.visibility="hidden";
        document.getElementById("firstName").style.borderColor="";

    }
    else{

    let firstNameResult=nameRegex.test(firstName);

    if(firstNameResult){
        document.getElementById("spanFirstName").style.visibility="hidden";
        document.getElementById("firstName").style.borderColor="";
        verify(firstNameResult);


    }
    else{
             console.log("This is not a valid first name");
             document.getElementById("spanFirstName").style.visibility="visible";
             document.getElementById("firstName").style.borderColor="red";
             

    }
}

}

function lastNameValidation(){

    let lastName=document.getElementById("lastName").value;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if(lastName==""){
        document.getElementById("spanLastName").style.visibility="hidden";
        document.getElementById("lastName").style.borderColor="";


    }
    else{

    let lastNameResult=nameRegex.test(lastName);

    if(lastNameResult){
        document.getElementById("spanLastName").style.visibility="hidden";
        document.getElementById("lastName").style.borderColor="";
        verify(lastNameResult);

    }
    else{
             console.log("This is not a valid last name");
             document.getElementById("spanLastName").style.visibility="visible";
             document.getElementById("lastName").style.borderColor="red";
            

    }
}

}


function userNamevalidation(){
    let userName=document.getElementById("userName").value;
    const userNameRegx=/^[a-zA-Z0-9_]+$/;

    if(userName==""){
        document.getElementById("spanUserName").style.visibility="hidden";
        document.getElementById("userName").style.borderColor="";


    }
    
    else{

    let userNameResult=userNameRegx.test(userName);

    if(userNameResult){
       
        document.getElementById("spanUserName").style.visibility="hidden";
        document.getElementById("userName").style.borderColor="";
        verify(userNameResult);

    }
    else{
             console.log("This is not a valid user name");
             document.getElementById("spanUserName").style.visibility="visible";
             document.getElementById("userName").style.borderColor="red";
            

    }
}

}

function emailvalidation(){
    let emailName=document.getElementById("userEmail").value;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

    if(emailName=="")
    {
        document.getElementById("spanEmailAddress").style.visibility="hidden";
        document.getElementById("userEmail").style.borderColor="";

    }

    else{

    let emailNameResult=emailRegex.test(emailName);

    if(emailNameResult){
        document.getElementById("spanEmailAddress").style.visibility="hidden";
        document.getElementById("userEmail").style.borderColor="";
        verify(emailNameResult);

    }
    else{
             console.log("This is not a valid email address");
             document.getElementById("spanEmailAddress").style.visibility="visible";
             document.getElementById("userEmail").style.borderColor="red";


    }
}

}

function ageValidation(){
let userAge=document.getElementById("userAge").value;

    if(userAge==""){
        document.getElementById("spanAge").style.visibility="hidden";
        document.getElementById("userAge").style.borderColor="";

    }
    else{

    if(userAge<18 || userAge >50 ){
        document.getElementById("spanAge").style.visibility="visible";
        document.getElementById("userAge").style.borderColor="red";

    }
    else{
        document.getElementById("spanAge").style.visibility="hidden";
        document.getElementById("userAge").style.borderColor="";

    }
}

}

function phoneNumberValidation(){
    let userPhoneNumber=document.getElementById("userPhoneNumber").value;
    const phoneNumberRegx=/^01[3-9][0-9]{8}$/;

    if(userPhoneNumber==""){
        document.getElementById("spanPhoneNumber").style.visibility="hidden";
        document.getElementById("userPhoneNumber").style.borderColor="";


    }
    else{

    let userPhoneNumberResult=phoneNumberRegx.test(userPhoneNumber);

    if(userPhoneNumberResult){
        document.getElementById("spanPhoneNumber").style.visibility="hidden";
        document.getElementById("userPhoneNumber").style.borderColor="";
        
        verify(userPhoneNumberResult);

    }
    else{
             console.log("This is not a valid phone number");
             document.getElementById("spanPhoneNumber").style.visibility="visible";
             document.getElementById("userPhoneNumber").style.borderColor="red";
        

    }
}

}

function passwordValidation(){
    let userPassword=document.getElementById("userPassword").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,11}$)/;

    if(userPassword==""){
        document.getElementById("spanPassword").style.visibility="hidden";
        document.getElementById("userPassword").style.borderColor="";


    }
    else{

    let userPasswordResult=passwordRegex.test(userPassword);

    if(userPasswordResult){
       
        document.getElementById("spanPassword").style.visibility="hidden";
        document.getElementById("userPassword").style.borderColor="";
        verify(userPasswordResult);

    }
    else{
             console.log("This is not a valid password");
             document.getElementById("spanPassword").style.visibility="visible";
             document.getElementById("userPassword").style.borderColor="red";
        

    }
}

}

function newImageUpdate() {

    let imgSource = document.getElementById("imgsrc");
    let inputFile = document.getElementById("imageUpdate");


    let size=parseFloat(inputFile.files[0].size);

    console.log(size);
    let maxSizeKB=100;
    let maxSize=maxSizeKB*1024;//converting to bytes
    console.log("max size is "+maxSize);

    console.log(size,maxSize);

    if(size<maxSize){
        console.log("I am executing");
        document.getElementById("spanImage").style.visibility="hidden";
        inputFile.addEventListener("change", function () {
            if (inputFile.files.length > 0 ) {
                imgSource.src = URL.createObjectURL(inputFile.files[0]);
                let a=true;
                verify(a);

                
            } else {
                imgSource.src = ""; 
            } 
        });
        
    }
    else{

        document.getElementById("spanImage").style.visibility="visible";
        inputFile.addEventListener("change", function(){
            imgSource.src ="profile.jpg";

        });

    }


    
       // document.getElementById("spanImage").style.visibility="hidden";
     /*   inputFile.addEventListener("change", function () {
            if (inputFile.files.length > 0) {
                imgSource.src = URL.createObjectURL(inputFile.files[0]);
                
            } else {
                imgSource.src = ""; 
            } 
        });*/
}


    /*let firstNameVerify=firstNameValidation();
    let lastNameVerify=lastNameValidation();
    let userNameVerify=userNamevalidation();
    let emailVerify=emailvalidation();
    let phoneNumberVerify=phoneNumberValidation();
    let passwordVerify=passwordValidation();*/

   /* if(firstNameVerify && lastNameVerify && userNameVerify && emailVerify && phoneNumberVerify && passwordVerify){

        document.getElementById("button").removeAttribute("disabled");
        alert("done");
        

    }
    else{
        console.log("remain disabled");
    }*/

    function verify(a){

            //const array=[];
            array.push(a);

            if(array.length==7){

                document.getElementById("button").removeAttribute("disabled");
            }
            else{
            
                console.log("remain disabled");
            }



    }

