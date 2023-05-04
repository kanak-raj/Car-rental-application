package raj.kanak;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import raj.kanak.carcatalog.Car;
import raj.kanak.carcatalog.CarRepository;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@SpringBootApplication
@EnableSwagger2
public class CarRentalApplication {

	@Autowired
	CarRepository carRepo;

	@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Component
	private class DevFixtures implements CommandLineRunner {

		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		Date date;

		{
			try {
				date = simpleDateFormat.parse("2019-01-30");
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}


		@Override
		public void run(String... args) throws Exception {
			carRepo.save(Car.builder().carName("Ferrari").carIdentifier("KR 72AXC")
					.carModel("F50").engineType("V8").fuelType("Petrol").milage(54321)
					.rating(10).transmission("sequential").typeOfDrive("RWD").yearOfProduction((date)).isRented("no").noOfSeats(4).trunk(100).pricePerDay(500)
					.image1("ferrarif50.jpg").image2("ferrariinterior.jpg").image3("ferrariEngine.jpg").build());

			carRepo.save(Car.builder().carName("Audi").carIdentifier("KR 872HG")
					.carModel("A4").engineType("2.0").fuelType("Petrol").milage(75241)
					.rating(8).transmission("manual").typeOfDrive("RWD").yearOfProduction(date).isRented("no").noOfSeats(5).trunk(300).pricePerDay(200).build());


			carRepo.save(Car.builder().carName("Skoda").carIdentifier("KR OKUT2")
					.carModel("Fabia").engineType("1,4").fuelType("Gas").milage(128754)
					.rating(6).transmission("manual").typeOfDrive("FWD").yearOfProduction(date).isRented("no").noOfSeats(5).trunk(420).pricePerDay(100).build());

			carRepo.save(Car.builder().carName("Mercedes").carIdentifier("KR HYE12")
					.carModel("Benz C").engineType("V6").fuelType("Petrol").milage(98521)
					.rating(10).transmission("Automatic").typeOfDrive("RWD").yearOfProduction(date).isRented("no").noOfSeats(4).trunk(200).pricePerDay(300).build());

			carRepo.save(Car.builder().carName("Fiat").carIdentifier("KRA 732A")
					.carModel("Uno").engineType("1.0").fuelType("Gas").milage(198521)
					.rating(2).transmission("Manual").typeOfDrive("FWD").yearOfProduction(date).isRented("no").noOfSeats(4).trunk(200).pricePerDay(40).build());

			carRepo.save(Car.builder().carName("Ford").carIdentifier("KRA 87HQ")
					.carModel("Mondeo").engineType("1.6").fuelType("Diesel").milage(98521)
					.rating(10).transmission("Manual").typeOfDrive("FWD").yearOfProduction(date).isRented("no").noOfSeats(5).trunk(400).pricePerDay(100).build());

			carRepo.save(Car.builder().carName("Porshe").carIdentifier("KR KOLW1")
					.carModel("Carrera GT").engineType("V8").fuelType("Petrol").milage(98521)
					.rating(10).transmission("Sequential").typeOfDrive("RWD").yearOfProduction(date).isRented("no").noOfSeats(4).trunk(300).pricePerDay(400).build());

		}
	}





	public static void main(String[] args) {
		SpringApplication.run(CarRentalApplication.class, args);
	}



}
