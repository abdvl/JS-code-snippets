const store = {
    game : {
        hint:"xxx",
        guess_count:10,
        word:"python"
    },
    status:{
        status:"in-progress",
        guess:[],
        word:"",
        show_hint:false
    }
}



const create_game = ()=>{
    const {status,game} = store;
    // pick a game
    status.status = "in_progress"
    status.guess = [];
    status.word = "_".repeat(game.word.length)
    status.show_hint = false
}

const guess_game = (character) =>{
    const {status,game} = store;
    if(status.guess.includes(character)) return 
    const word = game.word;
    status.guess.push(character)
    status.word = word.split("").map(c => status.guess.includes(c)?c:"_").join("")
    
    if(status.guess.length == game.guess_count){
        status.status = "failed"
    }

    if(status.word.indexOf("_") == -1){
        status.status = "success"
    }

}

const show_hint = ()=> {

}

// function html(parts,...args){
//     return parts.reduce((acc,part,index)=>{
//         const arg = args[index] || "";
//         return acc + part + (Array.isArray(arg)? arg.join(""):arg)
//     }, "")
// }


// function buildGameUI(store){
//     const {status,game} = store;
//     const buttons = Array(26).fill(97).map((n, i)=> {
//         const c = String.fromCharCode(n+i);
//         const disabled = status.guess.includes(c) && "disabled"
//         return html`<button @click=${c}  ${disabled}>${c}</button>`}
//     )
//     const hint = status.show_hint ?"": html`
//         <h2>${game.hint}</h2>
//     `
//     return html`
//         ${hint}
//         <div >${buttons}</div>

//     `
// }



create_game()
guess_game("g")
guess_game("p")
guess_game("o")




console.log(store, store.status.word)

