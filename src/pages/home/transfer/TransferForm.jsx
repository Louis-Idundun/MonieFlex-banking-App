import { useEffect, useState } from "react"
import TextFormField from "../../../components/formfields/TextFormField"
import DropdownField from "../../../components/formfields/DropdownField"
import NarrationFormField from "../../../components/formfields/NarrationFormField"
import { Button } from "../../../components/Buttons"
import Checkbox from "../../../commons/Checkbox"
import axios from "axios"
import axiosConfig from "../../../services/api/axiosConfig";


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
    const [ bankCode, setBankCode ] = useState("")
    const [ accountNumber, setAccountNumber ] = useState("")
    const [ amount, setAmount] = useState("")
    const [narration, setNarration] = useState("")
    const [accountName, setAccountName] = useState("")

    useEffect(() => {
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJsYXN0X25hbWUiOiJBa2luIiwiZmlyc3RfbmFtZSI6Ik9sdSIsInN1YiI6Im9sdW1pZGVha2luZG9saWVAeWFob28uY29tIiwiaWF0IjoxNzAyOTM1NDk4LCJleHAiOjE3MDMwMjE4OTh9.sXOD2T4aLHzZAtLsXcjm7NU01Uc282z3i3AsRVkO7uD7Y5ET2SJePYxM_AgMWa8hR5XtoKbRPUSo_Hz8QIamoA";
        const config = axios.create({
            baseURL: "http://localhost:8080/api/v1",
            headers: {
                Authorization: `Bearer ${ token }`
            }
        })
        config.get("/wallet/all-banks").then((response) => {
            console.log(response.data)
        }, (error) => {
            console.log(error)
        })

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;}, [])

    const handleAmountInput = (input) => {
        setInputAmount(`₦${input}`)
    }

    const handleAccountNumber = (e) => {
        setAccountNumber(e)
        if(accountNumber.length === 11) {
            
            /// Make an api call to get account name
            /// When in progress, there will be a loading modal/popup
            /// Set account name from the result
        }
    }

    const handleTransfer = async () => {
            const payload = {
                bankCode: bankCode,
                accountNumber: accountNumber,
                amount: accountNumber,
                narration: narration,
            };
            axios.post("", payload)

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
                onValueChanged={e => handleAccountNumber(e)}
            />
            <TextFormField
                id={'receiver_name'}
                type={"text"}
                // value={ accountName }
                placeHolder={"Receiver's Account Name"}
                isEnabled={ false }
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
                    onClick={handleTransfer}
                />
            </div>
        </div>
    )
}