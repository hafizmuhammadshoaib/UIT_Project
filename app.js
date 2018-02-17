window.onload = function () {
    initApp();
}
function CardDataObj(imgSrc, name, title, text) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.title = title;
    this.text = text;

}

let bestOfTvs = [
    new CardDataObj("tv_images/Ecostart.jpg", "Ecostar", 'CX-39U564 - HD LED TV - 39" ', 'Rs. 29,900'),
    new CardDataObj("tv_images/Orient.jpg", "Orient", 'CX-39U564 - HD LED TV - 39" ', 'Rs. 29,900'),
    new CardDataObj("tv_images/Panasonic.jpg", "Panasonic", 'TH-32E310M - HD LED TV - 32" - Black ', 'Rs. 26,500'),
    new CardDataObj("tv_images/Samsung.jpg", "Samsung", 'M5000 - Full HD LED TV - 40" - Black" ', 'Rs. 46,799'),
    new CardDataObj("tv_images/Tcl.jpg", "TCL", 'D2900 - HD LED TV - 32" - Black" ', 'Rs. 22,900')
];
let bestSellers = [
    new CardDataObj('laptop_images/dell.jpg', 'Dell', 'Latitude 3330 13.3" Core i5-3337U ', 'Rs. 2,0499'),
    new CardDataObj("tv_images/Panasonic.jpg", "Panasonic", 'TH-32E310M - HD LED TV - 32" - Black ', 'Rs. 26,500'),
    new CardDataObj('laptop_images/hp.jpg', 'HP', 'Pavilion 210 G1 - 11.6" Display - 4th Gen. - Core i3-4010u ', 'Rs. 21,999'),
    new CardDataObj('laptop_images/dawlance.jpg', 'Dawlance', 'HRF-216 ECD - E-Star Series - Dark Mettalic', 'Rs. 26315'),
    new CardDataObj("tv_images/Orient.jpg", "Orient", 'CX-39U564 - HD LED TV - 39" ', 'Rs. 29,900')
];
let bestPhones = [
    new CardDataObj('mob_images/Mi_Mix2.jpg', 'Mi', 'Mix2 - 5.99" - 6GB RAM - 64GB ROM - Dual SIM - Fingerprint Sensor - Black', 'Rs . 38,999'),
    new CardDataObj('mob_images/Mi_Note4.jpg', 'Mi', 'Note 4 - C6 - 5.5" - 3GB - 32GB - 13MP - 4G - Black', 'Rs. 20,500'),
    new CardDataObj('mob_images/Samsung_galaxy.jpg', 'Samsung', 'Galaxy Grand Prime Plus - 5.0" PLS TFT LCD - 8GB RAM - 1.5GB RAM - Dual SIM- Gold', 'Rs. 14,299'),
    new CardDataObj('mob_images/Huawei_p10.jpg', 'Huawei', 'P10 Lite - 5.2" - 4GB - 32GB - 12MP - 4G - Blue', 'Rs.30,720'),
    new CardDataObj('mob_images/Mi_Note4_white.jpg', 'Mi', 'Note 4 - C6 - 5.5" - 3GB - 32GB - 13MP - 4G - Gold', 'Rs.20,500')
];
let topPicksInFashion = [
    new CardDataObj('fashion_images/jeans.jpg', 'Red Tree', 'Black Denim Jeans - Black - 36', 'Rs.1,699'),
    new CardDataObj('fashion_images/shoes.jpg', 'Oasis', 'Black Denim Jeans - Black - 36', 'Rs. 1,583'),
    new CardDataObj('fashion_images/skin_cottonn_trouser.jpg', 'N.H.K Traders', 'Black Fleece Angry Beard Printed Hoodie for Men', 'Rs. 1,100'),
    new CardDataObj('fashion_images/tshirt_man.jpg', 'Aashi', 'Black Fleece Angry Beard Printed Hoodie for Men', 'Rs. 723'),
    new CardDataObj('fashion_images/tshirt_women.jpg', 'A&G', 'Zipper Hoodie for women', 'Rs. 899'),
];
let topSellerInAppliances = [
    new CardDataObj('appliances_images/gabanational_iron.jpg', 'Tool Shop', 'Dry Iron 1000W', 'Rs. 1,800'),
    new CardDataObj('appliances_images/national_iron.jpg', 'Tool Shop', 'Dry Iron 1000W', 'Rs. 2,299'),
    new CardDataObj('appliances_images/aqua_filter.jpg', 'Aqua Filter', '3 step Filter', 'Rs. 1,399'),
    new CardDataObj('appliances_images/elec_kitchen_scale.jpg', 'Beauty World', 'Electronic Kitchen Scale - White', 'Rs. 850'),
    new CardDataObj('appliances_images/moulinex_sandwichmaker.jpg', 'Bingo', 'Two slice Sandwich Maker', 'Rs. 1,699 '),
]
let groceryShop = [
    new CardDataObj('grocery_images/ahsan_dry_fruit_almond.jpg', 'Ahsan Enterp', 'Almond Kagzi Badam 450gm ', 'Rs. 450'),
    new CardDataObj('grocery_images/muzammil_sons_plums.jpg', 'Muzammil Sons', "Plums (Aloo Bukhara)", "Rs. 250"),
    new CardDataObj('grocery_images/purina_felix_cat.jpg', 'Purina Felix', 'Cat Meal', 'Rs. 150'),
    new CardDataObj('grocery_images/quetta_dry_fruit_wallnuts.jpg', 'Quetta Dry Fruit', 'Walnut - 1000g', 'Rs. 590'),
    new CardDataObj('grocery_images/easylife_cloves.jpg', 'Muzammil Sons', 'Cloves (laung)-200gm', 'Rs,320'),
]


function mouseOver(ele) {
    let par = ele.parentElement;
    par.getElementsByTagName('a')[0].style.color = '#F17E0A';
    let span = par.getElementsByTagName('span');
    for (let i = 0; i < span.length; i++) {
        span[i].style.color = 'rgb(211, 209, 210)';

    }
    switch (ele.innerHTML.toLowerCase()) {
        case 'best of tvs':
            setCardDiv(bestOfTvs);
            break;
        case 'best sellers':
            setCardDiv(bestSellers);
            break;
        case 'best of phones':
            setCardDiv(bestPhones);
            break;
        case 'top picks in fashion':
            setCardDiv(topPicksInFashion);
            break;
        case 'top sellers in appliances':
            setCardDiv(topSellerInAppliances);
            break;
        case 'grocery shop':
            setCardDiv(groceryShop);
            break;

    }



}
function mouseOut(ele) {
    let par = ele.parentElement;
    par.getElementsByTagName('a')[0].style.color = '#000000';
    let span = par.getElementsByTagName('span')
    for (let i = 0; i < span.length; i++) {
        span[i].style.color = '#000000';
    }
}
function setCardDiv(arrOfObj) {
    let cardDivArray = document.getElementsByClassName('card');
    for (let i = 0; i < cardDivArray.length; i++) {
        let imgTag = cardDivArray[i].getElementsByTagName("img");
        imgTag[0].setAttribute('src', arrOfObj[i].imgSrc);
        let spanTag = cardDivArray[i].getElementsByTagName('span');
        spanTag[0].innerHTML = arrOfObj[i].name;
        let cardTitle = cardDivArray[i].getElementsByClassName('card-title');
        cardTitle[0].innerHTML = arrOfObj[i].title;
        let cardText = cardDivArray[i].getElementsByClassName('card-text');
        cardText[0].innerHTML = arrOfObj[i].text;

    }

}
let signInBtn = document.getElementById("SignInBtn");
let signUpBtn = document.getElementById("SignUpBtn");

signInBtn.addEventListener('click', onSignIn);
signUpBtn.addEventListener('click', onSignUp);
function onSignIn() {
    let email = document.getElementById("inputEmailSignIn").value;
    let pass = document.getElementById("inputPassSignIn").value;
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });


}
function onSignUp() {
    let email = document.getElementById("inputEmailSignUp").value;
    let pass = document.getElementById("inputPassSignUp").value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);

        // ...
    });

}
function onSignOut() {
    firebase.auth().signOut();

}
function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            $("#loginModal").modal("hide");
            clearInputFields();
            accInfo(user.email);

            // ...
        } else {
            setSignInAndSignUpButton();
        }
    });
}

function accInfo(email) {
    let parentLi = document.getElementById("accInfo");
    parentLi.innerHTML = "";
    let anchorTag = document.createElement("a");
    anchorTag.setAttribute("class", "dropdown-toggle");
    anchorTag.setAttribute("data-hover", "dropdown");
    anchorTag.setAttribute("role", "button");
    anchorTag.setAttribute("aria-haspopup", "true");
    anchorTag.setAttribute("aria-expanded", "false");



    let boldTag = document.createElement("b");
    boldTag.innerHTML = "Hello,";
    let brTag = document.createElement("br");
    let secBoldTag = document.createElement('b');
    secBoldTag.innerHTML = email.substring(0, 6);
    secBoldTag.setAttribute("class", "nav_right_bold_btn");
    let spanTag = document.createElement("span");
    spanTag.setAttribute("class", "caret");


    let uListTag = document.createElement("ul");
    uListTag.setAttribute("class", "dropdown-menu");
    let liTag = document.createElement("li");
    let btnTag = document.createElement("button");
    btnTag.innerHTML = "Logout";
    btnTag.setAttribute("class", "btn");
    btnTag.setAttribute("id", "signOutBtn");
    btnTag.setAttribute("onclick", "onSignOut()");
    liTag.appendChild(btnTag)
    uListTag.appendChild(liTag);


    anchorTag.appendChild(boldTag);
    anchorTag.appendChild(brTag);
    anchorTag.appendChild(secBoldTag);
    anchorTag.appendChild(spanTag);


    parentLi.appendChild(anchorTag);
    parentLi.appendChild(uListTag);


}
function setSignInAndSignUpButton() {
    document.getElementById("accInfo").innerHTML = `<a href="" class="dropdown-toggle" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    <b>Your</b>
    <br />
    <b class="nav_right_bold_btn">Account</b>
    <span class="caret"></span>
</a>
<ul class="dropdown-menu">
    <li>
        <button id="loginBtn" class="btn" data-target='#loginModal' data-toggle='modal'>LOGIN</button>
    </li>
    <li>
        <a id="showInOneLine" href="Javascript:void(0)" data-target='#SignUpModal' data-toggle='modal'> New Customer?
            <span id="signUpLink"> SignUp</span>
        </a>
    </li>
    <li role="separator" class="divider"></li>
    <li class="dropdown-header">Track Your Order</li>
    <li> Your order number
        <br />
        <input id="track-order-num-input" type="text">
    </li>
    <li>Your email
        <br />
        <input id="track-order-email-input" type="email">
    </li>
    <li>
        <a href="" id="track-btn">TRACK</a>
    </li>
</ul>
`;

}
function clearInputFields() {
    document.getElementById("inputEmailSignIn").value = "";
    document.getElementById("inputPassSignIn").value = "";
    document.getElementById("inputEmailSignUp").value = "";
    document.getElementById("inputPassSignUp").value = "";
}
