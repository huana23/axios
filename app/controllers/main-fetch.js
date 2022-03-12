var service =new ProductServices();
var validation = new Validation();


function layDS() {

    fetch('https://62217cccafd560ea69b19429.mockapi.io/QLLT')
    .then(function(response) {
        return response.json()

    })
    .then(function(data){
        //lấy thành công
        console.log(data)
        hienThiTable(data);
    })
    .catch(function(error){
        // lấy thất bại
        console.log(error);
    })
}

layDS();

function hienThiTable(mangSP) {
    var content = "";
    var stt = 1;
    mangSP.map(function(sp){
        content += `
        <tr>
            <td>${stt}</td>
            <td>${sp.taiKhoan}</td>
            <td>${sp.matKhau}</td>
            <td>${sp.hoTen}</td>
            <td>${sp.email}</td>
            <td>${sp.ngonNgu}</td>
            <td>${sp.loaiND}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSP(${sp.id})">Xóa</button>
                <button class="btn btn-info" onclick="xemSP(${sp.id})" ata-toggle="modal" data-target="#myModal">Xem</button>
            </td>
        </tr>
        `

        stt++;
    })

    document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}

document.getElementById("btnThemNguoiDung").onclick = function() {
    document.querySelector("#myModal .modal-footer").innerHTML = `
        <button onclick="themSP()" class="btn btn-success">Add</button>
    `
}


function themSP() {
    // lấy dữ liệu từ data
    var taiKhoan = document.getElementById("TaiKhoan").value;
    var matKhau = document.getElementById("MatKhau").value;
    var hoTen = document.getElementById("HoTen").value;
    var email = document.getElementById("Email").value;
    var ngonNgu = document.getElementById("loaiNgonNgu").value;
    var loaiND = document.getElementById("loaiNguoiDung").value;
    var moTa = document.getElementById("MoTa").value;  


    var isValid = true;
    // isValid(moi) = isValid(cũ) & 1(true)
    // kiểm tra tài khoản
    isValid &=  validation.checkEmpty(taiKhoan,"tbTKNV","Tài khoản không được để trống");
    // kiểm tra họ tên
    isValid &=  validation.checkEmpty(hoTen,"tbTen","Họ và tên không được để trống") && validation.checkName(hoTen,"tbTen","Họ và tên phải là chữ");

    // pass
    isValid &= validation.checkPass(matKhau,"tbMatKhau", "Mật khẩu chưa định dạng");

    // kiểm tra email
    isValid &= validation.checkEmail(email,"tbEmail", "Email chưa định dạng");

    // kiểm tra loại người dùng
    isValid &= validation.checkND("loaiNguoiDung","tbLoaiND", "Bạn chưa chọn loại người dùng");

    // kiểm tra loại ngôn ngữ
    isValid &= validation.checkNN("loaiNgonNgu","tbLoaiNN", "Bạn chưa chọn loại ngôn ngữ");

    // kiểm tra mô tả 
    isValid &=  validation.checkMoTa(moTa,"moTa","Mô tả không được để trống") && validation.checkMoTa(moTa,"moTa","Mô tả phải nhỏ hơn 60 kí tự");

    if(isValid){
        var sp = new Products(taiKhoan,matKhau,hoTen,email,ngonNgu,loaiND,moTa);
        console.log(sp);

        service.themSP(sp)
        hienThiTable(service.mangSP)

    }


    

    fetch('https://62217cccafd560ea69b19429.mockapi.io/QLLT', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sp),
    })
    .then(function(response) {
        return response.json()

    })
    .then(function(data){
        //lấy thành công
        console.log(data);
        hienThiTable('Success:', data);
        layDS();
        document.querySelector("#myModal .close").click();

    })
    .catch(function(error){
        // lấy thất bại
        console.log('Error:', error);
    })
}




function xoaSP(id) {
    fetch(`https://62217cccafd560ea69b19429.mockapi.io/QLLT/${id}`, {
        method: 'DELETE', 
    })
    .then(function(response) {
        return response.json()

    })
    .then(function(data){
        //lấy thành công
        console.log(data)
        layDS();

    })
    .catch(function(error){
        // lấy thất bại
        console.log('Error:', error);
    })
}

function xemSP(id){
    service.getProduct(id)
    .then(function(result){
        console.log(result.data);
        //dom tới form để điền nội dung
        document.getElementById("TaiKhoan").value = result.data.taiKhoan;
        document.getElementById("MatKhau").value = result.data.matKhau;
        document.getElementById("HoTen").value = result.data.hoTen;
        document.getElementById("Email").value = result.data.email;
        document.getElementById("loaiNgonNgu").value = result.data.ngonNgu;
        document.getElementById("loaiNguoiDung").value = result.data.loaiND;
        document.getElementById("MoTa").value = result.data.moTa;

        document.querySelector("#myModal .modal-footer").innerHTML = `
        <button onclick="capNhatSP(${result.data.id})" class="btn btn-success">Add</button>`

    }).catch(function(error){
        console.log(error);
    })
}

function capNhatSP(id) {
    var taiKhoan = document.getElementById("TaiKhoan").value;
    var matKhau = document.getElementById("MatKhau").value;
    var hoTen = document.getElementById("HoTen").value;
    var email = document.getElementById("Email").value;
    var ngonNgu = document.getElementById("loaiNgonNgu").value;
    var loaiND = document.getElementById("loaiNguoiDung").value;
    var moTa = document.getElementById("MoTa").value;

    var sp = new Products(taiKhoan,matKhau,hoTen,email,ngonNgu,loaiND,moTa);
    console.log(id, sp);

    service.updateProduct(id, sp)
        .then(function(result){
            console.log(result.data);
            layDS();
            document.querySelector("#myModal .close").click();
        }).catch(function(error){
            console.log(error);
        });
}