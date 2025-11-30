package routes

import (
	"TongTiew/controllers"

	"github.com/gin-gonic/gin"
)

func Landmark_page_Routes(r *gin.Engine) {
	r.POST("/landmark", controllers.LandmarkAPIHandler)
}
