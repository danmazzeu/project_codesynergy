document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Impulsionando a transformação digital com inteligência e inovação.",
        "Desbravando novas fronteiras digitais com criatividade e tecnologia.",
        "Conectando o futuro com soluções inteligentes e inovadoras.",
        "Transformando o amanhã com tecnologia de ponta e soluções inovadoras."
    ];

    let currentIndex = 0;
    function startTypingEffect() {
        const elements = document.querySelectorAll(".typing-effect");

        elements.forEach((textElement) => {
            textElement.textContent = '';

            let index = 0;
            const speed = 35;

            function typeWriter() {
                if (index < phrases[currentIndex].length) {
                    textElement.textContent += phrases[currentIndex].charAt(index);
                    index++;
                    setTimeout(typeWriter, speed);
                }
            }
            typeWriter();
        });
    }

    function changePhrase() {
        currentIndex = (currentIndex + 1) % phrases.length;
        setTimeout(startTypingEffect, 1000);
    }

    startTypingEffect();
    setInterval(() => {
        changePhrase();
    }, 5000);
});
