package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductStoreDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductStore;
import com.nguyensao.nguyensao_javaspringboot.entity.Product;
import com.nguyensao.nguyensao_javaspringboot.repository.ProductStoreRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.ProductRepository;
import com.nguyensao.nguyensao_javaspringboot.service.ProductStoreService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductStoreServiceImpl implements ProductStoreService {
    private final ProductStoreRepository productStoreRepository;
    private final ProductRepository productRepository;

    @Override
    public List<ProductStore> index() {
        return productStoreRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<ProductStore> trash() {
        return productStoreRepository.findByStatus(0);
    }

    @Override
    public ProductStore show(Long id) {
        return productStoreRepository.findById(id).orElse(null);
    }

    @Override
    public ProductStore store(ProductStoreDTO productStoreDTO) {
        Optional<Product> optionalProduct = productRepository.findById(productStoreDTO.getProductId());
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();

            if (productStoreDTO.getPriceroot() > product.getPricebuy()) {
                throw new IllegalArgumentException("Giá gốc không được lớn hơn giá mua của sản phẩm.");
            }
            if (productStoreDTO.getQty() < 0) {
                throw new IllegalArgumentException("Số lượng phải lớn hơn 0.");
            }
            ProductStore productStore = new ProductStore();
            productStore.setProduct(product);
            productStore.setPriceroot(productStoreDTO.getPriceroot());
            productStore.setQty(productStoreDTO.getQty());
            productStore.setDateimport(LocalDateTime.now());
            productStore.setCreatedAt(LocalDateTime.now());
            productStore.setCreatedBy(1);
            productStore.setStatus(1);
            return productStoreRepository.save(productStore);
        }
        throw new EntityNotFoundException("Không tồn tại");
    }

    @Override
    public ProductStore update(Long id, ProductStoreDTO productStoreDTO) {
        ProductStore productStore = show(id);
        if (productStore != null) {
            if (productStoreDTO.getProductId() != null) {
                Optional<Product> optionalProduct = productRepository.findById(productStoreDTO.getProductId());
                if (optionalProduct.isPresent()) {
                    productStore.setProduct(optionalProduct.get());
                } else {
                    throw new EntityNotFoundException("Product không tồn tại");
                }
            }

            if (productStoreDTO.getPriceroot() != null) {
                if (productStoreDTO.getPriceroot() > productStore.getProduct().getPricebuy()) {
                    throw new IllegalArgumentException("Giá gốc không được lớn hơn giá mua của sản phẩm.");
                }
                productStore.setPriceroot(productStoreDTO.getPriceroot());
            }

            if (productStoreDTO.getQty() != null) {
                if (productStoreDTO.getQty() < 0) {
                    throw new IllegalArgumentException("Số lượng phải lớn hơn 0.");
                }
                productStore.setQty(productStoreDTO.getQty());
            }

            productStore.setUpdatedAt(LocalDateTime.now());
            productStore.setUpdatedBy(1);
            return productStoreRepository.save(productStore);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        ProductStore productStore = show(id);
        if (productStore != null) {
            productStore.setStatus(productStore.getStatus() == 1 ? 2 : 1);
            productStoreRepository.save(productStore);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void delete(Long id) {
        ProductStore productStore = show(id);
        if (productStore != null) {
            if (productStore.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            productStore.setStatus(0);
            productStoreRepository.save(productStore);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        ProductStore productStore = show(id);
        if (productStore != null) {
            if (productStore.getStatus() == 1) {
                throw new IllegalArgumentException("Không tồn tại.");
            }
            productStore.setStatus(1);
            productStoreRepository.save(productStore);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void destroy(Long id) {
        ProductStore productStore = show(id);
        if (productStore != null) {
            productStoreRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
