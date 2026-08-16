import InputField from "./InputField";
import "./App.css";

function Q10() {
    return (
        <>
            <InputField label="名前" type="text" placeholder="名前を入力してね" required />
            <InputField label="メールアドレス" type="email" placeholder="メールアドレスを入力してください" required />
            <InputField label="パスワード" type="password" placeholder="パスワードを入れてね" required />
        </>
    )
}

export default Q10