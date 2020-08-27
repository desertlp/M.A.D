const router = require('express').Router();
const controllers = require('../controllers'); 
// const authRequired = require('../middleware/authRequired'); (for authorization, when the time comes)

router.get('/', controllers.user.index);
router.get('/:id', controllers.user.show); // only need this for feature page
// router.post('/', controllers.user.create); // router.post('/', authRequired, ctrl.games.create); (how to lock down route)
router.put('/:id', controllers.user.update); // lockdown
// router.delete('/:id', controllers.user.destroy); // lockdown

module.exports = router;