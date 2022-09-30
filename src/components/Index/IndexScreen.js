import {NavBar} from "./NavBar";
import {IndexHero} from "./IndexHero";
import {IndexAboutUs} from "./IndexAboutUs";
import {IndexWhyXcoin} from "./IndexWhyXcoin";

export const IndexScreen = () =>{
    return(
        <>
            <NavBar ids={IndexHero.id}/>
            <IndexHero id={"Hero"}/>
            <IndexAboutUs id={"AboutUs"}/>
            <IndexWhyXcoin id={"WhyXcoin"}/>
        </>
    )
}