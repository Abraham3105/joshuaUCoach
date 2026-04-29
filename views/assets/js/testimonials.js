const testimonials = [
    {
        name: "Carlos M.",
        quote: "En solo 3 meses perdí 8kg sin perder fuerza. Cada meta fue planificada y progresiva.",
        image: "../assets/imagenes/doMore.jpg",
        secondaryImage: "../assets/imagenes/joshua1.jpeg",
        loss: "-8 kg",
        months: "3"
    },
    {
        name: "Ana G.",
        quote: "Mejoré mi postura y energía. El plan estuvo enfocado en resultados reales y sostenibles.",
        image: "../assets/imagenes/joshua-urena-training.jpg",
        secondaryImage: "../assets/imagenes/joshua2.jpeg",
        loss: "-6 kg",
        months: "2"
    },
    {
        name: "Diego R.",
        quote: "Siento más confianza en el gimnasio. El seguimiento fue constante y siempre con enfoque técnico.",
        image: "../assets/imagenes/joshua1.jpeg",
        secondaryImage: "../assets/imagenes/joshuaUrena.jpeg",
        loss: "-9 kg",
        months: "4"
    },
    {
        name: "María S.",
        quote: "Los cambios fueron rápidos y claros. Me ayudó a ganar condición sin dejar de disfrutar el proceso.",
        image: "../assets/imagenes/joshua2.jpeg",
        secondaryImage: "../assets/imagenes/rockLee.jpg",
        loss: "-7 kg",
        months: "3"
    },
    {
        name: "Luis F.",
        quote: "Cada entrenamiento fue desafiante y personalizado. Mis resultados hablaron por sí solos.",
        image: "../assets/imagenes/joshuaUrena.jpeg",
        secondaryImage: "../assets/imagenes/doMore.jpg",
        loss: "-5 kg",
        months: "2"
    },
    {
        name: "Nora V.",
        quote: "Logré constancia y disciplina. El apoyo fue clave para mantenerme motivada todo el camino.",
        image: "../assets/imagenes/rockLee.jpg",
        secondaryImage: "../assets/imagenes/joshua-urena-training.jpg",
        loss: "-10 kg",
        months: "4"
    }
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
    bottomLossValue.innerHTML = `${testimonial.loss.replace(/\s*kg/i, '')} <span class="text-[#800020] not-italic text-2xl">KG</span>`;
    bottomMonthsValue.innerHTML = `${testimonial.months} <span class="text-[#800020] not-italic text-2xl">MESES</span>`;

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
