function calculateScore() {
    let score = 0;

    const answers = {
        q1: 'Paris',
        q2: 'Mars',
        q3: 'Harper Lee'
    };

    for (let key in answers) {
        const answer = document.querySelector(`input[name="${key}"]:checked`);
        if (answer && answer.value === answers[key]) {
            score++;
        }
    }

    alert(`Your score is: ${score}`);
}
