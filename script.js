function play() {
    var p1 = Math.floor(Math.random()*6)+1;
    var p2 = Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[0].setAttribute("src", "img/dice"+p1+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "img/dice"+p2+".png");
    if (p1 > p2) {
        document.querySelectorAll("h2")[0].innerHTML = "&#127942 Player 1 Won!";
    }
    else if (p2 > p1) {
        document.querySelectorAll("h2")[0].innerHTML = "&#127942 Player 2 Won!";
    }
    else {
        document.querySelectorAll("h2")[0].innerHTML = "Draw!";
    }
}
