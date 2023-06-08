window.addEventListener('DOMContentLoaded', (event) => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayData(data));
});

function displayData(data) {
    var tableBody = document.getElementById('data-body');
    tableBody.innerHTML = '';

    for (var key in data) {
        if (typeof data[key] === 'object') {
            var row = document.createElement('tr');
            var header = document.createElement('th');
            header.textContent = key;
            header.setAttribute('colspan', '2');
            row.appendChild(header);
            tableBody.appendChild(row);
            createTableRows(data[key], tableBody);
        } else {
            var row = document.createElement('tr');
            var labelCell = document.createElement('td');
            labelCell.textContent = key;
            var valueCell = document.createElement('td');
            valueCell.textContent = data[key];
            row.appendChild(labelCell);
            row.appendChild(valueCell);
            tableBody.appendChild(row);
        }
    }
}

function createTableRows(data, tableBody) {
    for (var key in data) {
        var row = document.createElement('tr');
        var labelCell = document.createElement('td');
        labelCell.textContent = key;
        var valueCell = document.createElement('td');
        valueCell.textContent = data[key];
        row.appendChild(labelCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    }
}
