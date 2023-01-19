//const ghpages = require("gh-pages");
import ghpages from "gh-pages";

ghpages.publish(
	"build", // path to public directory
	{
		branch: "gh-pages",
		repo: "https://github.com/lgmdor/pomo.git", // Update to point to your repository
		user: {
			name: "lgmdor", // update to use your name
			email: "lgm.dor@gmail.com" // Update to use your email
		},
		dotfiles: false
	},
	() => {
		console.log("Deploy Complete!");
	}
);
