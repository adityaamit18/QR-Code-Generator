document.getElementById('generate-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const qrcodeContainer = document.getElementById('qrcode');
    
    // Clear previous QR code
    qrcodeContainer.getContext('2d').clearRect(0, 0, qrcodeContainer.width, qrcodeContainer.height);

    // Generate new QR code
    if (text) {
        QRCode.toCanvas(qrcodeContainer, text, function(error) {
            if (error) console.error(error);
        });
    } else {
        alert('Please enter text to generate QR code.');
    }
});
