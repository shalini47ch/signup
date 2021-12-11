import { render } from "@testing-library/react";
import Input from "./Input";

it('Renders the input with classname', () => {
  const { container } = render(<Input/>)
  expect(container.firstChild.classList.contains('Input')).toBe(true)
 
})
