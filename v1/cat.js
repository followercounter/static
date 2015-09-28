// https://thecatapi.com/
if (!window.hasOwnProperty('followercounter')) {
    window.followercounter = {};
}
if (!window.followercounter.hasOwnProperty('cat')) {
    window.followercounter.cat = function() {
        var wrap = document.createElement("div");
        var img = document.createElement("img");
        img.src = "http://thecatapi.com/api/images/get?format=src&results_per_page=1&api_key=MzkxNDc?v=" + Math.random();
        img.setAttribute("width", "100%");
        wrap.appendChild(img);
        document.write(wrap.innerHTML);
    }
}
window.followercounter.cat();
