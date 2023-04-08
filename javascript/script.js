//JavaScript to make toast button work// 
document.querySelector("#toastBtn").onclick = function() {
 new bootstrap.Toast(document.querySelector('#toast')).show()};