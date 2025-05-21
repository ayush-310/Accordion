const items = [
    {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase. The item must be unused and in its original packaging."
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping usually takes 5-7 business days, while express shipping takes 1-3 business days."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping times and fees vary by location."
    },
    {
        question: "How can I track my order?",
        answer: "After placing an order, you will receive a confirmation email with a tracking link once your package has shipped."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay."
    },
    {
        question: "Can I change or cancel my order?",
        answer: "Yes, you can change or cancel your order within 1 hour of placing it by contacting our support team."
    }
];

const accordion = document.getElementById("accordion");

accordion.innerHTML = items.map(({ question, answer }) => `
    <div class="accordion-item">
        <button class="accordion-header" aria-expanded="false">
            <span>${question}</span>
            <span class="arrow">▼</span>
        </button>
        <div class="accordion-content">${answer}</div>
    </div>
`).join('');

accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    /* `const item = header.parentElement;` is retrieving the parent element of the clicked header
    button. In this case, the header button is the button element with the class "accordion-header",
    and its parent element is the div with the class "accordion-item" that contains both the header
    button and the content of the accordion item. This line of code allows you to access the entire
    accordion item when a header button is clicked, so you can manipulate its content or style based
    on user interaction. */
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const arrow = header.querySelector(".arrow");
    const isOpen = content.classList.contains("open");

    // Close all
    accordion.querySelectorAll(".accordion-content").forEach(c => {
        c.classList.remove("open");
        c.previousElementSibling.setAttribute("aria-expanded", "false");
        c.previousElementSibling.querySelector(".arrow").classList.remove("rotate");
    });

    // Open clicked
    if (!isOpen) {
        content.classList.add("open");
        header.setAttribute("aria-expanded", "true");
        arrow.classList.add("rotate");
    }
});
