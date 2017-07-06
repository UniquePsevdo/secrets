export class AuthService{
    signedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.signedIn);
            },800)
        });
        return promise;
    }

    signIn(){
        this.signedIn = true;
    }

    signOut(){
        this.signedIn = false;
    }
}