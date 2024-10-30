package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.PostDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Post;

public interface PostService {
    List<Post> index();

    List<Post> trash();

    Post show(Long id);

    Post store(PostDTO postDTO);

    Post update(Long id, PostDTO postDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);

}
