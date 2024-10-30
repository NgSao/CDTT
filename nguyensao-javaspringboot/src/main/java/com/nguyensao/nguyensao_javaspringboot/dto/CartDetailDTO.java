package com.nguyensao.nguyensao_javaspringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartDetailDTO {

    private Long cartDetailId;
    private Long productId;
    private Integer quantity;
    private double discount;
    private double productPrice;

}