package routes

import (
	"TongTiew/controllers"

	"github.com/gin-gonic/gin"
)

func Restaurant_page_Routes(r *gin.Engine) {
	r.POST("/restaurant", controllers.RestaurantAPIHandler)
}
