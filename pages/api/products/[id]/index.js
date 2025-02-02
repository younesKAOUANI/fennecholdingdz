// pages/api/products/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          img: true,
          highlights: true,
        },
      });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      console.log(product);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving product' });
    }
  } else if (req.method === 'PUT') {
    // Update a product by id
    const {
      name,
      img,
      specification,
      configurations,
      categoryId,
      highlights,
      datasheet,
      brochure,
    } = req.body;

    try {
      const updatedProduct = await prisma.product.update({
        where: { id },
        data: {
          name,
          img,
          specification,
          configurations,
          categoryId,
          highlights,
          datasheet,
          brochure,
        },
      });
      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: 'Error updating product' });
    }
  } else if (req.method === 'DELETE') {
    // Delete a product by id
    try {
      await prisma.product.delete({ where: { id } });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: 'Error deleting product' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
