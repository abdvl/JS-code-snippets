const store = {
    game: {
        hint: "xxx",
        guess_count: 10,
        word: "python",
        status: "in-progress",
        guess: [],
        word: "",
        show_hint: false
    },
    status: {
        
    }
}


const create_game = (store) => {
    const { status, game } = store;
    // pick a game
    status.status = "in_progress"
    status.guess = [];
    status.word = "_".repeat(game.word.length)
    status.show_hint = false
    return store
}

const guess_game = (store, character) => {
    const { status, game } = store;
    if (status.status == "failed") return store;
    if (status.guess.includes(character)) return store;

    const word = game.word;
    status.guess.push(character)
    status.word = word.split("").map(c => status.guess.includes(c) ? c : "_").join("")

    if (status.guess.length == game.guess_count) status.status = "failed";
    if (status.word.indexOf("_") == -1) status.status = "success";
    return store
}


function useGame() {
    const reducer = (state, action) => {
        const { type, payload } = action
        if (type == "guess") return guess_game({ ...state }, payload)
        if (type == "restart") return create_game({ ...state })
        if (type == "show_hint") {
            state.status.show_hint = true
            return { ...state }
        }
    }
    const [state, dispatch] = React.useReducer(reducer, store);
    return [state, dispatch]
}


function Buttons(props) {
    const handleClick = (e) => {
        const val = e.target.getAttribute("data-value")
        props.onSelect(val)
    }
    const buttons = Array(26).fill(97).map((n, i) => {
        const c = String.fromCharCode(n + i);
        const disabled = props.status.guess.includes(c) && "disabled"
        return <button disabled={disabled} key={c} data-value={c}>{c}</button>

    })
    return (
        <div onClick={handleClick}>
            {buttons}
        </div>
    )
}

function Game() {
    const [state, dispatch] = useGame();
    const { game, status } = state;
    const guess = (c) => {
        dispatch({
            type: "guess",
            payload: c
        })
    }

    React.useEffect(() => {
        dispatch({ type: "restart" })
    }, [])

    return (
        <div>
            <h1>Count : {game.guess_count - status.guess.length}</h1>
            <p> {status.status}</p>
            {status.show_hint && <p>{game.hint}</p>}
            <p>{status.word}</p>
            <Buttons status={status} onSelect={guess}></Buttons>
            <button onClick={() => { dispatch({ type: "restart" }) }}>Restart</button>
            <button onClick={() => { dispatch({ type: "show_hint" }) }}>Show hint</button>
        </div>
    )
}

function App(root) {
    ReactDOM.render(
        <Game></Game>,
        root
    )
}
App(document.querySelector("#app"))