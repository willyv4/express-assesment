const timeWord = require("./timeWord");
describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("it should return midnight and noon", () => {
    const midnight = timeWord("00:00");
    expect(midnight).toBe("midnight");
    const noon = timeWord("12:00");
    expect(noon).toBe("noon");
  });

  test("it should have o'clock", () => {
    const t1 = timeWord("01:00");
    expect(t1).toBe("one o'clock am");
    const t2 = timeWord("23:00");
    expect(t2).toBe("eleven o'clock pm");
  });

  test("it should numbers as words in the minute place", () => {
    const t1 = timeWord("01:13");
    expect(t1).toBe("one thirteen am");
    const t2 = timeWord("23:45");
    expect(t2).toBe("eleven forty five pm");
  });

  test("it should contain oh @ input like: 06:01", () => {
    const t1 = timeWord("06:01");
    expect(t1).toBe("six oh one am");
    const t2 = timeWord("00:01");
    expect(t2).toBe("twelve oh one am");
  });

  test("it should handle minutes with leading zeros", () => {
    const t1 = timeWord("00:12");
    expect(t1).toBe("twelve twelve am");
    const t2 = timeWord("12:09");
    expect(t2).toBe("twelve oh nine pm");
  });

  test("it should convert various times to words", () => {
    const t1 = timeWord("06:10");
    expect(t1).toBe("six ten am");
    const t2 = timeWord("06:18");
    expect(t2).toBe("six eighteen am");
    const t3 = timeWord("06:30");
    expect(t3).toBe("six thirty  am");
    const t4 = timeWord("10:34");
    expect(t4).toBe("ten thirty four am");
    const t5 = timeWord("23:23");
    expect(t5).toBe("eleven twenty three pm");
  });
});
