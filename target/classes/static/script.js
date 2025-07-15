document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('/api/files/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.text();
    document.getElementById('response').innerText = 'File ID: ' + result;
});
