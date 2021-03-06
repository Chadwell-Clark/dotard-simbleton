import {
  getBusinesses,
  getNewYorkBusinesses,
  getManufacturingBusinesses,
  getPurchasingAgents,
} from "./BusinessData.js";
import { Company } from "./Business.js";
import { PurchasingAgent } from "./PurchasingAgent.js";

export const BusinessList1 = () => {
  const companyArray = getBusinesses();
  const DOMTarget = document.querySelector("#companies");
  companyArray.forEach((company) => {
    DOMTarget.innerHTML += Company(company);
  });
};

export const BusinessList2 = () => {
  const companyArray = getNewYorkBusinesses();
  const DOMTarget = document.querySelector(".businessList--newYork");
  companyArray.forEach((company) => {
    DOMTarget.innerHTML += Company(company);
  });
};

export const BusinessList3 = () => {
  const companyArray = getManufacturingBusinesses();
  const DOMTarget = document.querySelector(".businessList--manufacturing");
  companyArray.forEach((company) => {
    DOMTarget.innerHTML += Company(company);
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
  const companyArray = getPurchasingAgents();
  const DOMTarget = document.querySelector(".agents");
  companyArray.forEach((company) => {
    DOMTarget.innerHTML += PurchasingAgent(company);
  });
};

//!!!!!!      !!!** From chapter 13     ******      !!!!!//
// Place an article element in your HTML with the class below
export const finder = () => {
  const companySearchResultArticle = document.querySelector(".foundCompanies");

  document
    .querySelector("#companySearch")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const foundBusiness = getBusinesses().find((business) =>
          business.companyName
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );

        companySearchResultArticle.innerHTML = `
            <div class="company">
                <h3 class="companyName">
                ${foundBusiness.companyName}
                </h3>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
                </div>
            `;
      }
    });
};
