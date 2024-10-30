package com.nguyensao.nguyensao_javaspringboot.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "config")
@Setter
@Getter
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String siteName;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String address;

    @Column(nullable = false, length = 13)
    private String hotline;

    @Column(nullable = false, length = 13)
    private String phone;

    @Column(nullable = false, length = 100)
    private String author;

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
