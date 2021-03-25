import * as Tone from 'tone';

const kickDrum = new Tone.MembraneSynth({
    volume: 6,
}).toDestination();

const kick = new Tone.Sampler({
	urls: {
		C1: "kick.wav",
	},
	baseUrl: "assets/audio/",
    volume: 6,
}).toDestination();

const kickPart = new Tone.Part((time) => {
    kick.triggerAttackRelease('C1', '8n', time);
}, []).start(0);

const clap = new Tone.Sampler({
	urls: {
		C1: "clap.wav",
	},
	baseUrl: "assets/audio/",
    volume: 6,
}).toDestination();

const clapPart = new Tone.Part((time) => {
    clap.triggerAttackRelease('C1', '8n', time);
}, []).start(0);

const sub = new Tone.Sampler({
	urls: {
		C1: "sub.wav",
	},
	baseUrl: "assets/audio/",
    volume: 6,
}).toDestination();

const subPart = new Tone.Part((time) => {
    sub.triggerAttackRelease('C1', '8n', time);
}, []).start(0);

const snare = new Tone.Sampler({
	urls: {
		C1: "snare.wav",
	},
	baseUrl: "assets/audio/",
    volume: 6,
}).toDestination();

const snarePart = new Tone.Part((time) => {
    snare.triggerAttackRelease('C1', '8n', time);
}, []).start(0);

const hiHat = new Tone.Sampler({
	urls: {
		C1: "hiHat.wav",
	},
	baseUrl: "assets/audio/",
    volume: 6,
}).toDestination();

const hiHatPart = new Tone.Part((time) => {
    hiHat.triggerAttackRelease('C1', '8n', time);
}, []).start(0);

const openHiHat = new Tone.Sampler({
	urls: {
		C1: "openHiHat.wav",
	},
	baseUrl: "assets/audio/",
    volume: 6,
}).toDestination();

const openHiHatPart = new Tone.Part((time) => {
    openHiHat.triggerAttackRelease('C1', '8n', time);
}, []).start(0);

export {
    kickPart,
    subPart,
    snarePart,
    clapPart,
    hiHatPart,
    openHiHatPart
}