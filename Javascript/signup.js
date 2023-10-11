const SignupBtn = document.getElementById("SignupBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const reppwd = document.getElementById("reppwd");
const id = document.getElementById("name");
const end = document.getElementById("end");

let userData =[];


SignupBtn.addEventListener('click',function(){


    let userInfo = {
        email:email.value,
        password:password.value,
        id: id.value,
    }
    userData.push(userInfo);

    if(JSON.parse(localStorage.getItem("user")) == null){//若為第一次使用localstorage
        localStorage.setItem("user",JSON.stringify(userData));
        end.innerText = "註冊成功";
    }else{
        let outputArr = JSON.parse(localStorage.getItem("user"));//取得localStorage資訊
            outputArr.forEach(item => {
            if (item.email == userInfo.email) {
                end.innerText = "該email已註冊";
                
            } else {
                localStorage.setItem("user",JSON.stringify(userData));
                end.innerText = "註冊成功";
            }
        });
    }
});





