package com.personalbanking.personalBanking.User;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/login")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/getUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
    }

    @GetMapping("/findUser/{id}")
    public ResponseEntity<Optional<User>> findUser(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<User>>(userService.findUser(id), HttpStatus.OK);
    }

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<User>(userService.createUser(
                payload.get("userName"),
                payload.get("email"),
                payload.get("password")), HttpStatus.CREATED);
    }
}
