const router = require('express').Router();
const controllers = require('../controllers'); 
const authRequired = require('../middleware/authRequired'); //(for authorization, when the time comes)

router.get('/', controllers.video.index);
router.get('/:id', controllers.video.show); // only need this for feature page
router.post('/', authRequired, controllers.video.create); // auth required responds from here if not a valid token/not logged in
router.put('/:id/', controllers.video.update); // lockdown
router.delete('/:id/', controllers.video.destroy); // lockdown

module.exports = router;
