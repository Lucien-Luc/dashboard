function toggleMainSection() {
    const wrapper = document.querySelector('.sections-wrapper');
    const btn = document.querySelector('.toggle-btn');
    const btnArrow = btn.querySelector('.arrow');
    const btnText = btn.querySelector('span:first-child');
  
    wrapper.classList.toggle('show');
    btnArrow.classList.toggle('up');
    btnText.textContent = wrapper.classList.contains('show') ? 'Hide Analytics' : 'Show Analytics';
  }
  
  function toggleSection(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
  
    // Toggle the expanded class
    content.classList.toggle('expanded');
    arrow.classList.toggle('up');
  
    // Remove expanded class from other sections
    const allSections = document.querySelectorAll('.section-content');
    const allArrows = document.querySelectorAll('.section-header .arrow');
  
    allSections.forEach((section) => {
      if (section !== content) {
        section.classList.remove('expanded');
      }
    });
  
    allArrows.forEach((arr) => {
      if (arr !== arrow) {
        arr.classList.remove('up');
      }
    });
  }