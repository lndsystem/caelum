package com.example.demo.dto;

import java.time.LocalDateTime;

import com.example.demo.model.User;

public class UserDTO {
	private String id;
	private String email;
	private String password;
	private String name;
	private String username;
	private String phone;
	private String avatar_url;
	private LocalDateTime created_at;
	private LocalDateTime updated_at;

	public UserDTO() {

	}

	public UserDTO(String id, String email, String password, String name, String username, String phone,
			String avatar_url, LocalDateTime created_at, LocalDateTime updated_at) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.username = username;
		this.phone = phone;
		this.avatar_url = avatar_url;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	public UserDTO(User user) {
		this(user.getId(), user.getUsername() + "@cmail.com.br", user.getSenha(), user.getNome(), user.getUsername(),
				user.getTelefone(), user.getAvatar(), user.getCadastro(), user.getAtualizacao());
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAvatar_url() {
		return avatar_url;
	}

	public void setAvatar_url(String avatar_url) {
		this.avatar_url = avatar_url;
	}

	public LocalDateTime getCreated_at() {
		return created_at;
	}

	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}

	public LocalDateTime getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(LocalDateTime updated_at) {
		this.updated_at = updated_at;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", email=" + email + ", password=" + password + ", name=" + name + ", username="
				+ username + ", phone=" + phone + ", avatar_url=" + avatar_url + ", created_at=" + created_at
				+ ", updated_at=" + updated_at + "]";
	}
}
