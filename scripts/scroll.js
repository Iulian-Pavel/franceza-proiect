const scrollToAnimals = () => {
    const downArrow = document.querySelector('.down-arrow');
    const animalSection = document.querySelector('.endangered-animals');
    downArrow.addEventListener('click', () => {
        animalSection.scrollIntoView({
            behavior: "smooth"
        });
    })
}

scrollToAnimals();