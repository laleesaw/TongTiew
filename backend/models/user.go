package models

import "time"

type User struct {
	UserID   int       `gorm:"primaryKey;column:user_id" json:"user_id"`
	Username string    `gorm:"column:username" json:"username"`
	Password string    `gorm:"column:password" json:"password"`
	Email    string    `gorm:"column:email" json:"email"`
	CreateAt time.Time `gorm:"column:create_at" json:"create_at"`
}

func (User) TableName() string {
	return "user"
}
