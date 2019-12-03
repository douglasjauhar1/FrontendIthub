class Auth{
    constructor(){
        this.authinticated=''
        if (localStorage.getItem('login')) {
            this.authinticated = true
        } else {
            this.authinticated = false
        }
    }
  Loginauth(cb) {
      this.authinticated=true
      cb();
     
 }
 Logout(cb){
     this.authinticated=false
     cb();
 }
 isauthenticated(){
     return this.authinticated
 }
}
export default new Auth();