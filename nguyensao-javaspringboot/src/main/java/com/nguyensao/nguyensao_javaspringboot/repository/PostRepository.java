package com.nguyensao.nguyensao_javaspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByStatus(Integer status);

    List<Post> findByStatusIn(List<Integer> statusList);

}
