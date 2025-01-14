// تابع تحلیل فعل
function processVerb() {
    const inputVerb = document.getElementById('inputVerb').value.trim();

    // بررسی ورودی
    if (!inputVerb) {
        alert("لطفاً یک فعل وارد کنید.");
        return;
    }

    // شناسایی نوع فعل (ثلاثی مجرد یا مزید)
    const root = identifyRoot(inputVerb);
    const mazeedType = identifyMazeedType(inputVerb);

    // ساخت خروجی
    let result = `فعل "${inputVerb}" شناسایی شد.\n`;
    result += `ریشه: ${root}\n`;
    result += `نوع: ${mazeedType}\n`;

    // صرف افعال (مثال ماضی و مضارع)
    result += `\nصرف ماضی:\n${conjugatePast(root)}`;
    result += `\n\nصرف مضارع:\n${conjugatePresent(root)}`;

    // نمایش نتیجه
    document.getElementById('output').innerText = result;
}

// تابع شناسایی ریشه
function identifyRoot(verb) {
    // شناسایی ریشه برای افعال ثلاثی (نمونه ساده)
    if (verb.length === 3) return verb; // ثلاثی مجرد
    if (verb.length > 3) {
        // فرضیه ساده برای ثلاثی مزید
        // اینجا می‌توان الگوریتم‌های پیچیده‌تری برای شناسایی ریشه استفاده کرد
        return verb.slice(1, 4);
    }
    return "نامشخص"; // اگر ریشه قابل شناسایی نباشد
}

// تابع شناسایی نوع ثلاثی مزید
function identifyMazeedType(verb) {
    const root = "فعل"; // ریشه فرضی برای شناسایی الگوها

    if (verb.match(/^أ.ع.ل$/)) return "باب اِفعال";
    if (verb.match(/^انفعل$/)) return "باب اِنفعال";
    if (verb.match(/^استفعل$/)) return "باب استفعال";
    if (verb.match(/^تفعّل$/)) return "باب تفعُّل";
    if (verb.match(/^فعّل$/)) return "باب تفعیل";
    if (verb.match(/^فاعل$/)) return "باب مفاعله";
    if (verb.match(/^تفاعل$/)) return "باب تفاعل";
    return "ثلاثی مجرد";
}

// صرف افعال ماضی
function conjugatePast(root) {
    const pronouns = ["أنا", "أنتَ", "أنتِ", "هو", "هي", "نحن", "أنتم", "هم"];
    const endings = ["تُ", "تَ", "تِ", "", "تْ", "نا", "تم", "وا"];
    return pronouns.map((p, i) => `${p} ${root}${endings[i]}`).join("\n");
}

// صرف افعال مضارع
function conjugatePresent(root) {
    const pronouns = ["أنا", "أنتَ", "أنتِ", "هو", "هي", "نحن", "أنتم", "هم"];
    const prefixes = ["أ", "ت", "ت", "ي", "ت", "ن", "ت", "ي"];
    const endings = ["", "", "ين", "", " ", " ", "ون", "ون"];
    return pronouns.map((p, i) => `${p} ${prefixes[i]}${root}${endings[i]}`).join("\n");
}




