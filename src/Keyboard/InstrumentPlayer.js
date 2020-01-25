import AudioPlayer from "./AudioPlayer";

const InstrumentPlayer = () => {
  const audioPlayer = AudioPlayer();

  const Player = {
    setInstrument(instrumentName) {
      audioPlayer.setInstrument(instrumentName);
    },

    playNotes(notes) {
      audioPlayer.playNote(notes);
    }
  };

  return Player;
};

export default InstrumentPlayer;
