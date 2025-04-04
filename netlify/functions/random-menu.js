exports.handler = async (event, context) => {
  // ตัวอย่างอาร์เรย์เมนูอาหารไทยและต่างประเทศ (50 รายการ)
  const menus = [
    // อาหารไทย
    "ข้าวผัดกะเพราไก่",
    "ข้าวไข่เจียวหมูสับ",
    "ส้มตำปูปลาร้า",
    "ผัดไทยกุ้งสด",
    "ต้มยำกุ้ง",
    "แกงเขียวหวานไก่",
    "ผัดซีอิ๊วหมู",
    "ผัดผักบุ้งไฟแดง",
    "แกงจืดเต้าหู้หมูสับ",
    "แกงพะแนงเนื้อ",
    "ราดหน้า",
    "ผัดกะเพราหมูกรอบ",
    "ข้าวขาหมู",
    "ขนมจีนน้ำเงี้ยว",
    "ลาบหมู",
    "น้ำตกหมู",
    "ไส้อั่ว",
    "แกงมัสมั่นไก่",
    "กระเพาะปลาน้ำแดง",
    "ข้าวมันไก่",
    "ผัดคะน้าหมูกรอบ",
    "ข้าวหมูแดง",
    "ผัดฟักทองใส่ไข่",
    "ผัดเปรี้ยวหวานหมู",
    "แกงป่าไก่",
    "เนื้อย่างจิ้มแจ่ว",
    "ปลาเผาเกลือ",
    "ข้าวหน้าเป็ด",
    "ก๋วยเตี๋ยวเรือน้ำตก",
    "ขนมจีนน้ำยา",
    "ส้มผักเสี้ยน",
    "ข้าวเหนียวมะม่วง",
    "ข้าวเหนียวทุเรียน",

    // อาหารต่างประเทศ
    "Pizza Margherita",
    "Spaghetti Carbonara",
    "Lasagna",
    "Caesar Salad",
    "Fish and Chips",
    "Fried Chicken",
    "Hamburger",
    "Grilled Salmon with Lemon Butter Sauce",
    "Sushi Set",
    "Tonkotsu Ramen",
    "Kimchi Fried Rice",
    "Bibimbap",
    "Tacos al Pastor",
    "Burrito",
    "Pho (เฝอ)",
    "Greek Salad",
    "Paella",
    "Pad Ka-Prao Seafood (Thai fusion)",
    "Beef Steak",
    "Chicken Quesadilla"
  ];

  // สุ่ม index
  const randomIndex = Math.floor(Math.random() * menus.length);

  // ส่งค่ากลับเป็น JSON
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "เมนูแนะนำวันนี้คือ:",
      menu: menus[randomIndex],
    }),
  };
};
