package com.nguyensao.nguyensao_javaspringboot.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductSaleDTO {
    private Long productId;
    private Double pricesale;
    private LocalDateTime datebegin;
    private LocalDateTime dateend;

}
