export function parseBalance(_balanceWei, _decimals) {
  if (!_balanceWei) {
    return 0;
  }
  if (!_decimals) {
    _decimals = 18;
  }
  _decimals = parseInt(_decimals);
  let afterDecimal;
  const weiString = _balanceWei.toString();
  const trailingZeros = /0+$/u;

  const beforeDecimal =
    weiString.length > _decimals ? weiString.slice(0, weiString.length - _decimals) : '0';
  afterDecimal = ('0'.repeat(_decimals) + _balanceWei).slice(-_decimals).replace(trailingZeros, '');
  if (afterDecimal === '') {
    afterDecimal = '0';
  } else if (afterDecimal.length > 3) {
    afterDecimal = afterDecimal.slice(0, 3);
  }
  return parseFloat(`${beforeDecimal}.${afterDecimal}`);
}

export function convertTimestampToDate(timestamp) {
  var months_arr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // Convert timestamp to milliseconds
  var date = new Date(timestamp * 1000);
  // Year
  var year = date.getFullYear();
  // Month
  var month = months_arr[date.getMonth()];
  // Day
  var day = date.getDate();
  // Hours
  var hours = date.getHours();
  // Minutes
  var minutes = date.getMinutes() + 1;

  // Display date time in MM-dd-yyyy h:m:s format
  var convdataTime = `${year !== new Date().getFullYear() ? year : ''} ${month} ${
    day < 10 ? '0' + day : day
  }, ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} `;

  return convdataTime;
}

export async function listTokensOfOwner(token, walletAddress, addressMarket) {
  const logs = await token
    .getPastEvents('Transfer', { fromBlock: 1000000 })
    .then((events) => events);

  const owned = new Set();
  const onSale = new Set();
  for (const log of logs) {
    const { from, to, tokenId } = log.returnValues;
    if (to.toLowerCase() === walletAddress.toLowerCase()) {
      owned.add(tokenId.toString());
    } else if (from.toLowerCase() === walletAddress.toLowerCase()) {
      owned.delete(tokenId.toString());
      if (
        from.toLowerCase() === walletAddress.toLowerCase() &&
        to.toLowerCase() === addressMarket.toLowerCase()
      ) {
        onSale.add(tokenId.toString());
      }
    }

    if (
      (owned.has(tokenId.toString()) && onSale.has(tokenId.toString())) ||
      (from.toLowerCase() === addressMarket.toLowerCase() &&
        to.toLowerCase() !== walletAddress.toLowerCase())
    ) {
      onSale.delete(tokenId.toString());
    }
  }
  return { owned: [...owned], onSale: [...onSale] };
}
