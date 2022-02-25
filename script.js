//Số chính xác là 7

let inputNumber = document.getElementById("inputNumber");
let result = document.getElementById("result");
let btn = document.getElementById("btnClick")
let countClick = 0;

btn.addEventListener("click", function () {
    countClick += 1;
    if(Number(inputNumber.value) < 1 || Number(inputNumber.value) > 10)
    {
        result.innerHTML = "Số bạn nhập vào chưa hợp lệ. Mời bạn nhập lại số khác!";
    }
    else
    {
        if (inputNumber.value != "7") {
            if (countClick > 3) {
                result.innerHTML = "Bạn đã dự đoán sai 3 lần. Kết quả đúng là 7!";
            } else {
                result.innerHTML = "Số bạn dự đoán chưa đúng. Mời nhập lại!";
            }
            return false;
        }
        else{
            result.innerHTML = "Xin chúc mừng bạn đã dự đoán chính xác!";
            return true;
        }
    }
});