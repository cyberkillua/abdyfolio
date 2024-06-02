import "./button.scss";

const Button = ({ text, align }) => {
    return (
        <button className="btn" style={{alignSelf: `${align}`}}>{text}</button>
    );
}

export default Button;