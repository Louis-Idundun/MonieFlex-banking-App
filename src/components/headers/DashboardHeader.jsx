import { Icon } from "@iconify/react";
import Assets from "../../assets/Assets";
import { useEffect, useState } from "react";
import {Avatar, IconButton, Menu, MenuItem, Tooltip} from "@mui/material";
import SweetPopup from "../../commons/SweetPopup";
import TransactionPin from "../popups/TransactionPin";


function DashboardHeader(imageLink) {
    const [image, setImage] = useState(Assets.avatar);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [ showPin, setShowPin ] = useState(false)
    
   

    useEffect(() => {
        setImage(
            typeof imageLink === 'string' && imageLink !== ''
                ? imageLink
                : Assets.avatar
        )
    }, [imageLink]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setShowPin(false)
    };

    const handlePinClick = () => {
        handleClose()
        setShowPin(true)
    }
   


    return (
        <header className="justify-between items-stretch bg-sky-950 flex gap-5 px-20 py-2.5 max-md:flex-wrap max-md:px-5" style={{
            position: "sticky",
            top: "0",
            zIndex: "99",
        }}>
            <SweetPopup open={ showPin } loaderElement={ <TransactionPin handleClose={handleClose}/> }/>
            <img
                loading="lazy"
                src={ Assets.logo }
                className="object-contain object-center w-min"
                alt="Logo"
            />
            <div className="justify-end items-stretch self-center flex gap-5 my-auto max-md:justify-center">
                <div className="justify-end self-center flex gap-1.5 my-auto items-start">
                    <div className="text-white text-base font-semibold grow whitespace-nowrap">
                        EN
                    </div>
                    <Icon icon="lucide:chevron-down" width="24" height="24" color="#FFF"/>
                </div>
                <div className="text-white text-center text-base font-semibold tracking-wide self-center my-auto">
                    Help
                </div>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 50, height: 50 }} src= { image.toString() }/>
                    </IconButton>
                </Tooltip>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>View Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handlePinClick}>Create Transaction Pin</MenuItem>
            </Menu>
        </header>
    );
}

export default DashboardHeader;