document.querySelectorAll('.toggle-answer').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.closest('.questions-answers-list-item').querySelector('.questions-answers-list-item-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; // Переключення видимості відповіді
        this.textContent = this.textContent === '+' ? '-' : '+'; // Змінює текст кнопки з "+" на "-" і навпаки
    });
});

