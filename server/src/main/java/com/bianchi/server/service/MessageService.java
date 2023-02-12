package com.bianchi.server.service;

import com.bianchi.server.model.Message;

import java.util.List;

public interface MessageService {
    public Message saveMessage(Message message);
    public List<Message> getAllMessages();

}
