const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const btn = document.getElementById("btn");

btn.addEventListener('click',function(){

    // 檢查輸入是否為空
    if (Email.value.trim() === "" || Password.value.trim() === "") {
        alert('帳號或密碼不得為空');
        return;
    }

     // 檢查 localStorage 是否有數據
     let getData = localStorage.getItem('userData');
     if (!getData) {
        alert('沒有儲存的帳戶數據');
         return;
     }

    let  getDataArr= JSON.parse(getData);

      // 確保 getDataArr 是一個數組
      if (!Array.isArray(getDataArr) || getDataArr.length < 3) {
        alert('數據格式錯誤');
        return;
    }


    if((Email.value) != getDataArr[0]){
        alert('無此帳號');
    }else if((Password.value) != getDataArr[2]){
        alert('密碼錯誤');
    }else if((Email.value) == getDataArr[0] &&(Password.value) == getDataArr[2])
    alert('登入成功');
})