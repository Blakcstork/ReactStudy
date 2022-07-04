import githubImage from "../imgs/GLogo2.png";
import styles from "../css/Header.module.css"


function Header(){
    return (
        <div className = {styles.wrapper}>
            <div>
                <h1>THIS IS THE MOVIES!</h1>
                <img src = {githubImage} alt = "discord Button"/>
            </div>
        </div>
    )
}


export default Header;