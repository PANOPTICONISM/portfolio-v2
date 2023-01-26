import { TextProps } from "./types"

export const BulletedList = ({ text }: { text: TextProps }) => {
    return (
        <ul>
            {text.map((value, index) =>
                <li key={index}>
                    {value.text.link ? <a href={value.text.link.url}>{value.text.content}</a> : value.text.content}
                </li>
            )}
        </ul>
    )
}