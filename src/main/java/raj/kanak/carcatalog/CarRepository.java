package raj.kanak.carcatalog;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CarRepository extends CrudRepository<Car, Long> {


	
	public Car findByCarIdentifier(String carIdenitfier);
	

	public Iterable<Car> findAll(Sort a);


}
