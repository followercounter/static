function fc_feature_ip() {
    var base_url = "https://followercounter.github.io/static/v1";
    var ip_address = document.createElement("a");
    ip_address.href = "http://followercounter.co/";
    ip_address.setAttribute("target", "_blank");
    ip_address.className = "fc_feature_ip";
    window.fc_feature_ip_callback = function(object) {
        ip_address.innerHTML = object.ip;
    };
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://api.ipify.org?format=jsonp&callback=window.fc_feature_ip_callback";
    var script_index_zero = document.getElementsByTagName('script')[0];
    script_index_zero.parentNode.insertBefore(script, script_index_zero);
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src == base_url + '/ip.js') {
            var script = scripts[i];
            script.parentNode.insertBefore(ip_address, scripts[i]);
            break
        }
    }
}
fc_feature_ip();
