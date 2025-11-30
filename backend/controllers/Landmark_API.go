package controllers

import (
	"TongTiew/db"
	"TongTiew/models"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func LandmarkAPIHandler(c *gin.Context) {

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
		Landmark_id string `json:"query"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var landmarks []Result

	result := db.DB.Model(&models.Landmark{}).
		Select("landmark.id, landmark.name, landmark.rating, landmark.detail, landmark.img_path, landmark.attraction_id").
		Joins("JOIN attraction ON attraction.id = landmark.attraction_id").
		Where("LOWER(attraction.name) LIKE ?", "%"+strings.ToLower(body.Landmark_id)+"%").
		Find(&landmarks)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"data":   landmarks,
	})
}
