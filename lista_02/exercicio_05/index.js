
function editUser(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    
    document.getElementById("editName").value = cells[0].textContent;
    document.getElementById("editEmail").value = cells[1].textContent;
    document.getElementById("editPhone").value = cells[2].textContent;
    
    document.getElementById("editRowIndex").value = row.rowIndex;
}

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var newName = document.getElementById("editName").value;
    var newEmail = document.getElementById("editEmail").value;
    var newPhone = document.getElementById("editPhone").value;
    var editRowIndex = document.getElementById("editRowIndex").value;
    
    var table = document.getElementById("userTable");
    var row = table.rows[parseInt(editRowIndex)];
    row.cells[0].textContent = newName;
    row.cells[1].textContent = newEmail;
    row.cells[2].textContent = newPhone;
    
    document.getElementById("editForm").reset();
});
