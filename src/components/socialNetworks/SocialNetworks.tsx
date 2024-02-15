import React from "react";
import {Logo} from "../logo/Logo";
import {StyledSocialNetworks} from "./StyledSocialNetworks";

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {IconButton} from "@mui/material";

type SocialNetworksProps = {
    padding?: string
    theme: string
    placeSocials?: string
}

const SocialNetworks = (props: SocialNetworksProps) => {
    return (
        <StyledSocialNetworks padding={props.padding} placeSocials={props.placeSocials}>
            {/*<Logo iconId={props.theme === 'light' ? 'telegram-light' : 'telegram-dark'} width='30px' height='30px' viewBox='3 3 17 17'/>*/}
            {/*<Logo iconId={props.theme === 'light' ? 'whatsapp-light' : 'whatsapp-dark'} width='30px' height='30px' viewBox='0 0 46 46'/>*/}
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
            >
                <TelegramIcon/>
            </IconButton>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
            >
                <WhatsAppIcon/>
            </IconButton>

        </StyledSocialNetworks>
    )
}


export default SocialNetworks