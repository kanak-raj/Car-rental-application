package raj.kanak.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CarIdentifierException extends RuntimeException {

	public CarIdentifierException(String message) {
		super(message);
	}
}
