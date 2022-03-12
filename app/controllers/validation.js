function Validation() {
    this.checkEmpty = function(value,spanID,message) {
        // kiểm tra có bị trống không
        if (value == "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        // hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "mone";
        return true;

    }
    // this.checkTK = function(value,spanID,message,mangSP) {
    //     // giả sử id chưa có trong mảng
    //     var isExist = false;
    //     //kiểm chứng
    //     // map() => trả về 1 mảng mới , đ hết mới dừng bất chấp có return hay không
    //     // some() : => dựa vào điều kiện so sánh trả về kết quả true / flase
    //     // khi duyệt mảng nếu tìm thấy nv đầu tiên đầu trong mảng bị trùng id thì return về true và dừng duyệt mảng
    //     isExist = mangSP.some(function(sp,index){
    //         // return kết quả của biểu thức so sánh
    //         // trim() : xóa kí tự khoảng trắng trc và sau chuỗi chữ
    //         return value.trim() == sp.taiKhoan;
    //     });

    //     if(isExist){
    //         // có id bị trùng => không hợp lệ
    //         document.getElementById(spanID).innerHTML = message;
    //         document.getElementById(spanID).style.display = "block";
    //         return false;
    //     }
    //     // hợp lệ
    //     document.getElementById(spanID).innerHTML = "";
    //     document.getElementById(spanID).style.display = "none";
    //     return true;

    // }

    this.checkName = function(value,spanID,message) {
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";

        var reg = new RegExp(pattern);

        if(reg.test(value)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "mone";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkEmail = function(value,spanID,message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(value.match(pattern)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "mone";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }


    this.checkPass = function(value,spanID,message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if(value.match(pattern)){
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }


    this.checkND = function(selectID,spanID,message) {
        var index = document.getElementById(selectID).selectedIndex;
        if(index != 0) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkNN = function(selectID,spanID,message) {
        var index = document.getElementById(selectID).selectedIndex;
        if(index != 0) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkMoTa = function(value,spanID,message) {
        // kiểm tra có bị trống không
        if (value == "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        // hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "mone";
        return true;

    }

    this.checkMoTa1 = function(value,spanID,message) {
        if (value < 60 ) {
            
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "mone";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}