// Price calculation
const robuxSelect = document.getElementById("robux-select");
const priceOutput = document.getElementById("price-output");

robuxSelect.addEventListener("change", () => {
    let value = robuxSelect.value;
    let price = (value / 100) * 15000;
    priceOutput.textContent = "Rp " + price.toLocaleString("id-ID");
});

// Form submission and order summary
const form = document.getElementById("buy-form");
form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const gamepass = document.getElementById("gamepass").value;
    const robuxAmount = robuxSelect.value;
    const paymentMethod = document.querySelector('input[name="pay"]:checked').value;
    const totalPrice = (robuxAmount / 100) * 15000;

    // Create formatted purchase text
    const purchaseText = `CHIE Game Shop Purchase Request
-----------------------------
Username: ${username}
Gamepass Link: ${gamepass}
Robux Amount: ${robuxAmount}
Payment Method: ${paymentMethod}
Total: Rp ${totalPrice.toLocaleString('id-ID')}

Please contact @lostchie on Discord and send this message to complete your payment.`;

    // Open new tab with the formatted text
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>CHIE Game Shop - Order Summary</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; background: #f0f8ff; }
                pre { background: #fff; padding: 20px; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); font-size: 1.1rem; }
                button { margin-top: 20px; padding: 12px 20px; border:none; border-radius:10px; background:#00c6ff; color:white; font-weight:bold; cursor:pointer; font-size:1rem;}
                button:hover { background:#0072ff; }
                h2 { margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <h2>Order Summary</h2>
            <pre id="purchaseText">${purchaseText}</pre>
            <button onclick="copyText()">Copy Text</button>

            <script>
                function copyText(){
                    const text = document.getElementById('purchaseText').innerText;
                    navigator.clipboard.writeText(text).then(()=>{alert('Text copied!')});
                }
            </script>
        </body>
        </html>
    `);
});
