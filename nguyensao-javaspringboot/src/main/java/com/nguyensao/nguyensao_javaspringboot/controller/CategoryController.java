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

import com.nguyensao.nguyensao_javaspringboot.dto.CategoryDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Category;
import com.nguyensao.nguyensao_javaspringboot.file.FileController;
import com.nguyensao.nguyensao_javaspringboot.service.CategoryService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/category")
public class CategoryController {
    private final CategoryService categoryService;
    private final FileController fileController;

    @GetMapping
    public ResponseEntity<List<Category>> index() {
        return ResponseEntity.ok(categoryService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Category>> trash() {
        return ResponseEntity.ok(categoryService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Category> show(@PathVariable Long id) {
        Category category = categoryService.show(id);
        if (category == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(category);
    }

    @PostMapping("/store")
    public ResponseEntity<Category> store(@RequestParam("name") String name,
            @RequestParam("slug") String slug,
            @RequestParam(value = "thumbnail", required = false) MultipartFile file,
            @RequestParam(value = "parent_id", required = false) Integer parentId,
            @RequestParam(value = "description", required = false) String description) {

        String imagePath = null;
        if (file != null && !file.isEmpty()) {
            imagePath = fileController.uploadFile(file);
        }
        CategoryDTO categoryDTO = new CategoryDTO(name, slug, imagePath, parentId, description);
        return ResponseEntity.ok(categoryService.store(categoryDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Category> update(@PathVariable Long id,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "slug", required = false) String slug,
            @RequestParam(value = "thumbnail", required = false) MultipartFile file,
            @RequestParam(value = "parent_id", required = false) Integer parentId,
            @RequestParam(value = "description", required = false) String description) {

        Category existingcategory = categoryService.show(id);
        String oldImagePath = existingcategory.getThumbnail();
        String imagePath = null;
        if (file != null) {
            imagePath = fileController.uploadFile(file);
            if (oldImagePath != null) {
                fileController.deleteFile(oldImagePath);
            }
        } else {
            imagePath = oldImagePath;
        }

        if (parentId == null) {
            parentId = 0;
        }

        CategoryDTO categoryDTO = new CategoryDTO(name, slug, imagePath, parentId, description);
        return ResponseEntity.ok(categoryService.update(id, categoryDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        categoryService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        categoryService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        categoryService.destroy(id);
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
