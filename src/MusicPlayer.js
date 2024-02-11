const Tone =require("tone")

const reverb = new Tone.Reverb().toDestination()
const Organ = new Tone.AMSynth().connect(reverb)
const play = () => {
    Tone.Transport.start()
    Organ.triggerAttackRelease("A3","4n")
}

export { play }