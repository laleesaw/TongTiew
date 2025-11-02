package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"TongTiew/utils"

	"github.com/gin-gonic/gin"
)

func SignInHandler(c *gin.Context) {
	var userLogin models.User
	var foundUser models.User

	err_Bind := c.BindJSON(&userLogin)
	if err_Bind != nil {
		c.JSON(400, gin.H{"error": "Invalid request"})
		return
	}

	err_founder := db.DB.Where("email = ?", userLogin.Email).First(&foundUser).Error //SELECT * FROM user WHERE email;
	if err_founder != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}

	if userLogin.Password != foundUser.Password {
		c.JSON(401, gin.H{"error": "Invalid password"})
		return
	}

	token, err := utils.GenerateToken(uint(foundUser.UserID), foundUser.Email)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to create token"})
		return
	}

	c.JSON(200, gin.H{
		"status": "ok",
		"user":   foundUser,
		"token":  token,
	})

}

func GetProfileHandler(c *gin.Context) {
	c.JSON(200, gin.H{"message": "Profile endpoint"})
}
