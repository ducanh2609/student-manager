import FormGroup from "./form-group";
import Button from "./button";

export default function Profile() {
    return (
        <div class="col-5 grid-margin">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">Thông tin sinh viên</h3>
                    <form class="form-sample">
                        {FormGroup('Mã sinh viên', '', 'text')}
                        {FormGroup('Tên sinh viên', '', 'text')}
                        {FormGroup('Tuổi', '', 'number')}
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Giới tính</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        {FormGroup('Ngày sinh', 'dd/mm/yyyy', 'date')}
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Nơi sinh</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Địa chỉ</label>
                            <div class="col-sm-9">
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        {Button('submit', 'Submit', 'btn btn-primary me-2')}
                    </form>
                </div>
            </div>
        </div>
    )
}