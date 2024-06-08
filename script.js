window.onload = function(){

    var pb = document.getElementById("progbar");

    var min = 0;
    var cur = pb.value;
    var max = pb.max;

    document.getElementById("minnum").innerHTML = min.toString();
    document.getElementById("curnum").innerHTML = cur.toString();
    document.getElementById("maxnum").innerHTML = max.toString();

    var percent = 3 + ((88 - 5) * (cur / max))

    document.getElementById("curnum").style.transform = `translate(${percent}%, -43.5px)`
}
