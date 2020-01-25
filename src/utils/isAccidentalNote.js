import NOTES from '../constants/note'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}