class Question {

    constructor() {
      this.title = createElement('h1');
      this.input = createInput("Enter Name");
      this.input2 = createInput("Enter Correct Option")
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("MyQuiz");
      this.title.position(displayWidth/2, 0);
  
      this.question.html("Question: What starts and ends with the letter 'E', but has only one letter?");
      this.question.position(150, 80);

      this.option1.html("1: Everyone");
      this.option1.position(200,100);
      this.option2.html("2: Envelope");
      this.option2.position(200,120);
      this.option3.html("3: Estimate");
      this.option3.position(200,140);
      this.option4.html("4: Example");
      this.option4.position(200,160);
      this.input.position(150,350);
      this.input2.position(650,350);
      this.button.position(850,350);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        
  
    })

}
}


