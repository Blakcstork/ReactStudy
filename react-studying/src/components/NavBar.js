import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "../css/NavBar.module.css"


function Button({text, link}){
    return <Link to = {`${link}`}><div 
        className = {styles.btn}
    >{text}</div></Link>
}

function NavBar(){
    return(
        <div>
            <nav className="wrapper">
                <Button text = "Home" link = {`/ReactStudy`}/>
                <Button text = "Search Movies"/>
                <Button text = "Makings"/>
                <Button text = "MyPage"/>
            </nav>
            <hr />
        </div>
    )

}



export default NavBar;

// 화면 상단 네비게이션 바
