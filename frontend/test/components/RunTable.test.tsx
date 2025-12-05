import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AppContext, type AppContextValues } from '../../src/components/AppContext';
import { RunTable } from '../../src/components/table/RunTable';
import { fakeRanks, fakeRuns } from '../../src/data/mockData';
import type { Run } from '../../src/data/types';

describe('RunTable', () => {
    const mockAppContext: AppContextValues = {
        runList: fakeRuns,
        addRun: vi.fn(),
        rankList: fakeRanks,
        userId: 0,
        setUserId: vi.fn(),
    };

    const renderWithContext = (runList?: Run[]) => {
        const context: AppContextValues = runList ? { ...mockAppContext, runList: runList } : mockAppContext;

        return render(
            <AppContext.Provider value={context}>
                <RunTable />
            </AppContext.Provider>,
        );
    };

    it('column heads get generated', () => {
        renderWithContext();

        expect(screen.getByText('Teilnehmer')).toBeInTheDocument();
        expect(screen.getByText('Strecke')).toBeInTheDocument();
        expect(screen.getByText('Datum')).toBeInTheDocument();
    });

    it('renders all possible rows', () => {
        renderWithContext();

        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(fakeRuns.length + 1);
    });

    it('renders runs in descending date order', () => {
        renderWithContext();

        const dateCells = screen.getAllByRole('cell', { name: /\d{4}-\d{2}-\d{2}/ });
        const dates = dateCells.map((cell) => cell.textContent!);

        const sortedDates = [...dates].sort((a, b) => b.localeCompare(a));
        expect(dates).toEqual(sortedDates);
    });

    it('renders distance with "km" suffix', () => {
        renderWithContext();

        fakeRuns.forEach((run) => {
            expect(screen.getByText(`${run.distance_km} km`)).toBeInTheDocument();
        });
    });

    it('applies alternating row backgrounds', () => {
        renderWithContext();

        const rows = screen.getAllByRole('row').slice(1);
        rows.forEach((row, index) => {
            const expectedClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
            expect(row.className).toContain(expectedClass);
        });
    });
});
