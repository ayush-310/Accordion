fetch("./faq.json")
    .then(res => res.json())
    .then(items => {
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

    })

