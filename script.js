window.onload = function(){

    var pb = document.getElementById("progbar");

    // Changing variables
    var cur = 8016;
    var date = new Date("6/9/2024 6:19:20 AM UTC");
    date.toString();

    var min = 0;
    var max = pb.max;
    pb.value = cur;

    document.getElementById("minnum").innerHTML = min.toString();
    document.getElementById("curnum").innerHTML = cur.toString();
    document.getElementById("maxnum").innerHTML = max.toString();

    var percent = 3 + ((88 - 5) * (cur / max))
    document.getElementById("curnum").style.transform = `translate(${percent}%, -3.03488372093vw)` // -43.5px

    var dp = 1000
    percent = Math.round((cur / max) * 100 * dp) / dp
    document.getElementById("percent").innerHTML = percent.toString().concat("%");


}
