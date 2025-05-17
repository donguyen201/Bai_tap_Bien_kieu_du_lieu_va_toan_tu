# Bài học: Cấu trúc điều kiện trong JavaScript

## 1. Giới thiệu
Cấu trúc điều kiện cho phép chương trình thực hiện các hành động khác nhau dựa vào điều kiện đúng hoặc sai.

---

## 2. Cú pháp `if`, `else if`, `else`

```javascript
if (condition) {
    // Thực hiện nếu điều kiện đúng
} else if (anotherCondition) {
    // Thực hiện nếu điều kiện khác đúng
} else {
    // Thực hiện nếu không có điều kiện nào đúng
}
```

### Ví dụ:
```javascript
let score = 75;

if (score >= 90) {
    console.log("Hạng A");
} else if (score >= 70) {
    console.log("Hạng B");
} else {
    console.log("Hạng C");
}
```

---

## 3. Toán tử so sánh

| Toán tử | Ý nghĩa               |
|--------|------------------------|
| ==     | Bằng (so sánh lỏng)     |
| ===    | Bằng (so sánh chặt)     |
| !=     | Không bằng              |
| >      | Lớn hơn                 |
| <      | Nhỏ hơn                 |
| >=     | Lớn hơn hoặc bằng       |
| <=     | Nhỏ hơn hoặc bằng       |

---

## 4. Toán tử logic

| Toán tử | Ý nghĩa      |
|--------|---------------|
| &&     | Và (AND)     |
| ||     | Hoặc (OR)    |
| !      | Phủ định     |

---

## 5. Toán tử 3 ngôi (ternary operator)

```javascript
let result = (condition) ? "Giá trị nếu đúng" : "Giá trị nếu sai";
```

### Ví dụ:
```javascript
let age = 20;
let message = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(message);
```

---

## 6. Cấu trúc `switch`

```javascript
switch(expression) {
    case value1:
        // Code
        break;
    case value2:
        // Code
        break;
    default:
        // Code mặc định
}
```

### Ví dụ:
```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Chủ nhật");
        break;
    case 2:
        console.log("Thứ hai");
        break;
    default:
        console.log("Không rõ");
}
```

---

## 7. Gợi ý thực hành

- Kiểm tra số chẵn/lẻ
- Tính điểm và phân loại học sinh
- Hiển thị menu với `switch`
