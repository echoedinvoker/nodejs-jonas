api.write(
  'column-B.txt',
  Object.entries(input.Sheets['工作表1'])
    .filter((cur) => cur[0].startsWith('B'))
    .map((cur) => cur[1].v)
    .join('\n')
);
