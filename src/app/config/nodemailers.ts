// nodemailer.ts

// 라이브러리 불러오기
import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import dotenv from 'dotenv';

// .env 파일 로드
dotenv.config();

// .env 파일에서 이메일 주소와 비밀번호 가져오기
const email = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

type Props = {
  subject: string;
  content: string;
  attachments: Attachment[];
  senderEmail: string,
  emailContent: string
}



export const sendMail = ({ subject, content, attachments, senderEmail, emailContent }: Props) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      // service: 'gmail',
      host: "mail.abmlab.co.kr",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass
      }
    });

    transporter.sendMail({
      from: email,
      to: email,
      subject,
      html: content,
      attachments
    }, (error, info) => {
      // 메일 전송이 끝남
      console.log(error, info);
      if(error){
        reject(error)
      }else {
        // 메일 전송이 성공하면 발신자에게도 성공 메일을 보냅니다.
        transporter.sendMail({
          from: email,
          to: senderEmail,
          subject: '에이비엠랩에 지원해주셔서 감사합니다.',
          html: emailContent
        }, (error, info) => {
          if (error) {
            console.log('발신자에게 메일 전송 실패:', error);
          } else {
            console.log('발신자에게 메일 전송 성공:', info.response);
          }
        });
        resolve(info)
      }
    });
  })
}
// transporter 생성하기

