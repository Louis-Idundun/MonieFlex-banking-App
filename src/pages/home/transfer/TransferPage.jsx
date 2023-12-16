import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashboardHeader from "../../../components/headers/DashboardHeader"
import { Sidebar } from "../../../components/sidebar/Sidebar"
import AccountBalance from "../../../components/AccountBalance"
import Title from "../../../commons/Title"
import SideHistory from "../../../components/SideHistory"
import { MonieFlexTransferForm, OtherBanksTransferForm } from "./TransferForm"

function TransferPage() {
    const [ current, setCurrent ] = useState("flex")
    const params = useLocation()

    useEffect(() => {
        const history = new URLSearchParams(params)
        history.set("mode", current)
    }) 

    // flex, other
    const handleSelect = (current) => {
        setCurrent(current)
        const history = new URLSearchParams(params)
        history.set("mode", current)
    }

    const unHoverStyle = {
        backgroundColor: "#FFF8FA",
        borderRadius: "10px",
        padding: "15px 30px",
        cursor: "pointer"
    }
    const hoverStyle = {
        backgroundColor: "#CFB1FE",
        borderRadius: "10px",
        padding: "15px 30px",
        cursor: "pointer"
    }

    const headerContent = [
        {
            path: "flex",
            icon: <Icon icon="solar:card-transfer-bold-duotone" height="25px" width="25px"/>,
            title: "MonieFlex Bank"
        },
        {
            path: "other",
            icon: <Icon icon="tabler:transfer-in" height="25px" width="25px"/>,
            title: "Other Bank Transfer"
        }
    ]

    const history = [
        {
            firstName: "Evaristus",
            lastName: "Francis",
            accountNumber: 3197080844
        }
    ]

    if(current === "flex") {
        Title("MonieFlex - Transfer to MonieFlex")
    } else {
        Title("MonieFlex - Transfer to Other Banks")
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
                    <div style={{ marginRight: "40px" }}>
                        <div className="border px-4 py-12 rounded-xl border-solid border-sky-950 flex justify-between">{
                            headerContent.map((item, key) => {
                                return <div 
                                        key={ key }
                                        onClick={() => handleSelect(item.path)}
                                        style={ current === item.path ? hoverStyle : unHoverStyle }
                                    >
                                    { item.icon }
                                    <div className="text-zinc-800 text-base font-semibold tracking-wide self-stretch whitespace-nowrap mt-5">
                                        { item.title }
                                    </div>
                                </div>
                            })
                        }</div>
                        <div className="self-stretch text-zinc-800 text-2xl font-bold w-full mt-5">
                            { current === "flex" ? "Send Money to MonieFlex Account" : "Send Money to Other Banks"}
                            { current === "flex" ? <MonieFlexTransferForm /> : <OtherBanksTransferForm />}
                        </div>
                    </div>
                    <div style={{ marginRight: "30px" }}>
                        <AccountBalance />
                        <SideHistory title={ "Frequent Beneficiaries" } history={ history }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferPage