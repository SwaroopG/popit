package com.poorjar.popit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.web.SpringBootServletInitializer;

/**
 * Entry point class of the Popit service.
 *
 * @author Swaroop
 */
@SpringBootApplication
@EnableAutoConfiguration
public class PopitApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(PopitApplication.class, args);
    }
}