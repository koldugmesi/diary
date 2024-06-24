document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData();
    let nickname = document.getElementById('nicknameInput').value;
    let imageFile = document.getElementById('imageUpload').files[0];
    let text = document.getElementById('textInput').value;
    
    formData.append('nickname', nickname);
    if (imageFile) {
        formData.append('image', imageFile);
    }
    formData.append('text', text);

    fetch('https://example.com/submit', { // Replace with your server endpoint
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Submission successful!');
        } else {
            alert('Submission failed.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
});
