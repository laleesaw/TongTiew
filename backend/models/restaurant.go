package models

type Restaurant struct {
	Id           string `gorm:"primaryKey;column:id" json:"id"`
	Name         string `gorm:"column:name" json:"name"`
	Rating       string `gorm:"column:rating" json:"rating"`
	Detail       string `gorm:"column:detail" json:"detail"`
	ImgPath      string `gorm:"column:img_path" json:"img_path"`
	AttractionId string `gorm:"column:attraction_id" json:"attraction_id"`

	Attraction Attraction `gorm:"foreignKey:AttractionId;references:Id" json:"attraction"`
}

func (Restaurant) TableName() string {
	return "restaurant"
}
