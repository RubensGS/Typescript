import { logarTempoDeExecucao } from "../helpers/decorators/index";

//namespace Views {

    //Tipo genérico em class <T>
  export abstract class View<T> {
    
        protected _elemento: JQuery;
        private _escapar: boolean;

        constructor(seletor: string, escapar: boolean = false){
    
            // this._elemento = document.querySelector(seletor);
            //Jquery - manipular DOM -> document.querySelector(seletor) = $(seletor)
            this._elemento = $(seletor);
            this._escapar = escapar;
        }
        
        @logarTempoDeExecucao(true)
        update(model: T): void{

            let template = this.template(model);
            if(this._escapar)
                template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
            this._elemento.html(this.template(model));

        }
    
        abstract template(model: T): string;
    
    }
//}