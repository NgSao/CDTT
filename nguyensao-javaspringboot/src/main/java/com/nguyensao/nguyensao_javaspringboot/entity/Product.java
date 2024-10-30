package com.nguyensao.nguyensao_javaspringboot.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "product")
@Setter
@Getter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String slug;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonBackReference
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id", nullable = false)
    @JsonBackReference
    private Brand brand;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String content;

    @Column(columnDefinition = "TINYTEXT")
    private String description;

    @Column(columnDefinition = "FLOAT", nullable = false)
    private Double pricebuy;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0")
    private Integer sortOrder = 0;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(columnDefinition = "INT UNSIGNED", nullable = false)
    private Integer createdBy;

    private LocalDateTime updatedAt;

    @Column(columnDefinition = "INT")
    private Integer updatedBy;

    @Column(columnDefinition = "TINYINT UNSIGNED", nullable = false)
    private Integer status;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<ProductImage> productImages;

    @JsonProperty("categoryName")
    public String getCategoryName() {
        return category != null ? category.getName() : "Không có danh mục";
    }

    @JsonProperty("brandName")
    public String getBrandName() {
        return brand != null ? brand.getName() : "Không có thương hiệu";
    }

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<ProductStore> productStores;

}
