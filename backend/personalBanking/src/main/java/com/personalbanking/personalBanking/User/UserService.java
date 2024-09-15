package com.personalbanking.personalBanking.User;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public Optional<User> findUser(ObjectId id) {
        return userRepository.findById(id);
    }

    public User createUser(String userName, String email, String password) {
        User user = new User(userName, email, password);
        userRepository.insert(user);
        return user;
    }
}
