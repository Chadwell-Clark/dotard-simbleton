export const PurchasingAgent = (companyObject) => {
    return (`
        <div class="company">
            <h3 class="companyName">${companyObject.fullName}</h3>
            <div>${companyObject.company}</div>
            <div>${companyObject.phoneNumber}</div>
        </div>
    `)
}
