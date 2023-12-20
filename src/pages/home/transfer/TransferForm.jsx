import { useEffect, useState } from "react"
import TextFormField from "../../../components/formfields/TextFormField"
import DropdownField from "../../../components/formfields/DropdownField"
import NarrationFormField from "../../../components/formfields/NarrationFormField"
import { Button } from "../../../components/Buttons"
import Checkbox from "../../../commons/Checkbox"
import useAxiosWithAuth from "../../../services/hooks/useAxiosWithAuth"
import SweetAlert from "../../../commons/SweetAlert"
import SweetPopup from "../../../commons/SweetPopup"
import TransactionSuccess from "../../../components/popups/TransactionSuccess"


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
    const [ bankCode, setBankCode ] = useState("")
    const [ accountNumber, setAccountNumber ] = useState("")
    const [ amount, setAmount] = useState("")
    const [ bankName, setBankName ] = useState("")
    const [ narration, setNarration ] = useState("")
    const [ accountName, setAccountName ] = useState("")
    const [ banks, setBanks ] = useState([{
        code: "",
        name: ""
    }])
    const [ loading, setLoading ] = useState(false)
    const [ isSuccess, setSuccess ] = useState(false)
    const axios = useAxiosWithAuth()

    useEffect(() => {
        onLoad()
    }, [])

    async function onLoad() {
        await axios.get("/wallet/all-banks").then((response) => {
            if(response.data["statusCode"] === 200) {
                const bankList = response.data["data"].map(bank => ({
                    code: bank.code,
                    name: bank.name
                }))
                setBanks(bankList)
            } else {
                SweetAlert(response.data["message"], 'error')
            }
        })
    }

    const handleAccountNumber = async (e) => {
        setAccountNumber(e)
        if(e.length === 10) {
            setLoading(true)
            await axios.post("/wallet/verify", {
                account_number: e,
                account_bank: bankCode
            }).then((response) => {
                setLoading(false)
                if(response.data["statusCode"] === 200) {
                    setAccountName(response.data["data"]["account_name"])
                } else {
                    SweetAlert(response.data["message"], 'error')
                }
            }).catch(() => { setLoading(false) })
        }
    }

    async function handleTransfer(event) {
        event.preventDefault()
        setLoading(true)
        await axios.post("/wallet/transfer-to-bank", {
            bankCode: bankCode,
            accountNumber: accountNumber,
            amount: amount,
            narration: narration,
            bankName: bankName,
            receiverName: accountName
        }).then((response) => {
            setLoading(false)
            if(response.data["statusCode"] === 200) {
                SweetAlert(response.data["message"], 'success')
                setLoading(true)
                setSuccess(true)
                return
            } else {
                SweetAlert(response.data["message"], 'error')
                return
            }
        }).catch(() => setLoading(false))
    }
    
    return (
        <div style={{ paddingTop: "20px" }}>
            <SweetPopup open={ loading } loaderElement={isSuccess ? <TransactionSuccess /> : null}/>
            <form onSubmit={handleTransfer}>
                <DropdownField
                    placeHolder={"Bank"}
                    list={ banks }
                    isCustom={ true }
                    onSelected={item => {
                        setBankCode(item.code)
                        setBankName(item.name)
                    }}
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
                    value={ accountName }
                    placeHolder={"Receiver's Account Name"}
                    isEnabled={ false }
                />
                <TextFormField
                    id={'amount'}
                    type={"number"}
                    placeHolder={"Amount"}
                    onValueChanged={e => setAmount(e)}
                />
                <NarrationFormField
                    id="Other Banks"
                    placeHolder="Description"
                    onValueChanged={e => setNarration(e)}
                />
                <div className="flex grow flex-col w-full" style={{ width: "100%" }}>
                    <Button
                        text={ "Send Money" }
                        isWhite={ false }
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}