import {NavBar} from "./NavBar";
import {IndexHero} from "./IndexHero";
import {IndexAboutUs} from "./IndexAboutUs";
import {IndexWhyXcoin} from "./IndexWhyXcoin";

export const IndexScreen = () =>{
    return(
        <>
            <NavBar/>
            <IndexHero/>
            <IndexAboutUs/>
            <IndexWhyXcoin/>
        </>
    )
}