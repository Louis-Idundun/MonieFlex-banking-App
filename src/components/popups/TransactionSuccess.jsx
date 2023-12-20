import { Link } from "react-router-dom";
import Assets from "../../assets/Assets";

import React from "react";
import OurRoutes from "../../commons/OurRoutes";

function TransactionSuccess() {
    return (
        <div className="items-center flex flex-col">
            <img
                loading="lazy"
                srcSet={ Assets.successfulTransaction }
                alt="success"
                className="object-contain items-center object-center overflow-hidden
                self-center mt-8"
            />
            <header className="text-zinc-800 text-center text-lg font-semibold tracking-wide self-stretch w-full mt-9">
                Your Transaction is successful. Thank you for using MonieFlex Bank services
            </header>
            <Link
                className="text-zinc-600 text-center text-base font-medium whitespace-nowrap justify-center items-center border w-full max-w-[302px] mt-9 px-16 py-4 rounded-md border-dashed border-zinc-600"
                aria-label="Back to Homepage"
                role="button"
                to={OurRoutes.dashboard}
            >
                Back to Homepage
            </Link>
        </div>
    );
}

export default TransactionSuccess;