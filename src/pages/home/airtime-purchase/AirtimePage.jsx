import DashboardHeader from "../../../components/headers/DashboardHeader"
import { Sidebar } from "../../../components/sidebar/Sidebar"
import AccountBalance from "../../../components/AccountBalance"
import Title from "../../../commons/Title"
import SideHistory from "../../../components/SideHistory"
import { AirtimeForm } from "./AirtimeForm"
 
function AirtimePage() {
    Title("MonieFlex - Purchase Airtime")
 
    const history = [
      {
        firstName: "Evaristus",
        lastName: "Adimonyemma"
      }
    ]
 
    return (
        <div style={{
          display: "grid",
          gridTemplateRows: "auto 1fr"
        }}>
          <DashboardHeader />
          <div style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            backgroundColor: "#F6F0FF"
          }}>
            <Sidebar />
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              padding: "50px"
            }}>
              <div style={{ marginRight: "40px" }}>
                <div className="border px-4 py-12 rounded-xl border-solid border-sky-950 flex justify-between">
                  <AirtimeForm />
                </div>
                <div style={{ marginRight: "30px" }}>
                    <AccountBalance />
                    <SideHistory 
                      title={ "Frequent Beneficiaries" } 
                      history={ history }
                      isFlexed={ true }
                    />
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}
 
export default AirtimePage

// import * as React from "react";
// import DashboardHeader from "../../components/headers/DashboardHeader"
// import { Sidebar } from "../../components/sidebar/Sidebar"
// import AirtimePurchaseForm from "../../components/AirtimePurchaseForm";
// import AirtimeBalanceBeneficiary from "../../components/AirtmeBalanceBeneficiary";
 
// function AirtimePurchasePage() {
//   return (
//     <div className="bg-neutral-100 flex flex-col items-stretch">
//       <DashboardHeader />
//       <div className="w-full max-md:max-w-full max-md:pr-5">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <Sidebar />
//           <AirtimePurchaseForm />
//           <AirtimeBalanceBeneficiary />
//         </div>
//       </div>
//     </div>
//   );
// }
 
// export default AirtimePurchasePage;