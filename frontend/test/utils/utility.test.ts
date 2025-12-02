import { describe } from 'vitest';

import { runs } from '../../src/data/mockData';
import { getTotalDistanceFor } from '../../src/utils/utility';

describe('utility.getTotalDistanceFor', () => {
    // Nur Auszugsweise
    it('correct value for existing users', () => {
        expect(getTotalDistanceFor(1, runs)).toBe(22);
        expect(getTotalDistanceFor(2, runs)).toBe(21.5);
        expect(getTotalDistanceFor(4, runs)).toBe(12.1);
        expect(getTotalDistanceFor(7, runs)).toBe(8.2);
        expect(getTotalDistanceFor(10, runs)).toBe(22.1);
        expect(getTotalDistanceFor(11, runs)).toBe(5.5);
        expect(getTotalDistanceFor(14, runs)).toBe(28.2);
    });

    it('can handle none existing users', () => {
        expect(getTotalDistanceFor(123, runs)).toBe(0);
    });
});
