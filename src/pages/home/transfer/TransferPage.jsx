import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashboardHeader from "../../../components/headers/DashboardHeader"
import Sidebar from "../../../components/sidebar/Sidebar"
import AccountBalance from "../../../components/AccountBalance"

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
    const hoverStyle = {
        backgroundColor: "#6A1B9A"
    }

    const headerContent = [
        {
            index: 0,
            icon: <Icon icon="solar:card-transfer-bold-duotone" height="25px" width="25px"/>,
            title: "MonieFlex Bank"
        },
        {
            index: 1,
            icon: <Icon icon="tabler:transfer-in" height="25px" width="25px"/>,
            title: "Other Bank Transfer"
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
                <div className="flex justify-between" style={{ padding: "50px" }}>
                    <div>
                        <div className="border self-stretch w-full px-4 py-12 rounded-xl border-solid border-sky-950">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">{
                                headerContent.map((item, key) => {
                                    return <div 
                                            key={ key }
                                            onClick={() => handleSelect(item.index)}
                                            className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
                                            style={ index === item.index ? hoverStyle : null }
                                        >
                                        <div className="justify-center bg-zinc-50 flex flex-col w-full pl-8 pr-4 py-4 rounded-xl items-start">
                                            { item.icon }
                                        </div>
                                        <div className="text-zinc-800 text-base font-semibold tracking-wide self-stretch whitespace-nowrap mt-5">
                                            { item.title }
                                        </div>
                                    </div>
                                })
                            }</div>
                        </div>
                        <div className="self-stretch text-zinc-800 text-2xl font-bold w-full mt-5">
                            { current === "flex" ? "Send Money to MonieFlex Account" : "Send Money to Other Banks"}
                        </div>
                    </div>
                    <div>
                        <AccountBalance />
                    </div>
                </div>
            </div>
        </div>
    )
}