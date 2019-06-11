export default class View {
    constructor(viewElement){
        this.listContainer = viewElement;
        // this.listContainer = viewElement.querySelector("ul");
    }
    setGists(gists) {
        gists.forEach((gist) => {
            let gistElm = this.createGist(gist);
            this.listContainer.appendChild(gistElm);
        })
    }

    createGist(gist) {
        const listElm = document.createElement('li');
        let urlElm = this.createElmWithVal('div',gist.url);
        let userElm = this.createElmWithVal('div',gist.userId);
        let avatarElm = this.createElmWithVal('div',gist.avatar);
        listElm.appendChild(urlElm);
        listElm.appendChild(userElm);
        listElm.appendChild(avatarElm);
        return listElm;
    }

    createElmWithVal(elm,val) {
        const newElm = document.createElement(elm);
        newElm.innerText = val;
        return newElm;
    }
}