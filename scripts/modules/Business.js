export const Company = (companyObject) => {
    const total = companyObject.orders.reduce((current, item) => {
        return item + current
    }, 0)
    
    return (`
        <div class="company">
            <h3 class="companyName">${companyObject.companyName}   ($${(total.toFixed(2))})</h3>
            <div>${companyObject.addressFullStreet}</div>
            <div>${companyObject.addressCity}, ${companyObject.addressStateCode} ${companyObject.addressZipCode} </div>
        </div>
    `)
}
