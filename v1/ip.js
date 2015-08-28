if (!window.hasOwnProperty('followercounter')) {
    window.followercounter = {};
}
window.followercounter.ip = {
    link: null,
    callback: function (object) {
        this.link.innerHTML = object.ip;
    },
    init: function () {
        var base_url = "http://localhost:8000/v1";
        this.link = document.createElement("a");
        this.link.href = "http://followercounter.co/";
        this.link.setAttribute("target", "_blank");
        this.link.className = "fc_feature_ip";
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://api.ipify.org?format=jsonp&callback=window.followercounter.ip.callback";
        var script_index_zero = document.getElementsByTagName('script')[0];
        script_index_zero.parentNode.insertBefore(script, script_index_zero);
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src == base_url + '/ip.js') {
                var script = scripts[i];
                script.parentNode.insertBefore(window.followercounter.ip.link, scripts[i]);
                break
            }
        }
    }
}
window.followercounter.ip.init();
