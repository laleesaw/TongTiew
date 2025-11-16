package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func Restaurant_API_Handler(c *gin.Context) {

	type Result struct {
		Id           string `json:"id"`
		Name         string `json:"name"`
		Rating       string `json:"rating"`
		Detail       string `json:"detail"`
		ImgPath      string `json:"img_path"`
		AttractionId string `json:"attraction_id"`
	}

	// รับค่า query จาก frontend
	var body struct {
		Query string `json:"query"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var restaurants []Result

	result := db.DB.Model(&models.Restaurant{}).
		Select("restaurant.id, restaurant.name, restaurant.rating, restaurant.detail, restaurant.img_path, restaurant.attraction_id").
		Joins("JOIN attraction ON attraction.id = restaurant.attraction_id").
		Where("LOWER(attraction.name) LIKE ?", "%"+strings.ToLower(body.Query)+"%").
		Find(&restaurants)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   restaurants,
	})
}
