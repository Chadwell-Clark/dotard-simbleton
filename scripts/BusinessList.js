import { getBusinesses } from "./BusinessData.js";
import { Company } from "./Business";

const DOMTarget = document.querySelector("#companies");

 export const BusinessList = () => {
    const companyArray = getBusinesses();
    // DOMTarget.innerHTML = ""

    companyArray.forEach((company) => {
        DOMTarget.innerHTML += Company(company)

    });
};
