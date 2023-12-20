import DashboardHeader from "../../../components/headers/DashboardHeader"
import { Sidebar } from "../../../components/sidebar/Sidebar"
import AccountBalance from "../../../components/AccountBalance"
import Title from "../../../commons/Title"
import SideHistory from "../../../components/SideHistory"
import { AirtimeForm } from "./AirtimeForm"
import useAxiosWithAuth from "../../../services/hooks/useAxiosWithAuth"
import { useEffect, useState } from "react"

function AirtimePage() {
    Title("MonieFlex - Purchase Airtime")

    const axios = useAxiosWithAuth()
    const [history, setHistory] = useState([
      {
        number: "",
        firstName: ""
      }
    ]);

    useEffect(() => {
      onLoad()
    }, [])

    async function onLoad() {
      await axios.get("/wallet/history?page=0&size=10&type=AIRTIME")
      .then((response) => {
        console.log(response.data)
        if(response.data["statusCode"] === 200) {
          const mappedHistory = response.data["data"].map(transaction => ({
            number: transaction.account,
            firstName: transaction.receiver_name || ""
          }));
          setHistory(mappedHistory);
        }
      })
    }

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
              <AirtimeForm />
              <div style={{ marginRight: "30px", marginLeft: "40px" }}>
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