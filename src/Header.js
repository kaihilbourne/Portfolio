import './App.css';
import HomeButton from './Navigation/HomeButton';
import {Flex} from "@chakra-ui/react"

export default function Header(){
    return(
        <>
            <Flex>
                <HomeButton/>
                <p>Burgernonomous</p>
            </Flex>
            
        </>
    );
}