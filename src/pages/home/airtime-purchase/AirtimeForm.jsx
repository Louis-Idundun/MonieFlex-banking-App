import { useState } from "react"
import TextFormField from "../../../components/formfields/TextFormField"
import DropdownField from "../../../components/formfields/DropdownField"
import NarrationFormField from "../../../components/formfields/NarrationFormField"
import { Button } from "../../../components/Buttons"
import Checkbox from "../../../commons/Checkbox"


export const AirtimeForm = () => {
    const [ inputAmount, setInputAmount ] = useState("")

    const handleAmountInput = (input) => {
        setInputAmount(`₦${input}`)
    }

    return (
        <div>
            <p style={{ paddingBottom: "20px", fontSize: "20px", fontWeight: "bold" }}>Airtime Purchases</p>
            <DropdownField
                placeHolder={"Select Network"}
                list={[
                    "MTN",
                    "GLO",
                    "AIRTEL",
                    "9MOBILE"
                ]}
                onSelected={item => console.log(item)}
            />
            <TextFormField
                id={'mobile_number'}
                type={"number"}
                placeHolder={"Mobile Number"}
            />
            <TextFormField
                id={'amount'}
                type={"number"}
                value={ inputAmount }
                placeHolder={"Amount"}
                onValueChanged={e => handleAmountInput(e)}
            />
            <TextFormField
                id={'beneficiary'}
                type={"text"}
                placeHolder={"Beneficiary Name"}
            />
            <Checkbox label="Save Beneficiary" onValueChanged={e => {}}/>
            <NarrationFormField 
                id="MonieFlex" 
                placeHolder="Description" 
            />
            <div className="flex grow flex-col w-full" style={{ width: "100%" }}>
                <Button 
                    text={ "Send Money" } 
                    isWhite={ false }
                />
            </div>
        </div>
    )
}