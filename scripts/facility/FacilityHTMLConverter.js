export const FacilityHTML = (facility, criminalsArray) => {
    return `
    <div class ="facility">
        <h4>${facility.facilityName}</h4>
        <p>${facility.securityLevel}</p>
        <p>${facility.capacity}</p>
        <div>
          <h2>Criminals</h2>
          <ul>
              ${criminalsArray.map(criminalItem => `<li>${criminalItem.name}</li>`).join("")}
          </ul>
        </div>
      </div>
  `
}