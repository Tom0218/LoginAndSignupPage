const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const btn = document.getElementById("btn");
const check1 = document.getElementById("check1")

btn.addEventListener('click',function(){


    let getData = localStorage.getItem('userData');
    let  getDataArr= JSON.parse(getData);


    if((Email.value) != getDataArr[0]){
        check1.innerText ="無此帳號"
    }else if((Password.value) != getDataArr[2]){
        check1.innerText ="密碼錯誤"
    }else if((Email.value) == getDataArr[0] &&(Password.value) == getDataArr[2])
    check1.innerText ="登入成功"
})