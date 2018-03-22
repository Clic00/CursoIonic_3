import { Injectable } from "@angular/core";

let setupKeyConst = "setup";

@Injectable()
export class SetupProvider {

    private setup = {
        showSlide: false,
        nome: "",
        username:""    
    }

    constructor() {
    }

    // Recupera os dados do LocalStorage
    getSetupData(): any {
       return localStorage.getItem(setupKeyConst);
    }
    //Grava dados no LocalStorage 
    setSetupData(showSlide?: boolean, nome?: string, username?: string) {
        let setup = {
                showSlide: false,
                nome: "",
                username:""    
            };
        if(showSlide) {
            setup.showSlide = showSlide;
        }

        if(nome) {
            setup.nome = nome;
        }
        
        if(username) {
            setup.username = nome;
        }

        localStorage.setItem(setupKeyConst, JSON.stringify(setup));
    }
}