let linkFooter = document.getElementById("link-externo");

console.log(linkFooter.getAttribute("href"));

let newlink = "https://www.linkedin.com/in/gustavonascimentomatos/";

linkFooter.setAttribute("href", newlink);