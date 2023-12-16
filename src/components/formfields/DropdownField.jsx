import * as React from "react";
import { Icon } from "@iconify/react";
 
function DropdownField({placeHolder = '', list = [], onSelected}) {
    const [ open, setOpen ] = React.useState(false);
    const [ text, setText ] = React.useState(placeHolder)
    const [ index, setIndex ] = React.useState(-1)
 
    const handleOpenList = () => {
        setOpen(!open)
    }
    const handleSelect = (item) => {
        setText(item)
        onSelected(item)
        setOpen(false)
    }
    const handleHover = (key) => {
        setIndex(key)
    }
 
    const hoverStyle = {
        backgroundColor: "#eff",
        borderRadius: "5px",
        fontSize: "14px", 
        fontWeight: "500"
    }
 
    return (
        <>
            <div
                onClick={handleOpenList}
                className="font-urbanist my-[20px] flex justify-between top-9 min-w-full left-0 bg-[#EDEDED]
                mt-1 z-10 px-4 py-4 border-[#5A5959] rounded-md focus:outline-none focus:border-blue-500
                cursor-pointer items-center"
                style={{border: "#5a5959 solid 1px", fontSize: "16px", fontWeight: "600"}}
            > { text }
                <div className={`${open ? 'rotate-180' : ''} flex`}>
                    <Icon icon="lucide:chevron-down" width="24" height="24" />
                </div>
            </div>
            {
                open ? <div
                    className="font-urbanist my-[20px] cursor-pointer
                        top-9 min-w-full left-0 bg-[#EDEDED] rounded-md
                    ">{
                    list.map((item, key) => {
                        return <div
                            key={key}
                            onMouseEnter={() => handleHover(key)}
                            onClick={() => handleSelect(item)}
                            className="font-urbanist top-9 min-w-full left-0 z-10 px-4 py-2"
                            style={index === key  ? hoverStyle : { fontSize: "14px", fontWeight: "500" }}
                        >{item}</div>
                    })
                }</div> : <div></div>
            }
        </>
    );
}
 
export default DropdownField;