import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

import { useContext } from 'react';
import { AccountContext } from "../context/AccountProvider";

import {AppBar, Toolbar, styled, Box} from "@mui/material";

const Header = styled(AppBar)`
height: 220px;
background-color: #00bfa5;
box-shadow: none;
`

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ? 
                
                    <ChatDialog/> 
                    
                        :
            
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>

                        <LoginDialog/>
                        </>
            }
        </Component>
    )
}

export default Messenger;