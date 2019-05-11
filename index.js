/*const container = document.querySelector('#lines');

class Decrease {
    constructor(seconds){
        this.seconds = seconds;
        this.secondsFace = seconds;
        this.render();
    }
    debugger
    render() {
        this.line = document.createElement('div');
        this.line.classList.add('transformLine');
        this.constWidth = this.line.style.width = "1000px";
        this.secondsFace = document.createElement('div');
        this.secondsFace.classList.add('secondsClass');
        this.secondsFace.innerHTML = this.secondsFace;
        container.append(this.secondsFace);
        container.append(this.line);
        this.goDecrease();
    }

    goDecrease() {
            if(this.seconds >= 0) {
                this.counter();
            }
        
    }


   counter() {

       let intervalSeconds = setInterval(()=>{

            let sec = '00:00:';
            let minusSecond = this.seconds = this.seconds - 1;
            let secondResult = sec + minusSecond;
            this.secondsFace.textContent = secondResult;
            
        if(minusSecond === 0) {
            clearInterval(intervalSeconds);
          }
          this.LinePercent();
          this.LineDecrease();
        }, 1000);

    }

    LinePercent(){
        this.minusLine = this.constWidth / this.seconds;
    }
    LineDecrease(){
        this.constWidth - this.minusLine + 'px';
    }
}



let test = new Decrease(10);*/

/*
const container = document.querySelector('#lines');

class Decrease {

    constructor(seconds, events){
        this.seconds = seconds;
        this.secondsFace = seconds;
        this.events = events;
        this.render();
    }
    
    render() {
        this.line = document.createElement('div');
        this.line.classList.add('transformLine');
        this.secondsFace = document.createElement('div');
        this.secondsFace.classList.add('secondsClass');
        container.append(this.secondsFace);
        this.forButtonStart();
        this.forButtonStop();
        container.append(this.line);
        this.conditions();
    }

    conditions(){
        if(this.events === true){
        const clickEvent = new Event('click');
        this.buttonStart.dispatchEvent(clickEvent);
        }
    }

   counter() {
       
       this.intervalSeconds = setInterval(()=>{

            let sec = '00:00:';
            let minusSecond = this.seconds = this.seconds - 1;
            let secondResult = sec + minusSecond;
            this.secondsFace.innerHTML = this.secondsFace;
            this.secondsFace.textContent = secondResult;

          this.LinePercent();
      
        }, 1000);

    }

    LinePercent(){

        const persent = this.line.offsetWidth - (this.line.offsetWidth / this.seconds);
        this.line.style.width = persent + "px";
     }

    forButtonStart(){
       
        this.buttonStart = document.createElement('button');
        this.buttonStart.textContent = 'Start';
        this.buttonStart.classList.add('startButton');
        this.buttonStart.addEventListener('click', this.counter.bind(this));
        container.append(this.buttonStart);
    }

    forButtonStop(){
        this.buttonStop = document.createElement('button');
        this.buttonStop.textContent = 'Stop';
        this.buttonStop.classList.add('stopButton');
        this.buttonStop.addEventListener('click', this.stopExecution.bind(this));
        container.append(this.buttonStop);
    }

    stopExecution(){
        clearInterval(this.intervalSeconds);
    };
  
}



let timerOne = new Decrease(10);
let timerTwo = new Decrease(60, true);
*/


const container = document.querySelector('#lines');

class Decrease {

    constructor(seconds, events){
        this.seconds = seconds;
        this.secondsFace = seconds;
        this.events = events;
        this.render();
    }
    
    render() {
        this.line = document.createElement('div');
        this.line.classList.add('transformLine');
        this.secondsFace = document.createElement('div');
        this.secondsFace.classList.add('secondsClass');
        container.append(this.secondsFace);
        this.forButtonStart();
        this.forButtonStop();
        container.append(this.line);
        this.conditions();
    }

    conditions(){
        if(this.events === true){
        const clickEvent = new Event('click');
        this.buttonStart.dispatchEvent(clickEvent);
        }
    }

   counter() {
       
       this.intervalSeconds = setInterval(()=>{

            this.seconds--;
            this.secondsFace.innerHTML = this.secondsFace;
            this.secondsFace.textContent = Decrease.getTimeString(this.seconds);

          this.LinePercent();
      
        }, 1000);

    }

    static getTimeString(seconds){
        if (seconds < 0) return null;
        const hours = new Date(seconds * 1000).getUTCHours();
        const minutes = new Date(seconds * 1000).getMinutes();
        const sec = new Date(seconds * 1000).getSeconds();
        return (hours <= 9 && '0' || '') + hours + ":" + (minutes <= 9 && '0' || '') + minutes + ":" + (sec <= 9 && '0' || '') + sec; // added 0 for value less than 10
    }

    LinePercent(){

        const persent = this.line.offsetWidth - (this.line.offsetWidth / this.seconds);
        this.line.style.width = persent + "px";
     }

    forButtonStart(){
       
        this.buttonStart = document.createElement('button');
        this.buttonStart.textContent = 'Start';
        this.buttonStart.classList.add('startButton');
        this.buttonStart.addEventListener('click', this.counter.bind(this));
        container.append(this.buttonStart);
    }

    forButtonStop(){
        this.buttonStop = document.createElement('button');
        this.buttonStop.textContent = 'Stop';
        this.buttonStop.classList.add('stopButton');
        this.buttonStop.addEventListener('click', this.stopExecution.bind(this));
        container.append(this.buttonStop);
    }

    stopExecution(){
        clearInterval(this.intervalSeconds);
    };
  
}



let timerOne = new Decrease(10);
let timerTwo = new Decrease(3720, true);