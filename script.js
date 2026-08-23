// قائمة الخدمات (يمكنك تعديلها أو إضافة خدمات جديدة بكل سهولة)
const servicesData = [
    {
        title: "استخراج جواز سفر جديد + تجديد ",
        docs: "شهادة ميلاد، عدد ( ⁠2 ) صور شخصية، جواز سفر سابق + صورة منه، شهادة إقامة، إفادة بالعمل الموظف: رسالة من جهة العمل - الطالب: تعريف مدرسي - العسكري موافقة امنية - في حالة عمل حر او ربة بيت إفادة من القوة العاملة )، صورة ضوئية من كتيب العائلة ( رب الأسرة - المعني - صفحة رقم 4 - ربط الاقامة صفحة 46 )، ⁠في حالة عدم وجود كتيب شهادة ميلاد بخط اليد من السجل المدني، صورة من البطاقة الشخصية، رسالة علم وخبر بالاقامة من شيخ المحلة، نموذج ترجمة بالغة الانجليزية، نموذج استخراج جواز سفر، صورة من الجنسية + الاصل لمن والده مولود خارج ليبيا، شهادة وضع عائلي،  ",
        fees: "50.50د.ل",
        category: "قسم جوازات العربان"
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
