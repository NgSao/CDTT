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

import com.nguyensao.nguyensao_javaspringboot.dto.TopicDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Topic;
import com.nguyensao.nguyensao_javaspringboot.service.TopicService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/topic")
public class TopicController {
    private final TopicService topicService;

    @GetMapping
    public ResponseEntity<List<Topic>> index() {
        return ResponseEntity.ok(topicService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Topic>> trash() {
        return ResponseEntity.ok(topicService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Topic> show(@PathVariable Long id) {
        return ResponseEntity.ok(topicService.show(id));
    }

    // @PostMapping("/store") //JSON
    // public ResponseEntity<Topic> store(@RequestBody TopicDTO topicDTO) {
    // return ResponseEntity.ok(topicService.store(topicDTO));
    // }

    @PostMapping("/store") // FromData
    public ResponseEntity<Topic> store(@RequestParam("name") String name, @RequestParam("slug") String slug,
            @RequestParam(value = "description", required = false) String description) {
        TopicDTO topicDTO = new TopicDTO(name, slug, description);
        return ResponseEntity.ok(topicService.store(topicDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Topic> update(@PathVariable Long id, @RequestParam("name") String name,
            @RequestParam("slug") String slug,
            @RequestParam(value = "description", required = false) String description) {
        TopicDTO topicDTO = new TopicDTO(name, slug, description);
        return ResponseEntity.ok(topicService.update(id, topicDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        topicService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        topicService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        topicService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        topicService.destroy(id);
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
