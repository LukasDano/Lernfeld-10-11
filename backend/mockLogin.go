package main

import (
	"encoding/json"
	"net/http"
)

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	OK      bool   `json:"ok"`
	Message string `json:"message"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var req LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "invalid json", http.StatusBadRequest)
		return
	}

	// Nur für Tests: hartkodierte Zugangsdaten
	const validUser = "testuser"
	const validPass = "secret123"

	ok := (req.Username == validUser && req.Password == validPass)

	w.Header().Set("Content-Type", "application/json")
	if !ok {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(LoginResponse{
			OK:      false,
			Message: "invalid credentials",
		})
		return
	}

	json.NewEncoder(w).Encode(LoginResponse{
		OK:      true,
		Message: "login successful",
	})
}

func main() {
	http.HandleFunc("/login", loginHandler)
	http.ListenAndServe(":8080", nil)
}
