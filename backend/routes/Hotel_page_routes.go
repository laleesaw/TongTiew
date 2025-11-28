package routes

import (
	"TongTiew/controllers"

	"github.com/gin-gonic/gin"
)

func Hotel_page_Routes(r *gin.Engine) {
	r.POST("/hotel", controllers.HotelAPIHandler)
}
