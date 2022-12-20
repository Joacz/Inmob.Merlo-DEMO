package com.joago.menlo_demo.controller;

import com.joago.menlo_demo.model.EmailRequestDto;
import com.joago.menlo_demo.service.MailService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
public class EmailController {

  @Autowired
  private MailService mailService;

  @PostMapping("send")
  @CrossOrigin(origins = "*")
  public ResponseEntity<String> sendMail(@RequestBody EmailRequestDto emailRequest) {
    Map<String, String> model = new HashMap<>();
    model.put("name", emailRequest.getName());
    model.put("value", emailRequest.getDetails());
    model.put("affair", emailRequest.getSubject());
    model.put("email", emailRequest.getFrom());
    String response = mailService.sendMail(emailRequest, model);
    return new ResponseEntity<>(response, HttpStatus.OK);
  }
}
