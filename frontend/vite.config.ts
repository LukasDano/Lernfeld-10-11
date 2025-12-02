import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        watch: false,
        include: ['test/**/*.{test,spec}.{js,ts,tsx}'],
        setupFiles: ['/test/setupTests.ts'],
    },
});
