export const Company = (companyObject) => {
    return (`
        <div class="company">
            <h3 class="companyName">${companyObject.companyName}</h3>
            <div>${companyObject.addressFullStreet}</div>
            <div>${companyObject.addressCity}, ${companyObject.addressStateCode} ${companyObject.addressZipCode} </div>
        </div>
    `)
}
