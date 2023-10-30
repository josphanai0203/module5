import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div>
        <p>
          Khai báo hàm handler cập nhật lại giá trị isExpand, mỗi lần handle
          được gọi, sử dụng setState() để cập nhật lại giá trị của isExpand bằng
          true hoặc false Gọi hàm render để thể hiện các element bao gồm Title
          “Conditional Rendering” Kiểm tra điều kiện để render giao diện
          (conditional rendering) Nếu isExpand là false, hiển thị button “Xem
          giới thiệu” Nếu isExpand là true, hiển thị button “Đóng giới thiệu” và
          Nội dung giới thiệu Xử lí sự kiện với hàm handler: sử dụng onClick của
          button để gọi tới hàm handler đã tạo bên trên Trả class App về làm giá
          trị mặc định của component
        </p>
      </div>
    );
  }
}

export default Intro;
