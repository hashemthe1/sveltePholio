import nodemailer from 'nodemailer'
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS.replaceAll("-", ' ')
    }
  });

export const sendMail =async(subject:string , content: string) => {
    await transporter.sendMail({
        from: EMAIL_USER,
        to: EMAIL_USER,
        subject: subject,
        text: content
      })
}

export const sendContact =async(data: any) => {
    await sendMail("CONTACT FORM!", JSON.stringify(data))
}