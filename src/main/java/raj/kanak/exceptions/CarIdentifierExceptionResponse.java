package raj.kanak.exceptions;

public class CarIdentifierExceptionResponse {
	private String carIdentifier;

	public CarIdentifierExceptionResponse(String carIdentifier) {
		this.carIdentifier = carIdentifier;
	}

	public String getCarIdentifier() {
		return carIdentifier;
	}

	public void setCarIdentifier(String carIdentifier) {
		this.carIdentifier = carIdentifier;
	}
		
}
