export class ThongTinLichChieu {
    thongTinPhim = new ThongTinPhim();
    danhSachGhe = [ghe];
}
export class ThongTinPhim {
    maLichChieu = '';
    tenCumRap = '';
    tenRap = '';
    diaChi = '';
    tenPhim = '';
    hinhAnh = '';
    ngayChieu = '';
    gioChieu = '';
}
export class Ghe {
    maGhe = 0;
    tenGhe = "";
    maRap = 0;
    loaiGhe = "";
    stt = "";
    giaVe = 0;
    daDat = true;
    taiKhoanNguoiDat = null;
}
export const ghe = new Ghe()