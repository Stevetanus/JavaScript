function getSaturday(starttime = "20220531", endtime = "20220630") {
  // 將字串分成年、月、日
  let dateArgs = [];
  dateArgs.push(starttime.slice(0, 4));
  dateArgs.push(starttime.slice(4, 6));
  dateArgs.push(starttime.slice(6, 8));
  dateArgs.push(endtime.slice(0, 4));
  dateArgs.push(endtime.slice(4, 6));
  dateArgs.push(endtime.slice(6, 8));
  dateArgs[1] = dateArgs[1] - 1;
  dateArgs[4] = dateArgs[4] - 1;
  //   得到第一個星期六
  let start = new Date(Number(dateArgs[0]), dateArgs[1], Number(dateArgs[2]));
  let end = new Date(Number(dateArgs[3]), dateArgs[4], Number(dateArgs[5]));
  let startDay = start.getDay();
  let distance = 6 - startDay >= 0 ? 6 - startDay : 6;
  let startSaturday = new Date(start.setDate(start.getDate() + distance));
  //   計算第一個星期六到end中間的天數、會有幾個星期六，存入output
  let duration = (end.getTime() - startSaturday.getTime()) / (1000 * 3600 * 24);
  let output = [startSaturday.toLocaleDateString()];
  for (let i = 0; i < Math.floor(duration / 7); i++) {
    output.push(
      new Date(
        startSaturday.setDate(startSaturday.getDate() + 7)
      ).toLocaleDateString()
    );
  }
  console.log(output);
  return output;
}

getSaturday();
