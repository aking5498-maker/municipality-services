const servicesData = [
    {
        title: "حالة محطة العربان الشرقية (161)",
        docs: [
            "متوفر وقود البنزين والديزل (بدون مستندات مطلوبة)"
        ],
        fees: "0.150 دينار / للتر",
        category: "محطات الوقود - ديوان البلدية",
        status: "available",
        statusText: "متوفر حالياً (بنزين)"
    },
    {
        title: "حالة محطة العربان الغربية (153)",
        docs: [
            "متوفر وقود البنزين والديزل (بدون مستندات مطلوبة)"
        ],
        fees: "0.150 دينار / للتر",
        category: "محطات الوقود - ديوان البلدية",
        status: "closed",
        statusText: "غير متوفر حالياً (مغلق)"
    },
    {
        title: "تعبئة الغاز - مستودع جلوال (قماطة)",
        docs: [
            "إحضار أسطوانة الغاز الفارغة فقط"
        ],
        fees: "5 دينار",
        category: "مستودعات الغاز - قماطة",
        status: "available",
        statusText: "متوفر للتوزيع حالياً"
    },
    {
        title: "تعبئة الغاز - مستودع لبز (أولاد بريك)",
        docs: [
            "إحضار أسطوانة الغاز الفارغة فقط"
        ],
        fees: "5 دينار",
        category: "مستودعات الغاز - أولاد بريك",
        status: "closed",
        statusText: "غير متوفر حالياً"
    },
    {
        title: "تعبئة الغاز - مستودع صبيخة (أولاد بريك)",
        docs: [
            "إحضار أسطوانة الغاز الفارغة فقط"
        ],
        fees: "5 دينار",
        category: "مستودعات الغاز - أولاد بريك",
        status: "closed",
        statusText: "غير متوفر حالياً"
    },
    {
        title: "تعبئة الغاز - مستودع جميد (أولاد بريك)",
        docs: [
            "إحضار أسطوانة الغاز الفارغة فقط"
        ],
        fees: "5 دينار",
        category: "مستودعات الغاز - أولاد بريك",
        status: "closed",
        statusText: "غير متوفر حالياً"
    },
    {
        title: "تعبئة الغاز - مستودع الطير (أولاد بريك)",
        docs: [
            "إحضار أسطوانة الغاز الفارغة فقط"
        ],
        fees: "5 دينار",
        category: "مستودعات الغاز - أولاد بريك",
        status: "closed",
        statusText: "غير متوفر حالياً"
    },
    {
        title: "فتح حساب مصرف الصحاري - العربان",
        docs: [
            "الحضور الشخصي لتعبئة نموذج فتح الحساب",
            "شهادة ميلاد حديثة من السجل المدني",
            "عدد (2) صور شخصية",
            "صورة من الاثبات الشخصي ( جواز سفر او بطاقة شخصية )",
            "رقم الهاتف لصاحب الحساب",
            "رسالة من جهة العمل أو شيخ المحلة",
            "الحضور الشخصي لصاحب الحساب للتوقيع"
        ],
        fees: "",
        category: "مصرف الصحاري - فرع العربان",
        status: "available",
        statusText: "الخدمة متاحة"
    },
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
    },
    {
        title: "اصدار رخصة القيادة",
        docs: [
            "شهادة الحالة الجنائية",
            "صورة من كتيب العائلة",
            "شهادة ميلاد حديثة",
            "عدد (4) صورة شخصية",
            "صورة من البطاقة الشخصية أو جواز السفر",
            "فصيلة الدم"
        ],
        fees: "21.5 د.ل",
        category: "مكتب شؤون المرور و التراخيص"
    }
];

const servicesContainer = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');

function displayServices(list) {
    if (!servicesContainer) return;
    servicesContainer.innerHTML = "";
    if (list.length === 0) {
        servicesContainer.innerHTML = "<p style='text-align: center; color: #777;'>عذراً، لم نجد خدمة تطابق بحثك.</p>";
        return;
    }
    
    list.forEach((service, index) => {
        let docsListHTML = service.docs.map(doc => `<li>${doc}</li>`).join('');

        let statusBadgeHTML = '';
        if (service.status) {
            const isAvailable = service.status === 'available';
            const statusBg = isAvailable ? '#d4edda' : '#f8d7da';
            const statusColor = isAvailable ? '#155724' : '#721c24';
            const dotColor = isAvailable ? '#28a745' : '#dc3545';
            
            statusBadgeHTML = `
                <div style="display: inline-flex; align-items: center; gap: 6px; background: ${statusBg}; color: ${statusColor}; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px;">
                    <span style="width: 8px; height: 8px; background-color: ${dotColor}; border-radius: 50%; display: inline-block;"></span>
                    <span>${service.statusText}</span>
                </div>
            `;
        }

        let feesHTML = service.fees ? `<span class="badge">💰 الرسوم: ${service.fees}</span>` : '';

        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
            <div class="service-header" onclick="toggleDocs(${index})">
                <div class="service-title-area">
                    <h4>${service.title}</h4>
                    <p>القسم المختص: ${service.category}</p>
                </div>
                <span style="color: #1e73e8; font-size: 13px; font-weight: 600;">عرض التفاصيل 🔽</span>
            </div>
            
            <div class="service-badges" style="display: flex; flex-direction: column; align-items: flex-start;">
                ${statusBadgeHTML}
                ${feesHTML}
            </div>

            <div class="docs-container" id="docs-${index}">
                <strong style="font-size: 13px; color: #333; display: block; margin-bottom: 8px;">ملاحظات / المستندات:</strong>
                <ul>
                    ${docsListHTML}
                </ul>
            </div>
        `;
        servicesContainer.appendChild(card);
    });
}

window.toggleDocs = function(index) {
    const docsDiv = document.getElementById(`docs-${index}`);
    if (docsDiv) {
        docsDiv.classList.toggle('show');
    }
}

displayServices(servicesData);

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = servicesData.filter(service => 
            service.title.toLowerCase().includes(term) || 
            service.docs.some(doc => doc.toLowerCase().includes(term)) ||
            service.category.toLowerCase().includes(term) ||
            (service.statusText && service.statusText.toLowerCase().includes(term))
        );
        displayServices(filtered);
    });
}
