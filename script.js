const url = "https://nxpay1.dutchbanglabank.com/user/register";

const headers = new Headers({
  "X-KM-User-AspId": "5678",
  "X-KM-Accept-language": "en",
  "X-KM-OS-SERVICE-TYPE": "GMS",
  "X-VersionCode": "100046209",
  "X-KM-User-Agent": "ANDROID/100046209",
  "Content-Type": "application/json",
  "Content-Length": "276",
  "Host": "nxpay1.dutchbanglabank.com",
  "Connection": "Keep-Alive",
  "Accept-Encoding": "gzip",
  "User-Agent": "okhttp/4.9.3",
});

function makeRequests() {
  const number = document.getElementById("phoneNumber").value;
  const logElement = document.getElementById("requestsLog");

  const requestData = {
    aspId: "5678",
    dateOfBirth: null,
    email: null,
    gender: null,
    locale: "EN",
    mnoName: "LGU Plus",
    msisdn: number,
    name: null,
    nationality: null,
    paymentPin: null,
    registrationUserId: number,
    tcidList: [50],
    telcoId: "GP",
    verificationData: null,
    walletPin: null,
  };

  const sendData = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      // Handle response as needed
      logElement.innerHTML += `<p>Response: ${JSON.stringify(responseData)}</p>`;
    } catch (error) {
      console.error("Error:", error);
      logElement.innerHTML += `<p>Error occurred during the request.</p>`;
    }
  };

  // Add any additional logic if needed

  alert(`Sending request to ${url}. For good results, keep the browser open for a few moments.`);

  sendData();
}