package com.vendas11.vendas.repository;

import com.vendas11.vendas.domain.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
