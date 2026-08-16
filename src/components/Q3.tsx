import "./App.css";

function Introduction() {
    const name = "田中太郎";
    const age = 25;
    const year = new Date().getFullYear();

    return (
        <>
            <p>私は{name}です。{age}歳です。今年は{year}年です。</p>
        </>
    )
}
export default Introduction;

