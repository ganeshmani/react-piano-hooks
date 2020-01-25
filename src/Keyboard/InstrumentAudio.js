import React, { useEffect, useState } from "react";
import InstrumentPlayer from "./InstrumentPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
  const [instrumentPlayer, setInstrumentPlayer] = useState(null);
  useEffect(() => {
    setInstrumentPlayer(InstrumentPlayer());
  }, []);

  useEffect(() => {
    if (instrumentPlayer) {
      setInstrument();
      playNotes();
    }
  }, [instrumentPlayer]);

  useEffect(() => {
    if (notes.length > 0) {
      playNotes();
    }
  }, [notes]);

  const setInstrument = () => {
    instrumentPlayer.setInstrument(instrumentName);
  };

  const playNotes = () => {
    instrumentPlayer.playNotes(notes[0]);
  };

  return null;
};

export default InstrumentAudio;
