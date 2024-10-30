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
import org.springframework.web.multipart.MultipartFile;

import com.nguyensao.nguyensao_javaspringboot.dto.BrandDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Brand;
import com.nguyensao.nguyensao_javaspringboot.file.FileController;
import com.nguyensao.nguyensao_javaspringboot.service.BrandService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/brand")
public class BrandController {
    private final BrandService brandService;
    private final FileController fileController;

    @GetMapping
    public ResponseEntity<List<Brand>> index() {
        return ResponseEntity.ok(brandService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Brand>> trash() {
        return ResponseEntity.ok(brandService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Brand> show(@PathVariable Long id) {
        Brand brand = brandService.show(id);
        if (brand == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(brand);
    }

    @PostMapping("/store")
    public ResponseEntity<Brand> store(@RequestParam("name") String name,
            @RequestParam("slug") String slug,
            @RequestParam(value = "thumbnail", required = false) MultipartFile file,
            @RequestParam(value = "description", required = false) String description) {

        String imagePath = null;
        if (file != null && !file.isEmpty()) {
            imagePath = fileController.uploadFile(file);
        }
        BrandDTO brandDTO = new BrandDTO(name, slug, imagePath, description);
        return ResponseEntity.ok(brandService.store(brandDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Brand> update(@PathVariable Long id,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "slug", required = false) String slug,
            @RequestParam(value = "thumbnail", required = false) MultipartFile file,
            @RequestParam(value = "description", required = false) String description) {

        Brand existingbrand = brandService.show(id);
        String oldImagePath = existingbrand.getThumbnail();
        String imagePath = null;
        if (file != null) {
            imagePath = fileController.uploadFile(file);
            if (oldImagePath != null) {
                fileController.deleteFile(oldImagePath);
            }
        } else {
            imagePath = oldImagePath;
        }

        BrandDTO brandDTO = new BrandDTO(name, slug, imagePath, description);
        return ResponseEntity.ok(brandService.update(id, brandDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        brandService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        brandService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        brandService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        brandService.destroy(id);
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
