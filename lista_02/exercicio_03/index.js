
function displayUser() {
    
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    
    
    if (name.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    var tableBody = document.getElementById("userTableBody");
    var newRow = tableBody.insertRow();
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.textContent = name;
    cell2.textContent = email;
    
    document.getElementById("userName").value = '';
    document.getElementById("userEmail").value = '';
}
