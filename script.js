// const form = document.getElementById("signup-form");
// const successMsg = document.getElementById("success-msg");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;

//   console.log(email);

//   try {
//     const res = await fetch(
//       "https://script.google.com/macros/s/AKfycbwhzeT71WcDVlVWdHkLdlaOVWeKy_HgngnPcW0YOvxNnZcvlJ9LsOoRFPNmulPFDvVm/exec",

//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email }),
//       }
//     );

//     const result = await res.json();
//     if (result.result === "success") {
//       successMsg.textContent = "가입이 완료되었습니다!";
//       form.reset();
//     } else {
//       successMsg.textContent = "오류가 발생했습니다. 다시 시도해주세요.";
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     successMsg.textContent = "전송 실패 😢";
//   }
// });
