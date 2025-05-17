const chieuDai = Number(prompt("Nhập chiều dài:"));
const chieuRong = Number(prompt("Nhập chiều rộng:"));

const dienTich = chieuDai * chieuRong;
const chuVi = 2 * (chieuDai + chieuRong);

console.log("Diện tích hình chữ nhật:", dienTich);
console.log("Chu vi hình chữ nhật:", chuVi);
