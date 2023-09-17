import { RequestHandler } from "express";
import { PrismaClient, shortUrl } from "@prisma/client";
const prisma = new PrismaClient();

const redirecter: RequestHandler = async (req, res) => {
  const shortUrlId = req.params.url;
  try {
    const shortUrl: shortUrl = await prisma.shortUrl.findFirst({
      where: { shortUrlId },
    });
    shortUrl.clickCount += 1;
    await prisma.shortUrl.update({
      where: { id: shortUrl.id },
      data: { clickCount: shortUrl.clickCount },
    });
    res.redirect(shortUrl.rawUrl);
  } catch (error) {
    console.log(error);
  }
};

export default redirecter;
