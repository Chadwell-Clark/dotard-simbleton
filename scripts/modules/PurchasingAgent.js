export const PurchasingAgent = (companyObject) => {
    return (`
        <div class="company">
            <h3 class="companyName">${companyObject.purchasingAgent.nameFirst} ${companyObject.purchasingAgent.nameLast}</h3>
            <div>${companyObject.companyName}</div>
            <div>${companyObject.phoneWork}</div>
        </div>
    `)
}
