import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default function sendGmail(req: NextApiRequest, res:NextApiResponse){
  
  if (!req.body.name || !req.body.email || !req.body.message || !req.body.tel) {
    return res.status(400).send('必要なデータが不足しています。');
  }



  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD
    }
  });

  //管理人が受け取るメールの設定

  const toHostMailData = {
    from: req.body.email,
    to: "s20970059@nucba.ac.jp",
    subject: `[お問い合わせ] ${req.body.name}様より`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
      <p>[名前]</p>
      <p>${req.body.name}</p>
      <p>[メッセージ内容]</p>
      <p>${req.body.message}</p>
      <p>[メールアドレス]</p>
      <p>${req.body.email}</p>
      <p>電話番号</p>
      <p>${req.body.tel}</p>
    `
  };

  transporter.sendMail(toHostMailData, function(err, info) {
    if(err) console.log(err);
    else console.log(info);
  });

  return res.send("成功しました") ;
}

// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
//   // データの存在確認
//   if (!req.body.name || !req.body.email || !req.body.message || !req.body.tel) {
//     return res.status(400).send('必要なデータが不足しています。');
//   }

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     auth: {
//       user: process.env.GMAILUSER,
//       pass: process.env.GMAILPASSWORD
//     }
//   });

//   const toHostMailData = {
//     from: req.body.email,
//     to: "s20970059@nucba.ac.jp",
//     subject: `[お問い合わせ] ${req.body.name}様より`,
//     text: `${req.body.message} Send from ${req.body.email}`,
//     html: `
//       <p><strong>[名前]</strong> ${req.body.name}</p>
//       <p><strong>[メッセージ内容]</strong> ${req.body.message}</p>
//       <p><strong>[メールアドレス]</strong> ${req.body.email}</p>
//       <p><strong>[電話番号]</strong> ${req.body.tel}</p>
//     `
//   };

//   transporter.sendMail(toHostMailData, function(err, info) {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('メール送信に失敗しました。');
//     }
//     console.log(info);
//     return res.send("成功しました");
//   });
// }
