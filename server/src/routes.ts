import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "49f5308d17f37f",
    pass: "e78c4091990d72",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await transport.sendMail({
    from: "Equipe Feedget <oi@feedback.com>",
    to: "Renan Aguiar <renan.modesto@grupomultiplica.com.br>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size:16px; color: #222222 ">`,
      `<p>Tipo do feedback: <strong> ${type}</strong></p>`,
      `<p>Comentário:<strong> ${comment}</strong></p>`,
      `</div>`,
    ].join("\n"),
  });
  res.status(201).json({ data: feedback });
});
