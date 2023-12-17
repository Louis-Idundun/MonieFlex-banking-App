import Title from "../../../../commons/Title";
import DashboardHeader from "../../../../components/headers/DashboardHeader";
import { Sidebar } from "../../../../components/sidebar/Sidebar";
import { DataForm } from "./DataForm";
import AccountBalance from "../../../../components/AccountBalance";
import SideHistory from "../../../../components/SideHistory"

function DataPage() {
    Title("MonieFlex - Pay Bills: Data")

    const history = [
        {
            firstName: "30days/60GB/N4500",
            number: "+2347044567687",
        }
    ]

    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#F6F0FF" }}>
            <DashboardHeader />
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
                <Sidebar />
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto"}}>
                    <DataForm />
                    <div style={{ padding: '50px 30px' }}>
                        <AccountBalance />
                        <SideHistory
                            title={"Recent Cable TV Bills"}
                            history={ history }
                            isFlexed={ true }
                            needAvatar={ false }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataPage;