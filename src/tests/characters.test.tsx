import { render, cleanup } from "@testing-library/react"
import { debug } from "console";
import Character from '../components/character/Characters'

afterEach(cleanup)

describe("<Character />", () => {
  test("Should display Characters table", async () => {
     render(<Character />);
     debug()
  })
});