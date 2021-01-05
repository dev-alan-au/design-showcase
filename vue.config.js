module.exports = {
	configureWebpack: () => {
		if (process.env.NODE_ENV === 'production') {
			// mutate config for production...
		} else {
			// mutate for development...
		}
		
		return {
			resolve: {
				alias : {
				},
				extensions: [
					".vue"
				]
			}
		}
	},
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "~@/assets/scss/settings.scss";
					@import "~@/assets/scss/mixins.scss";
				`
			}
		}
	}
}