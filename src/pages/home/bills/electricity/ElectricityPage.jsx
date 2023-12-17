import Title from "../../../../commons/Title";
import DashboardHeader from "../../../../components/headers/DashboardHeader";
import { Sidebar } from "../../../../components/sidebar/Sidebar";
import { ElectricityForm } from "./ElectricityForm";
import AccountBalance from "../../../../components/AccountBalance";
import SideHistory from "../../../../components/SideHistory"

function ElectricityPage() {
    Title("MonieFlex - Pay Bills: Electricity")

    const history = [
        {
            number: "30/10/01/8633-97",
            firstName: "EEDC"
        }
    ]

    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#F6F0FF" }}>
            <DashboardHeader />
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
                <Sidebar />
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto"}}>
                    <ElectricityForm />
                    <div style={{ padding: '50px 30px' }}>
                        <AccountBalance />
                        <SideHistory
                            title={"Beneficiaries"}
                            history={ history }
                            isFlexed={ true }
                            needAvatar={ true }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElectricityPage;