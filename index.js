function superbowlWin(record) {
  const result = record.find((record) => record.result === "W");
  return result.year;
}
