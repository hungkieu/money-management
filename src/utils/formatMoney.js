const formatMoney = (amount = '0') => {
  let strAmount = String(amount);
  let length = strAmount.length;
  if (length === 0) return '0 ₫';

  let direct = "";
  if (strAmount[0] === '-') {
    direct = "- ";
    length -= 1;
    strAmount = strAmount.substr(1);
  }

  let str = '';
  for (let i = 0; i < length; i++) {
    if ((length - i) % 3 === 0 && i > 0) str += ',';
    str += strAmount[i];
  }
  return direct + str + ' ₫';
};

export default formatMoney;
