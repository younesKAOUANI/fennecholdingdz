// pages/api/categories/index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const categories = await prisma.category.findMany({
        include: { products: { include: { img: true } } },
      });
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving categories' });
    }
  } else if (req.method === 'POST') {
    const { name, img } = req.body;

    try {
      const category = await prisma.category.create({
        data: {
          name,
          img,
        },
      });
      return res.status(201).json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error creating category' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
