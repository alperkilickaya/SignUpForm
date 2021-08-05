const loginForm = document.getElementById("registerForm"); // formu yakala
let email = document.getElementsByName("email")[0]; // email alanını yakala


let swal= { //swetalert default ayarı.
    title: 'Uyarı!',
    html: 'Lütfen Boş Alan Bırakmayınız!',
    icon: 'warning',
    confirmButtonText: 'Tamam'
}

function gonder(){ // login butonuna basılınca çalışan fonksiyon

    loginForm.addEventListener("submit", function(e){ // formun std submit olma durumunu engelle
        e.preventDefault();
    })

    let password = document.getElementsByName("password")[0];// şifre alanı
    const regexPattern = /\S+\@+\S+\.+\S{3}/ // regex paternim. 

    if((email.value.trim() == "") || (password.value.trim() == "" ) ){ // alanlar boş olamaz

        Swal.fire(swal);

    }else if (!regexPattern.test(email.value.trim())) { // email alanına girilen değer regex ile karşılaştır.

        swal.html = 'Email Hatalı'
        Swal.fire(swal);
        
    }else if (password.value.trim().length < 6) { // şifre 6 karakterden az ise

        swal.html = 'Şifre 6 Karakterden Az Olamaz!'
        Swal.fire(swal);

     }else{ // koşullar uygunsa sayfa yönlendir.

        swal.title = 'Başarılı'    
        swal.html = 'Sayfa Yenilenecek!';
        swal.icon = 'success'

        Swal.fire(swal).then(function(){ // tamam butonu sonrası yönlendirmeyi yap.
            location.replace("index.html")
        });
        
    }
}
