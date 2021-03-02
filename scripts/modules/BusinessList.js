import { getBusinesses, getNewYorkBusinesses, getManufacturingBusinesses } from "./BusinessData.js";
import { Company } from "./Business.js";
import { PurchasingAgent } from "./PurchasingAgent.js";


export const BusinessList1 = () => {
    const companyArray = getBusinesses();
    const DOMTarget = document.querySelector("#companies");
    companyArray.forEach((company) => {
        DOMTarget.innerHTML += Company(company)
    });
};

export const BusinessList2 = () => {
    const companyArray = getNewYorkBusinesses();    
    const DOMTarget = document.querySelector(".businessList--newYork");
    companyArray.forEach((company) => {
        DOMTarget.innerHTML += Company(company)
    });
};

export const BusinessList3 = () => {
    const companyArray = getManufacturingBusinesses();    
    const DOMTarget = document.querySelector(".businessList--manufacturing");
    companyArray.forEach((company) => {
        DOMTarget.innerHTML += Company(company)
    });
};
// export const PurchasingAgents = () => {
//     const agentArray = getPurchasingAgents();
//     const DOMTarget = document.querySelector(".agents");
//     agentArray.forEach((agent) => {
//         DOMTarget.innerHTML += (`<div>${agent.nameFirst} ${agent.nameLast}</div>`)
//     }

//     );
// };

export const PurchasingAgentList = () => {
    const companyArray = getBusinesses();
    const DOMTarget = document.querySelector(".agents");
    companyArray.forEach((company) => {
        DOMTarget.innerHTML += PurchasingAgent(company)
    });
};