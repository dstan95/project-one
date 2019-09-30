import HttpService from './HttpService';
import RestConstants from './RestConstants';

export default {
    addList: function (list) {
        return new Promise(function (resolve, reject) {
            HttpService.post(RestConstants.USERS, list)
                .then(result => {
                    console.log('ListAccessService ok');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('ListAccessService NOT ok');
                    return reject(err);
                })
        });
    },

    getLists: function () {
        return new Promise(function (resolve, reject) {
            HttpService.get(RestConstants.USERS)
                .then(result => {
                    console.log('ListAccessService ok/ get list');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('ListAccessService NOT ok/ get list');
                    return reject(err);
                })
        });
    },

    getList: function (id) {
        return new Promise(function (resolve, reject) {
            HttpService.get(RestConstants.USERS + id)
                .then(result => {
                    console.log('ListAccessService ok/ get list');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('ListAccessService NOT ok/ get list');
                    return reject(err);
                })
        });
    },
    updateList: function (id, list) {
        return new Promise(function (resolve, reject) {
            HttpService.put(RestConstants.USERS + id, list)
                .then(result => {
                    console.log('ListAccessServicce ok/ update list');
                    return resolve(result);
                })
                .catch(err => {
                    console.log('ListAccessService NOT ok/ update list');
                    return reject(err);
                })
        });
    },
    deleteList: function (id) {
        return new Promise(function (resolve, reject) {
            HttpService.delete(RestConstants.USERS + id)
            .then(result => {
                console.log('UsserAccessService ok/ delete list ');
                return resolve(result);
            })
            .catch(err => {
                console.log('ListAccessService NOT ok/ delete list' + id);
                return reject(err);
            })
        });
    }
}