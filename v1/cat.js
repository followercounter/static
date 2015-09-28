// https://thecatapi.com/
if (!window.hasOwnProperty('followercounter')) {
    window.followercounter = {};
}
if (!window.followercounter.hasOwnProperty('cat')) {
    window.followercounter.cat = function() {
        var wrap = document.createElement("div");
        var link = document.createElement("a");
        link.href = "https://github.com/followercounter/static/wiki/V1#random-cat";
        link.setAttribute("target", "_blank");
        var img = document.createElement("img");
        img.src = "https://thecatapi.com/api/images/get?format=src&results_per_page=1&api_key=MzkxNDc?v=" + Math.random();
        img.setAttribute("width", "100%");
        img.setAttribute("title", "Random Cat, by Follower Counter");
        link.appendChild(img);
        wrap.appendChild(link);
        document.write(wrap.innerHTML);
    }
}
window.followercounter.cat();
