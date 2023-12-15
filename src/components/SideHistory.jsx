import { Icon } from "@iconify/react"
import { useState } from "react"

const HistoryItem = ({
    firstName = '', lastName = '', 
    accountNumber = 123456789, needAvatar = true,
    isFlexed = false
}) => {

    return (
        <div className="items-center flex justify-between gap-2.5 mt-5">
            { 
                needAvatar ? <div 
                    className="text-black text-sm font-bold whitespace-nowrap justify-center bg-red-200"
                    style={{ padding: "10px", borderRadius: "50%" }}
                > { firstName.charAt(0) }{ lastName.charAt(0) } </div> 
                : null 
            }
            {
                isFlexed ? <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-semibold whitespace-nowrap">
                        {firstName} {lastName}
                    </div>
                    <div className="text-neutral-400 text-sm font-medium whitespace-nowrap">{accountNumber}</div>
                </div> : <div className="justify-center items-stretch self-stretch flex grow basis-[0%]">
                    <div className="text-zinc-800 text-base font-semibold whitespace-nowrap">
                        { firstName }
                    </div>
                    <div className="text-neutral-400 text-sm font-medium whitespace-nowrap">{ lastName }</div>
                </div>
            }
        </div>
    )
}

function SideHistory({
    title = '', needAvatar = false, isFlexed = false,
    history = [{firstName: '', lastName: '', accountNumber: 3197080844}]
}) {
    const [ open, setOpen ] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="justify-center items-stretch bg-white flex flex-col pl-6 pr-4 py-6 rounded-xl mt-8">
            <div className="justify-between flex w-full gap-5 items-center">
                <div className="text-neutral-400 text-start text-xs font-semibold tracking-wider uppercase grow whitespace-nowrap">
                    { title.toUpperCase() }
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`${open ? "rotate-180" : ""}`} onClick={handleClick}>
                        <Icon icon="iconamoon:arrow-up-2-light" height={"20px"} width={'20px'}/>
                    </div>
                    <Icon icon="solar:settings-bold-duotone" height={"20px"} width={'20px'}/>
                </div>
            </div>
            {
                open ? history.map((item, key) => {
                    return <HistoryItem 
                        key={ key }
                        needAvatar={ needAvatar }
                        isFlexed={ isFlexed }
                        firstName={ item.firstName }
                        lastName={ item.lastName }
                        accountNumber={ item.accountNumber }
                    />
                }) : null
            }
        </div>
    )
}

export default SideHistory;