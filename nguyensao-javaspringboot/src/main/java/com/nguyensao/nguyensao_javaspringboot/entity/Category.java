package com.nguyensao.nguyensao_javaspringboot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "category")
@Setter
@Getter
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String slug;

    @Column(length = 100)
    private String thumbnail;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0")
    private Integer parentId;

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