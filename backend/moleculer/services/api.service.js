"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			]
		}],
		
		aliases: {
			// Login
			"POST /users/login": "users.login",

			// Users
			"REST /users": "users",

			// Current user
			"GET /user": "users.me",
			"PUT /user": "users.updateMyself",

			// Articles
			"GET /articles/feed": "articles.feed",
			"REST /articles": "articles",
			"GET /tags": "articles.tags",

			// Comments
			"GET /articles/:slug/comments": "articles.comments",
			"POST /articles/:slug/comments": "articles.addComment",
			"PUT /articles/:slug/comments/:commentID": "articles.updateComment",
			"DELETE /articles/:slug/comments/:commentID": "articles.removeComment",

			// Favorites
			"POST /articles/:slug/favorite": "articles.favorite",
			"DELETE /articles/:slug/favorite": "articles.unfavorite",

			// Profile
			"GET /profiles/:username": "users.profile",
			"POST /profiles/:username/follow": "users.follow",
			"DELETE /profiles/:username/follow": "users.unfollow",
		},

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
