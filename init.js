const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=> {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Neha",
        to: "Priya",
        message: "Hi, Priya! How are you?",
        created_at: new Date(),
    },
    {
        from: "Priya",
        to: "Neha",
        message: "Hey, Neha! I'm doing great. How about you?",
        created_at: new Date(),
    },
    {
        from: "Raj",
        to: "Anita",
        message: "Good morning, Anita! Have a great day!",
        created_at: new Date(),
    },
    {
        from: "Anita",
        to: "Raj",
        message: "Thank you, Raj! Same to you!",
        created_at: new Date(),
    },
    {
        from: "Sara",
        to: "Rahul",
        message: "Don't forget about the meeting at 3 PM.",
        created_at: new Date(),
    },
    {
        from: "Rahul",
        to: "Sara",
        message: "Got it, Sara. Thanks for the reminder.",
        created_at: new Date(),
    },
    {
        from: "Aman",
        to: "Sneha",
        message: "Can we reschedule our call to tomorrow?",
        created_at: new Date(),
    },
    {
        from: "Sneha",
        to: "Aman",
        message: "Sure, Aman. Tomorrow works for me.",
        created_at: new Date(),
    },
    {
        from: "Vikram",
        to: "Kiran",
        message: "Happy Birthday, Kiran! Have a fantastic day!",
        created_at: new Date(),
    },
    {
        from: "Kiran",
        to: "Vikram",
        message: "Thank you, Vikram! I really appreciate it.",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);

