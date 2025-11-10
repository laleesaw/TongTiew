package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Attraction_API_Handler(c *gin.Context) {
	var details []string

	// ดึงเฉพาะ column 'detail' จากตาราง attraction
	result := db.DB.Model(&models.Attraction{}).Pluck("detail", &details)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"detail": details,
	})
}
