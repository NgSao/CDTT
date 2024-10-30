package com.nguyensao.nguyensao_javaspringboot.controller;

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

import com.nguyensao.nguyensao_javaspringboot.dto.ProductStoreDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductStore;
import com.nguyensao.nguyensao_javaspringboot.service.ProductStoreService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/productstore")
public class ProductStoreController {
    private final ProductStoreService productStoreService;

    @GetMapping
    public ResponseEntity<List<ProductStore>> index() {
        return ResponseEntity.ok(productStoreService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<ProductStore>> trash() {
        return ResponseEntity.ok(productStoreService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<ProductStore> show(@PathVariable Long id) {
        return ResponseEntity.ok(productStoreService.show(id));
    }

    @PostMapping("/store")
    public ResponseEntity<ProductStore> store(
            @RequestParam("product_id") Long productId,
            @RequestParam("priceroot") Double priceroot,
            @RequestParam("qty") Integer qty) {
        ProductStoreDTO productStoreDTO = new ProductStoreDTO(productId, priceroot, qty);
        return ResponseEntity.ok(productStoreService.store(productStoreDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<ProductStore> update(@PathVariable Long id,
            @RequestParam("product_id") Long productId,
            @RequestParam("priceroot") Double priceroot,
            @RequestParam("qty") Integer qty) {
        ProductStoreDTO productStoreDTO = new ProductStoreDTO(productId, priceroot, qty);
        return ResponseEntity.ok(productStoreService.update(id, productStoreDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        productStoreService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        productStoreService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        productStoreService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        ProductStore productStore = productStoreService.show(id);
        if (productStore == null) {
            return ResponseEntity.notFound().build();
        }
        productStoreService.destroy(id);
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
