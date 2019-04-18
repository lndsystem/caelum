package com.example.demo.resource;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.websocket.server.PathParam;

import org.springframework.aop.framework.adapter.ThrowsAdviceInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.interceptor.CacheOperationInvoker.ThrowableWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import ch.qos.logback.core.helpers.ThrowableToStringArray;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserResource {

	@Autowired
	private UserRepository dao;

	@SuppressWarnings("static-access")
	@PostMapping
	public @ResponseBody ResponseEntity<UserDTO> adicionar(@RequestBody User user) {

		Optional<User> u = dao.findByUsername(user.getUsername());
		if (u.isPresent())
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

		try {
			dao.save(user);
		} catch (Exception e) {

		}
		return ResponseEntity.status(HttpStatus.CREATED).body(new UserDTO(user));
	}

	@GetMapping
	public List<UserDTO> listar() {
		return dao.findAll().stream().map(u -> new UserDTO(u)).collect(Collectors.toList());
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserDTO> getUsuario(@PathParam("id") Integer id) {
		Optional<User> u = dao.findById(id);

		if (u.isPresent())
			return ResponseEntity.ok(new UserDTO(u.get()));
		else
			return ResponseEntity.notFound().build();
	}

}
