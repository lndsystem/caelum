package com.example.demo.resource;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserResource {

	@Autowired
	private UserRepository dao;

	@SuppressWarnings("static-access")
	@PostMapping
	public @ResponseBody ResponseEntity<User> adicionar(@RequestBody User user) {

		Optional<User> u = dao.findByUsername(user.getUsername());
		if (u.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

		dao.save(user);
		return ResponseEntity.ok(user).status(HttpStatus.CREATED).build();
	}

	@GetMapping
	public List<User> listar() {
		return dao.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> getUsuario(@PathParam("id") Integer id) {
		Optional<User> u = dao.findById(id);

		if (u.isPresent())
			return ResponseEntity.ok(u.get());
		else
			return ResponseEntity.notFound().build();
	}

}
