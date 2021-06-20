const router = require("express").Router();
const workers = require("../controllers/worker_controller");

router.post('/checkPermission', workers.checkPermission);
router.get('/getWorkerById/:id', workers.getEmployedById);
router.post('/newWorker', workers.setNewEmployed);
router.post("/updateWorker/:id", workers.updateEmployed);
router.get('/getAllWorkers', workers.getAllEmployed);

module.exports = router;