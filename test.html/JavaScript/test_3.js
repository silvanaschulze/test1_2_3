let sum;
let i;
document.write("<h1>A/B TESTING</h1>", "<br>")

for (i=1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("A/B Testing", "<br>");
    } else if (i % 3 === 0) {
        document.write("A/B", "<br>");
    } else if (i % 5 === 0) {
        document.write("Testing", "<br>");
    } else {
        document.write(i, "<br>")
    }
}
