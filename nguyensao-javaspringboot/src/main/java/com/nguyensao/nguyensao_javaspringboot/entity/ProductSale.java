package com.nguyensao.nguyensao_javaspringboot.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "productsale")
@Setter
@Getter
public class ProductSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(columnDefinition = "FLOAT", nullable = false)
    private Double pricesale;

    @Column(nullable = false)
    private LocalDateTime datebegin;

    @Column(nullable = false)
    private LocalDateTime dateend;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(columnDefinition = "INT", nullable = false)
    private Integer createdBy;

    private LocalDateTime updatedAt;

    @Column(columnDefinition = "INT")
    private Integer updatedBy;

    @Column(columnDefinition = "TINYINT UNSIGNED", nullable = false)
    private Integer status;

}