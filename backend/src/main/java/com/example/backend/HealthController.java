package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Map;

@RestController
public class HealthController {

@GetMapping("/api/health")
   public Map<String, String> health(){
    return Map.of("status","ok",
            "message","application is running" );
}



@GetMapping("/api/message")
@CrossOrigin(origins = "http://localhost:5173")
public String getMessage(){
    return "Hello from spring Boot API !";
}

}
