package raj.kanak.carcatalog;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.aspectj.weaver.ast.Not;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Car {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="car name must be provided")
	private String carName;
	
	@NotBlank(message="car model must be provided")
	private String carModel;
	
	@NotBlank(message="must provide register number(8 characters)")
	@Column(updatable=false, unique = true)
	@Size(min=8,max=8)
	private String carIdentifier;
	
	@NotBlank(message="provide enginge type")
	private String engineType;
	
	@NotBlank(message="must provide  fuel type")
	private String fuelType;
	
	@NotBlank(message="must provide type of drive")
	private String typeOfDrive;
	
	@NotBlank(message="must proivde type of transmission")
	private String transmission;
	
	@NotNull(message="must provide milage of car")

	@Min(value = 1, message = "millage must greater than 0")
	private int milage;

	@DecimalMin(value = "1.0", message = "rating must be greater than 0")
	private double rating;

	@NotNull(message = "must provide whether the car is rented now or not")
	@Pattern(regexp = "^(?:yes|no)$")
	private String isRented;

	@NotNull(message = "must provide number of seats")
	@Min(value = 1, message = "must provide number of seats greater than 0")
	private int noOfSeats;

	@NotNull(message = "must provide capacity of trunk")
	@Min(value = 1, message = "must provide capacity greater than 0")
	private int trunk;

	@NotNull(message = "must provide price per day")
	@Min(value = 1, message = "Must provide price greater than 0")
	private int pricePerDay;

	@NotNull(message="must provide year of production")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date yearOfProduction;

	private String image1;
	private String image2;
	private String image3;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
    @Column(updatable = false)
	private Date addDate;

	@PrePersist
	protected void onCreate() {
		this.addDate = new Date();
	}
	
	
}
