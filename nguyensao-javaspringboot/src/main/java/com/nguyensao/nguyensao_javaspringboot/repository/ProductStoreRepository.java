
package com.nguyensao.nguyensao_javaspringboot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductStore;

public interface ProductStoreRepository extends JpaRepository<ProductStore, Long> {
    List<ProductStore> findByStatus(Integer status);

    List<ProductStore> findByStatusIn(List<Integer> statusList);

    Optional<ProductStore> findByProductId(Long productId);

}
