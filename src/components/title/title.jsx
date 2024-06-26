import "./title.scss";
const Title = ({ text, align }) => {
    return (
        <div className="title paragraph--7" style={{ alignSelf: align }} >{text}</div>
    );
}
 
export default Title;