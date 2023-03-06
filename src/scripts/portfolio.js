let closed = document.querySelectorAll(".closed");

for (let i = 0; i < closed.length; i++) {
    closed[i].onclick = function() {
        alert("Project closed or some one else...")
    }
}