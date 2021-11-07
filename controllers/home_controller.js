const Posts = require('../models/posts');

module.exports.home = function(req, res){

    Posts.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(
        function(err, posts){
            if(err){
                console.log(err);
                return('back');
            }
            return res.render('home',{
                title: "Homepage",
                posts: posts
            });
        }
    );
    
}