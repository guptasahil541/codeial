const Post = require('../models/posts');

module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, 
    function(err, post){
        if(err){
            console.log(err);
            return res.redirect('back');
        }
        return res.redirect('back');
    });
}