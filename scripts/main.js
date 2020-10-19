import { getConvictions } from "./criminals/convictions/ConvictionProvider.js"
import { convictionSelect } from "./criminals/convictions/ConvictionSelect.js"
import { criminalList } from "./criminals/CriminalList.js"
import { officerList } from "./officers/OfficerList.js"

criminalList()
officerList()
getConvictions()
convictionSelect()