import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    group: String
})

export default mongoose.model('cards', cardSchema);
/*
[
        {
            "name": "Nithin Shanmugam",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        },
        {
            "name": "Karthi",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        },
        {
            "name": "Mahinder",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        },
        {
            "name": "Ananth",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        },
        {
            "name": "Gautham",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        },
        {
            "name": "Dinesh",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        },
        {
            "name": "Aravind Karti",
            "imgUrl": "https://post.healthline.com/wp-content/uploads/2020/09/Blood_Donation-732X549-thumbnail.jpg",
            "group": "B+ve"
        }
]
*/