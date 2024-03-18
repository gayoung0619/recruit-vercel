import { sendMail } from "@/app/config/nodemailers";
import { Attachment } from "nodemailer/lib/mailer";
import { noticeInfo } from "@/app/_lib/notice";
import fs from 'fs';
export async function POST(request: Request) {
  const data = await request.json();
  const labelfilter = noticeInfo.find((item) => Number(item.id) === Number(data.id))?.label;
  const mailfilter = noticeInfo.find((item) => Number(item.id) === Number(data.id))?.position;

// 이미지 파일을 읽어와서 Base64로 변환
  const imagePath = './public/images/mail_receive.png';
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = Buffer.from(imageBuffer).toString('base64');

// HTML에 이미지를 인라인으로 삽입
  const emailContent = `
    <img src="data:image/png;base64,${base64Image}" alt="지원 성공 이미지" width="100%">
`;
  const isEmpty = (file: any) => {
    return !file || Object.keys(file).length === 0;
  };
  const attachments = [data.fileIntro, data.fileResume]
    .filter(v => !isEmpty(v)) // 비어 있지 않은 파일만 필터링
    .map<Attachment>(({ name, path }) => ({
      path,
      filename: name
    }));
    try {
      await sendMail({
        subject: `[${labelfilter}/${mailfilter}] 이력서 제출`, //제목 [타이틀] 이력서 제출
        content: `
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">이름:</strong> ${data.name}</div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">이메일:</strong> ${data.email}</div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">전화번호:</strong><span style="display: block">${data.phoneNumber}</span></div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">자기소개:</strong><span style="display: block">${data.intro}</span></div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">자신의 강점:</strong><span style="display: block">${data.strength}</span></div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">연봉 정보:</strong>${data.annualSalary}만원</div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">개인정보 필수항목 수집 및 이용동의:</strong>${data.requiredAgreement? "동의" : "비동의"}</div>
                <div style="margin-bottom: 20px"><strong style="font-size: 16px">개인정보 선택항목 수집 및 이용동의:</strong>${data.optionalAgreement? "동의" : "비동의"}</div>        
`,
        attachments,
        senderEmail: data.email,
        emailContent
      });
      return Response.json(null, { status: 200 });
    } catch (error) {
      return Response.json({
        error: '문제가 발생하였습니다.'
      }, { status: 400 });
    }
  
}