function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=='' && password==''){
        alert("Username dan Password Tidak Boleh Kosong");
    }else if(username==''){
        alert("Username Tidak Boleh Kosong");
    }else if(password==''){
        alert("Password Tidak Boleh Kosong");
    }else{
        alert("Anda Telah Login, Selamat Datang " + username + "!");
        window.location.href="/index";
    }
}
