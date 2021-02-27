import { getBusinesses, getNewYorkBusinesses, getManufacturingBusinesses } from "./BusinessData.js";
import { Company } from "./Business.js";


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