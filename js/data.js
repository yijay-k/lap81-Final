// Product Data
const BLANK_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
const products = []

// Team Data
const team = [
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah brings over 10 years of fashion design experience to LAP81. Her innovative approach to streetwear has shaped our brand's unique aesthetic.",
    email: "sarah@lap81.com",
    linkedin: "linkedin.com/in/sarahchen",
    experience: [
      {
        date: "2020 - Present",
        title: "Lead Designer",
        company: "LAP81",
        desc: "Leading the creative direction for all seasonal collections and collaborations.",
      },
      {
        date: "2016 - 2020",
        title: "Senior Designer",
        company: "Urban Collective",
        desc: "Designed menswear and womens streetwear collections for global markets.",
      },
      {
        date: "2013 - 2016",
        title: "Junior Designer",
        company: "MODE Studio",
        desc: "Started career creating technical specs and assisting with runway shows.",
      },
    ],
    skills: [
      "Fashion Design",
      "Pattern Making",
      "Adobe Creative Suite",
      "3D CLO",
      "Trend Forecasting",
      "Sustainable Design",
    ],
  },
  {
    id: "john",
    name: "John Martinez",
    role: "Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "John is the technical backbone of LAP81, building and maintaining our e-commerce platform and supply chain systems.",
    email: "john@lap81.com",
    linkedin: "linkedin.com/in/johnmartinez",
    experience: [
      {
        date: "2021 - Present",
        title: "Lead Engineer",
        company: "LAP81",
        desc: "Architecting scalable e-commerce solutions and leading the engineering team.",
      },
      {
        date: "2018 - 2021",
        title: "Full Stack Developer",
        company: "TechFlow Inc",
        desc: "Built custom web applications for retail and fashion industry clients.",
      },
      {
        date: "2015 - 2018",
        title: "Frontend Developer",
        company: "Digital Agency Co",
        desc: "Created responsive websites and interactive experiences for brands.",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "PostgreSQL", "System Architecture"],
  },
  {
    id: "low-jian-jie",
    name: "Low Jian Jie",
    image: "/assets/images/low-jian-jie.jpg",
    bio: "Hi, I’m Low Jian Jie. I have 2 years of coding experience in my college and university. I’m a cooperative and friendly but introverted person. I always make sure to finish my assignments on time and perfectly. Besides that, I am also a skilled artist. I designed logos and icons for my websites.",
    personalInfo: {
      birthday: "30 October 2006",
      hobbies: ["Drawing", "Listening to music", "Singing", "Play games"],
    },
    education: {
      school: "Sunway University",
      studentId: "25012915",
      intake: "FEB 2025",
      programme: "Bachelor of Computer Science",
      yearSemester: "Year 1 Semester 3",
      codingLanguages: ["HTML","CSS","JavaScript","Java","Python","SQL"],
    },
    assignments: ["Log in page", "Profile page", "Designed logo for website"],
  }
]

// Categories
const categories = [
  { name: "All", slug: "all" },
  { name: "Hoodies", slug: "hoodies" },
  { name: "T-Shirts", slug: "tshirts" },
  { name: "Pants", slug: "pants" },
  { name: "Outerwear", slug: "outerwear" },
  { name: "Accessories", slug: "accessories" },
]

// Products from assets/images/products/ — automatically added here
// Each product includes: id, name, price, category, image (relative path from pages/)
products.push(
  { id: 1, name: "Beanie", category: "Accessories", price: 28, image: "../assets/images/products/lap81-beanie.png" },
  { id: 2, name: "Black Hoodie", category: "Hoodies", price: 150, image: "../assets/images/products/lap81-black-hoodie.png" },
  { id: 3, name: "Bucket Hat", category: "Accessories", price: 45, image: "../assets/images/products/lap81-bucket-hat.png" },
  { id: 4, name: "Cap", category: "Accessories", price: 35, image: "../assets/images/products/lap81-cap.png" },
  { id: 5, name: "Cropped Top", category: "T-Shirts", gender: "womens", price: 60, image: "../assets/images/products/lap81-crop-top.png" },
  { id: 6, name: "Street Jacket", category: "Outerwear", price: 220, image: "../assets/images/products/lap81-jacket.png" },
  { id: 7, name: "Denim Jacket", category: "Outerwear", price: 180, image: "../assets/images/products/lap81-jeans-jacket.png" },
  { id: 8, name: "Men's Tank Top", category: "T-Shirts", gender: "mens", price: 40, image: "../assets/images/products/lap81-men-tank-top.png" },
  { id: 9, name: "Phone Case", category: "Accessories", price: 25, image: "../assets/images/products/lap81-phone-case.png" },
  { id: 10, name: "School Bag", category: "Accessories", price: 85, image: "../assets/images/products/lap81-school-bag.png" },
  { id: 11, name: "Skateboard", category: "Accessories", price: 120, image: "../assets/images/products/lap81-skateboard.png" },
  { id: 12, name: "Slippers", category: "Accessories", price: 30, image: "../assets/images/products/lap81-slippers.png" },
  { id: 13, name: "Socks Pack", category: "Accessories", price: 12, image: "../assets/images/products/lap81-socks.png" },
  { id: 14, name: "Sweat Pants", category: "Pants", price: 95, image: "../assets/images/products/lap81-sweat-pants.png" },
  { id: 15, name: "Sweat Shirt", category: "Hoodies", price: 110, image: "../assets/images/products/lap81-sweat-shirt.png" },
  { id: 16, name: "Tote Bag", category: "Accessories", price: 40, image: "../assets/images/products/lap81-tote-bag.png" },
  { id: 17, name: "Classic Tee", category: "T-Shirts", price: 50, image: "../assets/images/products/lap81-tshirt.png" },
  { id: 18, name: "Wallet", category: "Accessories", price: 55, image: "../assets/images/products/lap81-wallet.png" },
  { id: 19, name: "Women's Tank Top", category: "T-Shirts", gender: "womens", price: 42, image: "../assets/images/products/lap81-women-tank-top.png" }
)

// Unisex collection (contains references to existing products so they remain in their original categories)
const unisex = products.filter(p => [1,2,3,4,6,7,9,10,11,12,13,14,15,16,17,18].includes(p.id))

