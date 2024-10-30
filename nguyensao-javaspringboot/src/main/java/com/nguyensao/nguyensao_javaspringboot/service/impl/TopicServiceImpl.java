package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.TopicDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Topic;
import com.nguyensao.nguyensao_javaspringboot.repository.TopicRepository;
import com.nguyensao.nguyensao_javaspringboot.service.TopicService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TopicServiceImpl implements TopicService {
    private TopicRepository topicRepository;

    @Override
    public List<Topic> index() {
        return topicRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<Topic> trash() {
        return topicRepository.findByStatus(0);
    }

    @Override
    public Topic show(Long id) {
        return topicRepository.findById(id).orElse(null);
    }

    @Override
    public Topic store(TopicDTO topicDTO) {
        Topic topic = new Topic();
        topic.setName(topicDTO.getName());
        topic.setSlug(topicDTO.getSlug());
        topic.setDescription(topicDTO.getDescription());
        topic.setCreatedAt(LocalDateTime.now());
        topic.setCreatedBy(1);
        topic.setStatus(1);
        return topicRepository.save(topic);
    }

    @Override
    public Topic update(Long id, TopicDTO topicDTO) {
        Topic topic = show(id);
        if (topic != null) {
            topic.setName(topicDTO.getName());
            topic.setSlug(topicDTO.getSlug());
            topic.setDescription(topicDTO.getDescription());
            topic.setUpdatedAt(LocalDateTime.now());
            topic.setUpdatedBy(1);
            return topicRepository.save(topic);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Topic topic = show(id); // gọi đến phương thức show
        if (topic != null) {
            topic.setStatus(topic.getStatus() == 1 ? 2 : 1);
            topicRepository.save(topic);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void delete(Long id) {
        Topic topic = show(id);
        if (topic != null) {
            if (topic.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            topic.setStatus(0);
            topicRepository.save(topic);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Topic topic = show(id);
        if (topic != null) {
            if (topic.getStatus() == 1) {
                throw new IllegalArgumentException("Không có topic nào.");
            }
            topic.setStatus(1);
            topicRepository.save(topic);
        } else {
            throw new EntityNotFoundException("Topic không tồn tại");
        }

    }

    @Override
    public void destroy(Long id) {
        Topic topic = show(id);
        if (topic != null) {
            topicRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Topic không tồn tại");
        }
    }
}
