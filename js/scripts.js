const texts = ["طراح سایت", "معلم ششم", "طراح بازی"];
let txt = "";
let i = 0;
let n = 0;
const textHtml = document.querySelector(".text");
(function man() {

    txt = texts[n];

    textHtml.innerHTML = txt.slice(0, ++i);
    if (i >= txt.length) {
        i = 0;
        ++n;
        if (n >= texts.length)
            n = 0;
    }
    setTimeout(function() { man() }, 200)
})()