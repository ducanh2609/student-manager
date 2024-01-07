import Input from "./input"
export default function FormGroup(label, placeholder, type) {
    return (
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">{label}</label>
            <div class="col-sm-9">
                {Input(placeholder, '10px', 'form-control', type)}
            </div>
        </div>
    )
}