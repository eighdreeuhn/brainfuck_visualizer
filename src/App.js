import { play } from "./MusicPlayer.js"
play()

export default function App() {
    return (
        <>
            <h1>BF TIME!</h1>
            <button onClick={play}>NOTE</button>
        </>
    )
}
