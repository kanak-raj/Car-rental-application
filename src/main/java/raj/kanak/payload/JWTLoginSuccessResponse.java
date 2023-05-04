package raj.kanak.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class JWTLoginSuccessResponse {
    private boolean success;
    private String token;
}
