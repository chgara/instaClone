module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: [
						'.js',
						'.jsx',
						'.es',
						'.es6',
						'.mjs',
						'.ts',
						'.tsx',
					],
					alias: {
						hooks: './src/hooks',
						components: './src/components',
						assets: './assets',
					},
				},
			],
		],
	};
};
