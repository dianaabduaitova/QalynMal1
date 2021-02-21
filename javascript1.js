function check() {
    let education = document.getElementById("education");
    let capital = document.getElementById("capital");
    let skills = document.getElementsByClassName('skills')
    let result = document.getElementById('Result');
    let btnShow = document.querySelector("button");
    let img = document.querySelector('img');
    let sum = 500;
    sum *= education.value * capital.value
    for (i = 0; i < 4; i++) {
        if (skills[i].checked === true) {
            sum += parseInt(skills[i].value);
        }
    }
    for (i = 0; i < 3; i++) {
        let repas = 'repa'+i;
        let age = 'age'+i;
        let reputation = document.getElementById(repas);
        let ages = document.getElementById(age);
        if (reputation.checked === true) {
            if (reputation.value !== "200") {
                sum *= Number(reputation.value);
            } else {
                sum -= Number(reputation.value);
            }
        }
        if (ages.checked === true) {
            sum *= Number(ages.value);
        }
    }
    result.innerText = sum + "$";
    if (sum > 2500) {
        img.setAttribute("src", "https://sun9-39.userapi.com/impg/vQfPTPDiXNNVcbpLIM8HqTszs5kybk0Ks5cadA/c8NcgiCxibE.jpg?size=719x621&quality=96&proxy=1&sign=dfd46aa31442c7d464b56e093e594060&type=album");
    }
    else if (sum < 2500 && sum > 1000) {
        img.setAttribute("src","https://sun9-39.userapi.com/impg/JDb6sGveMxMPW8NBIHYgJScHN6onbdL8W3GJ2g/F5B6IVzgAtI.jpg?size=421x436&quality=96&proxy=1&sign=70a8c254af78d0f610fda35ff50713f5&type=album");
    }   else {
        img.setAttribute("src", "https://sun9-15.userapi.com/impg/uTMsgkP313qn9SdVb-xJCCzJH2R3tDl16r9ifA/u6VGQwS2bog.jpg?size=733x711&quality=96&proxy=1&sign=b0237a37123424f1b5b3df800960a03d&type=album");
    }
};

