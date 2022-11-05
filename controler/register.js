document.getElementById('submit').onclick = () => {
    let data = new Data();
    data.email = document.getElementById('email').value;
    data.name = document.getElementById('name').value;
    data.password = document.getElementById('pass').value;
    let pass_c = document.getElementById('pass-c').value;
    data.phone = document.getElementById('phone').value;
    let arrGender = document.getElementsByName('gender');
    for(let i = 0; i < arrGender.length; i++){
        if(arrGender[i].checked){
            if(arrGender[i].value == 'male'){
                data.gender = true;
                break;
            }  else {
                data.gender = false;
                break;
            }
        }
        data.gender = null;
    }

    // Kiem tra
    let valis = true;
    // Email
    valis &= validation.kiemTraRong(data.email, 'err-email')
    valis &= validation.kiemTraEmail(data.email, 'err-email')
    // Name
    valis &= validation.kiemTraRong(data.name, 'err-name')
    valis &= validation.kiemTraKyTu(data.name, 'err-name')
    // Phone
    valis &= validation.kiemTraRong(data.phone, 'err-phone')
    valis &= validation.kiemTraSo(data.phone, 'err-phone')
    valis &= validation.kiemTraDoDai(data.phone, 'err-phone', 10)
    // Pass
    valis &= validation.kiemTraPass(data.password, pass_c, 'err-pas', 'err-pas-c')
    valis &= validation.kiemTraRong(data.password, 'err-pas')
    valis &= validation.kiemTraRong(pass_c, 'err-pas-c')
    // Gender
    valis &= validation.kiemTraGender(data.gender, 'err-gender')

    if(!valis){
        alert('errrrr')
        return;
    }

    setProduct(data)

    console.log(data)
}
let setProduct = (data) => {
    let promise = axios({
        url: ` https://shop.cyberlearn.vn/api/Users/signup`,
        method: 'POST',
        data: data
    })

    promise.then(function (res) {
        console.log(res.data);
        alert('Tạo tài khoản thành công.')
    });

    promise.catch(function (err) {
        console.log(err);
    })
}
