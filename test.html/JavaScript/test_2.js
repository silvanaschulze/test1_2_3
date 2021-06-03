function myFunction() {
    const toggleContent = document.getElementById("header-content");
    if (toggleContent.style.display === "none") {
        toggleContent.style.display = "block";
    } else {
        toggleContent.style.display = "none"
    }
}