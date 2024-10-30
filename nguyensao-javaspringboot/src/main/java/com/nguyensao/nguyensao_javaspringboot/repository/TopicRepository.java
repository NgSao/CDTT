package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyensao.nguyensao_javaspringboot.entity.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long> {
    List<Topic> findByStatus(Integer status);

    List<Topic> findByStatusIn(List<Integer> statusList);

}
