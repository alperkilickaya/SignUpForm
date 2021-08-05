const loginForm = document.getElementById("registerForm"); // formu yakala
let email = document.getElementsByName("email")[0]; // email alanını yakala


let swal= { //swetalert default ayarı.
    title: 'Uyarı!',
    html: 'Lütfen Boş Alan Bırakmayınız!',
    icon: 'warning',
    confirmButtonText: 'Tamam'
}

function gonder(){ // login butonuna basılınca çalışan fonksiyon

<<<<<<< HEAD
    loginForm.addEventListener("submit", function(e){ // formun std submit olma durumunu engelle
        e.preventDefault();
    })

    let password = document.getElementsByName("password")[0];// şifre alanı
    const regexPattern = /\S+\@+\S+\.+\S{3}/ // regex paternim. 
=======
    const regexPattern = /\S+\@+\S+\.+\S{3}/ // regex paternim. "com" 
>>>>>>> a1c70a4e6e00e83f3cc23e2431dbcdfdeb85631a

    if((email.value.trim() == "") || (password.value.trim() == "" ) ){ // alanlar boş olamaz

        Swal.fire(swal);

    }else if (!regexPattern.test(email.value.trim())) { // email alanına girilen değer regex ile karşılaştır.

        swal.html = 'Email Hatalı'
        Swal.fire(swal);
        
    }else if (password.value.trim().length < 6) { // şifre 6 karakterden az ise

        swal.html = 'Şifre 6 Karakterden Az Olamaz!'
        Swal.fire(swal);

     }else{ // koşullar uygunsa sayfa yönlendir.
<<<<<<< HEAD

        swal.title = 'Başarılı'    
        swal.html = 'Sayfa Yenilenecek!';
        swal.icon = 'success'

        Swal.fire(swal).then(function(){ // tamam butonu sonrası yönlendirmeyi yap.
=======
        Swal.fire({
            title: 'Başarılı',
            html: 'Sayfa Yenilenecek!',
            icon: 'success',
            confirmButtonText: 'Tamam'
        
        }).then(function(){ // tamam butonuna bastıktan sonra yönlendirmeyi yap. aksi halde modal çıkıyor ve tamam denilemeden sayfa yenileme çalışıyor.
>>>>>>> a1c70a4e6e00e83f3cc23e2431dbcdfdeb85631a
            location.replace("index.html")
        });
        
    }
}
