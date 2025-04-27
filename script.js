const itemTemplateData = [
  { id: 0, name: 'Áo vải ba lỗ' },
  { id: 1, name: 'Áo sợi len' },
  { id: 2, name: 'Áo vải thô' },
  { id: 3, name: 'Áo vải dày' },
  { id: 4, name: 'Áo len Pico' },
  { id: 5, name: 'Áo giáp sắt' },
  { id: 6, name: 'Quần vải đen' },
  { id: 7, name: 'Quần sợi len' },
  { id: 8, name: 'Quần vải thô' },
  { id: 9, name: 'Quần vải dày' },
  { id: 10, name: 'Quần vải thô Pico' },
  { id: 11, name: 'Quần giáp sắt' },
  { id: 12, name: 'Rada cấp 1' },
  { id: 13, name: 'Đậu thần cấp 1' },
  { id: 14, name: 'Ngọc Rồng 1 sao' },
  { id: 15, name: 'Ngọc Rồng 2 sao' },
  { id: 16, name: 'Ngọc Rồng 3 sao' },
  { id: 17, name: 'Ngọc Rồng 4 sao' },
  { id: 18, name: 'Ngọc Rồng 5 sao' },
  { id: 19, name: 'Ngọc Rồng 6 sao' },
  { id: 20, name: 'Ngọc Rồng 7 sao' },
  { id: 21, name: 'Găng vải đen' },
  { id: 22, name: 'Găng sợi len' },
  { id: 23, name: 'Găng vải thô' },
  { id: 24, name: 'Găng thun đen' },
  { id: 25, name: 'Găng len Pico' },
  { id: 26, name: 'Găng sắt' },
  { id: 27, name: 'Giầy nhựa' },
  { id: 28, name: 'Giầy sợi len' },
  { id: 29, name: 'Giầy vải thô' },
  { id: 30, name: 'Giầy cao su' },
  { id: 31, name: 'Giầy nhựa Pico' },
  { id: 32, name: 'Giầy sắt' },
  { id: 33, name: 'Áo thun 3 lỗ' },
  { id: 34, name: 'Áo thun dày' },
  { id: 35, name: 'Quần thun đen' },
  { id: 36, name: 'Quần thun dày' },
  { id: 37, name: 'Găng vải dày' },
  { id: 38, name: 'Găng thun dày' },
  { id: 39, name: 'Giày nhựa đế dày' },
  { id: 40, name: 'Giày cao su đế dày' },
  { id: 41, name: 'Áo sợi gai' },
  { id: 42, name: 'Áo thun Pico' },
  { id: 43, name: 'Quần sợi gai' },
  { id: 44, name: 'Quần thun Pico' },
  { id: 45, name: 'Găng thun Pico' },
  { id: 46, name: 'Găng sợi gai' },
  { id: 47, name: 'Giầy sợi gai' },
  { id: 48, name: 'Giầy cao su Pico' },
  { id: 49, name: 'Áo thun thô' },
  { id: 50, name: 'Áo giáp đồng' },
  { id: 51, name: 'Quần thun thô' },
  { id: 52, name: 'Quần giáp đồng' },
  { id: 53, name: 'Găng thun thô' },
  { id: 54, name: 'Găng đồng' },
  { id: 55, name: 'Giầy cao su thô' },
  { id: 56, name: 'Giầy đồng' },
  { id: 57, name: 'Rada cấp 2' },
  { id: 58, name: 'Rada cấp 3' },
  { id: 59, name: 'Rada cấp 4' },
  { id: 60, name: 'Đậu thần cấp 2' },
  { id: 61, name: 'Đậu thần cấp 3' },
  { id: 62, name: 'Đậu thần cấp 4' },
  { id: 63, name: 'Đậu thần cấp 5' },
  { id: 64, name: 'Đậu thần cấp 6' },
  { id: 65, name: 'Đậu thần cấp 7' },
  { id: 66, name: 'Sách đấm Dragon lv1' },
  { id: 67, name: 'Sách đấm Dragon lv2' },
  { id: 68, name: 'Sách đấm Dragon lv3' },
  { id: 69, name: 'Sách đấm Dragon lv4' },
  { id: 70, name: 'Sách đấm Dragon lv5' },
  { id: 71, name: 'Sách đấm Dragon lv6' },
  { id: 72, name: 'Sách đấm Dragon lv7' },
  { id: 73, name: 'Đùi gà' },
  { id: 74, name: 'Đùi gà nướng' },
  { id: 75, name: 'Đùi heo Xayda' },
  { id: 76, name: 'Vàng' },
  { id: 77, name: 'Ngọc' },
  { id: 78, name: 'Đứa bé' },
  { id: 79, name: 'Sách đấm Demon lv1' },
  { id: 80, name: 'Sách đấm Demon lv2' },
  { id: 81, name: 'Sách đấm Demon lv3' },
  { id: 82, name: 'Sách đấm Demon lv4' },
  { id: 83, name: 'Sách đấm Demon lv5' },
  { id: 84, name: 'Sách đấm Demon lv6' },
  { id: 85, name: 'Truyện tranh' },
  { id: 86, name: 'Sách đấm Demon lv7' },
  { id: 87, name: 'Sách đấm Galick lv1' },
  { id: 88, name: 'Sách đấm Galick lv2' },
  { id: 89, name: 'Sách đấm Galick lv3' },
  { id: 90, name: 'Sách đấm Galick lv4' },
  { id: 91, name: 'Sách đấm Galick lv5' },
  { id: 92, name: 'Sách đấm Galick lv6' },
  { id: 93, name: 'Sách đấm Galick lv7' },
  { id: 94, name: 'Sách Kamejoko lv1' },
  { id: 95, name: 'Sách Kamejoko lv2' },
  { id: 96, name: 'Sách Kamejoko lv3' },
  { id: 97, name: 'Sách Kamejoko lv4' },
  { id: 98, name: 'Sách Kamejoko lv5' },
  { id: 99, name: 'Sách Kamejoko lv6' },
  { id: 100, name: 'Sách Kamejoko lv7' },
  { id: 101, name: 'Sách Masenko lv1' },
  { id: 102, name: 'Sách Masenko lv2' },
  { id: 103, name: 'Sách Masenko lv3' },
  { id: 104, name: 'Sách Masenko lv4' },
  { id: 105, name: 'Sách Masenko lv5' },
  { id: 106, name: 'Sách Masenko lv6' },
  { id: 107, name: 'Sách Masenko lv7' },
  { id: 108, name: 'Sách Antomic lv1' },
  { id: 109, name: 'Sách Antomic lv2' },
  { id: 110, name: 'Sách Antomic lv3' },
  { id: 111, name: 'Sách Antomic lv4' },
  { id: 112, name: 'Sách Antomic lv5' },
  { id: 113, name: 'Sách Antomic lv6' },
  { id: 114, name: 'Sách Antomic lv7' },
  { id: 115, name: 'Thái Dương Hạ San lv1' },
  { id: 116, name: 'Thái Dương Hạ San lv2' },
  { id: 117, name: 'Thái Dương Hạ San lv3' },
  { id: 118, name: 'Thái Dương Hạ San lv4' },
  { id: 119, name: 'Thái Dương Hạ San lv5' },
  { id: 120, name: 'Thái Dương Hạ San lv6' },
  { id: 121, name: 'Thái Dương Hạ San lv7' },
  { id: 122, name: 'Sách học Trị thương lv1' },
  { id: 123, name: 'Sách học Trị thương lv2' },
  { id: 124, name: 'Sách học Trị thương lv3' },
  { id: 125, name: 'Sách học Trị thương lv4' },
  { id: 126, name: 'Sách học Trị thương lv5' },
  { id: 127, name: 'Sách học Trị thương lv6' },
  { id: 128, name: 'Sách học Trị thương lv7' },
  { id: 129, name: 'Tái tạo năng lượng lv1' },
  { id: 130, name: 'Tái tạo năng lượng lv2' },
  { id: 131, name: 'Tái tạo năng lượng lv3' },
  { id: 132, name: 'Tái tạo năng lượng lv4' },
  { id: 133, name: 'Tái tạo năng lượng lv5' },
  { id: 134, name: 'Tái tạo năng lượng lv6' },
  { id: 135, name: 'Tái tạo năng lượng lv7' },
  { id: 136, name: 'Áo vải Kame' },
  { id: 137, name: 'Áo thun Kame' },
  { id: 138, name: 'Áo võ Kame' },
  { id: 139, name: 'Áo võ Goku' },
  { id: 140, name: 'Quần vải Kame' },
  { id: 141, name: 'Quần thun Kame' },
  { id: 142, name: 'Quần võ Kame' },
  { id: 143, name: 'Quần võ goku' },
  { id: 144, name: 'Găng vải Kame' },
  { id: 145, name: 'Găng thun Kame' },
  { id: 146, name: 'Găng võ Kame' },
  { id: 147, name: 'Găng võ goku' },
  { id: 148, name: 'Giày nhựa Kame' },
  { id: 149, name: 'Giày cao su Kame' },
  { id: 150, name: 'Giày võ kame' },
  { id: 151, name: 'Giày võ goku' },
  { id: 152, name: 'Áo choàng len' },
  { id: 153, name: 'Áo choàng thun' },
  { id: 154, name: 'Áo vải Pico' },
  { id: 155, name: 'Áo da Pico' },
  { id: 156, name: 'Quần len cứng' },
  { id: 157, name: 'Quần thun cứng' },
  { id: 158, name: 'Quần vải cứng Pico' },
  { id: 159, name: 'Quần vải mềm Pico' },
  { id: 160, name: 'Găng len cứng' },
  { id: 161, name: 'Găng thun cứng' },
  { id: 162, name: 'Găng vải Pico' },
  { id: 163, name: 'Găng da Pico' },
  { id: 164, name: 'Giày nhựa cứng' },
  { id: 165, name: 'Giày cao su cứng' },
  { id: 166, name: 'Giày da Pico' },
  { id: 167, name: 'Giày sắt Pico' },
  { id: 168, name: 'Áo giáp bạc' },
  { id: 169, name: 'Áo giáp vàng' },
  { id: 170, name: 'Áo lông Xayda' },
  { id: 171, name: 'Áo khoác Xayda' },
  { id: 172, name: 'Quần giáp bạc' },
  { id: 173, name: 'Quần giáp vàng' },
  { id: 174, name: 'Quần lông Xayda' },
  { id: 175, name: 'Quần da Xayda' },
  { id: 176, name: 'Găng bạc' },
  { id: 177, name: 'Găng vàng' },
  { id: 178, name: 'Găng lông Xayda' },
  { id: 179, name: 'Găng da Xayda' },
  { id: 180, name: 'Giày bạc' },
  { id: 181, name: 'Giày vàng' },
  { id: 182, name: 'Giày lông Xayda' },
  { id: 183, name: 'Giày da Xayda' },
  { id: 184, name: 'Rada cấp 5' },
  { id: 185, name: 'Rada cấp 6' },
  { id: 186, name: 'Rada cấp 7' },
  { id: 187, name: 'Rada cấp 8' },
  { id: 188, name: 'Vàng' },
  { id: 189, name: 'Vàng' },
  { id: 190, name: 'Vàng' },
  { id: 191, name: 'Cà chua' },
  { id: 192, name: 'Cà rốt' },
  { id: 193, name: 'Gói 10 viên Capsule' },
  { id: 194, name: 'Capsule Víp' },
  { id: 195, name: 'Siêu thánh thủy' },
  { id: 196, name: 'Avatar' },
  { id: 197, name: 'Avatar' },
  { id: 198, name: 'Avatar' },
  { id: 199, name: 'Avatar' },
  { id: 200, name: 'Avatar' },
  { id: 201, name: 'Avatar' },
  { id: 202, name: 'Avatar' },
  { id: 203, name: 'Avatar' },
  { id: 204, name: 'Avatar' },
  { id: 205, name: 'Avatar' },
  { id: 206, name: 'Avatar' },
  { id: 207, name: 'Avatar' },
  { id: 208, name: 'Avatar' },
  { id: 209, name: 'Avatar' },
  { id: 210, name: 'Avatar' },
  { id: 211, name: 'Nho tím' },
  { id: 212, name: 'Nho xanh' },
  { id: 213, name: 'Bùa Trí Tuệ' },
  { id: 214, name: 'Bùa Mạnh Mẽ' },
  { id: 215, name: 'Bùa Da Trâu' },
  { id: 216, name: 'Bùa Oai Hùng' },
  { id: 217, name: 'Bùa Bất Tử' },
  { id: 218, name: 'Bùa Dẻo Dai' },
  { id: 219, name: 'Bùa Thu Hút' },
  { id: 220, name: 'Đá Lục Bảo' },
  { id: 221, name: 'Đá Saphia' },
  { id: 222, name: 'Đá Ruby' },
  { id: 223, name: 'Đá Titan' },
  { id: 224, name: 'Đá thạch anh tím' },
  { id: 225, name: 'Mảnh đá vụn' },
  { id: 226, name: 'Bình nước phép' },
  { id: 227, name: 'Avatar VIP' },
  { id: 228, name: 'Avatar VIP' },
  { id: 229, name: 'Avatar VIP' },
  { id: 230, name: 'Áo bạc Goku' },
  { id: 231, name: 'Áo vàng Goku' },
  { id: 232, name: 'Áo da Calic' },
  { id: 233, name: 'Áo jean Calic' },
  { id: 234, name: 'Áo sắt Tron' },
  { id: 235, name: 'Áo đồng Tron' },
  { id: 236, name: 'Áo bạc Zealot' },
  { id: 237, name: 'Áo vàng Zealot' },
  { id: 238, name: 'Áo lông đỏ' },
  { id: 239, name: 'Áo siêu xayda' },
  { id: 240, name: 'Áo Kaio' },
  { id: 241, name: 'Áo lưỡng long' },
  { id: 242, name: 'Quần bạc Goku' },
  { id: 243, name: 'Quần vàng Goku' },
  { id: 244, name: 'Quần da Calic' },
  { id: 245, name: 'Quần jean Calic' },
  { id: 246, name: 'Quần sắt Tron' },
  { id: 247, name: 'Quần đồng Tron' },
  { id: 248, name: 'Quần bạc Zealot' },
  { id: 249, name: 'Quần vàng Zealot' },
  { id: 250, name: 'Quần lông đỏ' },
  { id: 251, name: 'Quần siêu Xayda' },
  { id: 252, name: 'Quần Kaio' },
  { id: 253, name: 'Quần lưỡng long' },
  { id: 254, name: 'Găng bạc Goku' },
  { id: 255, name: 'Găng vàng Goku' },
  { id: 256, name: 'Găng da Calic' },
  { id: 257, name: 'Găng jean Calic' },
  { id: 258, name: 'Găng sắt Tron' },
  { id: 259, name: 'Găng đồng Tron' },
  { id: 260, name: 'Găng bạc Zealot' },
  { id: 261, name: 'Găng vàng Zealot' },
  { id: 262, name: 'Găng lông đỏ' },
  { id: 263, name: 'Găng siêu Xayda' },
  { id: 264, name: 'Găng Kaio' },
  { id: 265, name: 'Găng lưỡng long' },
  { id: 266, name: 'Giày bạc Goku' },
  { id: 267, name: 'Giày vàng Goku' },
  { id: 268, name: 'Giày da Calic' },
  { id: 269, name: 'Giày jean Calic' },
  { id: 270, name: 'Giày sắt Tron' },
  { id: 271, name: 'Giày đồng Tron' },
  { id: 272, name: 'Giày bạc Zealot' },
  { id: 273, name: 'Giày vàng Zealot' },
  { id: 274, name: 'Giày lông đỏ' },
  { id: 275, name: 'Giày siêu Xayda' },
  { id: 276, name: 'Giày Kaio' },
  { id: 277, name: 'Giày lưỡng long' },
  { id: 278, name: 'Rada cấp 9' },
  { id: 279, name: 'Rada cấp 10' },
  { id: 280, name: 'Rada cấp 11' },
  { id: 281, name: 'Rada cấp 12' },
  { id: 282, name: 'Cải trang' },
  { id: 283, name: 'Cải trang' },
  { id: 284, name: 'Cải trang' },
  { id: 285, name: 'Cải trang' },
  { id: 286, name: 'Cải trang' },
  { id: 287, name: 'Cải trang' },
  { id: 288, name: 'Cải trang' },
  { id: 289, name: 'Cải trang' },
  { id: 290, name: 'Cải trang' },
  { id: 291, name: 'Cải trang' },
  { id: 292, name: 'Cải trang' },
  { id: 293, name: 'Gói 30 đậu thần cấp 1' },
  { id: 294, name: 'Gói 30 đậu thần cấp 2' },
  { id: 295, name: 'Gói 30 đậu thần cấp 3' },
  { id: 296, name: 'Gói 30 đậu thần cấp 4' },
  { id: 297, name: 'Gói 30 đậu thần cấp 5' },
  { id: 298, name: 'Gói 30 đậu thần cấp 6' },
  { id: 299, name: 'Gói 30 đậu thần cấp 7' },
  { id: 300, name: 'Kaioken lv1' },
  { id: 301, name: 'Kaioken lv2' },
  { id: 302, name: 'Kaioken lv3' },
  { id: 303, name: 'Kaioken lv4' },
  { id: 304, name: 'Kaioken lv5' },
  { id: 305, name: 'Kaioken lv6' },
  { id: 306, name: 'Kaioken lv7' },
  { id: 307, name: 'Quả cầu Kênh Khi lv1' },
  { id: 308, name: 'Quả cầu Kênh Khi lv2' },
  { id: 309, name: 'Quả cầu Kênh Khi lv3' },
  { id: 310, name: 'Quả cầu Kênh Khi lv4' },
  { id: 311, name: 'Quả cầu Kênh Khi lv5' },
  { id: 312, name: 'Quả cầu Kênh Khi lv6' },
  { id: 313, name: 'Quả cầu Kênh Khi lv7' },
  { id: 314, name: 'Hóa khỉ khổng lồ lv1' },
  { id: 315, name: 'Hóa khỉ khổng lồ lv2' },
  { id: 316, name: 'Hóa khỉ khổng lồ lv3' },
  { id: 317, name: 'Hóa khỉ khổng lồ lv4' },
  { id: 318, name: 'Hóa khỉ khổng lồ lv5' },
  { id: 319, name: 'Hóa khỉ khổng lồ lv6' },
  { id: 320, name: 'Hóa khỉ khổng lồ lv7' },
  { id: 321, name: 'Bom hi sinh lv1' },
  { id: 322, name: 'Bom hi sinh lv2' },
  { id: 323, name: 'Bom hi sinh lv3' },
  { id: 324, name: 'Bom hi sinh lv4' },
  { id: 325, name: 'Bom hi sinh lv5' },
  { id: 326, name: 'Bom hi sinh lv6' },
  { id: 327, name: 'Bom hi sinh lv7' },
  { id: 328, name: 'Makankosappo lv1' },
  { id: 329, name: 'Makankosappo lv2' },
  { id: 330, name: 'Makankosappo lv3' },
  { id: 331, name: 'Makankosappo lv4' },
  { id: 332, name: 'Makankosappo lv5' },
  { id: 333, name: 'Makankosappo lv6' },
  { id: 334, name: 'Makankosappo lv7' },
  { id: 335, name: 'Đẻ trứng lv1' },
  { id: 336, name: 'Đẻ trứng lv2' },
  { id: 337, name: 'Đẻ trứng lv3' },
  { id: 338, name: 'Đẻ trứng lv4' },
  { id: 339, name: 'Đẻ trứng lv5' },
  { id: 340, name: 'Đẻ trứng lv6' },
  { id: 341, name: 'Đẻ trứng lv7' },
  { id: 342, name: 'Vệ tinh trí lực' },
  { id: 343, name: 'Vệ tinh trí tuệ' },
  { id: 344, name: 'Vệ tinh phòng thủ' },
  { id: 345, name: 'Vệ tinh sinh lực' },
  { id: 346, name: 'Cân đẩu vân' },
  { id: 347, name: 'Phi Long' },
  { id: 348, name: 'Ván bay' },
  { id: 349, name: 'Cân đẩu vân VIP' },
  { id: 350, name: 'Phi Long VIP' },
  { id: 351, name: 'Ván bay VIP' },
  { id: 352, name: 'Đậu thần cấp 8' },
  { id: 353, name: 'Ngọc Rồng Namek 1 Sao' },
  { id: 354, name: 'Ngọc Rồng Namek 2 Sao' },
  { id: 355, name: 'Ngọc Rồng Namek 3 Sao' },
  { id: 356, name: 'Ngọc Rồng Namek 4 Sao' },
  { id: 357, name: 'Ngọc Rồng Namek 5 Sao' },
  { id: 358, name: 'Ngọc Rồng Namek 6 Sao' },
  { id: 359, name: 'Ngọc Rồng Namek 7 Sao' },
  { id: 360, name: 'Ngọc Rồng Namek' },
  { id: 361, name: 'Gói 10 Rađa dò ngọc' },
  { id: 362, name: 'Hóa thạch Ngọc Rồng' },
  { id: 363, name: 'Tháo cờ' },
  { id: 364, name: 'Cờ xanh' },
  { id: 365, name: 'Cờ đỏ' },
  { id: 366, name: 'Cờ tím' },
  { id: 367, name: 'Cờ vàng' },
  { id: 368, name: 'Cờ lục' },
  { id: 369, name: 'Cờ hồng' },
  { id: 370, name: 'Cờ cam' },
  { id: 371, name: 'Cờ đen' },
  { id: 372, name: 'Ngọc rồng 1 sao đen' },
  { id: 373, name: 'Ngọc rồng 2 sao đen' },
  { id: 374, name: 'Ngọc rồng 3 sao đen' },
  { id: 375, name: 'Ngọc rồng 4 sao đen' },
  { id: 376, name: 'Ngọc rồng 5 sao đen' },
  { id: 377, name: 'Ngọc rồng 6 sao đen' },
  { id: 378, name: 'Ngọc rồng 7 sao đen' },
  { id: 379, name: 'Máy dò Capsule kì bí' },
  { id: 380, name: 'Viên Capsule kì bí' },
  { id: 381, name: 'Cuồng nộ' },
  { id: 382, name: 'Bổ huyết' },
  { id: 383, name: 'Bổ khí' },
  { id: 384, name: 'Giáp Xên bọ hung' },
  { id: 385, name: 'Ẩn danh' },
  { id: 386, name: 'Nón Noel Xám' },
  { id: 387, name: 'Nón Noel Đỏ' },
  { id: 388, name: 'Nón Noel Xanh' },
  { id: 389, name: 'Nón Noel Xám' },
  { id: 390, name: 'Nón Noel Đỏ' },
  { id: 391, name: 'Nón Noel Xanh' },
  { id: 392, name: 'Nón Noel Xám' },
  { id: 393, name: 'Nón Noel Đỏ' },
  { id: 394, name: 'Nón Noel Xanh' },
  { id: 395, name: 'Nhân vật bí ẩn' },
  { id: 396, name: 'Thú cưỡi cực VIP' },
  { id: 397, name: 'Hộp quà tết' },
  { id: 398, name: 'Hộp quà tết' },
  { id: 399, name: 'Thiệp chúc tết' },
  { id: 400, name: 'Đặt tên đệ tử' },
  { id: 401, name: 'Đổi đệ tử' },
  { id: 402, name: 'Nâng cấp kỹ năng 1 đệ tử' },
  { id: 403, name: 'Nâng cấp kỹ năng 2 đệ tử' },
  { id: 404, name: 'Nâng cấp kỹ năng 3 đệ tử' },
  { id: 405, name: 'Cải trang' },
  { id: 406, name: 'Cải trang' },
  { id: 407, name: 'Cải trang' },
  { id: 408, name: 'Cải trang' },
  { id: 409, name: 'Cải trang' },
  { id: 410, name: 'Cải trang' },
  { id: 411, name: 'Cải trang' },
  { id: 412, name: 'Avatar' },
  { id: 413, name: 'Avatar' },
  { id: 414, name: 'Avatar' },
  { id: 415, name: 'Avatar' },
  { id: 416, name: 'Avatar' },
  { id: 417, name: 'Avatar' },
  { id: 418, name: 'Avatar' },
  { id: 419, name: 'Avatar' },
  { id: 420, name: 'Avatar' },
  { id: 421, name: 'Cải trang' },
  { id: 422, name: 'Cải trang' },
  { id: 423, name: 'Cải trang' },
  { id: 424, name: 'Cải trang' },
  { id: 425, name: 'Cải trang' },
  { id: 426, name: 'Cải trang' },
  { id: 427, name: 'Cải trang' },
  { id: 428, name: 'Cải trang' },
  { id: 429, name: 'Cải trang' },
  { id: 430, name: 'Cải trang' },
  { id: 431, name: 'Cải trang' },
  { id: 432, name: 'Cải trang' },
  { id: 433, name: 'Cải trang' },
  { id: 434, name: 'Khiên năng lượng lv1' },
  { id: 435, name: 'Khiên năng lượng lv2' },
  { id: 436, name: 'Khiên năng lượng lv3' },
  { id: 437, name: 'Khiên năng lượng lv4' },
  { id: 438, name: 'Khiên năng lượng lv5' },
  { id: 439, name: 'Khiên năng lượng lv6' },
  { id: 440, name: 'Khiên năng lượng lv7' },
  { id: 441, name: 'Sao pha lê' },
  { id: 442, name: 'Sao pha lê' },
  { id: 443, name: 'Sao pha lê' },
  { id: 444, name: 'Sao pha lê' },
  { id: 445, name: 'Sao pha lê' },
  { id: 446, name: 'Sao pha lê' },
  { id: 447, name: 'Sao pha lê' },
  { id: 448, name: 'Cải trang' },
  { id: 449, name: 'Cải trang' },
  { id: 450, name: 'Cải trang' },
  { id: 451, name: 'Cải trang' },
  { id: 452, name: 'Cải trang' },
  { id: 453, name: 'Chiến thuyền Tennis' },
  { id: 454, name: 'Bông tai Porata' },
  { id: 455, name: 'Cải trang' },
  { id: 456, name: 'Bình nước' },
  { id: 457, name: 'Thỏi vàng' },
  { id: 458, name: 'Cải trang' },
  { id: 459, name: 'Phiếu giảm giá' },
  { id: 460, name: 'Cục xương' },
  { id: 461, name: 'Cải trang' },
  { id: 462, name: 'Củ cà rốt' },
  { id: 463, name: 'Cải trang Thỏ đại ca' },
  { id: 464, name: 'Cải trang' },
  { id: 465, name: 'Bánh Trung Thu 1 trứng' },
  { id: 466, name: 'Bánh Trung Thu 2 trứng' },
  { id: 467, name: 'Lồng đèn Ông Sao' },
  { id: 468, name: 'Lồng đèn Cá chép' },
  { id: 469, name: 'Lồng đèn Kéo Quân' },
  { id: 470, name: 'Lồng đèn Ông trăng' },
  { id: 471, name: 'Lồng đèn Hội An' },
  { id: 472, name: 'Bánh Trung Thu Đặc Biệt' },
  { id: 473, name: 'Hộp bánh Trung Thu' },
  { id: 474, name: 'Sách Biến Sôcôla lv1' },
  { id: 475, name: 'Sách Biến Sôcôla lv2' },
  { id: 476, name: 'Sách Biến Sôcôla lv3' },
  { id: 477, name: 'Sách Biến Sôcôla lv4' },
  { id: 478, name: 'Sách Biến Sôcôla lv5' },
  { id: 479, name: 'Sách Biến Sôcôla lv6' },
  { id: 480, name: 'Sách Biến Sôcôla lv7' },
  { id: 481, name: 'Sách Liên hoàn lv1' },
  { id: 482, name: 'Sách Liên hoàn lv2' },
  { id: 483, name: 'Sách Liên hoàn lv3' },
  { id: 484, name: 'Sách Liên hoàn lv4' },
  { id: 485, name: 'Sách Liên hoàn lv5' },
  { id: 486, name: 'Sách Liên hoàn lv6' },
  { id: 487, name: 'Sách Liên hoàn lv7' },
  { id: 488, name: 'Sách Dịch Chuyển lv1' },
  { id: 489, name: 'Sách Dịch Chuyển lv2' },
  { id: 490, name: 'Sách Dịch Chuyển lv3' },
  { id: 491, name: 'Sách Dịch Chuyển lv4' },
  { id: 492, name: 'Sách Dịch Chuyển lv5' },
  { id: 493, name: 'Sách Dịch Chuyển lv6' },
  { id: 494, name: 'Sách Dịch Chuyển lv7' },
  { id: 495, name: 'Sách Thôi Miên lv1' },
  { id: 496, name: 'Sách Thôi Miên lv2' },
  { id: 497, name: 'Sách Thôi Miên lv3' },
  { id: 498, name: 'Sách Thôi Miên lv4' },
  { id: 499, name: 'Sách Thôi Miên lv5' },
  { id: 500, name: 'Sách Thôi Miên lv6' },
  { id: 501, name: 'Sách Thôi Miên lv7' },
  { id: 502, name: 'Sách Trói lv1' },
  { id: 503, name: 'Sách Trói lv2' },
  { id: 504, name: 'Sách Trói lv3' },
  { id: 505, name: 'Sách Trói lv4' },
  { id: 506, name: 'Sách Trói lv5' },
  { id: 507, name: 'Sách Trói lv6' },
  { id: 508, name: 'Sách Trói lv7' },
  { id: 509, name: 'Sách Huýt Sáo lv1' },
  { id: 510, name: 'Sách Huýt Sáo lv2' },
  { id: 511, name: 'Sách Huýt Sáo lv3' },
  { id: 512, name: 'Sách Huýt Sáo lv4' },
  { id: 513, name: 'Sách Huýt Sáo lv5' },
  { id: 514, name: 'Sách Huýt Sáo lv6' },
  { id: 515, name: 'Sách Huýt Sáo lv7' },
  { id: 516, name: 'Sôcôla' },
  { id: 517, name: 'Mở rộng hành trang' },
  { id: 518, name: 'Mở rộng rương đồ' },
  { id: 519, name: 'Cờ Kaiô' },
  { id: 520, name: 'Cờ Mabư' },
  { id: 521, name: 'Tự động luyện tập' },
  { id: 522, name: 'Bùa Đệ Tử' },
  { id: 523, name: 'Đậu thần cấp 9' },
  { id: 524, name: 'Cải trang' },
  { id: 525, name: 'Cải trang' },
  { id: 526, name: 'Cải trang' },
  { id: 527, name: 'Cải trang' },
  { id: 528, name: 'Cải trang' },
  { id: 529, name: 'Giáp tập luyện cấp 1' },
  { id: 530, name: 'Giáp tập luyện cấp 2' },
  { id: 531, name: 'Giáp tập luyện cấp 3' },
  { id: 532, name: 'Quỷ Chim' },
  { id: 533, name: 'Kẹo giáng sinh' },
  { id: 534, name: 'Giáp tập luyện cấp 1' },
  { id: 535, name: 'Giáp tập luyện cấp 2' },
  { id: 536, name: 'Giáp tập luyện cấp 3' },
  { id: 537, name: 'Chữ giải' },
  { id: 538, name: 'Chữ khai' },
  { id: 539, name: 'Chữ phong' },
  { id: 540, name: 'Chữ ấn' },
  { id: 541, name: 'Quả Hồng Đào' },
  { id: 542, name: 'Quả Hồng Đào Chín' },
  { id: 543, name: 'Vòng Kim Cô' },
  { id: 544, name: 'Cải trang' },
  { id: 545, name: 'Cải trang' },
  { id: 546, name: 'Cải trang' },
  { id: 547, name: 'Cải trang' },
  { id: 548, name: 'Cải trang' },
  { id: 549, name: 'Cải trang' },
  { id: 550, name: 'Cải trang' },
  { id: 551, name: 'Cải trang' },
  { id: 552, name: 'Cải trang' },
  { id: 553, name: 'Pháo bông' },
  { id: 554, name: 'Siêu Pháo bông x100' },
  { id: 555, name: 'Áo Thần Linh' },
  { id: 556, name: 'Quần Thần Linh' },
  { id: 557, name: 'Áo Thần Namếc' },
  { id: 558, name: 'Quần Thần namếc' },
  { id: 559, name: 'Áo Thần Xayda' },
  { id: 560, name: 'Quần Thần Xayda' },
  { id: 561, name: 'Nhẫn Thần Linh' },
  { id: 562, name: 'Găng Thần Linh' },
  { id: 563, name: 'Giầy Thần Linh' },
  { id: 564, name: 'Găng Thần Namếc' },
  { id: 565, name: 'Giầy Thần Namếc' },
  { id: 566, name: 'Găng Thần Xayda' },
  { id: 567, name: 'Giầy Thần Xayda' },
  { id: 568, name: 'Quả Trứng' },
  { id: 569, name: 'Dưa Hấu' },
  { id: 570, name: 'Rương Gỗ' },
  { id: 571, name: 'Rương Bạc' },
  { id: 572, name: 'Rương Vàng' },
  { id: 573, name: 'Capsule Bạc' },
  { id: 574, name: 'Capsule Vàng' },
  { id: 575, name: 'Cải trang' },
  { id: 576, name: 'Cải trang' },
  { id: 577, name: 'Cải trang' },
  { id: 578, name: 'Cải trang' },
  { id: 579, name: 'Đuôi khỉ' },
  { id: 580, name: 'Cải trang' },
  { id: 581, name: 'Cải trang' },
  { id: 582, name: 'Cải trang' },
  { id: 583, name: 'Cải trang Póc' },
  { id: 584, name: 'Cải trang' },
  { id: 585, name: 'Bí ngô' },
  { id: 586, name: 'Cải trang' },
  { id: 587, name: 'Cải trang' },
  { id: 588, name: 'Cải trang' },
  { id: 589, name: 'Bông hoa' },
  { id: 590, name: 'Bí kiếp' },
  { id: 591, name: 'Cải trang Siêu Thần' },
  { id: 592, name: 'Cải trang Yardrat' },
  { id: 593, name: 'Cải trang Yardrat' },
  { id: 594, name: 'Cải trang Yardrat' },
  { id: 595, name: 'Đậu thần cấp 10' },
  { id: 596, name: 'Gói 30 đậu thần cấp 8' },
  { id: 597, name: 'Gói 30 đậu thần cấp 9' },
  { id: 598, name: 'Avatar' },
  { id: 599, name: 'Avatar' },
  { id: 600, name: 'Avatar' },
  { id: 601, name: 'Cải trang Hợp Thể' },
  { id: 602, name: 'Cải trang Hợp Thể' },
  { id: 603, name: 'Cải trang Hợp Thể' },
  { id: 604, name: 'Cải trang VIP' },
  { id: 605, name: 'Cải trang VIP' },
  { id: 606, name: 'Cải trang VIP' },
  { id: 607, name: 'Cải trang Chan Xư' },
  { id: 608, name: 'Cải trang Lão Cận' },
  { id: 609, name: 'Cải trang Xayda' },
  { id: 610, name: 'Bông hoa' },
  { id: 611, name: 'Bản đồ khí gas' },
  { id: 612, name: 'Cải trang Arale' },
  { id: 613, name: 'Cải trang Gatchan' },
  { id: 614, name: 'Cải trang Obotchaman' },
  { id: 615, name: 'Cải trang' },
  { id: 616, name: 'Cải trang' },
  { id: 617, name: 'Cải trang' },
  { id: 618, name: 'Cải trang Luffy' },
  { id: 619, name: 'Cải trang Zoro' },
  { id: 620, name: 'Cải trang Sanji' },
  { id: 621, name: 'Cải trang Brook' },
  { id: 622, name: 'Cải trang Chopper' },
  { id: 623, name: 'Cải trang Nami' },
  { id: 624, name: 'Cải trang Franky' },
  { id: 625, name: 'Cải trang Usopp' },
  { id: 626, name: 'Cải trang Robin' },
  { id: 627, name: 'Capsule quà tặng' },
  { id: 628, name: 'Cải trang Hải Tặc' },
  { id: 629, name: 'Cải trang Fide vàng' },
  { id: 630, name: 'Cải trang Frost 1' },
  { id: 631, name: 'Cải trang Frost 2' },
  { id: 632, name: 'Cải trang Frost 3' },
  { id: 633, name: 'Cải trang Píc' },
  { id: 634, name: 'Cải trang King kong' },
  { id: 635, name: 'Cải trang Pi láp' },
  { id: 636, name: 'Cải trang Mai' },
  { id: 637, name: 'Cải trang Su' },
  { id: 638, name: 'Bình chứa Commeson' },
  { id: 639, name: 'Cải trang Hợp Thể' },
  { id: 640, name: 'Cải trang Hợp Thể' },
  { id: 641, name: 'Cải trang Hợp Thể' },
  { id: 642, name: 'Cải trang ma trơi' },
  { id: 643, name: 'Cải trang dơi nhí' },
  { id: 644, name: 'Cải trang bộ xương' },
  { id: 645, name: 'Cải trang bộ xương' },
  { id: 646, name: 'Cải trang bộ xương' },
  { id: 647, name: 'Cải trang Saibamen' },
  { id: 648, name: 'Hộp quà giáng sinh' },
  { id: 649, name: 'Tất,vớ giáng sinh' },
  { id: 650, name: 'Áo Hủy Diệt' },
  { id: 651, name: 'Quần Hủy Diệt' },
  { id: 652, name: 'Áo Hủy Diệt' },
  { id: 653, name: 'Quần Hủy Diệt' },
  { id: 654, name: 'Áo Hủy Diệt' },
  { id: 655, name: 'Quần Hủy Diệt' },
  { id: 656, name: 'Nhẫn Hủy Diệt' },
  { id: 657, name: 'Găng Hủy Diệt' },
  { id: 658, name: 'Giầy Hủy Diệt' },
  { id: 659, name: 'Găng Hủy Diệt' },
  { id: 660, name: 'Giầy Hủy Diệt' },
  { id: 661, name: 'Găng Hủy Diệt' },
  { id: 662, name: 'Giầy Hủy Diệt' },
  { id: 663, name: 'Bánh Pudding' },
  { id: 664, name: 'Xúc xích' },
  { id: 665, name: 'Kem dâu' },
  { id: 666, name: 'Mì ly' },
  { id: 667, name: 'Sushi' },
  { id: 668, name: 'Hộp quà Tết 2019' },
  { id: 669, name: 'Dưa Hấu' },
  { id: 670, name: 'Cà rốt' },
  { id: 671, name: 'Bùa Trí Tuệ x3' },
  { id: 672, name: 'Bùa Trí Tuệ x4' },
  { id: 673, name: 'Cái nịt' },
  { id: 674, name: 'Đá ngũ sắc' },
  { id: 675, name: 'Cải trang' },
  { id: 676, name: 'Cải trang' },
  { id: 677, name: 'Cải trang' },
  { id: 678, name: 'Cải trang' },
  { id: 679, name: 'Cải trang' },
  { id: 680, name: 'Cải trang' },
  { id: 681, name: 'Cải trang' },
  { id: 682, name: 'Avatar' },
  { id: 683, name: 'Avatar' },
  { id: 684, name: 'Avatar' },
  { id: 685, name: 'Avatar' },
  { id: 686, name: 'Avatar' },
  { id: 687, name: 'Avatar' },
  { id: 688, name: 'Avatar' },
  { id: 689, name: 'Avatar' },
  { id: 690, name: 'Avatar' },
  { id: 691, name: 'Quần đi biển' },
  { id: 692, name: 'Quần đi biển' },
  { id: 693, name: 'Quần đi biển' },
  { id: 694, name: 'Trái dừa' },
  { id: 695, name: 'Vỏ ốc' },
  { id: 696, name: 'Vỏ sò' },
  { id: 697, name: 'Con cua' },
  { id: 698, name: 'Sao biển' },
  { id: 699, name: 'HP +400K' },
  { id: 700, name: 'Sức đánh +20K' },
  { id: 701, name: 'KI +400K' },
  { id: 702, name: 'Bí ngô 1 sao' },
  { id: 703, name: 'Bí ngô 2 sao' },
  { id: 704, name: 'Bí ngô 3 sao' },
  { id: 705, name: 'Bí ngô 4 sao' },
  { id: 706, name: 'Bí ngô 5 sao' },
  { id: 707, name: 'Bí ngô 6 sao' },
  { id: 708, name: 'Bí ngô 7 sao' },
  { id: 709, name: 'Bông hoa' },
  { id: 710, name: 'Cải trang' },
  { id: 711, name: 'Cải trang' },
  { id: 712, name: 'Truy' },
  { id: 713, name: 'Bắt' },
  { id: 714, name: 'Đại' },
  { id: 715, name: 'Vương' },
  { id: 716, name: 'Urôn' },
  { id: 717, name: 'Bao Lì Xì' },
  { id: 718, name: 'Vé tặng ngọc' },
  { id: 719, name: 'Cải trang' },
  { id: 720, name: 'Mảnh cải trang' },
  { id: 721, name: 'Phiếu giảm giá VIP' },
  { id: 722, name: 'Capsule hồng' },
  { id: 723, name: 'Bông hồng' },
  { id: 724, name: 'Cải trang' },
  { id: 725, name: 'Siêu thần thủy' },
  { id: 726, name: 'Mảnh giấy có chữ MA' },
  { id: 727, name: 'Siêu thần thủy' },
  { id: 728, name: 'Siêu thần thủy' },
  { id: 729, name: 'Cải trang Hatchiyack' },
  { id: 730, name: 'Cải trang Sói Basil' },
  { id: 731, name: 'Cải trang Sói Lavender' },
  { id: 732, name: 'Cải trang Sói Bergamo' },
  { id: 733, name: 'Cân đẩu vân ngũ sắc' },
  { id: 734, name: 'Ngọc Thố' },
  { id: 735, name: 'Lồng đèn cá chép' },
  { id: 736, name: 'Hộp quà 20/11' },
  { id: 737, name: 'Capsule Trung Thu' },
  { id: 738, name: 'Karin Kid' },
  { id: 739, name: 'Cải trang Bill Bí Ngô' },
  { id: 740, name: 'Lưỡi hái Thần Chết' },
  { id: 741, name: 'Cánh dơi Dracula' },
  { id: 742, name: 'Cải trang Caufila Dơi' },
  { id: 743, name: 'Chổi bay Phù Thủy' },
  { id: 744, name: 'Cột nhà' },
  { id: 745, name: 'Bông tuyết' },
  { id: 746, name: 'Xe tuần lộc' },
  { id: 747, name: 'Cờ xanh dương' },
  { id: 748, name: 'Thịt heo' },
  { id: 749, name: 'Thúng nếp' },
  { id: 750, name: 'Thúng đậu xanh' },
  { id: 751, name: 'Lá dong' },
  { id: 752, name: 'Bánh tét' },
  { id: 753, name: 'Bánh chưng' },
  { id: 754, name: 'Nón Chuột may mắn' },
  { id: 755, name: 'Nón Chuột may mắn' },
  { id: 756, name: 'Nón Chuột may mắn' },
  { id: 757, name: 'Túi Canh Tý 2020' },
  { id: 758, name: 'Capsule Tết 2022' },
  { id: 759, name: 'Nâng cấp kỹ năng 4 đệ tử' },
  { id: 760, name: 'Cải trang VIP' },
  { id: 761, name: 'Avatar đeo khẩu trang' },
  { id: 762, name: 'Avatar đeo khẩu trang' },
  { id: 763, name: 'Avatar đeo khẩu trang' },
  { id: 764, name: 'Khẩu trang' },
  { id: 765, name: 'Cải trang Gohan Bư' },
  { id: 766, name: 'Cờ xám' },
  { id: 767, name: 'Cờ đen' },
  { id: 768, name: 'Cờ xanh lá' },
  { id: 769, name: 'Cờ xanh biển' },
  { id: 770, name: 'Cờ hồng' },
  { id: 771, name: 'Cờ cam' },
  { id: 772, name: 'Cờ vàng' },
  { id: 773, name: 'Cờ tím' },
  { id: 774, name: 'Cờ xanh dạ' },
  { id: 775, name: 'Cờ đỏ' },
  { id: 776, name: 'Khăn xanh lá' },
  { id: 777, name: 'Khăn xanh dương' },
  { id: 778, name: 'Khăn vàng' },
  { id: 779, name: 'Khăn tím' },
  { id: 780, name: 'Khăn nâu' },
  { id: 781, name: 'Khăn xám' },
  { id: 782, name: 'Khăn đỏ' },
  { id: 783, name: 'Khăn hồng' },
  { id: 784, name: 'Khăn xanh dạ' },
  { id: 785, name: 'Ba lô' },
  { id: 786, name: 'Đao' },
  { id: 787, name: 'Gậy' },
  { id: 788, name: 'Mai rùa' },
  { id: 789, name: 'Giỏ bơ' },
  { id: 790, name: 'Giỏ dưa hấu' },
  { id: 791, name: 'Giỏ củ cải trắng' },
  { id: 792, name: 'Giỏ cà rốt' },
  { id: 793, name: 'Giỏ chuối' },
  { id: 794, name: 'Gậy phép' },
  { id: 795, name: 'Ghế bay' },
  { id: 796, name: 'Hộp Capsule' },
  { id: 797, name: 'Bùa Trí Tuệ' },
  { id: 798, name: 'Bùa Mạnh Mẽ' },
  { id: 799, name: 'Bùa Da Trâu' },
  { id: 800, name: 'Lồng đèn Cô Vy' },
  { id: 801, name: 'Lồng đèn Con tàu' },
  { id: 802, name: 'Lồng đèn Con gà' },
  { id: 803, name: 'Lồng đèn Con bướm' },
  { id: 804, name: 'Lồng đèn Đôrêmon' },
  { id: 805, name: 'Nón thiên thần' },
  { id: 806, name: 'Cải trang Đôrêmon' },
  { id: 807, name: 'Ngọc đen 1 sao' },
  { id: 808, name: 'Ngọc đen 2 sao' },
  { id: 809, name: 'Ngọc đen 3 sao' },
  { id: 810, name: 'Ngọc đen 4 sao' },
  { id: 811, name: 'Ngọc đen 5 sao' },
  { id: 812, name: 'Ngọc đen 6 sao' },
  { id: 813, name: 'Ngọc đen 7 sao' },
  { id: 814, name: 'Ma trơi' },
  { id: 815, name: 'Hồn ma Goku' },
  { id: 816, name: 'Hồn ma Ca đíc' },
  { id: 817, name: 'Hồn ma Pôcôlô' },
  { id: 818, name: 'Capsule Halloween' },
  { id: 819, name: 'Cải trang Xuka' },
  { id: 820, name: 'Vé quay ngọc đen' },
  { id: 821, name: 'Vé quay ngọc vàng' },
  { id: 822, name: 'Cây thông' },
  { id: 823, name: 'Túi quà' },
  { id: 824, name: 'Cải trang Noel' },
  { id: 825, name: 'Cải trang Noel' },
  { id: 826, name: 'Cải trang Noel' },
  { id: 827, name: 'Cải trang Noel' },
  { id: 828, name: 'Mảnh Khủng long' },
  { id: 829, name: 'Mảnh Lợn lòi' },
  { id: 830, name: 'Mảnh Quỷ đất' },
  { id: 831, name: 'Mảnh Khủng long mẹ' },
  { id: 832, name: 'Mảnh Lợn lòi mẹ' },
  { id: 833, name: 'Mảnh Quỷ đất mẹ' },
  { id: 834, name: 'Mảnh Thằn lằn bay' },
  { id: 835, name: 'Mảnh Phi long' },
  { id: 836, name: 'Mảnh Quỷ bay' },
  { id: 837, name: 'Mảnh Lính độc nhãn' },
  { id: 838, name: 'Mảnh Lính độc nhãn' },
  { id: 839, name: 'Mảnh Sói xám' },
  { id: 840, name: 'Mảnh Trung úy Trắng' },
  { id: 841, name: 'Mảnh Ninja Áo Tím' },
  { id: 842, name: 'Mảnh Trung úy Xanh Lơ' },
  { id: 843, name: 'Cải trang Trâu vàng' },
  { id: 844, name: 'Cải trang Trâu đen' },
  { id: 845, name: 'Cải trang Trâu trắng' },
  { id: 846, name: 'Nón Trâu may mắn' },
  { id: 847, name: 'Nón Trâu may mắn' },
  { id: 848, name: 'Nón Trâu may mắn' },
  { id: 849, name: 'Pháo Thăng Thiên' },
  { id: 850, name: 'Cỏ tươi' },
  { id: 851, name: 'Cỏ tươi' },
  { id: 852, name: 'Cây trúc' },
  { id: 853, name: 'Cải trang Trâu Nâu' },
  { id: 854, name: 'Cải trang Trâu Nâu' },
  { id: 855, name: 'Cải trang Trâu Nâu' },
  { id: 856, name: 'Cải trang Trâu Đốm' },
  { id: 857, name: 'Cải trang Trâu Đốm' },
  { id: 858, name: 'Cải trang Trâu Đốm' },
  { id: 859, name: 'Mảnh Độc Nhãn' },
  { id: 860, name: 'Cải trang Mị Nương' },
  { id: 861, name: 'Hồng ngọc' },
  { id: 862, name: 'Cải trang Nobita' },
  { id: 863, name: 'Cải trang Xekô' },
  { id: 864, name: 'Cải trang Chaien' },
  { id: 865, name: 'Kiếm Z' },
  { id: 866, name: 'Avatar' },
  { id: 867, name: 'Avatar' },
  { id: 868, name: 'Avatar' },
  { id: 869, name: 'Capsule 1 sao' },
  { id: 870, name: 'Capsule 2 sao' },
  { id: 871, name: 'Capsule 3 sao' },
  { id: 872, name: 'Avatar Gohan 1' },
  { id: 873, name: 'Avatar Gohan 2' },
  { id: 874, name: 'Rùa con' },
  { id: 875, name: 'Cải trang Cadic' },
  { id: 876, name: 'Cải trang Gohan' },
  { id: 877, name: 'Cải trang Pocolo' },
  { id: 878, name: 'Cải trang Cooler vàng' },
  { id: 879, name: 'Cải trang Thống Chế Kilo' },
  { id: 880, name: 'Cua rang me' },
  { id: 881, name: 'Bạch tuộc nướng' },
  { id: 882, name: 'Tôm tẩm bột chiên xù' },
  { id: 883, name: 'Cải trang Black Gohan Rose' },
  { id: 884, name: 'Cải trang Hit' },
  { id: 885, name: 'Cải trang Lích Tên' },
  { id: 886, name: 'Trứng vịt muối' },
  { id: 887, name: 'Gà quay nguyên con' },
  { id: 888, name: 'Bột mì' },
  { id: 889, name: 'Đậu xanh' },
  { id: 890, name: 'Bánh trung thu Gà quay' },
  { id: 891, name: 'Bánh trung thu thập cẩm' },
  { id: 892, name: 'Thỏ xám' },
  { id: 893, name: 'Thỏ trắng' },
  { id: 894, name: 'Avatar' },
  { id: 895, name: 'Avatar' },
  { id: 896, name: 'Avatar' },
  { id: 897, name: 'Fire bird' },
  { id: 898, name: 'Cải trang Zamasu' },
  { id: 899, name: 'Kẹo một mắt' },
  { id: 900, name: 'Súp bí hắc ám' },
  { id: 901, name: 'Kẹo bàn tay' },
  { id: 902, name: 'Bánh gato nhện' },
  { id: 903, name: 'Hamburger sâu' },
  { id: 904, name: 'Cải trang Black Goku SSJ White' },
  { id: 905, name: 'Cải trang Siêu Thần Trái Đất' },
  { id: 906, name: 'Cải trang Mighty Mask' },
  { id: 907, name: 'Cải trang Siêu thần Namếc' },
  { id: 908, name: 'Ma phong ba' },
  { id: 909, name: 'Thần chết cute' },
  { id: 910, name: 'Bí ngô nhí nhảnh' },
  { id: 911, name: 'Cải trang Siêu Thần Xayda' },
  { id: 912, name: 'Cải trang Gohan áo xanh' },
  { id: 913, name: 'Cải trang Póc áo đỏ' },
  { id: 914, name: 'Cải trang Búp bê Arale' },
  { id: 915, name: 'Capsule Squid Game' },
  { id: 916, name: 'Lính bảo vệ tam giác' },
  { id: 917, name: 'Lính bảo vệ vuông' },
  { id: 918, name: 'Lính bảo vệ tròn' },
  { id: 919, name: 'Búp bê' },
  { id: 920, name: 'Gậy như ý' },
  { id: 921, name: 'Bông tai Porata cấp 2' },
  { id: 922, name: 'Cải trang Goku Noel' },
  { id: 923, name: 'Cải trang Pico Noel' },
  { id: 924, name: 'Cải trang Radic Noel' },
  { id: 925, name: 'Ngọc Rồng Băng 1 Sao' },
  { id: 926, name: 'Ngọc Rồng Băng 2 Sao' },
  { id: 927, name: 'Ngọc Rồng Băng 3 Sao' },
  { id: 928, name: 'Ngọc Rồng Băng 4 Sao' },
  { id: 929, name: 'Ngọc Rồng Băng 5 Sao' },
  { id: 930, name: 'Ngọc Rồng Băng 6 Sao' },
  { id: 931, name: 'Ngọc Rồng Băng 7 Sao' },
  { id: 932, name: 'Cải trang Uub' },
  { id: 933, name: 'Mảnh vỡ bông tai' },
  { id: 934, name: 'Mảnh hồn bông tai' },
  { id: 935, name: 'Đá xanh lam' },
  { id: 936, name: 'Tuần lộc nhí' },
  { id: 937, name: 'Cải trang Mabư Noel' },
  { id: 938, name: 'Cải trang Goku thời trang' },
  { id: 939, name: 'Cải trang Pôcôlô thời trang' },
  { id: 940, name: 'Cải trang Ca Đíc thời trang' },
  { id: 941, name: 'Nón Hổ vàng' },
  { id: 942, name: 'Hổ mặp vàng' },
  { id: 943, name: 'Hổ mặp trắng' },
  { id: 944, name: 'Hổ mặp xanh' },
  { id: 945, name: 'Cải trang Goku Tarzan' },
  { id: 946, name: 'Nón Hổ trắng' },
  { id: 947, name: 'Nón Hổ xanh' },
  { id: 948, name: 'Cải trang Hổ vàng' },
  { id: 949, name: 'Thịt tươi' },
  { id: 950, name: 'Thịt tươi' },
  { id: 951, name: 'Cải trang Siêu Goku Tarzan' },
  { id: 952, name: 'Cải trang Hổ trắng' },
  { id: 953, name: 'Cải trang Hổ xanh' },
  { id: 954, name: 'Bó Hoa Hồng' },
  { id: 955, name: 'Bó Hoa Vàng' },
  { id: 956, name: 'Mảnh Đội trưởng Vàng' },
  { id: 957, name: 'Cải trang Goku võ sĩ' },
  { id: 958, name: 'Cải trang Pôcôlô võ sĩ' },
  { id: 959, name: 'Cải trang Cađíc võ sĩ' },
  { id: 960, name: 'Cờ trắng' },
  { id: 961, name: 'Cờ đen' },
  { id: 962, name: 'Capsule thời trang 5 ngày' },
  { id: 963, name: 'Capsule thời trang 7 ngày' },
  { id: 964, name: 'Sao pha lê' },
  { id: 965, name: 'Sao pha lê' },
  { id: 966, name: 'Trái bóng' },
  { id: 967, name: 'Sao la' },
  { id: 968, name: 'Số 7 Goku' },
  { id: 969, name: 'Số 11 Gohan' },
  { id: 970, name: 'Số 6 Cađíc' },
  { id: 971, name: 'Số 2 Krilin' },
  { id: 972, name: 'Số 4 Thên Xin Hăng' },
  { id: 973, name: 'Số 10 Pôcôlô' },
  { id: 974, name: 'Số 1 Mabư' },
  { id: 975, name: 'Số 8 Biden' },
  { id: 976, name: 'Số 9 Quy lão Kamê' },
  { id: 977, name: 'Số 3 Poc' },
  { id: 978, name: 'Số 5 Pic' },
  { id: 979, name: 'Huy chương đồng' },
  { id: 980, name: 'Huy chương bạc' },
  { id: 981, name: 'Huy chương vàng' },
  { id: 982, name: 'Cúp vàng' },
  { id: 983, name: 'Cờ cổ động' },
  { id: 984, name: 'Capsule SEA games' },
  { id: 985, name: 'Cải trang Chill' },
  { id: 986, name: 'Cải trang Chill cấp 2' },
  { id: 987, name: 'Đá bảo vệ' },
  { id: 988, name: 'Mở rộng túi vàng' },
  { id: 989, name: 'ChiChi Siêu nhân' },
  { id: 990, name: 'Gohan Siêu nhân' },
  { id: 991, name: 'Pan Siêu nhân' },
  { id: 992, name: 'Nhẫn thời không sai lệch' },
  { id: 993, name: 'Giỏ thức ăn' },
  { id: 994, name: 'Vỏ ốc' },
  { id: 995, name: 'Cánh Tử thần' },
  { id: 996, name: 'Cá heo' },
  { id: 997, name: 'Con diều' },
  { id: 998, name: 'Diều rồng' },
  { id: 999, name: 'Mèo mun' },
  { id: 1000, name: 'Xiên cá' },
  { id: 1001, name: 'Phóng lợn' },
  { id: 1002, name: 'Cá nóc' },
  { id: 1003, name: 'Cá bảy màu' },
  { id: 1004, name: 'Cá diêu hồng' },
  { id: 1005, name: 'Xô cá xanh' },
  { id: 1006, name: 'Xô cá vàng' },
  { id: 1007, name: 'Ván lướt sóng' },
  { id: 1008, name: 'Cua đỏ' },
  { id: 1009, name: 'Rương Tranh ngọc Namếc' },
  { id: 1010, name: 'Cải trang Áo vịt cam' },
  { id: 1011, name: 'Cải trang Áo trắng hoa' },
  { id: 1012, name: 'Cải trang Nón rơm mùa hè' },
  { id: 1013, name: 'Kiếm ánh sáng' },
  { id: 1014, name: 'Rađa dò ngọc Namếc' },
  { id: 1015, name: 'Ngọc rồng Siêu Cấp' }
];
const intrinsicData = [
  { id: 0, name: "Chưa kích hoạt nội tại\nBấm vào để xem chi tiết" },
  { id: 1, name: "Chiêu đấm Dragon +p0% đến p1% sát thương" },
  { id: 2, name: "Chiêu Kamejoko +p0% đến p1% sát thương" },
  { id: 3, name: "Thái Dương Hạ San +p0% đến p1% tốc độ -p2% đến p3% KI" },
  { id: 4, name: "Quả cầu kênh khi +p0% đến p1% tốc độ hồi phục" },
  { id: 5, name: "Khiên năng lượng +p0% đến p1% tốc độ hồi phục" },
  { id: 6, name: "Dịch chuyển tức thời +p0% đến p1% sát thương đòn kế" },
  { id: 7, name: "Thôi miên +p0% đến p1% sát thương đòn kế" },
  { id: 8, name: "Chiêu đấm Demon +p0% đến p1% sát thương" },
  { id: 9, name: "Chiêu Masenko +p0% đến p1% sát thương" },
  { id: 10, name: "Trị thương +p0% đến p1% tốc độ hồi phục" },
  { id: 11, name: "Makankosappo +p0% đến p1% tốc độ hồi phục" },
  { id: 12, name: "Đẻ trứng +p0% đến p1% tốc độ hồi phục" },
  { id: 13, name: "Liên hoàn +p0% đến p1% sát thương" },
  { id: 14, name: "Biến Sôcôla +p0% đến p1% sát thương đòn kế" },
  { id: 15, name: "Khiên năng lượng +p0% đến p1% tốc độ hồi phục" },
  { id: 16, name: "Chiêu đấm Galick +p0% đến p1% sát thương" },
  { id: 17, name: "Chiêu Antomic +p0% đến p1% sát thương" },
  { id: 18, name: "Biến hình +p0% đến p1% sát thương" },
  { id: 19, name: "Tự phát nổ +p0% đến p1% tốc độ hồi phục" },
  { id: 20, name: "Khiên năng lượng +p0% đến p1% tốc độ hồi phục" },
  { id: 21, name: "Huýt sáo +p0% đến p1% tốc độ hồi phục" },
  { id: 22, name: "Trói +p0% đến p1% sát thương đòn kế" },
  { id: 23, name: "Vàng rơi từ quái +p0% đến p1%" },
  { id: 24, name: "Sức mạnh và tiềm năng khi đánh quái +p0% đến p1%" },
  { id: 25, name: "Chí mạng liên tục khi HP dưới p0% đến p1%" },
]
const taskTemplateData = [
  { id: 0, name: "Nhiệm vụ đầu tiên" },
  { id: 1, name: "Nhiệm vụ tập luyện" },
  { id: 2, name: "Nhiệm vụ tìm thức ăn" },
  { id: 3, name: "Tìm kiếm sao băng" },
  { id: 4, name: "Nhiệm vụ khó khăn" },
  { id: 5, name: "Nhiệm vụ gia tăng sức mạnh" },
  { id: 6, name: "Nhiệm vụ trò chuyện" },
  { id: 7, name: "Nhiệm vụ giải cứu" },
  { id: 8, name: "Nhiệm vụ ân nhân xuất sắc" },
  { id: 9, name: "Nhiệm vụ tiên học lễ" },
  { id: 10, name: "Nhiệm vụ học phí" },
  { id: 11, name: "Nhiệm vụ kết giao" },
  { id: 12, name: "Nhiệm vụ xin phép" },
  { id: 13, name: "Nhiệm vụ gia nhập bang hội" },
  { id: 14, name: "Nhiệm vụ bang hội lần 1" },
  { id: 15, name: "Nhiệm vụ bang hội lần 2" },
  { id: 16, name: "Tiêu diệt quái vật" },
  { id: 17, name: "Nhiệm vụ giúp đỡ Cui" },
  { id: 18, name: "Nhiệm vụ bất khả thi" },
  { id: 19, name: "Nhiệm vụ chạm trán đệ tử" },
  { id: 20, name: "Nhiệm vụ Tiểu Đội Sát Thủ" },
  { id: 21, name: "Nhiệm vụ chạm trán Fide đại ca" },
  { id: 22, name: "Nhiệm vụ chạm trán Rôbốt sát thủ lần 1" },
  { id: 23, name: "Nhiệm vụ chạm trán Rôbốt sát thủ lần 2" },
  { id: 24, name: "Nhiệm vụ giải cứu thị trấn Ginder" },
  { id: 25, name: "Tiêu Diệt Xên Đi Mấy Em" },
  { id: 26, name: "Tiêu Diệt Xên Đi Mấy Em" },
  { id: 27, name: "Kết Bạn Nhìu Niềm Vui" },
  { id: 28, name: "Săn Xên Bên Võ Đài Nhé" },
  { id: 29, name: "Qua Cold Nhé" },
  { id: 30, name: "Pem Chết Cụ Tụi Doraemon Đi " },
  { id: 31, name: "Nhiệm Vụ Hơi Khó Nhé Nên Sẽ Có Nhiều Em Kẹt Ở Đây" },
  { id: 32, name: "Đăng Ký Kênh Youtube JINN1368" },
]
const mapTemplateData = [
  { id: 0, name: "Làng Aru" },
  { id: 1, name: "Đồi hoa cúc" },
  { id: 2, name: "Thung lũng tre" },
  { id: 3, name: "Rừng nấm" },
  { id: 4, name: "Rừng xương" },
  { id: 5, name: "Đảo Kamê" },
  { id: 6, name: "Đông Karin" },
  { id: 7, name: "Làng Mori" },
  { id: 8, name: "Đồi nấm tím" },
  { id: 9, name: "Thị trấn Moori" },
  { id: 10, name: "Thung lũng Namếc" },
  { id: 11, name: "Thung lũng Maima" },
  { id: 12, name: "Vực maima" },
  { id: 13, name: "Đảo Guru" },
  { id: 14, name: "Làng Kakarot" },
  { id: 15, name: "Đồi hoang" },
  { id: 16, name: "Làng Plant" },
  { id: 17, name: "Rừng nguyên sinh" },
  { id: 18, name: "Rừng thông Xayda" },
  { id: 19, name: "Thành phố Vegeta" },
  { id: 20, name: "Vách núi đen" },
  { id: 21, name: "Nhà Gôhan" },
  { id: 22, name: "Nhà Moori" },
  { id: 23, name: "Nhà Broly" },
  { id: 24, name: "Trạm tàu vũ trụ" },
  { id: 25, name: "Trạm tàu vũ trụ" },
  { id: 26, name: "Trạm tàu vũ trụ" },
  { id: 27, name: "Rừng Bamboo" },
  { id: 28, name: "Rừng dương xỉ" },
  { id: 29, name: "Nam Kamê" },
  { id: 30, name: "Đảo Bulông" },
  { id: 31, name: "Núi hoa vàng" },
  { id: 32, name: "Núi hoa tím" },
  { id: 33, name: "Nam Guru" },
  { id: 34, name: "Đông Nam Guru" },
  { id: 35, name: "Rừng cọ" },
  { id: 36, name: "Rừng đá" },
  { id: 37, name: "Thung lũng đen" },
  { id: 38, name: "Bờ vực đen" },
  { id: 39, name: "Vách núi Aru" },
  { id: 40, name: "Vách núi Moori" },
  { id: 41, name: "Vực Plant" },
  { id: 42, name: "Vách núi Aru" },
  { id: 43, name: "Vách núi Moori" },
  { id: 44, name: "Vách núi Kakarot" },
  { id: 45, name: "Thần điện" },
  { id: 46, name: "Tháp Karin" },
  { id: 47, name: "Rừng Karin" },
  { id: 48, name: "Hành tinh Kaio" },
  { id: 49, name: "Phòng tập thời gian" },
  { id: 50, name: "Thánh địa Kaio" },
  { id: 51, name: "Đấu trường" },
  { id: 52, name: "Đại hội võ thuật" },
  { id: 53, name: "Tường thành 1" },
  { id: 54, name: "Tầng 3" },
  { id: 55, name: "Tầng 1" },
  { id: 56, name: "Tầng 2" },
  { id: 57, name: "Tầng 4" },
  { id: 58, name: "Tường thành 2" },
  { id: 59, name: "Tường thành 3" },
  { id: 60, name: "Trại độc nhãn 1" },
  { id: 61, name: "Trại độc nhãn 2" },
  { id: 62, name: "Trại độc nhãn 3" },
  { id: 63, name: "Trại lính Fide" },
  { id: 64, name: "Núi dây leo" },
  { id: 65, name: "Núi cây quỷ" },
  { id: 66, name: "Trại qủy già" },
  { id: 67, name: "Mê Cung Chết Chóc" },
  { id: 68, name: "Thung lũng Nappa" },
  { id: 69, name: "Vực cấm" },
  { id: 70, name: "Núi Appule" },
  { id: 71, name: "Căn cứ Raspberry" },
  { id: 72, name: "Thung lũng Raspberry" },
  { id: 73, name: "Thung lũng chết" },
  { id: 74, name: "Đồi cây Fide" },
  { id: 75, name: "Khe núi tử thần" },
  { id: 76, name: "Núi đá" },
  { id: 77, name: "Rừng đá" },
  { id: 79, name: "Núi khỉ đỏ" },
  { id: 80, name: "Núi khỉ vàng" },
  { id: 81, name: "Hang quỷ chim" },
  { id: 82, name: "Núi khỉ đen" },
  { id: 83, name: "Hang khỉ đen" },
  { id: 84, name: "Siêu Thị" },
  { id: 85, name: "Hành Tinh 1 Sao Đen" },
  { id: 86, name: "Hành Tinh 2 Sao Đen" },
  { id: 87, name: "Hành Tinh 3 Sao Đen" },
  { id: 88, name: "Hành Tinh 4 Sao Đen" },
  { id: 89, name: "Hành Tinh 5 Sao Đen" },
  { id: 90, name: "Hành Tinh 6 Sao Đen" },
  { id: 91, name: "Hành Tinh 7 Sao Đen" },
  { id: 92, name: "Thành phố phía đông" },
  { id: 93, name: "Thành phố phía nam" },
  { id: 94, name: "Đảo Balê" },
  { id: 96, name: "Cao nguyên" },
  { id: 97, name: "Thành phố phía bắc" },
  { id: 98, name: "Ngọn núi phía bắc" },
  { id: 99, name: "Thung lũng phía bắc" },
  { id: 100, name: "Thị trấn Ginder" },
  { id: 102, name: "Nhà Bunma" },
  { id: 103, name: "Võ đài Xên bọ hung" },
  { id: 104, name: "Sân sau siêu thị" },
  { id: 105, name: "Cánh đồng tuyết" },
  { id: 106, name: "Rừng tuyết" },
  { id: 107, name: "Núi tuyết" },
  { id: 108, name: "Dòng sông băng" },
  { id: 109, name: "Rừng băng" },
  { id: 110, name: "Hang băng" },
  { id: 111, name: "Đông Nam Karin" },
  { id: 112, name: "Võ đài Hạt Mít" },
  { id: 113, name: "Đại hội võ thuật" },
  { id: 114, name: "Cổng phi thuyền" },
  { id: 115, name: "Phòng chờ" },
  { id: 117, name: "Cửa Ải 1" },
  { id: 118, name: "Cửa Ải 2" },
  { id: 119, name: "Cửa Ải 3" },
  { id: 120, name: "Phòng chỉ huy" },
  { id: 122, name: "Ngũ hành sơn 3" },
  { id: 123, name: "Ngũ hành sơn 1" },
  { id: 124, name: "Ngũ hành sơn 2" },
  { id: 126, name: "Thành phố Santa" },
  { id: 127, name: "Cổng phi thuyền" },
  { id: 128, name: "Bụng Mabư" },
  { id: 129, name: "Đại hội võ thuật" },
  { id: 131, name: "Hành Tinh Yardart" },
  { id: 132, name: "Hành Tinh Yardart 2" },
  { id: 133, name: "Hành Tinh Yardart 3" },
  { id: 135, name: "Động hải tặc" },
  { id: 136, name: "Hang Bạch Tuộc" },
  { id: 137, name: "Động kho báu" },
  { id: 138, name: "Cảng hải tặc" },
  { id: 139, name: "Hành tinh Potaufeu" },
  { id: 140, name: "Hang động Potaufeu" },
  { id: 141, name: "Con đường rắn độc 1" },
  { id: 142, name: "Con đường rắn độc 2" },
  { id: 143, name: "Khu BOSS VIP" },
  { id: 144, name: "Khu Up Hồng ngọc" },
  { id: 145, name: "Võ Đài Siêu Cấp" },
  { id: 146, name: "Vùng Đất Hủy Diệt" },
  { id: 147, name: "Sa Mạc" },
  { id: 148, name: "Lâu đài Lychee" },
  { id: 149, name: "Thành phố Santa" },
  { id: 151, name: "Hành tinh bóng tối" },
  { id: 152, name: "Vùng đất băng giá" },
  { id: 153, name: "Lãnh địa Bang Hội" },
  { id: 154, name: "Hành tinh Bill" },
  { id: 155, name: "Hành tinh ngục tù" },
  { id: 156, name: "Tây thánh địa" },
  { id: 157, name: "Đông thánh địa" },
  { id: 158, name: "Bắc thánh địa" },
  { id: 159, name: "Nam thánh Địa" },
  { id: 160, name: "Khu hang động" },
  { id: 161, name: "Bìa rừng nguyên thủy" },
  { id: 162, name: "Rừng nguyên thủy" },
  { id: 163, name: "Làng Plant nguyên thủy" },
  { id: 164, name: "Khu luyện tập Trái Đất" },
  { id: 165, name: "Khu luyện tập Trái Đất" },
  { id: 169, name: "Chiến trường" },
  { id: 170, name: "Đảo SkyPiea" },
  { id: 171, name: "Nam Đảo SkyPiea" },
  { id: 172, name: "Đảo BearPiea" },
  { id: 173, name: "Đông Nam SkyPiea" },
  { id: 174, name: "Đấu trường SkyPiea" },
  { id: 176, name: "Đồi băng hủy diệt 1" },
  { id: 177, name: "Đồi băng hủy diệt 2" },
  { id: 178, name: "Vực thẳm hủy diệt" },
  { id: 179, name: "Khu rừng hủy diệt 1" },
  { id: 180, name: "Khu rừng hủy diệt 2" },
  { id: 181, name: "Hang động hủy diệt" },
  { id: 182, name: "Động Thiên hà" },
  { id: 183, name: "Núi Thần địa" },
];
// --- End Data ---

const dataSources = {
  item_template: { name: "Danh sách vật phẩm", data: itemTemplateData },
  intrinsic: { name: "Danh sách nội tại", data: intrinsicData },
  task_main_template: { name: "Danh sách nhiệm vụ", data: taskTemplateData },
  map_template: { name: "Danh sách bản đồ", data: mapTemplateData },
  // skill: { name: "Danh sách kỹ năng", data: skillData }, // Add skill data if available
};

// --- DOM Elements ---
const searchInput = document.getElementById("searchInput");
const tableSelector = document.getElementById("tableSelector");
const resultsBody = document.getElementById("resultsBody");
const scrollToSearchBtn = document.getElementById("scrollToSearch");
const installBtn = document.getElementById("installBtn");
const searchSection = document.getElementById("Database");
const installSection = document.getElementById("install");
const mainTitle = document.getElementById("mainTitle");
const installTabs = document.querySelectorAll('#installTabs li');
const installPanes = document.querySelectorAll('.tab-content-area .tab-pane');

// Modal Elements
const purchaseModal = document.getElementById('purchaseModal');
const purchaseForm = document.getElementById('purchaseForm');
const modalFormContent = document.getElementById('modalFormContent');
const successMessage = document.getElementById('successMessage');
const purchaseTriggerButtons = document.querySelectorAll('.purchase-trigger'); // Buttons that open the modal
const modalCloseButton = purchaseModal ? purchaseModal.querySelector('.close-button') : null;
const modalPackageNameSpan = document.getElementById('modalPackageName');
const modalPackagePriceSpan = document.getElementById('modalPackagePrice');

// --- Utility Functions ---

// Function to debounce calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to highlight matching text
function highlightMatch(text, searchTerm) {
    if (!searchTerm) {
        return text.replace(/\n/g, "<br>"); // Replace newline characters for HTML display
    }
    try {
        // Escape special regex characters in the search term
        const escapedSearchTerm = searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        const regex = new RegExp(`(${escapedSearchTerm})`, "gi"); // 'g' for global, 'i' for case-insensitive
        const textWithBreaks = text.replace(/\n/g, "<br>"); // Handle newlines first
        return textWithBreaks.replace(regex, '<span class="highlight">$1</span>'); // Wrap match in span
    } catch (e) {
        console.error("Regex error during highlighting:", e);
        return text.replace(/\n/g, "<br>"); // Fallback
    }
}

// --- Search Table Functionality ---

// Function to display search results
function displayResults(searchTerm = "", selectedTable = "item_template") {
    if (!resultsBody) {
        console.error("resultsBody element not found.");
        return;
    }
    resultsBody.innerHTML = ""; // Clear previous results

    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    let resultsFound = 0;

    const source = dataSources[selectedTable];

    // Check if the selected data source exists and is valid
    if (!source || !Array.isArray(source.data)) {
        console.warn("Data source not found or invalid for:", selectedTable);
        const infoRow = resultsBody.insertRow();
        const infoCell = infoRow.insertCell();
        infoCell.colSpan = 2; // Span across both columns
        infoCell.className = "info-cell";
        infoCell.textContent = `Chưa có dữ liệu cho "${selectedTable}"`;
        return;
    }

    let filteredData = [];
    try {
        // Filter data based on search term
        filteredData = source.data.filter(item =>
            item && typeof item.name === 'string' && item.name.toLowerCase().includes(lowerSearchTerm)
        );
    } catch (e) {
        console.error("Error during filtering data:", e);
        const infoRow = resultsBody.insertRow();
        const infoCell = infoRow.insertCell();
        infoCell.colSpan = 2;
        infoCell.className = "info-cell";
        infoCell.textContent = "Lỗi trong quá trình lọc dữ liệu.";
        return;
    }

    // Use DocumentFragment for performance when adding multiple rows
    const fragment = document.createDocumentFragment();
    filteredData.forEach((item) => {
        const row = document.createElement('tr');
        const cellId = document.createElement('td');
        const cellName = document.createElement('td');

        cellId.textContent = item.id ?? 'N/A'; // Use 'N/A' if id is missing
        // Highlight the name if it exists, otherwise show 'N/A'
        cellName.innerHTML = item.name ? highlightMatch(item.name, searchTerm) : 'N/A';

        row.appendChild(cellId);
        row.appendChild(cellName);
        fragment.appendChild(row);
        resultsFound++;
    });
    resultsBody.appendChild(fragment); // Append all rows at once

    // Display message if no results found
    if (resultsFound === 0) {
        const infoRow = resultsBody.insertRow();
        const infoCell = infoRow.insertCell();
        infoCell.colSpan = 2;
        infoCell.className = "info-cell";
        if (searchTerm !== "") {
            infoCell.textContent = "Không tìm thấy kết quả phù hợp.";
        } else {
             // Get the display name of the table
             const tableName = dataSources[selectedTable]?.name || selectedTable;
             infoCell.textContent = `Nhập từ khóa để tìm trong "${tableName}".`;
        }
    }
}

// Debounced version of displayResults for search input
const debouncedDisplayResults = debounce(displayResults, 250); // 250ms delay

// Event Listeners for Search Table
if (searchInput && tableSelector) {
    searchInput.addEventListener('input', () => {
        debouncedDisplayResults(searchInput.value, tableSelector.value);
    });
    tableSelector.addEventListener('change', () => {
        // Trigger immediate update when selector changes
        displayResults(searchInput.value, tableSelector.value);
    });
} else {
    console.warn("Search input or table selector not found.");
}


// --- Hero Button and Section Visibility ---

// Toggle button classes (primary/secondary)
function toggleActiveButton(activeButton) {
    const buttons = document.querySelectorAll(".hero-buttons .btn");
    buttons.forEach((button) => {
        button.classList.remove("primary");
        button.classList.add("secondary");
    });
    if (activeButton) {
        activeButton.classList.remove("secondary");
        activeButton.classList.add("primary");
    }
}

// Show/hide sections based on the active Hero button
function updateSectionVisibility() {
    if (!searchSection || !installSection) {
        console.warn("Search or Install section not found.");
        return;
    }

    if (scrollToSearchBtn && scrollToSearchBtn.classList.contains('primary')) {
        searchSection.style.display = "block";
        installSection.style.display = "none";
        if (mainTitle) mainTitle.textContent = "Dữ liệu Jinro";
    } else if (installBtn && installBtn.classList.contains('primary')) {
        searchSection.style.display = "none";
        installSection.style.display = "block";
        if (mainTitle) mainTitle.textContent = "Cài đặt Jinro"; // Updated title
    } else {
        // Default state (show search)
        searchSection.style.display = "block";
        installSection.style.display = "none";
        if (mainTitle) mainTitle.textContent = "Dữ liệu Jinro";
    }
}

// Event Listeners for Hero Buttons
if (scrollToSearchBtn) {
    scrollToSearchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleActiveButton(this);
        updateSectionVisibility();
        if (searchSection) {
            searchSection.scrollIntoView({ behavior: "smooth", block: "start" });
            // Set focus to search input after scrolling (with a slight delay)
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 600); // Adjust delay as needed
        }
    });
}

if (installBtn) {
    installBtn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleActiveButton(this);
        updateSectionVisibility();
        if (installSection) {
            installSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

// --- Tab Functionality for Install Section ---

function activateTab(selectedTab) {
     if (!selectedTab) return;

     const targetId = selectedTab.getAttribute('data-target');
     const targetPane = document.getElementById(targetId);

     // Deactivate all tabs and panes first
     installTabs.forEach(tab => tab.classList.remove('active'));
     installPanes.forEach(pane => pane.classList.remove('active'));

     // Activate the selected tab and its corresponding pane
     selectedTab.classList.add('active');
     if (targetPane) {
         targetPane.classList.add('active');
     } else {
         console.warn("Target pane not found for ID:", targetId);
     }
}

// Add click listener to each tab
installTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab);
    });
});

// Helper function to activate a tab programmatically (e.g., from pricing button)
function activateTabByTarget(targetId) {
    const tabToActivate = document.querySelector(`#installTabs li[data-target="${targetId}"]`);
    if (tabToActivate) {
        activateTab(tabToActivate);
        // Optional: Scroll to the install section if activating a tab from outside
        if (installSection) {
            installSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        console.warn("Could not find tab with target ID:", targetId);
    }
}


// --- Copy Code Functionality (Non-Modal) ---

function setupNonModalCopyButtons() {
    document.querySelectorAll(".copy-btn:not(.modal .copy-btn)").forEach((button) => {
        const originalText = button.textContent;
        // Store original text if not already stored by modal setup
        if (!button.hasAttribute('data-original-text')) {
            button.setAttribute('data-original-text', originalText);
        }

        // Prevent adding listener twice if already added by modal setup (unlikely but safe)
        if (!button.hasAttribute('data-copy-listener-added')) {
            button.addEventListener("click", () => {
                const targetId = button.getAttribute("data-target");
                const codeElement = document.getElementById(targetId);

                if (!codeElement) {
                    console.error("Target code element not found:", targetId);
                    button.textContent = "Lỗi!";
                    button.style.backgroundColor = '#dc3545'; // Red feedback
                    setTimeout(() => {
                        button.textContent = button.getAttribute('data-original-text') || originalText;
                        button.style.backgroundColor = '';
                    }, 2000);
                    return;
                }

                let textToCopy = '';
                // Extract text differently based on target element type
                if (codeElement.tagName.toLowerCase() === 'pre' || codeElement.tagName.toLowerCase() === 'code') {
                     textToCopy = codeElement.innerText || codeElement.textContent;
                     // Replace non-breaking spaces commonly found in code blocks
                     textToCopy = textToCopy.replace(/\u00A0/g, ' ');
                } else if (codeElement.tagName.toLowerCase() === 'span' && codeElement.classList.contains('sr-only')) {
                     // Handle hidden spans used in the modal
                     textToCopy = codeElement.textContent;
                } else {
                    // Fallback for other elements (might need refinement)
                    textToCopy = codeElement.innerHTML.replace(/<br\s*\/?>/gi, '\n').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
                    const tempElem = document.createElement('textarea');
                    tempElem.innerHTML = textToCopy;
                    textToCopy = tempElem.value;
                }
                textToCopy = textToCopy.trim();


                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        button.textContent = "Đã sao chép!";
                        button.style.backgroundColor = '#28a745'; // Green feedback
                        setTimeout(() => {
                            button.textContent = button.getAttribute('data-original-text') || originalText;
                            button.style.backgroundColor = '';
                        }, 1500);
                    })
                    .catch((err) => {
                        console.error("Không thể sao chép: ", err);
                        button.textContent = "Lỗi sao chép";
                        button.style.backgroundColor = '#dc3545'; // Red feedback
                        setTimeout(() => {
                           button.textContent = button.getAttribute('data-original-text') || originalText;
                            button.style.backgroundColor = '';
                        }, 2000);
                    });
            });
             button.setAttribute('data-copy-listener-added', 'true'); // Mark listener as added
        }
    });
}


// --- Purchase Modal Functionality ---

// Function to show the modal and populate package info
function showPurchaseModal(triggerButton) {
    if (purchaseModal && triggerButton) {
        const packageName = triggerButton.getAttribute('data-package-name');
        const packagePrice = triggerButton.getAttribute('data-package-price');

        if (modalPackageNameSpan) modalPackageNameSpan.textContent = packageName || 'Không xác định';
        if (modalPackagePriceSpan) modalPackagePriceSpan.textContent = packagePrice || 'N/A';

        if (modalFormContent) modalFormContent.style.display = 'block';
        if (successMessage) successMessage.style.display = 'none';

        purchaseModal.style.display = 'block';
        setupModalCopyButtons(); // Ensure copy buttons inside modal work
    } else {
        console.error("Modal or Trigger Button not found for showPurchaseModal");
    }
}

// Function to hide the modal
function hidePurchaseModal() {
    if (purchaseModal) {
        purchaseModal.style.display = 'none';
    }
}

// Add event listeners to all purchase trigger buttons
purchaseTriggerButtons.forEach(button => {
    button.addEventListener('click', function(e) { // Use function() for 'this'
        e.preventDefault();
        showPurchaseModal(this); // Pass the clicked button
    });
});

if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hidePurchaseModal);
}

if (purchaseModal) {
    purchaseModal.addEventListener('click', (event) => {
        if (event.target === purchaseModal) { // Clicked on the background overlay
            hidePurchaseModal();
        }
    });
}

if (purchaseForm) {
    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        const selectedPackage = modalPackageNameSpan ? modalPackageNameSpan.textContent : 'N/A';

        console.log("Package selected:", selectedPackage);

        if (modalFormContent) modalFormContent.style.display = 'none';
        if (successMessage) successMessage.style.display = 'block';

    });
}

// --- Copy Functionality specifically for Modal Buttons ---
function setupModalCopyButtons() {
    const modalCopyButtons = purchaseModal ? purchaseModal.querySelectorAll('.copy-btn') : [];
    modalCopyButtons.forEach((button) => {
        // Check if listener already exists
        if (!button.hasAttribute('data-copy-listener-added')) {
             const originalText = button.textContent;
             // Store original text if not already stored
             if (!button.hasAttribute('data-original-text')) {
                 button.setAttribute('data-original-text', originalText);
             }

            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                // Target the hidden span specifically
                const textElement = document.getElementById(targetId);

                if (!textElement) {
                    console.error('Target text element for copy not found:', targetId);
                    button.textContent = 'Lỗi!';
                    button.style.backgroundColor = '#dc3545';
                    setTimeout(() => {
                         button.textContent = button.getAttribute('data-original-text') || originalText;
                         button.style.backgroundColor = '';
                    }, 2000);
                    return;
                }

                const textToCopy = textElement.textContent.trim();

                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        button.textContent = 'Đã sao chép!';
                        button.style.backgroundColor = '#28a745';
                        setTimeout(() => {
                             button.textContent = button.getAttribute('data-original-text') || originalText;
                             button.style.backgroundColor = '';
                        }, 1500);
                    })
                    .catch((err) => {
                        console.error('Không thể sao chép: ', err);
                        button.textContent = 'Lỗi sao chép';
                        button.style.backgroundColor = '#dc3545';
                         setTimeout(() => {
                             button.textContent = button.getAttribute('data-original-text') || originalText;
                             button.style.backgroundColor = '';
                        }, 2000);
                    });
            });
            button.setAttribute('data-copy-listener-added', 'true'); // Mark listener as added
        }
    });
}
// --- END Purchase Modal Functionality ---


// --- Page Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Initialize search table (show prompt message)
    if (tableSelector) {
        displayResults("", tableSelector.value);
    }

    // Set default active hero button and section visibility
    if (scrollToSearchBtn) {
         toggleActiveButton(scrollToSearchBtn); // Default to search/data
    } else if (installBtn) {
         toggleActiveButton(installBtn); // Fallback if search button doesn't exist
    }
    updateSectionVisibility(); // Show the correct section

    // Initialize install section tabs
    const defaultActiveTab = document.querySelector('#installTabs li.active');
    if (defaultActiveTab) {
        activateTab(defaultActiveTab); // Ensure the content pane for the default active tab is shown
    } else if (installTabs.length > 0) {
         activateTab(installTabs[0]); // Activate the first tab if none is marked active
    }

    // Setup copy buttons for code blocks (non-modal)
    setupNonModalCopyButtons();
});