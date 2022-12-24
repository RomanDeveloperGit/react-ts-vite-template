import postcssPresetEnv from 'postcss-preset-env';
import sortMediaQueries from 'postcss-sort-media-queries';

export default ({ env: mode }) => {
    const isDevMode = mode === 'development';
    if (isDevMode) return [];

    return {
        plugins: [
            postcssPresetEnv({
                autoprefixer: {
                    grid: 'autoplace',
                },
            }),
            sortMediaQueries({
                sort: 'desktop-first',
            }),
        ],
    };
};
