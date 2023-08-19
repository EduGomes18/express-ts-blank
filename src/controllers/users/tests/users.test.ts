import { getUsers } from "../index";

describe("User controler", () => {
  test("Get users", () => {
    const fakeUsers = ["Goon", "Tsuki", "Joe"];
    const allUsers = getUsers();
    expect(allUsers).toEqual(fakeUsers);
  });
});
