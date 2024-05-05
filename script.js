 const calendarBody = document.getElementById('calendar-body');

// Fill in the calendar with days
let date = 1;
for (let i = 0; i < 4; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        const cellContent = document.createElement('div');
        cellContent.textContent = date;
        cell.appendChild(cellContent);
        row.appendChild(cell);
        date++;
    }
    calendarBody.appendChild(row);
}
