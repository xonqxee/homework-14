function setCookie() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var expiryDays = document.getElementById("expiryDays").value;

    var d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = "name=" + name + "; " + expires;
    document.cookie = "age=" + age + "; " + expires;

    document.write("Cookie name: " + getCookie("name") + "<br>");
    document.write("Cookie age: " + getCookie("age") + "<br>");
}

function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}