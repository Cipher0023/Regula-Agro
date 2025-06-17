import { Router, Request, Response } from 'express';
import { createReader, getAllReaders, getReaderById, deleteReader, updateReaderById } from '../controllers/readerController';

const router = Router();

router.post('/create', createReader);
router.get('/getAll', getAllReaders);
router.get('/getById/:id', getReaderById);
router.patch('/update', updateReaderById);
router.delete('/delete',deleteReader)

export default router;