package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.EmailDTO;
import com.utcn.sneakershop.model.dto.OrderProductDTO;
import com.utcn.sneakershop.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MailSenderService {
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine springTemplateEngine;

    @Autowired
    public MailSenderService(JavaMailSender javaMailSender, SpringTemplateEngine springTemplateEngine) {
        this.javaMailSender = javaMailSender;
        this.springTemplateEngine = springTemplateEngine;
    }

    public void sendOrderConfirmationEmail(User user, List<OrderProductDTO> orderProductDTOS) throws MessagingException, MalformedURLException, UnsupportedEncodingException {
        EmailDTO email = new EmailDTO();
        email.setFrom("SneakerShopTeam");
        email.setTo(user.getEmail());
        Map<String,Object> props = new HashMap<>();
        props.put("user",user);
        props.put("products",orderProductDTOS);
        email.setProps(props);
        email.setSubject("Order confirmation");
        email.setTemplatePath("email/ConfirmationEmail");
        sendEmail(email,orderProductDTOS);
    }

    private void sendEmail(EmailDTO emailDTO, List<OrderProductDTO> orderProductDTOS) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());
        Context context = new Context();
        context.setVariables(emailDTO.getProps());
        String html = springTemplateEngine.process(emailDTO.getTemplatePath(), context);
        helper.setTo(emailDTO.getTo());
        helper.setFrom(emailDTO.getFrom());
        helper.setSubject(emailDTO.getSubject());
        helper.setText(html, true);
        for(OrderProductDTO orderProductDTO : orderProductDTOS){
            helper.addInline(orderProductDTO.getProductPhoto(),new FileSystemResource(orderProductDTO.getProductPhoto()));
        }
        javaMailSender.send(message);
    }



}
