import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.startup(() => {

  const userSchema = new SimpleSchema({
    _id: { type: String },
    emails: { type: Array },
    'emails.$': { type: Object },
    'emails.$.address': { type: String },
    'emails.$.verified': { type: Boolean },
    services: { type: Object, blackbox: true },
    firstname: { type: String, min: 2 },
    lastname: { type: String, min: 2 },
    createdAt: { type: Date },
    username: {type: String}
  });
  // If the Links collection is empty, add some data.
  Accounts.onCreateUser((options, user) => {
    user.lastname = options.lastname;
    user.firstname = options.firstname;
    return user;
  });

  Accounts.validateNewUser((user) => { 
    userSchema.validate(user);
    return true;
  });
});
