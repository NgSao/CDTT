package com.nguyensao.nguyensao_javaspringboot.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
        private final AuthenticationFilter authenticationFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .csrf(AbstractHttpConfigurer::disable)
                                .cors(AbstractHttpConfigurer::disable)
                                .authorizeHttpRequests((authorize) -> authorize
                                                .requestMatchers("/api/auth/**").permitAll()
                                                .requestMatchers("/api/user").permitAll()
                                                .requestMatchers("/api/category/**").permitAll()
                                                .requestMatchers("/api/product/**").permitAll()
                                                .requestMatchers("/api/topic/**").permitAll()
                                                .requestMatchers("/api/post/**").permitAll()
                                                .requestMatchers("/api/banner/**").permitAll()
                                                .requestMatchers("/api/brand/**").permitAll()
                                                .requestMatchers("/api/cart/**").permitAll()

                                                .requestMatchers("/img/**").permitAll()

                                                .anyRequest()
                                                .authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(authenticationFilter,
                                                UsernamePasswordAuthenticationFilter.class)
                                .httpBasic(Customizer.withDefaults());
                return http.build();
        }

}