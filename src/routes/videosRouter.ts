// videosRouter.ts

// import modules
import express from 'express';

// import videos controller
import videosController from '../controllers/videosController';

// initialize router
const router = express.Router();

// define routes
router.get('/', videosController.getAllVideos);
router.get('/:id', videosController.getVideoById);
router.post('/', videosController.addVideo);
router.put('/:id', videosController.updateVideo);
router.delete('/:id', videosController.deleteVideo);

// export router
export default router;