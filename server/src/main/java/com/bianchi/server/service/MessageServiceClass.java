package com.bianchi.server.service;

import com.bianchi.server.model.Message;
import com.bianchi.server.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceClass implements MessageService{

    @Autowired
    private MessageRepository messageRepository;
    @Override

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }
    @Override
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }
}
