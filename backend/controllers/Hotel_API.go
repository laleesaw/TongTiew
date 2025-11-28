package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func HotelAPIHandler(c *gin.Context) {

	type Result struct {
		Id           string `json:"id"`
		Name         string `json:"name"`
		Rating       string `json:"rating"`
		ImgPath      string `json:"img_path"`
		AttractionId string `json:"attraction_id"`
	}

	// รับค่า query จาก frontend
	var body struct {
		Hotel_id string `json:"query"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var hotels []Result

	result := db.DB.Model(&models.Hotel{}).
		Select("hotel.id, hotel.name, hotel.rating, hotel.img_path, hotel.attraction_id").
		Joins("JOIN attraction ON attraction.id = hotel.attraction_id").
		Where("LOWER(attraction.name) LIKE ?", "%"+strings.ToLower(body.Hotel_id)+"%").
		Find(&hotels)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   hotels,
	})
}
