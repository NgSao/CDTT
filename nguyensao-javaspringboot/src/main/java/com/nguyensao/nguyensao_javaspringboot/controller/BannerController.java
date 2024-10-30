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

import com.nguyensao.nguyensao_javaspringboot.dto.BannerDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Banner;
import com.nguyensao.nguyensao_javaspringboot.file.FileController;
import com.nguyensao.nguyensao_javaspringboot.enums.PositionBanner;
import com.nguyensao.nguyensao_javaspringboot.service.BannerService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/banner")
public class BannerController {
    private final BannerService bannerService;
    private final FileController fileController;

    @GetMapping
    public ResponseEntity<List<Banner>> index() {
        return ResponseEntity.ok(bannerService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Banner>> trash() {
        return ResponseEntity.ok(bannerService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Banner> show(@PathVariable Long id) {
        Banner banner = bannerService.show(id);
        if (banner == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(banner);
    }

    @PostMapping("/store")
    public ResponseEntity<Banner> store(@RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "link", required = false) String link,
            @RequestParam("image") MultipartFile file,
            @RequestParam(value = "position", required = false) String position,
            @RequestParam(value = "description", required = false) String description) {

        String imagePath = null;
        if (file != null && !file.isEmpty()) {
            imagePath = fileController.uploadFile(file);
        }

        PositionBanner positionBanner = (position != null) ? PositionBanner.valueOf(position)
                : PositionBanner.slideshow;
        BannerDTO bannerDTO = new BannerDTO(name, link, imagePath, positionBanner, description);
        return ResponseEntity.ok(bannerService.store(bannerDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Banner> update(@PathVariable Long id, @RequestParam("name") String name,
            @RequestParam(value = "link", required = false) String link,
            @RequestParam(value = "image", required = false) MultipartFile file,
            @RequestParam(value = "position", required = false) String position,
            @RequestParam(value = "description", required = false) String description) {

        Banner existingBanner = bannerService.show(id);
        String oldImagePath = existingBanner.getImage();
        String imagePath = null;
        if (file != null) {
            imagePath = fileController.uploadFile(file);
            if (oldImagePath != null) {
                fileController.deleteFile(oldImagePath);
            }
        } else {
            imagePath = oldImagePath;
        }
        PositionBanner positionBanner = (position != null) ? PositionBanner.valueOf(position)
                : PositionBanner.slideshow;
        BannerDTO bannerDTO = new BannerDTO(name, link, imagePath, positionBanner, description);
        return ResponseEntity.ok(bannerService.update(id, bannerDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        bannerService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        bannerService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        bannerService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        bannerService.destroy(id);
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
