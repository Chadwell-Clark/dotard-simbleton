export const Company = (companyObject) => {
    return (`
        <div class="company">
            <h2 class="companyName">${companyObject.companyName}</h2>
            <div class="address">${companyObject.addressFullStreet}</div>
            <div class="">${companyObject.addressCity}, ${companyObject.addressStateCode} ${companyObject.addressZipCode} </div>
        </div>
    `)
}
