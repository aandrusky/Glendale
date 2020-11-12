
import { convictionSelect } from "./criminals/convictions/ConvictionSelect.js";
import { criminalList } from "./criminals/CriminalList.js";
import { officerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./Notes/NoteForm.js";
import { noteList} from "./Notes/NoteList.js";
import { createAlibiEventListener } from "./criminals/ALibiList.js";
import { renderWitnessButton } from "./Witnesses/WitnessStmntButton.js";
import "./Witnesses/WitnessStmntList.js"
import "./facility/FacilityList.js"
import { renderFacilityButton } from "./facility/DisplayFacilitiesButton.js"
import { renderCriminalButton } from "./criminals/DisplayCriminalsButton.js"



NoteForm()
criminalList()
officerList()
convictionSelect()
OfficerSelect()
noteList()
createAlibiEventListener()
renderWitnessButton()
renderFacilityButton()
renderCriminalButton()
