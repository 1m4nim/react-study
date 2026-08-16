type GreetingProps = {
    name: string;
}

function Greeting(props: GreetingProps) {
    return (
        <>
            こんにちは、{props.name}さん！
        </>
    )
}

export default Greeting;