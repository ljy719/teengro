// =========================
// FAQ
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


// =========================
// BUY BUTTON
// =========================

const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", () => {

    alert(
        "구매 기능은 다음 단계에서 카페24 또는 실제 결제 페이지와 연결할 예정입니다."
    );

});


// =========================
// HEADER SHADOW
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(30, 62, 110, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});