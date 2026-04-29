const testimonials = [
    {
        name: "Abraham Cascante.",
        quote: "Perdí 8kg sin perder fuerza. Cada meta fue planificada y progresiva.",
        image: "views/assets/imagenes/cambio01.jpeg",
        secondaryImage: "views/assets/imagenes/cambioC.jpeg",
        loss: "-8 kg",
        months: "3"
    },
    {
        name: "Ivan Solís.",
        quote: "Mejoré mi postura y energía. El plan estuvo enfocado en resultados reales y sostenibles.",
        image: "views/assets/imagenes/cambio2.jpeg",
        secondaryImage: "views/assets/imagenes/cambio02.jpeg",
        loss: "+9 kg",
        months: "5"
    },
    {
        name: "Jeycob Piedra",
        quote: "Siento más confianza en mi mismo. El seguimiento fue constante y siempre con enfoque técnico.",
        image: "views/assets/imagenes/cambio3.jpeg",
        secondaryImage: "views/assets/imagenes/cambio03.jpeg",
        loss: "-25 kg",
        months: "4"
    },
    {
        name: "Gabriel Portuguez",
        quote: "Siento más seguridad y disciplina en mi proceso. El acompañamiento fue constante y cada avance tuvo un propósito claro.",
        image: "views/assets/imagenes/chinte2.jpeg",
        secondaryImage: "views/assets/imagenes/chinte1.jpeg",
        loss: "-6 kg",
        months: "4"
    },
    
];

let currentIndex = 0;

const mainImage = document.getElementById("testimonial-main-img");
const secondaryImage = document.getElementById("testimonial-secondary-img");
const bottomLossValue = document.getElementById("testimonial-bottom-loss");
const bottomMonthsValue = document.getElementById("testimonial-bottom-months");
const quoteValue = document.getElementById("testimonial-quote");
const nameValue = document.getElementById("testimonial-name");
const thumbs = Array.from(document.querySelectorAll(".testimonial-thumb"));

function renderTestimonial(index) {
    const testimonial = testimonials[index];
    mainImage.src = testimonial.image;
    secondaryImage.src = testimonial.secondaryImage;
    quoteValue.textContent = `"${testimonial.quote}"`;
    nameValue.textContent = `— ${testimonial.name}`;
    bottomLossValue.innerHTML = `<span class="block text-2xl md:text-3xl font-black text-white leading-tight"><span class="text-[#800020]">${testimonial.loss.replace(/\s*kg/i, '')}</span></span><span class="uppercase tracking-[0.3em] text-[#800020] text-xs md:text-sm">KG</span>`;
    bottomMonthsValue.innerHTML = `<span class="uppercase tracking-[0.3em] text-[#800020] text-xs md:text-sm">MESES</span><span class="block text-2xl md:text-3xl font-black text-white leading-tight"><span class="text-[#800020]">${testimonial.months}</span></span>`;

    thumbs.forEach((thumb, thumbIndex) => {
        const relativeIndex = (index - 2 + thumbIndex + testimonials.length) % testimonials.length;
        thumb.src = testimonials[relativeIndex].image;
        thumb.dataset.index = relativeIndex;
        thumb.classList.toggle("active", relativeIndex === index);
        thumb.classList.toggle("inactive", relativeIndex !== index);
    });
}

function changeTestimonial(direction) {
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
    renderTestimonial(currentIndex);
}

if (document.getElementById("testimonial-prev")) {
    document.getElementById("testimonial-prev").addEventListener("click", () => changeTestimonial(-1));
    document.getElementById("testimonial-next").addEventListener("click", () => changeTestimonial(1));
}

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        currentIndex = parseInt(thumb.dataset.index, 10);
        renderTestimonial(currentIndex);
    });
});

renderTestimonial(currentIndex);
