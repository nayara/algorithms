import binarySearch from "./index";

describe("Binary search", () => {
  const elementsList = [1, 4, 6, 7, 10, 12, 14];

  it("should return the element position when the element is in the center", () => {
    const result = binarySearch(elementsList, 7);

    expect(result).toBe("The element position is 4");
  });

  it("should return the element position when the element is below center", () => {
    const result = binarySearch(elementsList, 4);

    expect(result).toBe("The element position is 2");
  });

  it("should not return element postion when the element is not present", () => {
    const result = binarySearch(elementsList, 24);

    expect(result).toBe("Element not found in the list!");
  });

  it("should return the element position when the elment is a string", () => {
    const elementStringList = ["apple", "banana", "mango", "peach"];

    const result = binarySearch(elementStringList, "banana");

    expect(result).toBe("The element position is 2");
  });
});
