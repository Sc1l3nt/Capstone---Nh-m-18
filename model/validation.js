let validation = {
    kiemTraRong: function(value, errID){
        var check = document.getElementById(errID);
        if(value.trim() === ''){
            check.style.display = 'block';
            return false;
        }
        check.style.display = 'none';
        return true;
    },
    kiemTraKyTu: function(value, errID){
        var regexLetter = /^[A-Z a-z]+$/;
        var check = document.getElementById(errID);
        if(!regexLetter.test(value)){
            check.style.display = 'block';
            return false;
        }
        check.style.display = 'none';
        return true;
    },
    kiemTraEmail: function(value, errID){
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var check = document.getElementById(errID);
        if(!regexEmail.test(value)){
            check.style.display = 'block';
            return false;
        }
        check.style.display = 'none';
        return true;
    },
    kiemTraSo: function(value, errID){
        var regexNumber = /^[0-9]+$/;
        var check = document.getElementById(errID);
        if(!regexNumber.test(value)){
            check.style.display = 'block';
            return false;
        }
        check.style.display = 'none';
        return true;
    },
    kiemTraDoDai: function(value, errID, length){
        var check = document.getElementById(errID);
        if(value.length != length){
            check.style.display = 'block';
            return false;
        }   
        check.style.display = 'none';
        return true;
    },
    kiemTraPass: function(value1, value2, errID1, errID2){
        var check1 = document.getElementById(errID1);
        var check2 = document.getElementById(errID2)
        if(value1 !== value2){
            check1.style.display = 'block';
            check2.style.display = 'block';
            return false;
        }
        check1.style.display = 'none';
        check2.style.display = 'none';
        return true;
    },
    kiemTraGender: function(value, errID){
        let check = document.getElementById(errID);
        if(value == null){
            check.style.display = 'block';
            return false;
        }
        check.style.display = 'none';
        return true;
    }
}