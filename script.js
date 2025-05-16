
const items = [
    {
        "question": "What is your return policy?",
        "answer": "We accept returns within 30 days of purchase. The item must be unused and in its original packaging."
    },
    {
        "question": "How long does shipping take?",
        "answer": "Standard shipping usually takes 5-7 business days, while express shipping takes 1-3 business days."
    },
    {
        "question": "Do you offer international shipping?",
        "answer": "Yes, we ship to most countries worldwide. Shipping times and fees vary by location."
    },
    {
        "question": "How can I track my order?",
        "answer": "After placing an order, you will receive a confirmation email with a tracking link once your package has shipped."
    },
    {
        "question": "What payment methods do you accept?",
        "answer": "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay."
    },
    {
        "question": "Can I change or cancel my order?",
        "answer": "Yes, you can change or cancel your order within 1 hour of placing it by contacting our support team."
    }
]



let accordion = document.querySelector('.accordion');



items?.map((item, index) => {
    accordion.innerHTML += `<div class="accordion-item">
        <div class ="accordion-header" key=${index}>
            <p>${item.question}</p> 
            <span class="arrow">🔼</span>
        </div>
        <div class ="accordion-content">${item.answer}</div>
        </div>`
})

accordion.addEventListener('click', function (e) {
    // if user clicks on any part of the header
    let header = e.target.closest('.accordion-header');
    if (!header) return;

    let arrow = header.querySelector('.arrow');
    let content = header.nextElementSibling;

    let isOpen = content.classList.contains('open');

    // close all other accordion items
    document.querySelectorAll('.accordion-content').forEach(item =>
        item.classList.remove('open')
    )
    document.querySelectorAll('.arrow').forEach(item => item.textContent = '🔽')

    if (!isOpen) {
        content.classList.add('open')
        arrow.textContent = '🔼';
    }
})