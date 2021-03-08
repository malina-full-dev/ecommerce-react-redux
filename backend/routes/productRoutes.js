import express from 'express';
import {
  deletProductAdmin,
  getProductByCategory,
  getProductById,
  getProducts,
  updateProductAdmin,
} from '../controllers/productController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deletProductAdmin)
  .patch(protect, isAdmin, updateProductAdmin);

router.route('/category/:cat').get(getProductByCategory);

export default router;
