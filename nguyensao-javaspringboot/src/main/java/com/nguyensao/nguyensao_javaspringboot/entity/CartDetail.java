package com.nguyensao.nguyensao_javaspringboot.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cartdetail")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartDetailId;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    @JsonBackReference

    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Product product;

    private Integer quantity;
    private double discount;
    private double productPrice;
}