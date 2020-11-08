/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcryptjs');

module.exports = {

  attributes:{
    'username':{
      'type': 'string',
      'unique': true,
      'required': true
    },
    'password':'string'
  },

  beforeCreate: function(user, cb) {
    let saltRounds = 11;
    bcrypt.hash(user.password, saltRounds, (err, hash) => {
      if(err){
        console.log(err);
        return cb(err);
      }
      user.password = hash;
      return cb(null, user);
    });
  }

};
