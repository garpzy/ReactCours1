const currentMonth = new Date().getMonth()
const isSpring = currentMonth >= 2 && currentMonth <=5

function Recommandation(){
    if(!isSpring){
        return <div>Ce n'est pas le moment de planter des trucs</div>
    }
    return <div>C'est grave le moment de planter des trucs</div>
}

export default Recommandation