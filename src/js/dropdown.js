export const initializeDropdown = () => {
    const toggleTextVisibility = (event) => {
        const parentArticle = event.target.closest('.questions__padding');
        if (parentArticle) {
            const showText = parentArticle.querySelector('.questions__show');
            if (showText) {
                showText.classList.toggle('active');
            }
        }
    };

    const arrowIcons = document.querySelectorAll('.questions__img');
    arrowIcons.forEach((arrowIcon) => {
        arrowIcon.addEventListener('click', toggleTextVisibility);
    });
};
