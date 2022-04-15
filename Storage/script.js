//local storage
localStorage.setItem("name", "Anna");
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

//session storage
sessionStorage.setItem("name", "John");
sessionStorage.removeItem("name");

//cookies

document.cookie = "name=Kyle; expires=" + new Date(2023, 0, 1).toUTCString();
document.cookie =
  "lastName=Smith; expires=" + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);
