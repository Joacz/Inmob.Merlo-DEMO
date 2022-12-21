package com.joago.menlo_demo.service;

import com.joago.menlo_demo.model.EmailRequestDto;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

@Service
public class MailService {

  @Autowired
  private JavaMailSender mailSender;

  @Autowired
  private Configuration configuration;

  public String sendMail(EmailRequestDto request, Map<String, String> model) {
    String response;
    MimeMessage message = mailSender.createMimeMessage();
    try {
      MimeMessageHelper helper = new MimeMessageHelper(
        message,
        MimeMessageHelper.MULTIPART_MODE_NO,
        StandardCharsets.UTF_8.name()
      );
      Template template = configuration.getTemplate("email.ftl");
      String html = FreeMarkerTemplateUtils.processTemplateIntoString(
        template,
        model
      );
      helper.setTo(request.getTo());
      helper.setFrom(request.getFrom());
      helper.setSubject(request.getSubject());
      helper.setText(html, true);
      mailSender.send(message);
      response = "Email has been sent to :" + request.getTo();
    } catch (MessagingException | IOException | TemplateException e) {
      response = "ERROR: "+e;
    }
    return response;
  }
}
