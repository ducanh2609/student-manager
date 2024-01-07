export default function Input(placeholder, padding, clas, type) {
    let style = {
        padding: `0 ${padding}`
    }
    return <input style={style} type={type} class={clas} placeholder={placeholder}></input>
}