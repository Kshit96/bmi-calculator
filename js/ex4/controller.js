import axios from "axios";

export default class Controller {
    constructor(view) {
        this.view = view;
    }

    loadGists() {
        const view = this.view;
        const self = this;
        axios.get("http://api.github.com/gists/public")
            .then(function (response) {
            // handle success
                const gists = self.extractGists(response);

            view.setGists(gists);
        })
    }

    extractGists(response) {
        const gists = response.data.map((gist) => {
            return {
                url: gist.url,
                userId: gist.owner.login,
                avatar: gist.owner.avatar_url
            }
        });
        return gists;
    }
}