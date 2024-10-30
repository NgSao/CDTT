package com.nguyensao.nguyensao_javaspringboot.controller;

import java.util.ArrayList;
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
import org.springframework.web.multipart.MultipartFile;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Product;
import com.nguyensao.nguyensao_javaspringboot.file.FileController;
import com.nguyensao.nguyensao_javaspringboot.service.ProductService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/product")
public class ProductController {
    private final ProductService productService;
    private final FileController fileController;

    @GetMapping
    public ResponseEntity<List<Product>> index() {
        return ResponseEntity.ok(productService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Product>> trash() {
        return ResponseEntity.ok(productService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Product> show(@PathVariable Long id) {
        return ResponseEntity.ok(productService.show(id));
    }

    @PostMapping("/store")
    public ResponseEntity<Product> store(
            @RequestParam("name") String name,
            @RequestParam("slug") String slug,
            @RequestParam("category_id") Long categoryId,
            @RequestParam("brand_id") Long brandId,
            @RequestParam("content") String content,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("pricebuy") Double pricebuy,
            @RequestParam(value = "thumbnail", required = false) List<MultipartFile> files) {

        List<String> imagePaths = new ArrayList<>();
        if (files != null && !files.isEmpty()) {
            for (MultipartFile file : files) {
                String imagePath = fileController.uploadFile(file);
                imagePaths.add(imagePath);
            }
        }
        ProductDTO productDTO = new ProductDTO(name, slug, categoryId, brandId, content, description, pricebuy,
                imagePaths);

        return ResponseEntity.ok(productService.store(productDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id,
            @RequestParam("name") String name,
            @RequestParam("slug") String slug,
            @RequestParam("category_id") Long categoryId,
            @RequestParam("brand_id") Long brandId,
            @RequestParam("content") String content,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("pricebuy") Double pricebuy,
            @RequestParam(value = "thumbnail", required = false) List<MultipartFile> files) {

        List<String> imagePaths = new ArrayList<>();
        if (files != null && !files.isEmpty()) {
            for (MultipartFile file : files) {
                String imagePath = fileController.uploadFile(file);
                imagePaths.add(imagePath);
            }
        }
        ProductDTO productDTO = new ProductDTO(name, slug, categoryId, brandId, content, description, pricebuy,
                imagePaths);
        return ResponseEntity.ok(productService.update(id, productDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        productService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        productService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        Product product = productService.show(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        productService.destroy(id);
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
