console.log("main is loaded")
import { BusinessList1, finder} from "./modules/BusinessList.js";

BusinessList1();
finder();




// const companySearchResultArticle = document.querySelector(".foundCompanies");

// document
//   .querySelector("#companySearch")
//   .addEventListener("keypress", (keyPressEvent) => {
//     if (keyPressEvent.charCode === 13) {
//       /*
//                 When user presses enter, find the matching business.
//                 You can use the `.includes()` method strings to
//                 see if a smaller string is part of a larger string.

//                 Example:
//                     business.companyName.includes(keyPressEvent.target.value)
//             */

//       const foundBusiness = (companySearchResultArticle.innerHTML =  getBusinesses().find((item)=> {
//             return item.companyName === BusinessList1.companyName.includes(keyPressEvent.target.value)
//       })// implement .find() method here
//       `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `);
//     }
//   });