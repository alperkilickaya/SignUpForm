const loginForm = document.getElementById("registerForm"); // formu yakala
let email = document.getElementsByName("email")[0]; // email alanını yakala


loginForm.addEventListener("submit", function(e){ // formun std submit olma durumunu engelle
    e.preventDefault();
})

function gonder(){ // login butonuna basılınca çalışan fonksiyon
    let password = document.getElementsByName("password")[0];// şifre alanı

    const regexPattern = /\S+\@+\S+\.+\S{3}/ // regex paternim. "com" 

    if((email.value.trim() == "") || (password.value.trim() == "" ) ){ // alanlar boş olamaz
        Swal.fire({
            title: 'Uyarı!',
            html: 'Lütfen Boş Alan Bırakmayınız!',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        
        });
    }else if (!regexPattern.test(email.value.trim())) { // email alanına girilen değer regex ile karşılaştır.
        Swal.fire({
            title: 'Uyarı!',
            html: 'Email Hatalı',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        
        });
    }else if (password.value.trim().length < 6) { // şifre 6 karakterden az ise
        Swal.fire({
            title: 'Uyarı!',
            html: 'Şifre 6 Karakterden Az Olamaz!',
            icon: 'warning',
            confirmButtonText: 'Tamam'
        
        });
     }else{ // koşullar uygunsa sayfa yönlendir.
        Swal.fire({
            title: 'Başarılı',
            html: 'Sayfa Yenilenecek!',
            icon: 'success',
            confirmButtonText: 'Tamam'
        
        }).then(function(){ // tamam butonuna bastıktan sonra yönlendirmeyi yap. aksi halde modal çıkıyor ve tamam denilemeden sayfa yenileme çalışıyor.
            location.replace("index.html")
        });
        
    }
}
