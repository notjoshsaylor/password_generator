const charcs = "abcdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*"
const passLength = 10
let randomPwd = ""
let password1 = ""
let password2 = ""
let password3 = ""
let password4 = ""
let genPass = document.getElementById("generate")
let pass1 = document.getElementById("pwd1")
let pass2 = document.getElementById("pwd2")
let pass3 = document.getElementById("pwd3")
let pass4 = document.getElementById("pwd4")

function getPassWord(){
   
   password1 = ""
   password2 = ""
   password3 = ""
   password4 = ""
   
   for(let i = 0; i < passLength; i++){
      random = Math.floor(Math.random() * charcs.length) 
      password1 += charcs.substring(random, random + 1)
   }
   for(let i = 0; i < passLength; i++){
      random = Math.floor(Math.random() * charcs.length) 
      password2 += charcs.substring(random, random + 1)    
   }
   for(let i = 0; i < passLength; i++){
      random = Math.floor(Math.random() * charcs.length) 
      password3 += charcs.substring(random, random + 1)    
   }
   for(let i = 0; i < passLength; i++){
      random = Math.floor(Math.random() * charcs.length) 
      password4 += charcs.substring(random, random + 1)    
   }
   
   addPwd()
   
}

function addPwd(){

   pass1.textContent = password1
   pass2.textContent = password2
   pass3.textContent = password3
   pass4.textContent = password4

};



