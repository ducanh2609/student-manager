import Button from "./button";


export default function Tbody(STT, MaSV, Name, Age, Gender) {
    return (
        <tr>
            <td>{STT}</td>
            <td>{MaSV}</td>
            <td>{Name}</td>
            <td>{Age}</td>
            <td>{Gender}</td>
            <td>
                <div class="template-demo">
                    {Button('button', 'Xem', 'btn btn-danger btn-icon-text')}
                    {Button('button', 'Sửa', 'btn btn-warning btn-icon-text')}
                    {Button('button', 'Xóa', 'btn btn-success btn-icon-text')}
                </div>
            </td>
        </tr>
    )
}