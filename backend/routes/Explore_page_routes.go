package routes

import (
	"TongTiew/controllers"

	"github.com/gin-gonic/gin"
)

func Explore_page_Routes(r *gin.Engine) {
	r.POST("/explore", controllers.Attraction_API_Handler)
}
