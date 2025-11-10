package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Attraction_API_Handler(c *gin.Context) {
	type Result struct {
		Name     string `json:"name"`
		Location string `json:"location"`
		Detail   string `json:"detail"`
		ImgPath  string `json:"img_path"`
	}

	var attractions []Result

	result := db.DB.Model(&models.Attraction{}).Select("name", "location", "detail", "rating", "img_path").Find(&attractions)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   attractions,
	})
}
