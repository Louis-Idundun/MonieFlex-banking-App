import Title from "../../../../commons/Title";
import DashboardHeader from "../../../../components/headers/DashboardHeader";
import { Sidebar } from "../../../../components/sidebar/Sidebar";
import { TVForm } from "./TVForm";
import AccountBalance from "../../../../components/AccountBalance";
import SideHistory from "../../../../components/SideHistory"

function TVPage() {
    Title("MonieFlex - Pay Bills: TV")

    const history = [
        {
            firstName: "DSTV-Premium/N23900",
            number: "GH87767565860"
        }
    ]

    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr", backgroundColor: "#F6F0FF" }}>
            <DashboardHeader />
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", height: "100%" }}>
                <Sidebar />
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto"}}>
                    <TVForm />
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

export default TVPage;