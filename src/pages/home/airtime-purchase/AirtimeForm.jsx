import { useState } from "react"
import TextFormField from "../../../components/formfields/TextFormField"
import DropdownField from "../../../components/formfields/DropdownField"
import NarrationFormField from "../../../components/formfields/NarrationFormField"
import { Button } from "../../../components/Buttons"
import Checkbox from "../../../commons/Checkbox"
import useAxiosWithAuth from "../../../services/hooks/useAxiosWithAuth"
import SweetPopup from "../../../commons/SweetPopup"
import SweetAlert from "../../../commons/SweetAlert"
import TransactionSuccess from "../../../components/popups/TransactionSuccess"


export const AirtimeForm = () => {
    const [ amount, setAmount ] = useState("")
    const [ network, setNetwork ] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState()
    const [ beneficiary, setBeneficiary ] = useState("")
    const [ narration, setNarration ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const [ isSuccessElement, setSuccessElement ] = useState(false)

    const axios = useAxiosWithAuth()

    async function handleAirtimePurchase(event) {
        event.preventDefault()
        setLoading(true)
        await axios.post("/bill/airtime", {
            phone_number: `${ phoneNumber }`,
            beneficiary_name: beneficiary,
            network: network,
            amount: amount,
            narration: narration
        }).then((response) => {
            setLoading(false)
            if(response.data["statusCode"] === 200) {
                SweetAlert(response.data["message"], 'success')
                setLoading(true)
                setSuccessElement(true)
                return
            } else {
                SweetAlert(response.data["message"], 'error')
                return
            }
        }).catch((error) => {
            setLoading(false)
            console.log(error)
        })
    }

    return (
        <div>
            <SweetPopup open={ loading } loaderElement={
                isSuccessElement ? <TransactionSuccess /> : null
            }/>
            <p style={{ paddingBottom: "20px", fontSize: "20px", fontWeight: "bold" }}>Airtime Purchases</p>
            <form onSubmit={handleAirtimePurchase}>
                <DropdownField
                    placeHolder={"Select Network"}
                    list={[
                        "MTN",
                        "GLO",
                        "AIRTEL",
                        "9MOBILE"
                    ]}
                    onSelected={item => setNetwork(item)}
                />
                <TextFormField
                    id={'mobile_number'}
                    type={"tel"}
                    placeHolder={"Mobile Number"}
                    onValueChanged={e => setPhoneNumber(e)}
                />
                <TextFormField
                    id={'amount'}
                    type={"number"}
                    placeHolder={"Amount"}
                    onValueChanged={e => setAmount(e)}
                />
                <TextFormField
                    id={'beneficiary'}
                    type={"text"}
                    placeHolder={"Beneficiary Name"}
                    onValueChanged={e => setBeneficiary(e)}
                />
                <Checkbox label="Save Beneficiary" onValueChanged={e => {}}/>
                <NarrationFormField
                    id="MonieFlex"
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