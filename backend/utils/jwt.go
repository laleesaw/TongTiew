package utils

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var secretKey = []byte("my_secret_key")

func GenerateToken(UserID uint, Email string) (string, error) {
	claims := jwt.MapClaims{
		"user_id": UserID,
		"email":   Email,
		"exp":     time.Now().Add(time.Hour * 2).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(secretKey)

}

// ตรวจสอบความถูกต้องของ token
func ValidateToken(tokenString string) (*jwt.Token, error) { //รับ input เป็น tokenstring, return ค่าเป็น token ที่ parse แล้ว และ ถ้าหมดเวลาในการเข้าถึงให้แสดง error
	return jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) { //decode token เพื่อตรวจสอบ
		return secretKey, nil
	})
}
