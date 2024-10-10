package com.bank.email.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String fromMail;

    @Async
    public void sendOtpEmail(String toEmail, String otp) throws MessagingException {
        String subject = "Your OTP Code";

        // Prepare Thymeleaf context with the OTP variable
        Context context = new Context();
        context.setVariable("otp", otp);

        // Process the Thymeleaf template to generate HTML content
        String htmlContent = templateEngine.process("otp-email", context);

        // Send the email with the generated HTML content
        sendMail(toEmail, subject, htmlContent, true);
    }

    @Async
    private void sendMail(String toEmail, String subject, String message, boolean isHTML) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

        mimeMessageHelper.setFrom(fromMail);
        mimeMessageHelper.setTo(toEmail);
        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.setText(message, isHTML);

        mailSender.send(mimeMessage);
    }
}
