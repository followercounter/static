if (!window.hasOwnProperty('followercounter')) {
    window.followercounter = {};
}
window.followercounter.total = 0;
for(var i in window.followercounter.counters) { window.followercounter.total += window.followercounter.counters[i]; };
document.write(formatNumber(twindow.followercounter.total);
