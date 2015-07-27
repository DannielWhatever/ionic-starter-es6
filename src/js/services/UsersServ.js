
export default angular
.module('starter.services')
.factory('UsersServ', () => {

  let _users = [{
    id: 10, //internal id
    facebookId:null,//123214124,
    email: 'dannielgutierrez90@gmail.com',
    passwd: '',
    nick: '',
    avatar: '' //trata de obtenerla de fb
  }]; //add passwd and another shit just in the rest


/**
 * Public Interface
 */
  return {

    /**
     * Description of what this does.
     *
     * @param
     * @returns
     */
    doWhatever: ()=>{
      return _users[0];
    }

  };
});
