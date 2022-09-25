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

let accordianBody;
const faqs = [];

faqData.forEach((item) => {
  let faq = document.createElement("div")
  faq.classList.add("faq")

  let showbtn = document.createElement("div")
  showbtn.classList.add("show_btn")
  showbtn.textContent = ""

  let faqHeader = document.createElement("section")
  faqHeader.classList.add("faq_header")
  faqHeader.textContent = item.question
  faqHeader.append(showbtn)

  let hiddenDesc = document.createElement("section")
  hiddenDesc.classList.add("hidden")
  hiddenDesc.textContent = item.answer

  faq.appendChild(faqHeader)
  faq.appendChild(hiddenDesc)

  document.querySelector(".accordian_body").appendChild(faq)

  let isOpen = true
  showbtn.addEventListener("click", () => {
      if(isOpen){
        hiddenDesc.style.display = "block"
        isOpen = false        
      } else {
        hiddenDesc.style.display = "none"
        isOpen = true
      }
  })
})
