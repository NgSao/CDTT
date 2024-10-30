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

import com.nguyensao.nguyensao_javaspringboot.dto.PostDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Post;
import com.nguyensao.nguyensao_javaspringboot.file.FileController;
import com.nguyensao.nguyensao_javaspringboot.enums.TypePost;
import com.nguyensao.nguyensao_javaspringboot.service.PostService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/post")
public class PostController {
    private final PostService postService;
    private final FileController fileController;

    @GetMapping
    public ResponseEntity<List<Post>> index() {
        return ResponseEntity.ok(postService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Post>> trash() {
        return ResponseEntity.ok(postService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Post> show(@PathVariable Long id) {
        return ResponseEntity.ok(postService.show(id));
    }

    @PostMapping("/store")
    public ResponseEntity<Post> store(@RequestParam("title") String title,
            @RequestParam("slug") String slug,
            @RequestParam("content") String content,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "thumbnail", required = false) MultipartFile file,
            @RequestParam(value = "topic_id") Long topicId,
            @RequestParam(value = "type", required = false) String type) {
        String imagePath = null;
        if (file != null && !file.isEmpty()) {
            imagePath = fileController.uploadFile(file);
        }
        TypePost typePost = (type != null) ? TypePost.valueOf(type) : TypePost.post;

        PostDTO postDTO = new PostDTO(title, slug, content, description, imagePath, typePost, topicId);
        return ResponseEntity.ok(postService.store(postDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Post> update(@PathVariable Long id, @RequestParam("title") String title,
            @RequestParam("slug") String slug,
            @RequestParam("content") String content,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "thumbnail", required = false) MultipartFile file,
            @RequestParam(value = "topic_id") Long topicId,
            @RequestParam(value = "type", required = false) String type) {

        Post existingPost = postService.show(id);
        String oldImagePath = existingPost.getThumbnail();
        String imagePath = null;
        if (file != null) {
            imagePath = fileController.uploadFile(file);
            if (oldImagePath != null) {
                fileController.deleteFile(oldImagePath);
            }
        } else {
            imagePath = oldImagePath;
        }
        TypePost typePost = (type != null) ? TypePost.valueOf(type) : TypePost.post;

        PostDTO postDTO = new PostDTO(title, slug, content, description, imagePath, typePost, topicId);
        return ResponseEntity.ok(postService.update(id, postDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        postService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        postService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        Post post = postService.show(id);
        if (post.getThumbnail() != null) {
            fileController.deleteFile(post.getThumbnail());
        }
        postService.destroy(id);
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
