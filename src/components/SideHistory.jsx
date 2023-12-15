import { Icon } from "@iconify/react"
import { useState } from "react"

const HistoryItem = ({firstName = '', lastName = '', accountNumber = 123456789, needAvatar = true}) => {
    return (
        <div className="items-center flex justify-between gap-2.5 mt-5">
            { 
                needAvatar ? <div 
                    className="text-black text-sm font-bold whitespace-nowrap justify-center 
                        items-stretch bg-red-200 my-auto pl-2.5 pr-12 py-2.5"
                > {`${firstName.substring(0)}``${lastName.substring(0)}`} </div> 
                : null 
            }
            <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-zinc-800 text-base font-semibold whitespace-nowrap">
                    {`${firstName}` `${lastName}`}
                </div>
                <div className="text-neutral-400 text-sm font-medium whitespace-nowrap mt-1.5">{accountNumber}</div>
            </div>
        </div>
    )
}

function SideHistory(title = '', history = [{firstName, lastName, accountNumber}]) {
    const [ open, setOpen ] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="justify-center items-stretch bg-white flex flex-col pl-6 pr-4 py-6 rounded-xl">
            <div className="justify-between flex w-full gap-5 items-start">
                <div className="text-neutral-400 text-center text-xs font-semibold tracking-wider uppercase grow whitespace-nowrap">
                    { title }
                </div>
                <div>
                    <div className={`${open ? "rotate-180" : ""}`} onClick={handleClick}>
                        <Icon icon="iconamoon:arrow-up-2-light" />
                    </div>
                    <Icon icon="solar:settings-bold-duotone" height={"25px"} width={'25px'}/>
                </div>
            </div>
            {
                history.map((item, key) => {
                    return <HistoryItem 
                        key={key}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        accountNumber={item.accountNumber}
                    />
                })
            }
        </div>
    )
}

export default SideHistory;