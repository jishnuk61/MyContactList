var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jishnuk:jishnuk@ds159953.mlab.com:59953/mycontactlist', ['contacts']);

// Get All contacts
router.get('/contacts', function(req, res, next){
    db.contacts.find(function(err, contacts){
        if(err){
            res.send(err);
        }

       
        console.log(contacts);
        res.json(contacts);
    });
});


// Get Single contact
router.get('/contacts/:id', function(req, res, next){
    db.contacts.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, contact){
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
});


//Save Task
router.post('/contacts', function(req, res, next){
    var contact = req.body;
    console.log(contact);
    if(!contact.firstname || (!contact.mobile)){
        res.status(400);
        res.json({
            "error": "Bad Data",
            "contactObj":contact
        });
    } else {
        db.contacts.save(contact, function(err, contact){
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
});

// Delete Task
router.delete('/contacts/:id', function(req, res, next){
    console.log('contact id to be deleted = '+req.params.id);
    db.contacts.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, contact){
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
});

// Update contacts
router.put('/contacts/:id', function(req, res, next){
    var contact = req.body;
    var updContact = {};
    
    if(contact.lastname){
        updContact.lastname = contact.lastname;
    }
    if(contact.emailid){
        updContact.emailid = contact.emailid;
    }
    if(contact.mobile){
        updContact.mobile = contact.mobile;
    }
    
    
    if(!updContact){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.contacts.update({_id: mongojs.ObjectId(req.params.id)},updContact, {}, function(err, contact){
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
    }
});




module.exports = router;