import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AppContext } from '../../src/components/AppContext';
import { RunTable } from '../../src/components/table/RunTable';
import { runs, users } from '../../src/data/mockData';
import type { Run } from '../../src/data/types';

describe('RunTable', () => {
    const mockAppContext = {
        runList: runs,
        addRun: vi.fn(),
        userList: users,
        addUser: vi.fn(),
    };

    const renderWithContext = (runList?: Run[]) => {
        const context = runList ? { ...mockAppContext, runList: runList } : mockAppContext;

        return render(
            <AppContext.Provider value={context}>
                <RunTable />
            </AppContext.Provider>,
        );
    };

    it('rendert Tabellenüberschriften', () => {
        renderWithContext();

        expect(screen.getByText('Teilnehmer')).toBeInTheDocument();
        expect(screen.getByText('Strecke')).toBeInTheDocument();
        expect(screen.getByText('Datum')).toBeInTheDocument();
    });

    it('rendert so viele Zeilen wie Läufe vorhanden sind', () => {
        renderWithContext();

        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(runs.length + 1);
    });

    it('sortiert die Läufe im UI nach Datum (neuste zuerst)', () => {
        const runs: Run[] = [
            { id: 1, userId: 1, date: '2023-01-01', distanceKm: 10, picture: '' },
            { id: 2, userId: 2, date: '2023-05-01', distanceKm: 8, picture: '' },
            { id: 3, userId: 3, date: '2022-12-10', distanceKm: 15, picture: '' },
        ];

        renderWithContext(runs);
        const dateCells = screen.getAllByText(/2023-|2022-/);

        expect(dateCells[0]).toHaveTextContent('2023-05-01');
        expect(dateCells[1]).toHaveTextContent('2023-01-01');
        expect(dateCells[2]).toHaveTextContent('2022-12-10');
    });

    it('rendert für jeden Lauf eine UserColumn', () => {});

    it('zeigt für jeden Lauf die korrekte Distanz und das korrekte Datum an', () => {
        const runs: Run[] = [{ id: 1, userId: 5, date: '2023-03-03', distanceKm: 13, picture: '' }];

        renderWithContext(runs);

        expect(screen.getByText('13 km')).toBeInTheDocument();
        expect(screen.getByText('2023-03-03')).toBeInTheDocument();
    });
});
