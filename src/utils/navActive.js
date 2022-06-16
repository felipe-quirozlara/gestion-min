export default function activeLink(e) {
    try {
        var path = e;
        var nav = document.getElementsByClassName("active");
        nav[0].classList.remove("active")
        document.getElementById(path).classList.add("active")
    } catch (error) {
        console.log(error);
    }
}