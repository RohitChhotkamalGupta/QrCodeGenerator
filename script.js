var qrcode = null; // Declare a global variable to store the QR code instance

function generateQRCode() {
    var textInput = document.getElementById('textInput').value;

    // Check if a QR code instance already exists
    if (qrcode !== null) {
        // Clear the previous QR code
        qrcode.clear();
        // Remove the previous QR code element
        var qrcodeElement = document.getElementById("qrcode");
        while (qrcodeElement.firstChild) {
            qrcodeElement.removeChild(qrcodeElement.firstChild);
        }
    }

    if (textInput.trim() !== '') {
        // Create a new QR code instance
        qrcode = new QRCode(document.getElementById("qrcode"), {
            text: textInput,
            width: 128,
            height: 128
        });
    } else {
        alert('Please enter text to generate QR Code.');
    }
}
