import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AppContext, type AppContextValues } from '../../src/components/AppContext';
import { LeaderBoard } from '../../src/components/table/LeaderBoard.tsx';
import { fakeRanks, fakeRuns } from '../../src/data/mockData';
import type { Rank } from '../../src/data/types';

describe('LeaderBoard', () => {
    const mockAppContext: AppContextValues = {
        runList: fakeRuns,
        addRun: vi.fn(),
        rankList: fakeRanks,
        userId: 0,
        setUserId: vi.fn(),
    };

    const renderWithContext = (rankList?: Rank[]) => {
        const context: AppContextValues = rankList ? { ...mockAppContext, rankList: rankList } : mockAppContext;

        return render(
            <AppContext.Provider value={context}>
                <LeaderBoard />
            </AppContext.Provider>,
        );
    };

    it('renders all column headers', () => {
        renderWithContext();

        expect(screen.getByText('Platz')).toBeInTheDocument();
        expect(screen.getByText('Teilnehmer')).toBeInTheDocument();
        expect(screen.getByText('Gesamt Strecke')).toBeInTheDocument();
        expect(screen.getByText('Lauf Tage')).toBeInTheDocument();
    });

    it('renders all users in rankList', () => {
        renderWithContext();

        const rows = screen.getAllByRole('row').slice(1);
        expect(rows.length).toBe(fakeRanks.length);
    });

    it('displays correct ranking numbers', () => {
        renderWithContext();

        const rankCells = screen.queryAllByTestId('rank-cell');
        rankCells.forEach((cell, index) => {
            expect(cell.textContent).toBe(`${index + 1}.`);
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
