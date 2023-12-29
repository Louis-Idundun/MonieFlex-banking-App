import * as React from "react";
import { useEffect, useState } from "react"
import TextFormField from "../formfields/TextFormField";
import { Button } from "../Buttons";
import useAxiosWithAuth from "../../services/hooks/useAxiosWithAuth";
import SweetAlert from "../../commons/SweetAlert";
import { Icon } from "@iconify/react";
import SweetPopup from "../../commons/SweetPopup";



function TransactionPin({ 
    name = "", amount = "", isVerifyTransaction = false, 
    callback = () => {}, handleClose, buttonText = ""
}) {
   const [ pin, setPin ] = useState("")
    const [ loading, setLoading ] = useState(false);
    const axios = useAxiosWithAuth()

    const handleCreatePin = async () => {
        setLoading(true)
        await axios.post(`/wallet/transaction-pin?pin=${ pin }`).then((response) => {
            setLoading(false)
            if (response.data["statusCode"] === 200) {
                SweetAlert(response.data["message"], 'success')
            } else {
                SweetAlert(response.data["message"], 'error')
            }
        }).catch((err) => { 
            setLoading(false)
            if(err?.code === "ERR_BAD_REQUEST") {
                err?.response.data["data"].forEach(value => 
                  SweetAlert(value, "error")
                )
              } else {
                SweetAlert(err, "error")
              }
        })
        
    }


     const handleVerifyPin = async () => {
        setLoading(true)
        await axios.post(`/wallet/verify-pin?pin=${ pin }`).then((response) => {
            setLoading(false)
            if(response.data["statusCode"] === 200) {
                callback()
            } else {
                SweetAlert(response.data["message"], 'error')
            }

        }, (error) => {
            console.log(error.message)
        }).catch((err) => {
            setLoading(false)
            if(err?.code === "ERR_BAD_REQUEST") {
                err?.response.data["data"].forEach(value => 
                  SweetAlert(value, "error")
                )
              } else {
                SweetAlert(err, "error")
              }
        })
     }
   
  return (
    loading 
        ? <SweetPopup open={ loading }/>
        : <div className="items-center flex max-w-xs flex-col">
            <div onClick={handleClose} className="cursor-pointer">
                <Icon icon="system-uicons:close" color="#08284e" height={50} width={50}/>
            </div>
            <div className="text-sky-950 text-center text-base self-stretch w-full">{
                isVerifyTransaction 
                    ? <>
                        <span className="">You are about to send </span>
                        <span className="font-bold text-xl text-sky-950"> &#8358;{amount}</span>
                        <span className=""> to </span>
                        <span className="font-bold text-xl text-sky-950">
                            {name}.
                        </span>
                    </>
                    
                    : 
                    <p style={{padding: "0 25px"}}>
                    Create Transaction PIN. This PIN will be used for all transactions.
                    </p>
                
            }</div>
            <div style={{ padding: isVerifyTransaction ? "40px 75px" : "20px" }}>
                <TextFormField 
                    placeHolder="Input Pin"
                    type="text"
                    onValueChanged={e => setPin(e)}
                />
            </div>
            <Button 
                text = {
                    buttonText === ""
                        ? isVerifyTransaction 
                            ? "Send Money" 
                            : "Create Pin"
                        : buttonText
                }
                type="submit"
                onClick={isVerifyTransaction ? handleVerifyPin : handleCreatePin}
            />
        </div>
  );
}

export default TransactionPin;


