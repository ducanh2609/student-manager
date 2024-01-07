import Button from './button.js';
import Input from './input.js';
import Tbody from './tbody.js';

export default function StretchCard() {
    let style = {
        height: '80vh !important'
    }
    return (
        <div class="col-lg-7 grid-margin stretch-card" style={style}>
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-3">
                            {Button('button', 'Thêm mới sinh viên', "btn btn-primary btn-icon-text")}
                        </div>
                        <div class="col-6">
                            <form class="search-form" action="#">
                                <i class="icon-search"></i>
                                {Input('Search here', '10px', 'form-control', 'search')}
                                {Button('button', 'Tìm kiếm', "btn btn-primary btn-icon-text")}
                            </form>
                        </div>
                        <div class="col-3 d-flex align-items-center">
                            <select class="form-control">
                                <option value="">Sắp xếp</option>
                                <option value="">ABC def</option>
                                <option value="">ABC def</option>
                                <option value="">ABC def</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Danh sách sinh viên</h3>
                    <div class="table-responsive pt-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tbody(1, 'SV001', 'Nguyễn Văn A', 20, 'Nam')}
                                {Tbody(2, 'SV002', 'Nguyễn Thị B', 21, 'Nữ')}
                                {Tbody(3, 'SV003', 'Nguyễn Văn C', 19, 'Nam')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}