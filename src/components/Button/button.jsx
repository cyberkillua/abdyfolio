import { useSelector } from "react-redux"
import "./button.scss"

const Button = ({ text, darkmodeBG, darkmodeT }) => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    return (
        <button className="btn" style={{ backgroundColor: `${darkmode ? darkmodeBG : "#fff"}`, color: `${darkmode ? darkmodeTX : ""}` }}>{text}</button>
    );
}

export default Button;