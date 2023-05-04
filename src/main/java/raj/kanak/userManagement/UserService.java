package raj.kanak.userManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import raj.kanak.exceptions.UsernameAlreadyExistsException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser){

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

            newUser.setUsername(newUser.getUsername());

            return userRepository.save(newUser);

        }catch(Exception ex){
            throw new UsernameAlreadyExistsException("Username " + newUser.getUsername() + " already exists");
        }
    }

    public User updateUser(User user) {

            user.setUsername(user.getUsername());
            return userRepository.save(user);

    }
}
