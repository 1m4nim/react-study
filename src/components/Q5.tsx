function DynamicImage() {
    const imageUrl = "https://placehold.co/150";
    const altText = "サンプル画像";
    const baseWidth = 150;
    const isLarge = true;

    return (
        <>
            <img
                src={imageUrl}
                alt={altText}
                width={isLarge ? baseWidth * 2 : baseWidth}
                data-size={isLarge ? "large" : "small"}
            />
        </>
    )
}

export default DynamicImage;