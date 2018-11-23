alert("Welcome to Quiz Ninja!");

const quiz = [
    { name: "Superman", realName: "Clark Kent"},
    { name: "Wonder Woman", realName: "Diana Prince"},
    { name: "Batman", realName: "Bruce Wayne"}
];

const game = {
    start: function(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        for(const question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
    },
    ask: function() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check: function(response) {
        const answer = this.question.realName;
        if(response === answer) {
            alert("Correct");
            this.score++;
        } else {
            alert(`Wrong! the correct answer was ${answer}`);
        }
    },
    gameOver: function() {
        alert(`Game Over, you scored ${this.score} point${this.score == 1? "" : "s"}`);
    }
}

game.start(quiz);