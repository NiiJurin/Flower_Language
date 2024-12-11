document.addEventListener("DOMContentLoaded", () => {
    const slideElements = document.querySelectorAll(".slide-in");

    const observerOptions = {
        root: null,                 // viewport を基準
        rootMargin: "-30% 0px -30% 0px", // 上下 30% 内側で発火
        threshold: 0.5,               // 1ピクセルでも見えたら発火
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");   // クラス追加
            } else {
                entry.target.classList.remove("active"); // クラス削除で戻る
            }
        });
    }, observerOptions);

    slideElements.forEach((element) => observer.observe(element));
});