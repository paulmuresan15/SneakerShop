package com.utcn.sneakershop.service;

import com.utcn.sneakershop.model.dto.CartProductDTO;
import com.utcn.sneakershop.model.dto.EmailDTO;
import com.utcn.sneakershop.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class MailSenderService {
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine springTemplateEngine;

    @Autowired
    public MailSenderService(JavaMailSender javaMailSender, SpringTemplateEngine springTemplateEngine) {
        this.javaMailSender = javaMailSender;
        this.springTemplateEngine = springTemplateEngine;
    }

    public void sendOrderConfirmationEmail(User user, List<CartProductDTO> cartProductDTOS){
        EmailDTO email = new EmailDTO();

//        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//        try{
//            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage,true);
//            messageHelper.setSubject("Order confirmation e-mail - SneakerShop");
//            messageHelper.setFrom("SneakerShopTeam");
//            messageHelper.setTo(user.getEmail());
//            messageHelper.(getOrderConfirmationEmail(user,cartProductDTOS),true);
//        } catch (MessagingException e) {
//            throw new RuntimeException(e);
//        }
    }

    private void sendEmail(EmailDTO emailDTO) throws MessagingException {
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
        javaMailSender.send(message);
    }



}
