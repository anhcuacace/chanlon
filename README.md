# 🐷 Dashboard Trang Trại Chăn Nuôi Thông Minh 4.0

## 📋 Mô tả dự án

Dashboard hiện đại cho dự án trang trại chăn nuôi lợn thông minh tại Hưng Yên, ứng dụng công nghệ AI & IoT để tối ưu hóa vận hành và nâng cao hiệu quả sản xuất.

## ✨ Tính năng chính

### 🎯 Phiên bản 2.0 - Tính năng mới

- **📊 Dashboard thời gian thực**: Giám sát liên tục các chỉ số quan trọng
- **🌡️ Biểu đồ môi trường**: Theo dõi nhiệt độ, độ ẩm, nồng độ khí NH3
- **🔔 Hệ thống thông báo**: Cảnh báo và thông báo hệ thống
- **🌤️ Widget thời tiết**: Thông tin thời tiết Hưng Yên
- **📈 Dữ liệu thị trường**: Giá cả và xu hướng thị trường
- **🤖 Dự báo AI**: Phân tích dự đoán tăng trưởng và lợi nhuận
- **📱 Responsive Design**: Tương thích mọi thiết bị

### 🏗️ Cấu trúc dự án

```
chanlon/
├── index.html              # File HTML chính
├── css/
│   ├── styles.css          # CSS chính
│   └── widgets.css         # CSS cho các widget
├── js/
│   ├── dashboard.js        # Logic dashboard chính
│   └── features.js         # Tính năng nâng cao
├── components/
│   ├── dashboard.html      # Component dashboard
│   └── tabs.html          # Component tabs
├── images/                 # Thư mục hình ảnh
└── README.md              # Hướng dẫn sử dụng
```

## 🚀 Cách sử dụng

### 1. Chạy trực tiếp
```bash
# Mở file index.html trong trình duyệt
open index.html
```

### 2. Sử dụng local server (khuyến nghị)
```bash
# Python 3
python -m http.server 8000

# Node.js (nếu có http-server)
npx http-server

# PHP
php -S localhost:8000
```

Sau đó truy cập: `http://localhost:8000`

## 📱 Tính năng chi tiết

### Dashboard Chính
- **Chỉ số tổng quan**: Tổng đàn, trọng lượng trung bình, FCR, thức ăn hàng ngày
- **Giám sát chuồng nuôi**: Chọn từng chuồng để xem chi tiết
- **Biểu đồ thời gian thực**: Cập nhật liên tục dữ liệu môi trường

### Hệ thống Tab
1. **Tổng Quan & Cơ Hội**: Phân tích địa điểm đầu tư Hưng Yên
2. **Quy Trình Vận Hành**: Mô hình an toàn sinh học và kinh tế tuần hoàn
3. **Nền Tảng Công Nghệ**: Kiến trúc 4 lớp IoT & AI
4. **Lộ Trình & Đầu Tư**: Kế hoạch triển khai và phân tích tài chính
5. **Rủi Ro & Bền Vững**: Quản trị rủi ro và đảm bảo thành công

### Widget Nâng Cao
- **Thông báo hệ thống**: Góc phải trên, hiển thị các thông báo quan trọng
- **Cảnh báo khẩn cấp**: Góc trái trên, hiển thị các cảnh báo cần xử lý
- **Thời tiết Hưng Yên**: Góc phải dưới, thông tin thời tiết địa phương
- **Thị trường thịt lợn**: Góc trái dưới, dữ liệu giá cả và xu hướng
- **Dự báo AI**: Trung tâm màn hình, phân tích dự đoán tương lai

## 🎨 Thiết kế

### Màu sắc chủ đạo
- **Xanh lá**: `#16a34a` - Màu chủ đạo, thể hiện nông nghiệp xanh
- **Xanh dương**: `#3b82f6` - Màu phụ, thể hiện công nghệ
- **Cam**: `#f97316` - Màu nhấn, cảnh báo và chú ý

### Typography
- **Font chính**: Be Vietnam Pro - Font tiếng Việt hiện đại
- **Responsive**: Tự động điều chỉnh theo kích thước màn hình

## 🔧 Tùy chỉnh

### Thêm dữ liệu mới
1. Cập nhật `js/dashboard.js` để thêm biểu đồ mới
2. Thêm CSS tương ứng trong `css/styles.css`
3. Cập nhật component HTML nếu cần

### Thay đổi giao diện
1. Chỉnh sửa biến CSS trong `css/styles.css` (phần `:root`)
2. Thay đổi layout trong các file component
3. Cập nhật responsive design nếu cần

## 📊 Dữ liệu mẫu

Dự án sử dụng dữ liệu mô phỏng để minh họa:
- **Số lượng lợn**: 4,985 con
- **Trọng lượng trung bình**: 85.6 kg
- **FCR**: 2.41
- **Thức ăn hàng ngày**: 11.2 tấn

## 🌟 Tính năng nổi bật

### Real-time Updates
- Dữ liệu cập nhật mỗi 3 giây
- Biểu đồ thay đổi theo thời gian thực
- Thông báo tự động xuất hiện và biến mất

### Interactive Elements
- Chọn chuồng nuôi để xem chi tiết
- Tab navigation mượt mà
- Hover effects và animations

### Mobile Responsive
- Tương thích hoàn toàn với mobile
- Widget tự động điều chỉnh vị trí
- Touch-friendly interface

## 🔮 Roadmap tương lai

### Phiên bản 3.0 (Dự kiến)
- [ ] Kết nối API thời tiết thực
- [ ] Tích hợp dữ liệu thị trường thực
- [ ] Hệ thống đăng nhập và phân quyền
- [ ] Export báo cáo PDF/Excel
- [ ] Push notifications
- [ ] Dark mode toggle

### Phiên bản 4.0 (Dự kiến)
- [ ] Machine Learning predictions
- [ ] Voice commands
- [ ] AR/VR visualization
- [ ] Blockchain integration
- [ ] IoT device management

## 👨‍💻 Tác giả

**Tún Anh** - Nhà phát triển chính
- Email: [email]
- GitHub: [github-username]

## 📄 Giấy phép

Dự án này được phát triển cho mục đích giáo dục và thương mại.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:
1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên hệ

Nếu có câu hỏi hoặc đề xuất, vui lòng liên hệ:
- **Email**: [email]
- **Website**: [website]
- **LinkedIn**: [linkedin]

---

**Lưu ý**: Đây là phiên bản demo với dữ liệu mô phỏng. Để sử dụng trong thực tế, cần tích hợp với hệ thống IoT và cơ sở dữ liệu thực.
