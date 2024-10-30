package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.ProductDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Brand;
import com.nguyensao.nguyensao_javaspringboot.entity.Category;
import com.nguyensao.nguyensao_javaspringboot.entity.Product;
import com.nguyensao.nguyensao_javaspringboot.entity.ProductImage;
import com.nguyensao.nguyensao_javaspringboot.repository.BrandRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.CategoryRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.ProductImageRepository;
import com.nguyensao.nguyensao_javaspringboot.repository.ProductRepository;
import com.nguyensao.nguyensao_javaspringboot.service.ProductService;
import com.nguyensao.nguyensao_javaspringboot.file.FileController;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;
    private final BrandRepository brandRepository;
    private final FileController fileController;

    @Override
    public List<Product> index() {
        return productRepository.findByStatusIn(Arrays.asList(1, 2));
    }

    @Override
    public List<Product> trash() {
        return productRepository.findByStatus(0);
    }

    @Override
    public Product show(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product store(ProductDTO productDTO) {
        Optional<Category> optionalCategory = categoryRepository.findById(productDTO.getCategoryId());
        Optional<Brand> optionalBrand = brandRepository.findById(productDTO.getBrandId());
        if (optionalCategory.isPresent() || optionalBrand.isPresent()) {
            Category category = optionalCategory.get();
            Brand brand = optionalBrand.get();
            Product product = new Product();
            product.setName(productDTO.getName());
            product.setSlug(productDTO.getSlug());
            product.setCategory(category);
            product.setBrand(brand);
            product.setContent(productDTO.getContent());
            product.setDescription(productDTO.getDescription());
            product.setPricebuy(productDTO.getPricebuy());
            product.setCreatedAt(LocalDateTime.now());
            product.setCreatedBy(1);
            product.setStatus(1);
            product = productRepository.save(product);
            if (productDTO.getThumbnail() != null && !productDTO.getThumbnail().isEmpty()) {
                for (String thumbnail : productDTO.getThumbnail()) {
                    ProductImage productImage = new ProductImage();
                    productImage.setProduct(product);
                    productImage.setThumbnail(thumbnail);
                    productImageRepository.save(productImage);
                }
            }
            return product;
        }
        throw new EntityNotFoundException("Không tồn tại");
    }

    @Override
    public Product update(Long id, ProductDTO productDTO) {
        Product product = show(id);
        if (product != null) {
            product.setName(productDTO.getName());
            product.setSlug(productDTO.getSlug());

            if (productDTO.getCategoryId() != null) {
                Optional<Category> optionalCategory = categoryRepository.findById(productDTO.getCategoryId());
                if (optionalCategory.isPresent()) {
                    product.setCategory(optionalCategory.get());
                } else {
                    throw new EntityNotFoundException("Category không tồn tại với id: " + productDTO.getCategoryId());
                }
            }

            if (productDTO.getBrandId() != null) {
                Optional<Brand> optionalBrand = brandRepository.findById(productDTO.getBrandId());
                if (optionalBrand.isPresent()) {
                    product.setBrand(optionalBrand.get());
                } else {
                    throw new EntityNotFoundException("Brand không tồn tại với id: " + productDTO.getBrandId());
                }
            }

            product.setContent(productDTO.getContent());
            product.setDescription(productDTO.getDescription());
            product.setPricebuy(productDTO.getPricebuy());
            product.setUpdatedAt(LocalDateTime.now());
            product.setUpdatedBy(1);

            if (productDTO.getThumbnail() != null && !productDTO.getThumbnail().isEmpty()) {
                List<ProductImage> oldImages = productImageRepository.findByProduct(product);
                for (ProductImage oldImage : oldImages) {
                    if (oldImage.getThumbnail() != null) {
                        fileController.deleteFile(oldImage.getThumbnail());
                    }
                }
                productImageRepository.deleteAll(oldImages);

                for (String thumbnail : productDTO.getThumbnail()) {
                    ProductImage productImage = new ProductImage();
                    productImage.setProduct(product);
                    productImage.setThumbnail(thumbnail);
                    productImageRepository.save(productImage);
                }
            }
            return productRepository.save(product);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Product product = show(id);
        if (product != null) {
            product.setStatus(product.getStatus() == 1 ? 2 : 1);
            productRepository.save(product);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void delete(Long id) {
        Product product = show(id);
        if (product != null) {
            if (product.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            product.setStatus(0);
            productRepository.save(product);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Product product = show(id);
        if (product != null) {
            if (product.getStatus() == 1) {
                throw new IllegalArgumentException("Không có topic nào.");
            }
            product.setStatus(1);
            productRepository.save(product);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }

    }

    @Override
    public void destroy(Long id) {
        Product product = show(id);
        if (product != null) {
            List<ProductImage> productImages = productImageRepository.findByProduct(product);
            for (ProductImage productImage : productImages) {
                if (productImage.getThumbnail() != null) {
                    fileController.deleteFile(productImage.getThumbnail());
                }
            }
            productRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
