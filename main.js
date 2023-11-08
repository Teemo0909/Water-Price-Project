let W1 = document.getElementById("Water");
console.log(W1);
let Re = document.getElementById("Result");
let ReDozen = document.getElementById("ResultDozen");
console.log(ReDozen);
let ReDozenPrice = document.getElementById("ResultDozenPrice");
console.log(ReDozenPrice);
let ReRemain = document.getElementById("ResultRemain");
console.log(ReRemain);
let ReRemainPrice = document.getElementById("ResultRemainPrice");
console.log(ReRemainPrice);
let ReNoTax = document.getElementById("ResultNoTax");
let ReTax = document.getElementById("ResultTax");


function computerData() {
    let amount = parseFloat(W1.value);
    console.log("จำนวนขวด = " , amount);
    var Dozen = amount/12;
    var Dozen = (Math.floor(Dozen));
    ReDozen.innerHTML = "จำนวนโหล = "+Dozen+ " โหล";
    console.log("จำนวนโหล = " , Dozen);
    let D1 = Dozen*100;
    ReDozenPrice.innerHTML = "ราคาโหล = "+D1+ " บาท";
    console.log("ราคาโหล = " , D1);
    var Lo = amount%12;
    ReRemain.innerHTML = "เหลือกี่ขวด = "+Lo+" ขวด";
    console.log("เหลือกี่ขวด = " , Lo);
    let L1 = Lo*10;
    ReRemainPrice.innerHTML = "ราคาขวดที่เหลือ = "+L1+ " บาท";
    console.log("ราคาขวดที่เหลือ = " , L1);
    let Dl = D1+L1;
    ReNoTax.innerHTML = "ราคายังไม่รวมภาษี = "+Dl+" บาท";
    console.log("ราคายังไม่รวมภาษี = " , Dl);
    let tax = Dl*7/100;
    ReTax.innerHTML = "ราคาภาษีของสินค้า = "+tax+" บาท";
    console.log("ราคาภาษี = " , tax);
    let Total = Dl+tax;
    console.log("ราคาทั้งหมด = " , Total);
    Re.innerHTML = "ราคาทั้งหมด = "+Total+ " บาท";
}

function Reset(){
    W1.value = "";
    ReDozen.innerHTML = "";
    ReDozenPrice.innerHTML = "";
    ReRemain.innerHTML = "";
    ReRemainPrice.innerHTML = "";
    ReNoTax.innerHTML = "";
    ReTax.innerHTML = "";
    Re.innerHTML = "";
}
 
   
        
        


 
 
    
