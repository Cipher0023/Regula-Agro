import e, { Request, Response } from 'express';
import { createReaderService, getAllReadersService, getReaderByIdService, updateReaderByIdService } from '../services/readerServices';

export async function createReader(req: Request, res: Response) {
  const data = req.body;
  const newReader = await createReaderService(data);
  res.status(201).json(newReader);
}

export async function getAllReaders(req: Request, res: Response) {
  const readers = await getAllReadersService();
  res.json(readers);
}

export async function getReaderById(req: Request, res: Response) {
  const { id } = req.params;
  const reader = await getReaderByIdService(id);
  if (!reader) {
    return res.status(404).json({ message: 'Reader not found' });
  }
  res.json(reader);
}

export async function updateReaderById(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const updatedReader = await updateReaderByIdService(id, data);
  if (!updatedReader) {
    return res.status(404).json({ message: 'Reader not found' });
  }
  res.json(updatedReader);
}

export async function deleteReader(req: Request, res: Response) {
  const { id } = req.params;
  const deleted = await createReaderService(id);
  if (!deleted) {
    return res.status(404).json({ message: 'Reader not found' });
  }
  res.status(204).send();
}