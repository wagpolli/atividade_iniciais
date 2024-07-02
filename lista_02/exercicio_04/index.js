
function addUser() {
    
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    
    if (name.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.textContent = name;
    cell2.textContent = ema
