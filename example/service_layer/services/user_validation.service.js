"use strict";
var fs = require('fs');

module.exports = {
	name: "userValidation",

	/**
	 * Service settings
	 */
	settings: {

		validUserList: [{
			userName:'Peter',
			password:'123'
		}]

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		validate: {
			params: {
				userName: "string",
				password: "string"
			},
			handler(ctx) {
				return this.validateUser(ctx);
			}
		}


	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {


		// private funtions are delcared here
		validateUser(ctx) {
			let THIS = this;
			// return new Promise(function (resolve) {
			// 	// Validate from the Pre-loaded users
			// 	if (THIS.settings.validUserList.hasOwnProperty(ctx.params.username)) {
			// 		let password = THIS.settings.validUserList[ctx.params.username];
			// 		password == ctx.params.password ? resolve({ valid: true }) : resolve({ valid: false });
			// 	} else {
			// 		resolve({ valid: false })
			// 	}
			// });
			return new Promise(function (resolve) {
				// Validate from the Pre-loaded users
				if (THIS.settings.validUserList.hasOwnProperty(ctx.params.username)) {
					let password = THIS.settings.validUserList[ctx.params.username];
					password == ctx.params.password ? resolve({ valid: true }) : resolve({ valid: false });
				} else {
					resolve({ valid: false })
				}
			});
		}


	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

		
		this.settings.validUserList = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};