declare module 'react-google-recaptcha' {
    import * as React from 'react';

    export interface ReCAPTCHAProps {
        sitekey: string;
        onChange?: (value: string | null) => void;
        onExpired?: () => void;
        onErrored?: () => void;
        theme?: 'light' | 'dark';
        size?: 'compact' | 'normal' | 'invisible';
        tabindex?: number;
        className?: string;
    }

    export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
        execute(): void;
        reset(): void;
    }
}
