type UserCardProps = {
    name: string;
    age: number;
    isActive: boolean;
}

function UserCard(props: UserCardProps) {
    return (
        <div className="user-card">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Status:{props.isActive ? "trueなのでアクティブ" : "falseなので非アクティブ"}</p>
        </div>
    )
}

export default UserCard;