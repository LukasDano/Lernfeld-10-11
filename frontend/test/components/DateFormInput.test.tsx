import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DateFormInput } from '../../src/components/miscellaneous/DateFormInput.tsx';

describe('DateFormInput', () => {
    it('renders the label', () => {
        render(<DateFormInput label="Startdatum" value="2025-01-01" onChange={() => {}} />);
        expect(screen.getByText('Startdatum')).toBeInTheDocument();
    });

    it('renders the input with correct value', () => {
        render(<DateFormInput label="Datum" value="2025-01-01" onChange={() => {}} />);
        const input = screen.getByLabelText('Datum') as HTMLInputElement;
        expect(input.value).toBe('2025-01-01');
    });

    it('calls onChange with the entered date', () => {
        const onChange = vi.fn();
        render(<DateFormInput label="Datum" value="2025-01-01" onChange={onChange} />);
        const input = screen.getByLabelText('Datum');

        fireEvent.change(input, { target: { value: '2025-02-10' } });

        expect(onChange).toHaveBeenCalledWith('2025-02-10');
    });

    it('calls onChange with today’s date when cleared', () => {
        const onChange = vi.fn();
        render(<DateFormInput label="Datum" value="2025-01-01" onChange={onChange} />);
        const input = screen.getByLabelText('Datum');

        const today = new Date().toISOString().split('T')[0];

        fireEvent.change(input, { target: { value: '' } });

        expect(onChange).toHaveBeenCalledWith(today);
    });

    it('updates the displayed value when props change', () => {
        const { rerender } = render(<DateFormInput label="Datum" value="2025-01-01" onChange={() => {}} />);

        let input = screen.getByLabelText('Datum') as HTMLInputElement;
        expect(input.value).toBe('2025-01-01');

        rerender(<DateFormInput label="Datum" value="2025-03-10" onChange={() => {}} />);

        input = screen.getByLabelText('Datum') as HTMLInputElement;
        expect(input.value).toBe('2025-03-10');
    });
});
