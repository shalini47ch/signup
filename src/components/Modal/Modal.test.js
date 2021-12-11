import { render } from "@testing-library/react";
import Modal from "./Modal";

it('checks the modal component for form-elements classname', () => {
  const { container } = render(<Modal/>)
  expect(container.firstChild.classList.contains('form-elements')).toBe(true)
 
})




