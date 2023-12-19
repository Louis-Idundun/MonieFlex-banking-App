import { useState } from "react"
import TextFormField from "../../../components/formfields/TextFormField"
import DropdownField from "../../../components/formfields/DropdownField"
import NarrationFormField from "../../../components/formfields/NarrationFormField"
import { Button } from "../../../components/Buttons"
import Checkbox from "../../../commons/Checkbox"


export const MonieFlexTransferForm = () => {
    const [ inputAmount, setInputAmount ] = useState("")

    const handleAmountInput = (input) => {
        setInputAmount(`₦${input}`)
    }
    return (
        <div style={{ paddingTop: "20px" }}>
            <TextFormField
                id={'receiver_number'}
                type={"number"}
                placeHolder={"Receiver's Account Number"}
            />
            <TextFormField
                id={'receiver_name'}
                type={"text"}
                placeHolder={"Receiver's Account Name"}
            />
            <Checkbox label={"Save Beneficiary"} onValueChanged={e => {console.log(e)}} />
            <TextFormField
                id={'amount'}
                type={"number"}
                value={ inputAmount }
                placeHolder={"Amount"}
                onValueChanged={e => handleAmountInput(e)}
            />
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

export const OtherBanksTransferForm = () => {
    const [ inputAmount, setInputAmount ] = useState("")

    const handleAmountInput = (input) => {
        setInputAmount(`₦${input}`)
    }
    return (
        <div style={{ paddingTop: "20px" }}>
            <DropdownField
                placeHolder={"Bank"}
                list={[
                    "Hunger Bank",
                    "Union Bank",
                    "Wema Bank"
                ]}
                onSelected={item => console.log(item)}
            />
            <TextFormField
                id={'receiver_number'}
                type={"number"}
                placeHolder={"Receiver's Account Number"}
            />
            <TextFormField
                id={'receiver_name'}
                type={"text"}
                placeHolder={"Receiver's Account Name"}
            />
            <TextFormField
                id={'amount'}
                type={"number"}
                value={ inputAmount }
                placeHolder={"Amount"}
                onValueChanged={e => handleAmountInput(e)}
            />
            <NarrationFormField
                id="Other Banks"
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