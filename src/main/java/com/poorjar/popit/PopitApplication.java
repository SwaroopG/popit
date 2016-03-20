package com.poorjar.popit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

/**
 * Entry point class of the Popit service.
 *
 * @author Swaroop
 */
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class PopitApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(PopitApplication.class);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(PopitApplication.class, args);
    }

}
