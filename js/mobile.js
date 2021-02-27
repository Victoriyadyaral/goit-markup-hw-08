(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[link-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close-btn]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("mobile-menu__link--current");
    })

    mobileBtnClose.addEventListener('mouseover', () => {
        mobileMenuRef.classList.toggle("mobile-menu__link--current");
    });

    mobileBtnClose.addEventListener("mouseout", () => {
        mobileMenuRef.classList.toggle("mobile-menu__link--current");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("mobile-menu__link--current");
    });
  })()