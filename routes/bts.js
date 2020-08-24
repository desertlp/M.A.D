const router = require('express').Router();
const controllers = require('../controllers'); 
// const authRequired = require('../middleware/authRequired'); (for authorization, when the time comes)

router.get('/', controllers.bts.index);
router.get('/:id', controllers.bts.show); // only need this for feature page
router.post('/', controllers.bts.create); // router.post('/', authRequired, ctrl.games.create); (how to lock down route)
router.put('/:id', controllers.bts.update); // lockdown
router.delete('/:id', controllers.bts.destroy); // lockdown

module.exports = router;
