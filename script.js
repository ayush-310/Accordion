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

// Build all items once
const fragment = document.createDocumentFragment();

items.forEach(({ question, answer }) => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";

    const q = document.createElement("p");
    q.textContent = question;

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "▼";

    const content = document.createElement("div");
    content.className = "accordion-content";
    content.textContent = answer;

    header.appendChild(q);
    header.appendChild(arrow);
    item.appendChild(header);
    item.appendChild(content);
    fragment.appendChild(item);
});

accordion.appendChild(fragment);

// Delegate event
accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    const isOpen = content.classList.contains("open");

    // Close all
    accordion.querySelectorAll(".accordion-content").forEach(c => {
        c.classList.remove("open");
        c.previousElementSibling.querySelector(".arrow").classList.remove("rotate");
    });

    if (!isOpen) {
        content.classList.add("open");
        arrow.classList.add("rotate");
    }
});
