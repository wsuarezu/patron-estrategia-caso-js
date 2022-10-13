interface Estrategia{
    login(user: string, password: string): boolean;
}

class LoginContext{

    private estrategia: Estrategia;

    constructor(estrategia: Estrategia){
        this.estrategia = estrategia;
    }

    setEstrategia(estrategia: Estrategia){
        this.estrategia = estrategia;
    }

    login(user: string, password: string): boolean{
        return this.estrategia.login(user, password); 
    }
}

class loginDBStrategy implements Estrategia{

    login(user: string, password: string): boolean {

        console.log('Nos dirigimos a la base de datos');

        if(user === 'admin' && password === '123' ){
            return true;
        }

        return false;
        
    }

}

class loginServiceStrategy implements Estrategia{

    login(user: string, password: string): boolean {

        console.log('Nos dirigimos a un servicio de autentitficación');

        if(user === 'admin' && password === '123' ){
            return true;
        }

        return false;
        
    }

}

const auth = new LoginContext(new loginDBStrategy());
const resp = auth.login("admin", "1234");

console.log(resp);

auth.setEstrategia(new loginServiceStrategy());
const resp2 = auth.login('admin', '123');
console.log(resp2);