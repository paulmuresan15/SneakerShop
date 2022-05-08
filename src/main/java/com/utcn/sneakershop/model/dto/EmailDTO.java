package com.utcn.sneakershop.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
public class EmailDTO {
    private String from;
    private String to;
    private String subject;
    private Map<String, Object> props;
    private String templatePath;

}
