// pages/api/products/index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Retrieve all products
    try {
      const products = await prisma.product.findMany({
        include: {
          category: true
        },
      });
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving products' });
    }
  } else if (req.method === 'POST') {
    // Create a new product
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
      const product = await prisma.product.create({
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
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating product' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
