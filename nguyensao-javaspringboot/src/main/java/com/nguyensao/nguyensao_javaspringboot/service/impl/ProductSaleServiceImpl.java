package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductSaleDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductSale;
import com.nguyensao.nguyensao_javaspringboot.entity.Product;
import com.nguyensao.nguyensao_javaspringboot.repository.ProductSaleRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.ProductRepository;
import com.nguyensao.nguyensao_javaspringboot.service.ProductSaleService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductSaleServiceImpl implements ProductSaleService {
    private final ProductSaleRepository productSaleRepository;
    private final ProductRepository productRepository;

    @Override
    public List<ProductSale> index() {
        return productSaleRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<ProductSale> trash() {
        return productSaleRepository.findByStatus(0);
    }

    @Override
    public ProductSale show(Long id) {
        return productSaleRepository.findById(id).orElse(null);
    }

    @Override
    public ProductSale store(ProductSaleDTO productSaleDTO) {
        Optional<Product> optionalProduct = productRepository.findById(productSaleDTO.getProductId());
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();

            if (productSaleDTO.getPricesale() > product.getPricebuy()) {
                throw new IllegalArgumentException("Giá sale không được lớn hơn giá mua của sản phẩm.");
            }
            if (productSaleDTO.getDatebegin().isAfter(productSaleDTO.getDateend())) {
                throw new IllegalArgumentException("Ngày bắt đầu phải nhỏ hơn ngày kết thúc.");
            }
            ProductSale productSale = new ProductSale();
            productSale.setProduct(product);
            productSale.setPricesale(productSaleDTO.getPricesale());
            productSale.setDatebegin(productSaleDTO.getDatebegin());
            productSale.setDateend(productSaleDTO.getDateend());
            productSale.setCreatedAt(LocalDateTime.now());
            productSale.setCreatedBy(1);
            productSale.setStatus(1);
            return productSaleRepository.save(productSale);
        }
        throw new EntityNotFoundException("Không tồn tại");
    }

    @Override
    public ProductSale update(Long id, ProductSaleDTO productSaleDTO) {
        ProductSale productSale = show(id);
        if (productSale != null) {

            if (productSaleDTO.getProductId() != null) {
                Optional<Product> optionalProduct = productRepository.findById(productSaleDTO.getProductId());
                if (optionalProduct.isPresent()) {
                    productSale.setProduct(optionalProduct.get());
                } else {
                    throw new EntityNotFoundException("Product không tồn tại");
                }
            }
            if (productSaleDTO.getPricesale() != null) {
                if (productSale.getProduct().getPricebuy() < productSaleDTO.getPricesale()) {
                    throw new IllegalArgumentException("Giá bán không được lớn hơn giá mua của sản phẩm.");
                }
                productSale.setPricesale(productSaleDTO.getPricesale());
            }

            if (productSaleDTO.getDatebegin() != null && productSaleDTO.getDateend() != null) {
                if (productSaleDTO.getDatebegin().isAfter(productSaleDTO.getDateend())) {
                    throw new IllegalArgumentException("Ngày bắt đầu phải nhỏ hơn ngày kết thúc.");
                }
                productSale.setDatebegin(productSaleDTO.getDatebegin());
                productSale.setDateend(productSaleDTO.getDateend());
            }

            productSale.setUpdatedAt(LocalDateTime.now());
            productSale.setUpdatedBy(1);
            return productSaleRepository.save(productSale);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        ProductSale productSale = show(id);
        if (productSale != null) {
            productSale.setStatus(productSale.getStatus() == 1 ? 2 : 1);
            productSaleRepository.save(productSale);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void delete(Long id) {
        ProductSale productSale = show(id);
        if (productSale != null) {
            if (productSale.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            productSale.setStatus(0);
            productSaleRepository.save(productSale);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        ProductSale productSale = show(id);
        if (productSale != null) {
            if (productSale.getStatus() == 1) {
                throw new IllegalArgumentException("Không tồn tại.");
            }
            productSale.setStatus(1);
            productSaleRepository.save(productSale);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void destroy(Long id) {
        ProductSale productSale = show(id);
        if (productSale != null) {
            productSaleRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
