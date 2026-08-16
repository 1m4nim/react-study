import Greeting from "./Greeting"
import "./App.css"

function Q6() {

    const names = ["山田", "佐藤", "谷崎"];
    return (
        <>
            {/* <Greeting name="山田" />
            <Greeting name="佐藤" />
            <Greeting name="谷崎" /> */}
            {names.map((name) => (
                <Greeting key={name} name={name} />
            ))}
        </>
    )
}

export default Q6;