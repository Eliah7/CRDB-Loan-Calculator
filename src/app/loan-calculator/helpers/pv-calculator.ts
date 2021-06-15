// function conv_number(expr, decplaces) {
//   var str = '' + Math.round(eval(expr) * Math.pow(10, decplaces));
//   while (str.length <= decplaces) {
//     str = '0' + str;
//   }

//   var decpoint = str.length - decplaces;
//   return str.substring(0, decpoint) + '.' + str.substring(decpoint, str.length);
// }

// Parameters are rate, total number of periods, payment made each period and future value
export function pv(rate, nper, pmt) {
  let fv = 0;
  rate = parseFloat(rate);
  nper = parseFloat(nper);
  pmt = parseFloat(pmt);

  if (nper == 0) {
    alert('Why do you want to test me with zeros?');
    return 0;
  }
  let pv_value = 0;

  if (rate == 0) {
    // Interest rate is 0
    pv_value = -(fv + pmt * nper);
  } else {
    let x = Math.pow(1 + rate, -nper);
    let y = Math.pow(1 + rate, nper);
    pv_value = -(x * (fv * rate - pmt + y * pmt)) / rate;
  }
  return pv_value;
}
