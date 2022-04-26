import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_FILM } from "../../types/QuanLyPhimType"

const stateDefault = {
  arrfilm: [
    {
      "maPhim": 1332,
      "tenPhim": "Trainwrect",
      "biDanh": "trainwrect",
      "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
      "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
      "maNhom": "GP04",
      "ngayKhoiChieu": "2022-02-17T19:35:29.923",
      "danhGia": 5,
      "hot": true,
      "dangChieu": false,
      "sapChieu": true
    },

  ],
  dangChieu: true,
  sapChieu: true,
  arrfilmDefault: [],
  thongTinPhim: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case SET_DANH_SACH_PHIM: {
      state.arrfilm = action.arrfilm
      state.arrfilmDefault = state.arrfilm
      return { ...state }
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrfilm = state.arrfilmDefault.filter(film => film.dangChieu === state.dangChieu)
      return { ...state }
    }

    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrfilm = state.arrfilmDefault.filter(film => film.sapChieu === state.sapChieu)
      return { ...state }
    }
    case SET_THONG_TIN_FILM: {
      state.thongTinPhim = action.thongTinPhim;

      return { ...state }
    }


    default:
      return { ...state }
  }
}
