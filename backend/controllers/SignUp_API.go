package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func SignUpHandler(c *gin.Context) {
	var newUser models.User

	// Bind JSON จาก request body
	err_connect_database := c.BindJSON(&newUser)
	if err_connect_database != nil {
		c.JSON(400, gin.H{"error": "Invalid request"})
		return
	}

	// อย่า set UserID เอง
	// newUser.UserID = ...

	// ใช้เวลา default ของ DB หรือ Gorm
	newUser.CreateAt = time.Now() // ถ้าอยาก set เอง

	// บันทึกลง DB
	err_create := db.DB.Create(&newUser).Error
	if err_create != nil {
		fmt.Println("DB insert error:", err_create) // <-- ดู error จริงใน console
		c.JSON(http.StatusInternalServerError, gin.H{"error": err_create.Error()})
		return
	}

	c.JSON(200, gin.H{
		"status": "ok",
		"user":   newUser,
	})
}
