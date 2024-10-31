let enMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dev"];
let faMonth = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

let monthRevanue = [1_900_000, 3_000_000, 1_500_000, 3_500_000, 3_000_000, 4_900_000, 3_900_000, 1_800_000, 3_950_000 , 1_900_000, 3_800_000, 5_000_000];
let monthSales = [95_000, 82_000, 20_000, 92_000, 54_000, 85_000, 34_000, 18_600, 5_000 , 73_000, 25_000, 90_000];
let monthCost = [3_000_000, 5_000_000, 2_000_000, 3_000_000, 4_000_000, 2_000_000, 6_000_000, 4_000_000, 3_000_000 , 1_000_000, 3_000_000, 2_000_000];

let enSidebar = ["ltr", "Dashboard", "Home", "Analytics", "Sales", "Quick Menu", "Users", "New User", "Products", "Transactions", "Report", "Notifications", "Mails", "FeedBack", "Messages", "Staff", "Management", "Analytics", "Reports"];
let faSidebar = ["rtl", "داشبورد", "خانه", "تجزیه و تحلیل", "فروش", "دسترسی سریع", "کاربران", "کاربر جدید", "محصولات", "معاملات", "گزارش ها", "اعلام ها", "ایمیل ها", "بازخورد", "پیام ها", "پرسنل", "مدیریت", "تجریه و تحلیل", "گزارش ها"];

let NewJoinMembersDatas = [
    {id: 1, enName: "Marlene Donahue", faName: "نسترن کریمی", enJob: "Back-end developer", faJob: "برنامه نویس", imgSrc: "woman4.jpg"},
    {id: 2, enName: "Melvin Forbis", faName: "فرزاد سلطان زاده", enJob: "Front-end developer", faJob: "طراح سایت", imgSrc: "woman4.jpg"},
    {id: 3, enName: "Carter Landon", faName: "فرشته مولوی", enJob: "Designer", faJob: "طراح", imgSrc: "woman4.jpg"},
    {id: 4, enName: "Lisa Clark", faName: "بنیامین فلاح", enJob: "Employee", faJob: "کارمند", imgSrc: "woman4.jpg"},
];

let lastTransactionsMembers = [
    {id: 1, enName: "Susan Cannor", faName: "سارا احمدیان", imgSrc: "woman4.jpg", enDate: "25 Feb 2024", faDate: "25 اردیبهشت 1403", amount: "456", enStatus: "Approved", faStatus: "تایید شده"},
    {id: 2, enName: "Rick Novak", faName: "علیرضا حسینی", imgSrc: "man3.jpg", enDate: "21 Jun 2024", faDate: "21 خرداد 1403", amount: "128", enStatus: "Declined", faStatus: "رد شده"},
    {id: 3, enName: "Margaret Adelman", faName: "سحر بیابانی", imgSrc: "woman7.jpg", enDate: "13 Feb 2024", faDate: "13 اردبهشت 1403", amount: "230", enStatus: "Pending" , faStatus: "در انتظار"},
    {id: 4, enName: "Ronald Barr", faName: "سجاد حسین زاده", imgSrc: "man4.jpg", enDate: "18 Jan 2024", faDate: "18 فروردین 1403", amount: "200", enStatus: "Approved", faStatus: "تایید شده"},
];

let usersDataRows = [
    {id: 1, name: "Mobin Soltanzadeh", username: "@Mobin-125t", avatar: "man3.jpg", email: "example@gmail.com", status: "active", actions: "$494"},
    {id: 2, name: "Amin Saeedi", username: "@Amin-1wfdwv", avatar: "woman1.jpg", email: "example@gmail.com", status: "active", actions: "$170"},
    {id: 3, name: "Hasan Javadi", username: "@Hasan-1fb", avatar: "man1.jpg", email: "example@gmail.com", status: "active", actions: "$129.52"},
    {id: 4, name: "Susan Cannor", username: "@Susan-gw", avatar: "woman2.jpg", email: "example@gmail.com", status: "active", actions: "$113"},
    {id: 5, name: "Carter Landon", username: "@Carter-ewf", avatar: "man2.jpg", email: "example@gmail.com", status: "active", actions: "$296"},
    {id: 6, name: "Lisa Clark", username: "@Lisa-a56", avatar: "woman3.jpg", email: "example@gmail.com", status: "active", actions: "$20.99"},
    {id: 7, name: "Susan Cannor", username: "@Susan-ab22", avatar: "man4.jpg", email: "example@gmail.com", status: "active", actions: "$20.99"},
    {id: 8, name: "Rick Novak", username: "@Rick-1356", avatar: "woman4.jpg", email: "example@gmail.com", status: "active", actions: "$20.99"},
    {id: 9, name: "Margaret Adelman", username: "@Margaret-no213", avatar: "man5.jpg", email: "example@gmail.com", status: "active", actions: "$20.99"},
    {id: 10, name: "Ronald Barr", username: "@Ronald-c224", avatar: "woman5.jpg", email: "example@gmail.com", status: "active", actions: "$20.99"},
];

let productsDataRows = [
    {id: 1, type: "laptop", brand: "Lenovo", name: "Legion-5 pro", avatar: "laptop1.png", count: 8, price: "$1260"},
    {id: 2, type: "laptop", brand: "Lenovo", name: "IdeaPad Slim 3", avatar: "laptop2.png", count: 21, price: "$750"},
    {id: 3, type: "laptop", brand: "Lenovo", name: "ThinkBook 15 G2", avatar: "laptop3.png", count: 32, price: "$650"},
    {id: 4, type: "laptop", brand: "Asus", name: "VivoBook E15", avatar: "laptop4.png", count: 16, price: "$670"},
    {id: 5, type: "laptop", brand: "Asus", name: "ExtraBook B15", avatar: "laptop5.png", count: 13, price: "$800"},
    {id: 6, type: "laptop", brand: "Asus", name: "TUF Gaming F15", avatar: "laptop6.png", count: 5, price: "$1400"},
    {id: 7, type: "laptop", brand: "Asus", name: "ROG Strix G16", avatar: "laptop1.png", count: 19, price: "$1480"},
    {id: 8, type: "laptop", brand: "Apple", name: "MacBook Air MRYR3", avatar: "laptop2.png", count: 0, price: "$1200"},
    {id: 9, type: "laptop", brand: "Apple", name: "MacBook Pro", avatar: "laptop3.png", count: 17, price: "$1340"},

    {id: 10, type: "Phone", brand: "Xiaomi", name: "Redmi Note-13 5G", avatar: "phone1.png", count: 15, price: "$670"},
    {id: 11, type: "Phone", brand: "Xiaomi", name: "Poco M6 Pro 4G", avatar: "phone2.png", count: 23, price: "$350"},
    {id: 12, type: "Phone", brand: "Xiaomi", name: "Note-12 Pro-plus", avatar: "phone3.png", count: 32, price: "$700"},
    {id: 13, type: "Phone", brand: "Xiaomi", name: "14-T Pro 5G", avatar: "phone4.png", count: 12, price: "$800"},
    {id: 14, type: "Phone", brand: "SamSung", name: "Galaxy S24 Ultra", avatar: "phone1.png", count: 7, price: "$980"},
    {id: 15, type: "Phone", brand: "SamSung", name: "Galaxy Z Fold-5", avatar: "phone2.png", count: 9, price: "$1200"},
    {id: 16, type: "Phone", brand: "SamSung", name: "Galaxy A55", avatar: "phone3.png", count: 15, price: "$470"},
    {id: 17, type: "Phone", brand: "SamSung", name: "Galaxy A35", avatar: "phone4.png", count: 43, price: "$350"},
    {id: 18, type: "Phone", brand: "SamSung", name: "Galaxy A25", avatar: "phone1.png", count: 26, price: "$540"},
    {id: 19, type: "Phone", brand: "Apple", name: "iPhone 14 Pro", avatar: "phone2.png", count: 3, price: "$900"},
    {id: 20, type: "Phone", brand: "Apple", name: "iPhone 13 Pro", avatar: "phone3.png", count: 17, price: "$780"},
    {id: 21, type: "Phone", brand: "Apple", name: "iPhone 12 Pro", avatar: "phone4.png", count: 9, price: "$695"},
]

let feachers = [
    {id: 1, enTitle: "Revanue", faTitle: "درآمد", amount: "2.415", amountDrop: -6.4, enDesc: "Compared to last month", faDesc: "در مقایسه با ماه گدشته"},
    {id: 2, enTitle: "Sales", faTitle: "فروش", amount: "4,446", amountDrop: -1.9, enDesc: "Compared to last month", faDesc: "در مقایسه با ماه گدشته"},
    {id: 3, enTitle: "Cost", faTitle: "هزینه ها", amount: "2,225", amountDrop: +2.4, enDesc: "Compared to last month", faDesc: "در مقایسه با ماه گدشته"},
    {id: 4, enTitle: "Cost", faTitle: "هزینه ها", amount: "5,784", amountDrop: -4.8, enDesc: "Compared to last year", faDesc: "در مقایسه با سال گدشته"},
    {id: 5, enTitle: "Revanue", faTitle: "درآمد", amount: "3.415", amountDrop: +2.6, enDesc: "Compared to last year", faDesc: "در مقایسه با سال گدشته"},
    {id: 6, enTitle: "Sales", faTitle: "فروش", amount: "1,533", amountDrop: -1.9, enDesc: "Compared to last year", faDesc: "در مقایسه با سال گدشته"},
]

let SalesDataRows = [
    {id: 1,  productName: "laptop", name: "Legion-5 pro", price: "$754", status: "valid", salesId: "#sell-A/P21/21413"},
    {id: 2,  productName: "laptop", name: "IdeaPad Slim 3", price: "$231", status: "valid", salesId: "#sell-B/P21/48585"},
    {id: 3,  productName: "laptop", name: "ThinkBook 15 G2", price: "$134", status: "valid", salesId: "#sell-A/P21/95695"},
    {id: 4,  productName: "laptop", name: "VivoBook E15", price: "$742", status: "valid", salesId: "#sell-B/P21/78566"},
    {id: 5,  productName: "laptop", name: "ExtraBook B15", price: "$213", status: "in-valid", salesId: "#sell-B/P21/56265"},
    {id: 6,  productName: "laptop", name: "TUF Gaming F15", price: "$543", status: "valid", salesId: "#sell-A/P21/61235"},
    {id: 7,  productName: "laptop", name: "ROG Strix G16", price: "$622", status: "valid", salesId: "#sell-B/P21/65266"},
    {id: 8,  productName: "laptop", name: "MacBook Air MRYR3", price: "$153", status: "valid", salesId: "#sell-B/P21/66322"},
    {id: 9,  productName: "laptop", name: "MacBook Pro", price: "$289", status: "valid", salesId: "#sell-A/P21/85454"},
    {id: 10, productName: "Phone", name: "Redmi Note-13 5G", price: "$643", status: "valid", salesId: "#sell-A/P21/13299"},
    {id: 11, productName: "Phone", name: "Poco M6 Pro 4G", price: "$124", status: "valid", salesId: "#sell-B/P21/85632"},
    {id: 12, productName: "Phone", name: "Note-12 Pro-plus", price: "$972", status: "valid", salesId: "#sell-B/P21/74856"},
    {id: 13, productName: "Phone", name: "14-T Pro 5G", price: "$324", status: "valid", salesId: "#sell-A/P21/63233"},
    {id: 14, productName: "Phone", name: "Galaxy S24 Ultra", price: "$565", status: "valid", salesId: "#sell-A/P21/55555"},
    {id: 15, productName: "Phone", name: "Galaxy Z Fold-5", price: "$895", status: "valid", salesId: "#sell-B/P21/29666"},
    {id: 16, productName: "Phone", name: "Galaxy A55", price: "$758", status: "valid", salesId: "#sell-A/P21/74526"},
    {id: 17, productName: "Phone", name: "Galaxy A35", price: "$264", status: "in-valid", salesId: "#sell-B/P21/95633"},
    {id: 18, productName: "Phone", name: "Galaxy A25", price: "$645", status: "valid", salesId: "#sell-A/P21/65236"},
    {id: 19, productName: "Phone", name: "iPhone 14 Pro", price: "$278", status: "valid", salesId: "#sell-B/P21/79666"},
    {id: 20, productName: "Phone", name: "iPhone 13 Pro", price: "$942", status: "valid", salesId: "#sell-A/P21/78965"},
    {id: 21, productName: "Phone", name: "iPhone 12 Pro", price: "$468", status: "valid", salesId: "#sell-B/P21/19633"},
] 
 
let ReportsDataRows = [
    {id: 1,  title: "spam", massage: "user has been spammed", fromUser: {name: "ali", avatar: "man1.jpg"}},
    {id: 2,  title: "spam", massage: "user has been spammed", fromUser: {name: "naz", avatar: "woman2.jpg"}},
    {id: 3,  title: "spam", massage: "user has been spammed", fromUser: {name: "reza", avatar: "man7.jpg"}},
    {id: 4,  title: "spam", massage: "user has been spammed", fromUser: {name: "maede", avatar: "woman6.jpg"}},
    {id: 5,  title: "spam", massage: "user has been spammed", fromUser: {name: "moeen", avatar: "man2.jpg"}},
    {id: 6,  title: "spam", massage: "user has been spammed", fromUser: {name: "hasna", avatar: "woman7.jpg"}},
    {id: 7,  title: "spam", massage: "user has been spammed", fromUser: {name: "hossein", avatar: "man3.jpg"}},
    {id: 8,  title: "spam", massage: "user has been spammed", fromUser: {name: "parinaz", avatar: "woman5.jpg"}},
    {id: 9,  title: "spam", massage: "user has been spammed", fromUser: {name: "morteza", avatar: "man4.jpg"}},
    {id: 10, title: "spam", massage: "user has been spammed", fromUser: {name: "samane", avatar: "woman1.jpg"}},
    {id: 11, title: "spam", massage: "user has been spammed", fromUser: {name: "mahdi", avatar: "man5.jpg"}},
    {id: 12, title: "spam", massage: "user has been spammed", fromUser: {name: "negin", avatar: "woman3.jpg"}},
    {id: 13, title: "spam", massage: "user has been spammed", fromUser: {name: "samad", avatar: "man6.jpg"}},
    {id: 14, title: "spam", massage: "user has been spammed", fromUser: {name: "yekta", avatar: "woman1.jpg"}},
    {id: 15, title: "spam", massage: "user has been spammed", fromUser: {name: "nastaran", avatar: "woman4.jpg"}},
    {id: 16, title: "spam", massage: "user has been spammed", fromUser: {name: "nimam", avatar: "man1.jpg"}},
]

let MailsDataRows = [
    {id: 1, fromUser:  {name: "ali", avatar: "man1.jpg"}, toUser: {name: "mohsen", avatar: "woman4.jpg"}, title: "Greeting", massage: "Hi mohsen, can we talk? ...."},
    {id: 2, fromUser:  {name: "nastaran", avatar: "woman1.jpg"}, toUser: {name: "mobin", avatar: "man5.jpg"}, title: "Conversation", massage: "Hi mobin, can we talk? ...."},
    {id: 3, fromUser:  {name: "morteza", avatar: "man2.jpg"}, toUser: {name: "roya", avatar: "woman5.jpg"}, title: "Friend request", massage: "Hi roya, can we talk? ...."},
    {id: 4, fromUser:  {name: "yegane", avatar: "woman2.jpg"}, toUser: {name: "reza", avatar: "man6.jpg"}, title: "Greeting", massage: "Hi reza, can we talk? ...."},
    {id: 5, fromUser:  {name: "mamad", avatar: "man3.jpg"}, toUser: {name: "ziba", avatar: "woman6.jpg"}, title: "Conversation", massage: "Hi ziba, can we talk? ...."},
    {id: 6, fromUser:  {name: "parinaz", avatar: "woman3.jpg"}, toUser: {name: "yegane", avatar: "man1.jpg"}, title: "Friend request", massage: "Hi yegane, can we talk? ...."},
    {id: 7, fromUser:  {name: "hosein", avatar: "man4.jpg"}, toUser: {name: "mamad", avatar: "woman1.jpg"}, title: "Greeting", massage: "Hi mamad, can we talk? ...."},
    {id: 8, fromUser:  {name: "mohsen", avatar: "woman4.jpg"}, toUser: {name: "parinaz", avatar: "man2.jpg"}, title: "Conversation", massage: "Hi parinaz, can we talk? ...."},
    {id: 9, fromUser:  {name: "mobin", avatar: "man5.jpg"}, toUser: {name: "hosein", avatar: "woman2.jpg"}, title: "Conversation", massage: "Hi hosein, can we talk? ...."},
    {id: 10, fromUser: {name: "roya", avatar: "woman5.jpg"}, toUser: {name: "ali", avatar: "man3.jpg"}, title: "Greeting", massage: "Hi ali, can we talk? ...."},
    {id: 11, fromUser: {name: "reza", avatar: "man6.jpg"}, toUser: {name: "nastaran", avatar: "woman3.jpg"}, title: "Friend request", massage: "Hi nastaran, can we talk? ...."},
    {id: 12, fromUser: {name: "ziba", avatar: "woman6.jpg"}, toUser: {name: "morteza", avatar: "man4.jpg"}, title: "Conversation", massage: "Hi morteza, can we talk? ...."},
]

export { enMonth, faMonth,monthRevanue, monthSales, monthCost, enSidebar, faSidebar, NewJoinMembersDatas, lastTransactionsMembers, usersDataRows,productsDataRows, feachers, SalesDataRows, ReportsDataRows, MailsDataRows};