import { MailAdapter, sendMailData } from "../mail.adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "49f5308d17f37f",
    pass: "e78c4091990d72",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe Feedback <oi@Feedget.com>",
      to: "Renan Aguiar <nan-aguiar@hotmail.com>",
      subject: subject,
      html: body,

    });
  }
}
