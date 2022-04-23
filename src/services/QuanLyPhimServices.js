import { GROUP_ID } from "../util/setting/setting";
import { baseService } from "./baseServices";

export class QuanLyPhimServices extends baseService {
     constructor() {
          super()
     }

     layDanhSachBanner = () => {
          return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
     }
     layDanhSachPhim = () => {

          return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
     }
}
export const quanLyPhimServices = new QuanLyPhimServices()