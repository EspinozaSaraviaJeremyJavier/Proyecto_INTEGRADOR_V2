package DAO;

import Modelo.DetalleOrden;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetalleOrdenDAO extends JpaRepository<DetalleOrden, Integer> {
}