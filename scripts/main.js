
import { convictionSelect } from "./criminals/convictions/ConvictionSelect.js";
import { criminalList } from "./criminals/CriminalList.js";
import { officerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./Notes/NoteForm.js";
import { noteList} from "./Notes/NoteList.js";
import { createAlibiEventListener } from "./criminals/ALibiList.js";
import { renderWitnessButton } from "./Witnesses/WitnessStmntButton.js";



NoteForm()
criminalList()
officerList()
convictionSelect()
OfficerSelect()
noteList()
createAlibiEventListener()
renderWitnessButton()
