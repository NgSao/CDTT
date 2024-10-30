package com.nguyensao.nguyensao_javaspringboot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.nguyensao.nguyensao_javaspringboot.enums.TypePost;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "post")
@Setter
@Getter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, length = 100)
    private String slug;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String content;

    @Column(length = 100)
    private String thumbnail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "topic_id", nullable = false)
    private Topic topic;

    @Enumerated(EnumType.STRING)
    private TypePost typePost = TypePost.post;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0")
    private Integer sortOrder = 0;

    @Column(columnDefinition = "TINYTEXT")
    private String description;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(columnDefinition = "INT UNSIGNED", nullable = false)
    private Integer createdBy;

    private LocalDateTime updatedAt;

    @Column(columnDefinition = "INT")
    private Integer updatedBy;

    @Column(columnDefinition = "TINYINT UNSIGNED", nullable = false)
    private Integer status;

}