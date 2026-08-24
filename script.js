// قائمة الخدمات مع فصل المستندات في شكل مصفوفة (Array)
const servicesData = [
    {
        title: "استخراج جواز سفر جديد + تجديد",
        docs: [
            "شهادة ميلاد",
            "عدد ( 2 ) صور شخصية",
            "جواز سفر سابق + صورة منه",
            "شهادة إقامة",
            "إفادة بالعمل (الموظف: رسالة من جهة العمل - الطالب: تعريف مدرسي - العسكري: موافقة امنية - في حالة عمل حر او ربة بيت إفادة من القوة العاملة)",
            "صورة ضوئية من كتيب العائلة ( رب الأسرة - المعني - صفحة رقم 4 - صفحة رقم 45 )",
            "في حالة عدم وجود كتيب شهادة ميلاد بخط اليد من السجل المدني",
            "صورة من البطاقة الشخصية",
            "رسالة علم وخبر بالاقامة من شيخ المحلة",
            "نموذج ترجمة باللغة الانجليزية",
            "نموذج استخراج جواز سفر",
            "صورة من الجنسية + الاصل لمن والده مولود خارج ليبيا",
            "شهادة وضع عائلي"
        ],
        fees: "50.50 د.ل",
        category: "قسم جوازات العربان"
    },
    {
        title: "استخراج البطاقة الشخصية",
        docs: [
            "شهادة ميلاد",
            "شهادة إقامة",
            "شهادة وضع عائلي",
            "عدد ( 4 ) صور شخصية",
            "نموذج استخراج البطاقات",
            "صورة من الجواز السفر",
            "إفادة بالعمل (الموظف: رسالة من جهة العمل - الطالب: تعريف مدرسي - العسكري: موافقة امنية - في حالة عمل حر او ربة بيت إفادة من القوة العاملة)",
            "صورة ضوئية من كتيب العائلة ( رب الأسرة - المعني - صفحة رقم 4 - صفحة رقم 45 )", 
            "رسالة علم وخبر بالاقامة من شيخ المحلة",
            "فصيلة الدم",    
            "صورة من الجنسية + الاصل لمن والده مولود خارج ليبيا"
        ],
        fees: "10.50 د.ل",
        category: "قسم الاحوال المدنية العربان"
    }
];

const servicesContainer = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');

// دالة لعرض الخدمات مع ترتيب المستندات في أسطر منفصلة
function displayServices(list) {
    servicesContainer.innerHTML = "";
    if (list.length === 0) {
        servicesContainer.innerHTML = "<p>عذراً، لم نجد خدمة تطابق بحثك.</p>";
        return;
    }
    
    list.forEach(service => {
        // تحويل قائمة المستندات إلى عناصر HTML من نوع قائمة نقطية (<li>)
        let docsListHTML = service.docs.map(doc => `<li>${doc}</li>`).join('');

        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
            <h4>${service.title}</h4>
            <div class="docs-section">
                <strong>المستندات المطلوبة:</strong>
                <ul style="margin-right: 20px; margin-top: 5px; margin-bottom: 10px; font-size: 14px; color: #555;">
                    ${docsListHTML}
                </ul>
            </div>
            <p><strong>الرسوم:</strong> ${service.fees}</p>
            <a href="#" class="details-btn" onclick="alert('القسم المختص: ${service.category}')">عرض التفاصيل</a>
        `;
        servicesContainer.appendChild(card);
    });
}

// عرض جميع الخدمات عند فتح الصفحة
displayServices(servicesData);

// تفعيل البحث الفوري
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = servicesData.filter(service => 
        service.title.toLowerCase().includes(term) || 
        service.docs.some(doc => doc.toLowerCase().includes(term))
    );
    displayServices(filtered);
});
