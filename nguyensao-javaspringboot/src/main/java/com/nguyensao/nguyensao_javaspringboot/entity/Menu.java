package com.nguyensao.nguyensao_javaspringboot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import com.nguyensao.nguyensao_javaspringboot.enums.PositionMenu;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "menu")
@Setter
@Getter
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String link;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer tableId;

    @Column(nullable = false, length = 100)
    private String type;

    @Enumerated(EnumType.STRING)
    private PositionMenu positionMenu = PositionMenu.mainmenu;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0")
    private Integer parentId;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0")
    private Integer sortOrder = 0;

    @Column(columnDefinition = "TINYTEXT")
    private String description;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(columnDefinition = "INT UNSIGNED", nullable = false)
    private Integer createdBy;

    private LocalDateTime updatedAt;

    @Column(columnDefinition = "INT")
    private Integer updatedBy;

    @Column(columnDefinition = "TINYINT UNSIGNED", nullable = false)
    private Integer status;

}