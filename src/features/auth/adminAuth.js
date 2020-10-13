class AdminAuth{
  constructor() {
    this.authenticated = localStorage.getItem('admin-name') ? true: false;
    //this.authenticated = false;
  }
  login(cb){
    this.authenticated = true;
    cb();
  }
  logOut(cb){
    this.authenticated = false;
    
  }
  isAuthenticated(){
    return this.authenticated;
  }
} 
export default new AdminAuth();