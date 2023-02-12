package com.bianchi.server.controller;

import com.bianchi.server.model.Message;
import com.bianchi.server.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @PostMapping("/post")
    public String saveMessage(@RequestBody Message message) {
        messageService.saveMessage(message);
        return "Message saved successfully";
    }

    @GetMapping("/getAll")
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    
}
