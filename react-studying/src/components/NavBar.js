import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "../css/NavBar.module.css"


function Button({text, link}){
    return <div 
        className = {styles.btn}
    ><Link to = {`${link}`}>{text}</Link></div>
}

function NavBar(){
    return(
        <div>
            <nav className="wrapper">
                <Button text = "Home" link = {`/ReactStudy`}/>
                <Button text = "Button2"/>
                <Button text = "Button3"/>
                <Button text = "MyPage"/>
            </nav>
            <hr />
        </div>
    )

}



export default NavBar;

// 화면 상단 네비게이션 바
