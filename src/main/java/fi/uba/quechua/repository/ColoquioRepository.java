package fi.uba.quechua.repository;

import fi.uba.quechua.domain.Coloquio;
import fi.uba.quechua.domain.Curso;
import fi.uba.quechua.domain.Periodo;
import fi.uba.quechua.domain.enumeration.ColoquioEstado;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;


/**
 * Spring Data  repository for the Coloquio entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ColoquioRepository extends JpaRepository<Coloquio, Long> {

    List<Coloquio> findAllByCursoAndFechaGreaterThanEqualAndEstadoOrderByFechaDesc(Curso curso, LocalDate fecha, ColoquioEstado estado);

    List<Coloquio> findAllByCursoAndEstadoOrderByFechaDesc(Curso curso, ColoquioEstado estado);

    List<Coloquio> findAll();
}
