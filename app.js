const loginForm = document.getElementById("registerForm");
let email = document.getElementsByName("email")[0];


loginForm.addEventListener("submit", function(e){
    e.preventDefault();
})

function gonder(){
    let password = document.getElementsByName("password")[0];

    const regexPattern = /\S+\@+\S+\.+\S{3}/

    if(email.value == "" ){
        Swal.fire({
            title: 'Uyarı!',
            html: 'Email Yok',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        
        });
    }else if (!regexPattern.test(email.value)) {
        Swal.fire({
            title: 'Uyarı!',
            html: 'Email Hatalı',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        
        });
    }else if (password.value.length < 6) {
        Swal.fire({
            title: 'Uyarı!',
            html: 'Şifre 6 Karakterden Az Olamaz!',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        
        });
     }else{
        Swal.fire({
            title: 'Başarılı',
            html: 'Sayfa Yenilenecek!',
            icon: 'success',
            confirmButtonText: 'Tamam'
        
        }).then(function(){
            location.replace("index.html")
        });
        
    }
}