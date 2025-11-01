package routes

import (
	"TongTiew/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.POST("/signup", controllers.SignUpHandler)
}
