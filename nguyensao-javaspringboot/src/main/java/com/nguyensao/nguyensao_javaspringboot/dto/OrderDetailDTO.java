package com.nguyensao.nguyensao_javaspringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO {
    private Long id;
    private Long orderId;
    private Long productId;
    private Integer qty;
    private Double price;
    private Double amount;
    private Double discount;
}
