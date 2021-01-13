class Form{
    constructor() {
    this.input=createInput()
    this.button=createButton("start")
    this.greeting = createElement('h2')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display() {
    
        this.input.position(150,150) 
        
        this.button.position(250,200)
       
            this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(130,150)
        })
    }
    
}