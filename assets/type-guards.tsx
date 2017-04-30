type HeadingWithStyle = {
    text: string,
    className: string
}
type Heading = string | HeadingWithStyle

export default (heading: Heading) => {
    if (typeof heading === "string") {
        return <h1>{heading}</h1>
    } else {
        return (
            <h1 className={heading.className}>
                {heading}
            </h1>
        )
    }
}