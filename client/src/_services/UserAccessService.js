import HttpService from './HttpService';
import RestConstants from './RestConstants';

export default {
    addUser: function (user) {
        return new Promise(function (resolve, reject) {
            HttpService.post(RestConstants.USERS, user)
                .then(result => {
                    console.log('UserAccessService ok');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('UserAccessService NOT ok');
                    return reject(err);
                })
        });
    },

    getUsers: function () {
        return new Promise(function (resolve, reject) {
            HttpService.get(RestConstants.USERS)
                .then(result => {
                    console.log('UserAccessService ok/ get user');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('UserAccessService NOT ok/ get user');
                    return reject(err);
                })
        });
    },

    getUser: function (id) {
        return new Promise(function (resolve, reject) {
            HttpService.get(RestConstants.USERS + id)
                .then(result => {
                    console.log('UserAccessService ok/ get user');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('UserAccessService NOT ok/ get user');
                    return reject(err);
                })
        });
    },
    updateUser: function (id, user) {
        return new Promise(function (resolve, reject) {
            HttpService.put(RestConstants.USERS + id, user)
                .then(result => {
                    console.log('UserAccessServicce ok/ update user');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('UserAccessService NOT ok/ update user');
                    return reject(err);
                })
        });
    }
}