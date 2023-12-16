// Function to save journal entry to localStorage
function saveEntry() {
    const date = document.getElementById('entryDate').value;
    const entry = document.getElementById('journalEntry').value;

    if (date && entry) {
        // Check if entries already exist in localStorage
        const entries = JSON.parse(localStorage.getItem('entries')) || [];

        // Add new entry as JSON object
        const newEntry = { date, entry };
        entries.push(newEntry);

        // Save entries back to localStorage
        localStorage.setItem('entries', JSON.stringify(entries));

        // Clear input fields
        document.getElementById('entryDate').value = '';
        document.getElementById('journalEntry').value = '';

        // Display entries
        displayEntries();
    } else {
        alert('Please enter both date and journal entry.');
    }
}

// Function to display saved entries
function displayEntries() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';

    // Retrieve entries from localStorage
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Display each entry
    entries.forEach((entry, index) => {
        const entryElement = document.createElement('div');
        entryElement.innerHTML = `
            <strong>${entry.date}</strong>: ${entry.entry}
            <button onclick="deleteEntry(${index})">Delete</button>
        `;
        entriesContainer.appendChild(entryElement);
    });
}

// Function to delete entry
function deleteEntry(index) {
    // Retrieve entries from localStorage
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Remove the entry at the specified index
    entries.splice(index, 1);

    // Save the updated entries back to localStorage
    localStorage.setItem('entries', JSON.stringify(entries));

    // Display updated entries
    displayEntries();
}

// Display entries on page load
displayEntries();
