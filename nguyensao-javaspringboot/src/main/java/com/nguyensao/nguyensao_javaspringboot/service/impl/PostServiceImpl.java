package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.PostDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Post;
import com.nguyensao.nguyensao_javaspringboot.entity.Topic;
import com.nguyensao.nguyensao_javaspringboot.repository.PostRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.TopicRepository;
import com.nguyensao.nguyensao_javaspringboot.service.PostService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final TopicRepository topicRepository;

    @Override
    public List<Post> index() {
        return postRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<Post> trash() {
        return postRepository.findByStatus(0);
    }

    @Override
    public Post show(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    @Override
    public Post store(PostDTO postDTO) {
        Optional<Topic> optionalTopic = topicRepository.findById(postDTO.getTopicId());
        if (optionalTopic.isPresent()) {
            Topic topic = optionalTopic.get();
            Post post = new Post();
            post.setTitle(postDTO.getTitle());
            post.setSlug(postDTO.getSlug());
            post.setContent(postDTO.getContent());
            post.setDescription(postDTO.getDescription());
            post.setThumbnail(postDTO.getThumbnail());
            post.setTypePost(postDTO.getTypePost());
            post.setTopic(topic);
            post.setCreatedAt(LocalDateTime.now());
            post.setCreatedBy(1);
            post.setStatus(1);
            return postRepository.save(post);
        }
        throw new EntityNotFoundException("Không tồn tại");
    }

    @Override
    public Post update(Long id, PostDTO postDTO) {
        // Post post = postRepository.findById(id).orElse(null); C1
        Post post = show(id); // C2
        if (post != null) {
            post.setTitle(postDTO.getTitle());
            post.setSlug(postDTO.getSlug());
            post.setContent(postDTO.getContent());
            post.setDescription(postDTO.getDescription());
            post.setThumbnail(postDTO.getThumbnail());
            if (postDTO.getTopicId() != null) {
                Optional<Topic> optionalTopic = topicRepository.findById(postDTO.getTopicId());
                if (optionalTopic.isPresent()) {
                    Topic topic = optionalTopic.get();
                    post.setTopic(topic);
                } else {
                    throw new EntityNotFoundException("Topic không tồn tại với id: " + postDTO.getTopicId());
                }
            }
            post.setUpdatedAt(LocalDateTime.now());
            post.setUpdatedBy(1);
            return postRepository.save(post);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Post post = show(id);
        if (post != null) {
            post.setStatus(post.getStatus() == 1 ? 2 : 1);
            postRepository.save(post);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void delete(Long id) {
        Post post = show(id);
        if (post != null) {
            if (post.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            post.setStatus(0);
            postRepository.save(post);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Post post = show(id);
        if (post != null) {
            if (post.getStatus() == 1) {
                throw new IllegalArgumentException("Không có topic nào.");
            }
            post.setStatus(1);
            postRepository.save(post);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void destroy(Long id) {
        Post post = show(id);
        if (post != null) {
            postRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
