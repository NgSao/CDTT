package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.TopicDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Topic;

public interface TopicService {
    List<Topic> index();

    List<Topic> trash();

    Topic show(Long id);

    Topic store(TopicDTO topicDTO);

    Topic update(Long id, TopicDTO topicDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);

}
