import Card from "./Card";

function Q9() {
    return (
        <>
            <Card title="カード1">
                <p>最初のカード</p>
            </Card>

            <Card title="カード2">
                <p>2枚めのカード</p>
                <ul>
                    <li>
                        リスト1
                    </li>
                    <li>
                        リスト2
                    </li>
                </ul>
            </Card>

            <Card title="カード3">
                <button>ボタンも入るよ</button>
            </Card>
        </>
    )
}

export default Q9;