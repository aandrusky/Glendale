export const FacilityHTML = (facility, criminalFacility) => {
    return `
    <div class ="facility">
        <h4>${facility.facilityName}</h4>
        <p>${facility.securityLevel}</p>
        <p>${facility.capacity}</p>
        <h5>Criminals</h5>
        <p>${criminalFacility.map(facilityItem => `<li>${facilityItem.facilityName}</li>`).join("")}}</p>    I need to loop in the interpolation, AND list all matches. .map, then .filter?
        
    </div>
    `
}