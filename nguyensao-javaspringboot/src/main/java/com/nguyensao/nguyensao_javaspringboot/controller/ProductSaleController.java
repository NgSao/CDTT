package com.nguyensao.nguyensao_javaspringboot.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductSaleDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductSale;
import com.nguyensao.nguyensao_javaspringboot.service.ProductSaleService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/productsale")
public class ProductSaleController {
    private final ProductSaleService productSaleService;

    @GetMapping
    public ResponseEntity<List<ProductSale>> index() {
        return ResponseEntity.ok(productSaleService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<ProductSale>> trash() {
        return ResponseEntity.ok(productSaleService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<ProductSale> show(@PathVariable Long id) {
        return ResponseEntity.ok(productSaleService.show(id));
    }

    @PostMapping("/store")
    public ResponseEntity<ProductSale> store(
            @RequestParam("product_id") Long productId,
            @RequestParam("pricesale") Double pricesale,
            @RequestParam("datebegin") LocalDateTime datebegin,
            @RequestParam("dateend") LocalDateTime dateend) {
        ProductSaleDTO productSaleDTO = new ProductSaleDTO(productId, pricesale, datebegin, dateend);
        return ResponseEntity.ok(productSaleService.store(productSaleDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<ProductSale> update(@PathVariable Long id,
            @RequestParam("product_id") Long productId,
            @RequestParam("pricesale") Double pricesale,
            @RequestParam("datebegin") LocalDateTime datebegin,
            @RequestParam("dateend") LocalDateTime dateend) {
        ProductSaleDTO productSaleDTO = new ProductSaleDTO(productId, pricesale, datebegin, dateend);
        return ResponseEntity.ok(productSaleService.update(id, productSaleDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        productSaleService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        productSaleService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        productSaleService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        ProductSale productSale = productSaleService.show(id);
        if (productSale == null) {
            return ResponseEntity.notFound().build();
        }
        productSaleService.destroy(id);
        return ResponseEntity.ok("Xóa thành công");
    }

    // Khai báo lỗi
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    // Khai báo đã có
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

}
