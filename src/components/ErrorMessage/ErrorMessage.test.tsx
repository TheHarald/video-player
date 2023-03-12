import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import ErrorMessage from "./ErrorMessage";


describe('Test ErrorMessage', () => {
    it('shuld be on screen', () => {
        render(<ErrorMessage message='Some error' />)
        expect(screen.getByText(/some error/i)).toBeInTheDocument();
    })
    it('shuld not be visible', () => {
        render(<ErrorMessage message='' />)
        expect(screen.queryByText(/error/i)).not.toBeInTheDocument()

    })
})