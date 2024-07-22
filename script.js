function generateCouponCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let couponCode = "";
  for (let i = 0; i < 10; i++) {
    couponCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return couponCode;
}

function updateCouponCode() {
  const couponCodeElement = document.getElementById("cpnCode");
  couponCodeElement.textContent = generateCouponCode();
}

function copyCode() {
  const couponCodeElement = document.getElementById("cpnCode");
  const textArea = document.createElement("textarea");
  textArea.value = couponCodeElement.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Coupon code copied!");
}

setInterval(updateCouponCode, 300000);
