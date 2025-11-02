package routes

import (
	"TongTiew/controllers"
	"TongTiew/middleware"

	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.POST("/signup", controllers.SignUpHandler)
	r.POST("/signin", controllers.SignInHandler)

	auth := r.Group("/auth", middleware.AuthMiddleware())
	{
		auth.GET("/profile", controllers.GetProfileHandler)
	}
}
