exports.handler = async (event, context) => {
  // สุ่มเลข 6 หลัก
  const number = Math.floor(Math.random() * 1000000);

  // แปลงให้อยู่ในรูปแบบเลข 6 หลัก เช่น 000123
  const formattedNumber = number.toString().padStart(6, '0');

  return {
    statusCode: 200,
    body: JSON.stringify({
      lotteryNumber: formattedNumber
    }),
  };
};
