const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/users_controller');
const postsController = require('../controllers/posts_controller');

router.get('/profile', passport.checkAuthentication, userController.profile);
router.get('/posts', postsController.posts);
router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.get('/sign-out', userController.destroySession);

router.post('/create', userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
) ,userController.createSession);

module.exports = router;