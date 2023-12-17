import { Button } from "../../../../components/Buttons";
import NarrationFormField from "../../../../components/formfields/NarrationFormField";
import DropdownField from "../../../../components/formfields/DropdownField";
import TextFormField from "../../../../components/formfields/TextFormField";
import * as React from "react";

export function DataForm() {
    return (
        <div style={{ padding: "50px 50px" }} >
            <p className="text-2xl font-medium pb-2">Data Subscription Purchase</p>
            <DropdownField
                placeHolder={"Choose Network"}
                list={[
                    "Hunger Bank",
                    "Union Bank",
                    "Wema Bank"
                ]}
                onSelected={item => console.log(item)}
            />
            <DropdownField
                placeHolder={"Select product type"}
                list={[
                    "Hunger Bank",
                    "Union Bank",
                    "Wema Bank"
                ]}
                onSelected={item => console.log(item)}
            />
            <TextFormField
                id={'meter_number'}
                type={"text"}
                placeHolder={"Meter Number Eg. 23456718934"}
            />
            <TextFormField
                id={'account_name'}
                type={"text"}
                placeHolder={"Account Name"}
                isEnabled={false}
            />
            <TextFormField
                id={'amount'}
                placeHolder={"Amount"}
            />
            <TextFormField
                id={'email_address'}
                type={"email"}
                placeHolder={"Email"}
            />
            <NarrationFormField />
            <div className="flex grow flex-col w-full" style={{ width: "100%" }}>
                <Button
                    text={ "Continue" }
                    isWhite={ false }
                />
            </div>
        </div>
    );
}