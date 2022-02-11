import { render, cleanup } from "@testing-library/react"
import { debug } from "console"
import Episodes from '../components/episode/Episodes'

afterEach(cleanup)

describe("<Episodes />", () => {
  test("Should display Episodes table", async () => {
     render(<Episodes />);
     debug();
  })
});