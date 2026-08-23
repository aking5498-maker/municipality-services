// قائمة الخدمات (يمكنك تعديلها أو إضافة خدمات جديدة بكل سهولة)
const servicesData = [
    {
        title: "استخراج رخصة بناء جديدة",
        docs: "مخطط هندسي، عقد ملكية، إبراء ذمة مالية",
        fees: "حسب مساحة المبنى",
        category: "رخص البناء"
    },
    {
        title: "تجديد رخصة محل تجاري",
        docs: "الرخصة القديمة، عقد الإيجار، شهادة صحية",
        fees: "50 دينار",
        category: "الشؤون الاقتصادية"
    },
    {
        title: "إذن حفر طريق (صيانة خدمات)",
        docs: "طلب موجه لمدير التخطيط، رسم التوضيح للموقع",
        fees: "30 دينار رسوم تأمين",
        category: "المشاريع والطرق"
    },
    {
        title: "شهادة إثبات سكن",
        docs: "صورة بطاقة الشخصية، مختار المحلة، فاتورة كهرباء",
        fees: "مجاناً / رمزية",
        category: "الإفادات الرسمية"
    }
];

const servicesContainer = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');

// دالة لعرض الخدمات على الشاشة
function displayServices(list) {
    servicesContainer.innerHTML = "";
    if (list.length === 0) {
        servicesContainer.innerHTML = "<p>عذراً، لم نجد خدمة تطابق بحثك.</p>";
        return;
    }
    
    list.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
            <h4>${service.title}</h4>
            <p><strong>المستندات:</strong> ${service.docs}</p>
            <p><strong>الرسوم:</strong> ${service.fees}</p>
            <a href="#" class="details-btn" onclick="alert('قسم المختص: ${service.category}')">عرض التفاصيل</a>
        `;
        servicesContainer.appendChild(card);
    });
}

// عرض جميع الخدمات عند فتح الصفحة لأول مرة
displayServices(servicesData);

// تفعيل البحث الفوري أثناء الكتابة
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = servicesData.filter(service => 
        service.title.toLowerCase().includes(term) || 
        service.docs.toLowerCase().includes(term)
    );
    displayServices(filtered);
});
