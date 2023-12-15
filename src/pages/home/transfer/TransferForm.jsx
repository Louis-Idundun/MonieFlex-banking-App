import { useState } from "react"
import TextFormField from "../../../components/formfields/TextFormField"
import DropdownField from "../../../components/formfields/DropdownField"
import NarrationFormField from "../../../components/formfields/NarrationFormField"


export const MonieFlexTransferForm = () => {
    const [ inputAmount, setInputAmount ] = useState("")

    const handleAmountInput = (input) => {
        setInputAmount(`₦${input}`)
    }
    return (
        <>
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
            <NarrationFormField />
        </>
    )
}

export const OtherBanksTransferForm = () => {

}