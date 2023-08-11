//TOGGLE BETWEEN LIKE AND DISLIKE, ADD 1 TO LIKE COUNT//
var likeCount1 = document.getElementById('likeCount1');

var likeCount2 = document.getElementById('likeCount2');

var likeCount3 = document.getElementById('likeCount3');


function changeIcon1(like1) {
    like1.classList.toggle('fa-solid')
    if (likeCount1.innerHTML === "360") {
      likeCount1.innerHTML = "361";
    } else {
      likeCount1.innerHTML = "360";
    }

}

function changeIcon2(like2) {
    like2.classList.toggle('fa-solid')
    if (likeCount2.innerHTML === "79") {
        likeCount2.innerHTML = "80";
    } else {
        likeCount2.innerHTML = "79";
    }
    
}

function changeIcon3(like3) {
    like3.classList.toggle('fa-solid')
    if (likeCount3.innerHTML === "499") {
        likeCount3.innerHTML = "500";
    } else {
        likeCount3.innerHTML = "499";
    }
}


//TOGGLE BETWEEN SAVE AND UNSAVE//
function save1(save1) {
    save1.classList.toggle('fa-solid');
}

function save2(save2) {
    save2.classList.toggle('fa-solid');
}

function save3(save3) {
    save3.classList.toggle('fa-solid');
}