document.getElementById('contentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let newContent = document.getElementById('newContent').value;

    fetch('https://example.com/admin/add-content', { // Replace with your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: newContent })
    }).then(response => {
        if (response.ok) {
            alert('Content added successfully!');
        } else {
            alert('Failed to add content.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
});
