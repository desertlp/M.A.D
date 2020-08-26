const router = require('express').Router();
const controllers = require('../controllers'); 
// const authRequired = require('../middleware/authRequired'); (for authorization, when the time comes)

router.get('/', controllers.video.index);
router.get('/:id', controllers.video.show); // only need this for feature page
router.post('/', controllers.video.create); // router.post('/', authRequired, ctrl.games.create); (how to lock down route)
router.put('/:id', controllers.video.update); // lockdown
router.delete('/:id', controllers.video.destroy); // lockdown

module.exports = router;
