let sheet = input.Sheets.工作表1;
let ary = [];
_.map(sheet, (val, key) => {
  if (/^B/.test(key)) ary.push(val.v);
});
app.write('column-B.txt', ary);
