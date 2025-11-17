package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Attraction_API_Handler(c *gin.Context) {
	type Result struct {
		Id       int    `json:"id"`
		Name     string `json:"name"`
		Location string `json:"location"`
		Detail   string `json:"detail"`
		ImgPath  string `json:"img_path"`
	}

	// รับค่า query จาก frontend
	var body struct {
		Query string `json:"query"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var attractions []Result

	// filter ตามชื่อสถานที่
	result := db.DB.Model(&models.Attraction{}).
		Select("id", "name", "location", "detail", "img_path").
		Where("LOWER(name) LIKE ?", "%"+body.Query+"%").
		Find(&attractions)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   attractions,
	})
}
