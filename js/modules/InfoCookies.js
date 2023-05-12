import {Cookies} from "./Cookies.js";

export class InfoCookies extends Cookies{

    constructor() {

        super();

        this.InfoPlace = document.querySelector('.cookies');

        if(!this.getCookie('Accept')) {
            this.showInfo();
        }

    }

    showInfo(){
        this.InfoPlace.classList.add('show');
        this.InfoPlace.classList.remove('hide');
    }

    hideInfo(){
        this.InfoPlace.classList.add('hide');
        this.InfoPlace.classList.remove('show');
    }

    setCookie(){
        super.setCookie({
            name: 'Accept',
            value: 'yes',
            days: 90
        })
        this.hideInfo();
    }

}