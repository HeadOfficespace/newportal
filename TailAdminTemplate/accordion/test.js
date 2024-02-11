document.addEventListener("DOMContentLoaded", function () {
  function autoResizeTextarea() {
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.style.height = "auto";
      const minHeight = 60;
      textarea.style.height = Math.max(textarea.scrollHeight, minHeight) + "px";
    });
  }

  function handleAccordion() {
    document
      .querySelectorAll('[x-data="{ accordionOpen: false }"]')
      .forEach((accordion) => {
        accordion.addEventListener("click", () => {
          setTimeout(autoResizeTextarea, 5);
        });
      });
  }

  autoResizeTextarea();

  handleAccordion();
});
