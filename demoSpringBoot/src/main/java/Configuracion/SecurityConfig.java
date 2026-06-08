package Configuracion;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration // Define esta clase como fuente de configuraciones del sistema
public class SecurityConfig {

    @Bean // Registra el encriptador como un objeto disponible (Bean) para el proyecto
    public BCryptPasswordEncoder passwordEncoder() {
        // Retorna la instancia de BCrypt para usarla en los controladores
        return new BCryptPasswordEncoder();
    }
}