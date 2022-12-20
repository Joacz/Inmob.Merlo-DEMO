package com.joago.menlo_demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailRequestDto {

  private String from;
  private String to = "joagomez2007@gmail.com";
  private String subject;
  private String details;
  private String name;

}
