// When scan is successful fucntion will produce data
function onScanSuccess(qrCodeMessage) {
  document.getElementById("result").innerHTML =
    '<span class="result">' + qrCodeMessage + "</span>";
}

// When scan is unsuccessful fucntion will produce error message
function onScanError(errorMessage) {
  // Handle Scan Error
}

const html5QrCode = new Html5Qrcode("reader");

const qrCodeSuccessCallback = message => {
    var inputElement = document.getElementById("dataInput");
    var dataToStore = document.getElementById("result").innerHTML = message; 
    inputElement.value = dataToStore;
}
const config = { fps: 10, qrbox: 250 };
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
