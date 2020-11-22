new Vue({
    el: '#app',
    data:{
        playerActived: 1,
        playerOne: {
            points: 0,
            historic: []
        },
        playerTwo: {
            points: 0,
            historic: []
        },
        cartSelectd: ''
    },
    methods: {
        changePlayer(){
            this.playerActived = this.playerActived == 1 ? 2 : 1

            this.cartSelectd = ''
        },
        selectedCart(){
            this.cartSelectd = Math.floor((Math.random() * 13) + 1)
            
            if(this.playerActived == 1){
                this.playerOne.points += this.cartSelectd

                this.playerOne.historic.push(this.cartSelectd) 
            }
              
            if(this.playerActived == 2){
                this.playerTwo.points += this.cartSelectd

               this.playerTwo.historic.push(this.cartSelectd)
            }
               
            if( this.playerOne.points >= 21 || this.playerTwo.points >= 21)
                this.finishGame()
        },
        finishGame() {
            if(this.playerOne.points <= 21 && this.playerOne > this.playerTwo)
                alert('Player 1 Campeão')
            else if(this.playerTwo.points <= 21 && this.playerTwo > this.playerOne)
                alert('Player 2 Campeão')
            else if(this.playerOne.points > 21)
                alert('Player 1 Campeão')
            else if(this.playerTwo.points > 21)
                alert('Player 2 Campeão')
            else
                alert("Empate")

            let vm = this
            setTimeout(function (){
                vm.resetGame()
            },3000)
            
        },
        resetGame(){
            this.playerOne.points = 0
            this.playerTwo.points = 0
            this.cartSelectd = ''
            this.playerActived = 1
            this.playerOne.historic = []
            this.playerTwo.historic = []
        }
    },
    computed: {
        numberHistoricPlayerOne(){
            return this.playerOne.historic.length
        },
        numberHistoricPlayerTwo(){
            return this.playerTwo.historic.length
        },
    }
    
})