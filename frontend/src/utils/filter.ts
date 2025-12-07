import type { AcceptedFilterOptions } from '../components/modal/FilterModal.tsx';
import type { SelectOption } from '../components/miscellaneous/MultipleValueSelector.tsx';
import type { Rank } from '../data/types.ts';

export const genders = ['Männlich', 'Weiblich', 'Divers'];
export const ageGroups = ['u15', 'ü15'];

export const genderFilterOptions: SelectOption[] = genders.map((gender) => ({
    value: gender,
    label: gender,
    selected: true,
}));

export const ageGroupsFilterOptions: SelectOption[] = ageGroups.map((age) => ({
    value: age,
    label: age,
    selected: true,
}));

export const defaultFilter: AcceptedFilterOptions = {
    ageGroups: ageGroups,
    genders: genders,
};

const isU15 = (birthday: string) => {
    const birth = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
    return age < 15;
};

export const matchesFilters = (item: Rank, filters: AcceptedFilterOptions): boolean => {
    const genderMap: Record<string, string> = {
        m: 'Männlich',
        w: 'Weiblich',
        d: 'Divers',
    };

    // ---- Age filter ----
    if ('geburtsdatum' in item && filters.ageGroups?.length > 0) {
        const isUnder15 = isU15(item.geburtsdatum);

        const ageMatch =
            (filters.ageGroups.includes('u15') && isUnder15) || (filters.ageGroups.includes('ü15') && !isUnder15);

        if (!ageMatch) return false;
    }

    // ---- Gender filter (angepasst an m/w/d) ----
    if ('geschlecht' in item && filters.genders?.length > 0) {
        const mappedGender = genderMap[item.geschlecht.toLowerCase()];

        if (!filters.genders.includes(mappedGender)) {
            return false;
        }
    }

    return true;
};
