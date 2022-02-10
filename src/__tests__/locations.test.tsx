import { render, cleanup } from "@testing-library/react"
import Locations from '../components/locations/Locactions'

afterEach(cleanup)

describe("<Locations />", () => {
  test("Should display Locations table", async () => {
    render(<Locations />);

  })
});