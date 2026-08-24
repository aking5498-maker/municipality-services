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
        title: "استخراج بطاقة شخصية",
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
        fees: "20.00 د.ل",
        category: "قسم الأحوال المدنية العربان"
    },
    {
        title: "استخراج الرخص التجارية",
        docs: [
            "شهادة بالاسم التجاري",
            "فتح ملف ضريبي",
            "شهادة بملكية المحل أو عقد إيجار",
            "موقع إرشادي",
            "شهادة ميلاد",
            "موافقة الإصحاح البيئي",
            "صورة من إثبات الهوية",
            "عدد 2 صور شخصية",
            "شهادة بعدم العمل",
            "شهادة صحية",
            "الصيدليات والعيادات ورياض الأطفال والمدارس الخاصة والشركات والجهات العاملة في مجال البناء والتشييد ومعامل التحليل ضرورة إحضار موافقة الجهة التابع لها",
            "السجل التجاري بالنسبة للشركات",
            "رسوم الرخصة",
            "رسوم النظافة",
            "ملف معلق"
        ],
        fees: "حسب الرخصة",
        category: "مكتب الرخص ديوان بلدية العربان"
    }
];

const servicesContainer = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');

function displayServices(list) {
    servicesContainer.innerHTML = "";
    if (list.length === 0) {
        servicesContainer.innerHTML = "<p style='text-align: center; color: #777;'>عذراً، لم نجد خدمة تطابق بحثك.</p>";
        return;
    }
    
    list.forEach((service, index) => {
        let docsListHTML = service.docs.map(doc => `<li>${doc}</li>`).join('');

        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
            <div class="service-header" onclick="toggleDocs(${index})">
                <div class="service-title-area">
                    <h4>${service.title}</h4>
                    <p>القسم المختص: ${service.category}</p>
                </div>
                <span style="color: #1e73e8; font-size: 13px; font-weight: 600;">عرض المستندات 🔽</span>
            </div>
            
            <div class="service-badges">
                <span class="badge">💰 الرسوم: ${service.fees}</span>
            </div>

            <div class="docs-container" id="docs-${index}">
                <strong style="font-size: 13px; color: #333; display: block; margin-bottom: 8px;">المستندات المطلوبة:</strong>
                <ul>
                    ${docsListHTML}
                </ul>
            </div>
        `;
        servicesContainer.appendChild(card);
    });
}

// دالة فتح وإغلاق المستندات عند الضغط
window.toggleDocs = function(index) {
    const docsDiv = document.getElementById(`docs-${index}`);
    docsDiv.classList.toggle('show');
}

// عرض جميع الخدمات عند فتح الصفحة
displayServices(servicesData);

// تفعيل البحث الفوري
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = servicesData.filter(service => 
            service.title.toLowerCase().includes(term) || 
            service.docs.some(doc => doc.toLowerCase().includes(term)) ||
            service.category.toLowerCase().includes(term)
        );
        displayServices(filtered);
    });
}
