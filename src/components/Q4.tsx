import "./App.css";

function StyledBox() {
    const boxStyle = {
        backgroundColor: "#f0f0f0",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "8px"
    };

    return (
        <div>
            <div style={boxStyle}>
            </div>
            <div className="custom-box">
            </div>
        </div>
    )
}

export default StyledBox;