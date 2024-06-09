window.onload = function(){

    // Changing variables
    var pg = 8016; // Current page
    var chap = 0; // Current chapter
    var date = new Date("6/9/2024 6:19 AM UTC"); // Current time/date

    var pb = document.getElementById("progbar");

    var minpg = 0;
    var maxpg = 31523;
    pb.value = pg;
    pb.max = maxpg;

    document.getElementById("minnum").innerHTML = minpg.toString();
    document.getElementById("curnum").innerHTML = pg.toString();
    document.getElementById("maxnum").innerHTML = maxpg.toString();

    var percent = 3 + ((88 - 5) * (pg / maxpg))
    document.getElementById("curnum").style.transform = `translate(${percent}%, -3.03488372093vw)` // -43.5px

    var dp = 1000
    percent = Math.round((pg / maxpg) * 100 * dp) / dp
    document.getElementById("percent").innerHTML = percent.toString().concat("%");

    date = date.toString();
    document.getElementById("datetxt").innerHTML = `Last Updated on ${date.substring(4, 21)}`;

    
}
