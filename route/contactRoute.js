const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req,res) => {
  let data = req.body;
  if(data.userName.length === 0 || data.email.length === 0 || data.message.length === 0 ){
    return res.json({msg : 'Please fill all the fields'});
  }

  let smtpTransporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user : 'sagarshukla010@gmail.com',
      pass: 'qgsfbyaraqsybrsl' //This is the app password of sagarshukla010@gmail.com
    }
  });

  let mailOptions = {
    from: data.email,
    to : 'sagarshukla010@gmail.com',
    subject: `Message from ${data.userName}`,
    html: `
    <h3>Details of the user: </h3>
    <ul>
    <li>Name: ${data.userName}<li>
    <li>Email: ${data.email}<li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
    `
  }

  smtpTransporter.sendMail(mailOptions,(error)=>{
    try{
      if(error){
        console.log("The system has generated one error: ", error);
        return res.status(400).json({msg: "please fill all the fields"})
      };
      return res.status(200).json({msg: "Thank you for contacting me!"});
    } catch(error){
      if(error) return res.status(400).json({msg: "There is server error"});
    }
  })
})

module.exports = router;