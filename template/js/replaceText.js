//========================================================Common=======================================================================================//

const coupleLastName = "Khang & Hằng"; //example: Khang & Hằng
const dateWedding = "24 March 2023"; //example: 12 March 2023

//==============================================Thông tin của chú rể===================================================================================//

const nameGroom = "Tuấn Khang"; //example: Tuấn Khang
const jobGroom = "Thợ code đến từ Vĩnh Bảo, Hải Phòng"; //example: Thợ code đến từ Vĩnh Bảo, Hải Phòng
const phoneGroom = "0981415813"; //example: 0981415813
const fbGroom = "https://www.facebook.com/Buikhanhi2k"; //example: https://www.facebook.com/Buikhanhi2k
const addressGroom = "Hạnh Phúc, Đồng Minh, Vĩnh Bảo, Hải Phòng"; //example: Quyết Thắng, Đồng Minh, Vĩnh Bảo, Hải Phòng
const timeWeddingGroom = "09:00 AM 12/03/2023"; //example: 09:00 AM 12/03/2023
const mapGroom =
  "https://www.google.com/maps/place/X%C3%B3m+Quy%E1%BA%BFt+Th%E1%BA%AFng/@20.6450934,106.4647051,20.08z/data=!4m14!1m7!3m6!1s0x3135f5b337fbbc1f:0x5bbc5ef0c114255d!2zWMOzbSBRdXnhur90IFRo4bqvbmc!8m2!3d20.645296!4d106.4646736!16s%2Fg%2F11p5n7j95t!3m5!1s0x3135f5b337fbbc1f:0x5bbc5ef0c114255d!8m2!3d20.645296!4d106.4646736!16s%2Fg%2F11p5n7j95t"; //example: Quyết Thắng, Đồng Minh, Vĩnh Bảo, Hải Phòng
const bankAccoutGroom = "BUI NGOC KHANH";
const bankNameGroom = "Techcombank";
const bankNumberGroom = "68 03 06 2000";

//==============================================Thông tin của cô dâu===================================================================================//

const nameBride = "Phương Hằng"; //example: Phương Hằng
const jobBride = "Cô nhân viên văn phòng mộng mer"; //example: Cô nhân viên văn phòng mộng mer
const phoneBride = "0559548068"; //example: 0559548068
const fbBride = "https://www.facebook.com/Buikhanhi2k"; //example: https://www.facebook.com/Buikhanhi2k
const timeWeddingBride = "08:30 AM 12/03/2023"; //example: 09:00 AM 12/03/2023
const addressBride = "Quyết Thắng, Đồng Minh, Vĩnh Bảo, Hải Phòng"; //example: Quyết Thắng, Đồng Minh, Vĩnh Bảo, Hải Phòng
const mapBride = "https://goo.gl/maps/BVG9H29pCrRohjtM8"; //example: https://goo.gl/maps/BVG9H29pCrRohjtM8
const bankAccoutBride = "BUI NGOC KHANH";
const bankNameBride = "Techcombank";
const bankNumberBride = "68 03 06 2000";

const objReplace = [
  {
    text: "Tên chú rể",
    textReplace: nameGroom,
  },
  {
    text: "Tên cô dâu",
    textReplace: nameBride,
  },
  {
    text: "Tên cặp đôi ngắn",
    textReplace: coupleLastName,
  },
  {
    text: "Tên cặp đôi dài",
    textReplace: nameGroom + " & " + nameBride,
  },
  {
    text: "Ngày cưới",
    textReplace: dateWedding,
  },
  {
    text: "Nghề nghiệp chú rể",
    textReplace: jobGroom,
  },
  {
    text: "Nghề nghiệp cô dâu",
    textReplace: jobBride,
  },
  {
    text: "Số điện thoại chú rể",
    textReplace: phoneGroom,
  },
  {
    text: "Số điện thoại cô dâu",
    textReplace: phoneBride,
  },
  {
    text: "facebook chú rể",
    textReplace: fbGroom,
  },
  {
    text: "facebook cô dâu",
    textReplace: fbBride,
  },
  {
    text: "Thời gian tổ chức nhà gái",
    textReplace: timeWeddingBride,
  },
  {
    text: "Thời gian tổ chức nhà trai",
    textReplace: timeWeddingGroom,
  },
  {
    text: "Địa chỉ nhà trai",
    textReplace: addressGroom,
  },
  {
    text: "Địa chỉ nhà gái",
    textReplace: addressBride,
  },
  {
    text: "map nhà trai",
    textReplace: mapGroom,
  },
  {
    text: "map nhà gái",
    textReplace: mapBride,
  },
  {
    text: "tên ngân hàng chú rể",
    textReplace: bankNameGroom,
  },
  {
    text: "tên ngân hàng cô dâu",
    textReplace: bankNameBride,
  },
  {
    text: "tên tài khoản chú rể",
    textReplace: bankAccoutGroom,
  },
  {
    text: "tên tài khoản cô dâu",
    textReplace: bankAccoutBride,
  },
  {
    text: "số tài khoản chú rể",
    textReplace: bankNumberGroom,
  },
  {
    text: "số tài khoản cô dâu",
    textReplace: bankNumberBride,
  },
];

function replaceName() {
  // Thay title
  document.title = document.title.replace(
    "Tên chú rể & Tên cô dâu",
    nameGroom + " & " + nameBride
  );

  // Thay text body
  for (let i = 0; i <= objReplace.length; i++) {
    document.body.innerHTML = document.body.innerHTML.replaceAll(
      objReplace[i].text,
      objReplace[i].textReplace
    );
  }
}

replaceName();
