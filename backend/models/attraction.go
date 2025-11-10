package models

type Attraction struct {
	Attraction_id   int    `gorm:"primaryKey;column:id" json:"Attraction_id"`
	Attraction_name string `gorm:"column:name" json:"Attraction_name"`
	Location        string `gorm:"column:location" json:"Location"`
	Detail          string `gorm:"column:detail" json:"detail"`
	Rating          string `gorm:"column:rating" json:"rating"`
	Img_path        string `gorm:"column:img_path" json:"img_path"`
}

func (Attraction) TableName() string {
	return "attraction"
}
