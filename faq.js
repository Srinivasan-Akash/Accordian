const faqData = [
    {
      id: 1,
      question: "Who are we?",
      answer:
        "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
      id: 2,
      question: "What do we do?",
      answer:
        "Building learning communities with Our Affordable & Competent Courses",
    },
    {
      id: 3,
      question: "Are the community classes boring?",
      answer: "No, not at all!!!",
    },
];
  
// Grabing the parent of all faq's
const ACCORDIAN = document.querySelector(".accordian_body")

// ACCORDIAN BODY
    // FAQ
      // FAQ HEADER
        // H3 question
        // SHOW BTN 
      // FAQ BODY (ans)



faqData.forEach(item => {
  // Creating all the elements
  const FAQ = document.createElement("main") 
  const FAQ_HEADER = document.createElement("section")
  const FAQ_BODY = document.createElement("section")
  const H3 = document.createElement("h3")
  const SHOW_BTN = document.createElement("div")

  // Adding textContent
  H3.textContent = item.question
  FAQ_BODY.textContent = item.answer


  // Add Classes
  FAQ.classList.add("faq")
  FAQ_HEADER.classList.add("faq_header")
  FAQ_BODY.classList.add("hidden")
  SHOW_BTN.classList.add("show_btn")

  // Apending All The Elements
  FAQ_HEADER.appendChild(H3)
  FAQ_HEADER.appendChild(SHOW_BTN)
  FAQ.appendChild(FAQ_HEADER)
  FAQ.appendChild(FAQ_BODY)
  ACCORDIAN.appendChild(FAQ)


  // Adding Event Listener 
  let isOpen = true
  SHOW_BTN.addEventListener("click", () => {
      if(isOpen){
        FAQ_BODY.style.display = "block"
        isOpen = false        
      } else {
        FAQ_BODY.style.display = "none"
        isOpen = true
      }
  })
})
