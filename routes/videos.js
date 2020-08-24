const router = require('express').Router();
const controllers = require('../controllers'); 
// const authRequired = require('../middleware/authRequired'); (for authorization, when the time comes)

router.get('/', controllers.videos.index);
router.get('/:id', controllers.videos.show); // only need this for feature page
router.post('/', controllers.videos.create); // router.post('/', authRequired, ctrl.games.create); (how to lock down route)
router.put('/:id', controllers.videos.update); // lockdown
router.delete('/:id', controllers.videos.destroy); // lockdown

module.exports = router;
