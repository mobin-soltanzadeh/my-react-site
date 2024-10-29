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
    {id: 1,  productName: "laptop", name: "Legion-5 pro", price: "$754", status: "valid", salesId: "#sale-A/P21/21413"},
    {id: 2,  productName: "laptop", name: "IdeaPad Slim 3", price: "$231", status: "valid", salesId: "#sale-B/P21/48585"},
    {id: 3,  productName: "laptop", name: "ThinkBook 15 G2", price: "$134", status: "valid", salesId: "#sale-A/P21/95695"},
    {id: 4,  productName: "laptop", name: "VivoBook E15", price: "$742", status: "valid", salesId: "#sale-B/P21/78566"},
    {id: 5,  productName: "laptop", name: "ExtraBook B15", price: "$213", status: "in-valid", salesId: "#sale-B/P21/56265"},
    {id: 6,  productName: "laptop", name: "TUF Gaming F15", price: "$543", status: "valid", salesId: "#sale-A/P21/61235"},
    {id: 7,  productName: "laptop", name: "ROG Strix G16", price: "$622", status: "valid", salesId: "#sale-B/P21/65266"},
    {id: 8,  productName: "laptop", name: "MacBook Air MRYR3", price: "$153", status: "valid", salesId: "#sale-B/P21/66322"},
    {id: 9,  productName: "laptop", name: "MacBook Pro", price: "$289", status: "valid", salesId: "#sale-A/P21/85454"},
    {id: 10, productName: "Phone", name: "Redmi Note-13 5G", price: "$643", status: "valid", salesId: "#sale-A/P21/13299"},
    {id: 11, productName: "Phone", name: "Poco M6 Pro 4G", price: "$124", status: "valid", salesId: "#sale-B/P21/85632"},
    {id: 12, productName: "Phone", name: "Note-12 Pro-plus", price: "$972", status: "valid", salesId: "#sale-B/P21/74856"},
    {id: 13, productName: "Phone", name: "14-T Pro 5G", price: "$324", status: "valid", salesId: "#sale-A/P21/63233"},
    {id: 14, productName: "Phone", name: "Galaxy S24 Ultra", price: "$565", status: "valid", salesId: "#sale-A/P21/55555"},
    {id: 15, productName: "Phone", name: "Galaxy Z Fold-5", price: "$895", status: "valid", salesId: "#sale-B/P21/29666"},
    {id: 16, productName: "Phone", name: "Galaxy A55", price: "$758", status: "valid", salesId: "#sale-A/P21/74526"},
    {id: 17, productName: "Phone", name: "Galaxy A35", price: "$264", status: "in-valid", salesId: "#sale-B/P21/95633"},
    {id: 18, productName: "Phone", name: "Galaxy A25", price: "$645", status: "valid", salesId: "#sale-A/P21/65236"},
    {id: 19, productName: "Phone", name: "iPhone 14 Pro", price: "$278", status: "valid", salesId: "#sale-B/P21/79666"},
    {id: 20, productName: "Phone", name: "iPhone 13 Pro", price: "$942", status: "valid", salesId: "#sale-A/P21/78965"},
    {id: 21, productName: "Phone", name: "iPhone 12 Pro", price: "$468", status: "valid", salesId: "#sale-B/P21/19633"},
]

export { enMonth, faMonth,monthRevanue, monthSales, monthCost, enSidebar, faSidebar, NewJoinMembersDatas, lastTransactionsMembers, usersDataRows,productsDataRows, feachers, SalesDataRows };