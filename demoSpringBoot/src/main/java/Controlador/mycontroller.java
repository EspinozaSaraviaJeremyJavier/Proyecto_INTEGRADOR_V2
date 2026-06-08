package Controlador;

import Modelo.Comentario;
import Repositorio.ComentarioRepository;
import Repositorio.ProductoRepository;
import Modelo.Usuario;
import Repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
public class mycontroller {

    @Autowired
    private UsuarioRepository usuarioRepo;

    @Autowired
    private ProductoRepository productoRepo;

    @Autowired
    private ComentarioRepository comentarioRepo;

    @GetMapping("/")
    public String inicio(Model model) {
        model.addAttribute("productos", productoRepo.findAll());
        List<Comentario> aprobados = comentarioRepo.findAll().stream()
                .filter(Comentario::isAprobado)
                .collect(Collectors.toList());
        model.addAttribute("comentariosAprobados", aprobados);
        return "index";
    }

    @GetMapping("/login")
    public String mostrarLogin() {
        return "login";
    }

    @PostMapping("/ingresar")
    public String procesarLogin(@RequestParam String correo, 
                               @RequestParam String password, 
                               Model model) {
        Optional<Usuario> userOpt = usuarioRepo.findByCorreo(correo);

        if (userOpt.isPresent() && userOpt.get().getPassword().equals(password)) {
            // Corregido: Comparación con Integer rolId (1 = ADMIN)
            return userOpt.get().getRolId() == 1 ? "redirect:/admin" : "redirect:/";
        } else {
            model.addAttribute("error", "Credenciales incorrectas");
            return "login";
        }
    }

    @GetMapping("/registro")
    public String mostrarRegistro(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "registro";
    }

    @PostMapping("/registrar")
    public String guardarUsuario(@ModelAttribute Usuario usuario, 
                                 @RequestParam String confirmPassword, 
                                 Model model) {
        if (!usuario.getPassword().equals(confirmPassword)) {
            model.addAttribute("error", "Las contraseñas no coinciden");
            return "registro";
        }
        
        usuario.setRolId(2); // Cliente por defecto
        usuarioRepo.save(usuario); 
        return "redirect:/login";
    }

    @PostMapping("/enviar-comentario")
    public String guardarComentario(@RequestParam String nombre, @RequestParam String contenido) {
        Comentario nuevo = new Comentario();
        nuevo.setNombre(nombre);
        nuevo.setContenido(contenido);
        nuevo.setAprobado(false);
        comentarioRepo.save(nuevo);
        return "redirect:/?mensaje=enviado";
    }
}