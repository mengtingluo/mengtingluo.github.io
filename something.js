/**
 * Created by Meta Luo on 2015/10/30.
 */
function tips() {
    document.getElementById("tips").innerHTML = "快给我发邮件吧！"
    var s = document.getElementById("tips");
    s.className
}
function nohide() {
    var nohide1 = document.getElementById("nohide1");
    nohide1.addEventListener("mouseover", function () {
        nohide1.className = "nohide"
    })
    nohide1.addEventListener("mouseout", function () {
        setTimeout(function () {
            nohide1.className = ""
        }, 1500)
    })
    var nohide2 = document.getElementById("nohide2");
    nohide2.addEventListener("mouseover", function () {
        nohide2.className = "nohide"
    })
    nohide2.addEventListener("mouseout", function () {
        setTimeout(function () {
            nohide2.className = ""
        }, 1500)
    })
    var nohide3 = document.getElementById("nohide3");
    nohide3.addEventListener("mouseover", function () {
        nohide3.className = "nohide"
    })
    nohide3.addEventListener("mouseout", function () {
        setTimeout(function () {
            nohide3.className = ""
        }, 1500)
    })
    var nohide4 = document.getElementById("nohide4");
    nohide4.addEventListener("mouseover", function () {
        nohide4.className = "nohide"
    })
    nohide4.addEventListener("mouseout", function () {
        setTimeout(function () {
            nohide4.className = ""
        }, 1500)
    })
}
nohide();



