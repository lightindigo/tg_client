export class Router{
    private static instance;
    private routesStrict = new Map<string,any>();

    private constructor(){

    }

    public static getInstance(): Router{
        if(typeof this.instance === 'undefined'){
            this.instance = new Router();
        }

        return this.instance;
    }

    private onRouteChange(){

    }
}