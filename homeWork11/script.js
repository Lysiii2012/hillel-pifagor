document.addEventListener('DOMContentLoaded', function() { 
    const table = document.getElementById('pifagorTable');
   
    for (let i = 1; i <= 10; i++) { 
      let row = document.createElement('tr');

      for (let j = 1; j <= 10; j++) { 
        let itemTable = document.createElement('td'); 

        itemTable.textContent = i * j; 
        row.appendChild(itemTable);
      }
   
      table.appendChild(row);
    }
  });