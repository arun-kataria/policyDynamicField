var mongoose = require('mongoose'),
    user = require("../models/user");
var connection = mongoose.connect('mongodb://localhost/policy_db', {
    useMongoClient: true
});

connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    user.find({}, function(err, data) {
        if (err) {
            console.log("Error on data Find: ",err);
        } else {
            if (data.length === 0)
                createAdmin();
            else console.log("Data already created");
        }
    });

    function createAdmin() {
        var model = new user({ 
            personalDeatails: [{
              label: 'First Name',
              key: 'firstName',
              type: 'input',
              fieldType: 'alpha_space',
              maxLength: 20,
              required: true
            },
            {
              label: 'Middle Name',
              key: 'middleName',
              type: 'input',
              fieldType: 'alpha_space',
              maxLength: 20,
              required: false
            },
            {
              label: 'Last Name',
              key: 'lastName',
              type: 'input',
              fieldType: 'alpha_space',
              maxLength: 20,
              required: true
            },
            ],
            otherDetails: [{
              label: 'Age',
              key: 'age',
              type: 'input',
              fieldType: 'numeric',
              maxLength: 20,
              required: true,
              dependent: [{
                id: 23,
                label: 'Voter ID',
                key: 'voterId',
                criteria: 18,
                type: 'input',
                maxLength: 20,
                required: true
              }],
            },
            {
              label: 'Country',
              key: 'country',
              type: 'dropdown',
              fieldType: 'alpha_space',
              maxLength: 20,
              required: true,
              api: 'http://localhost:4000/api/country',
              option: []
            }]
          });
        model.save(function(err, result) {
            if (err) {
                console.log("error on Data creation: ", err);
                return;
            }
            console.log("Data created:");
        });
    }
});

module.exports = connection;